#!/usr/bin/env python3
"""
git_summary.py — Cookie Inc. contribution tracker
Generates a per-member commit summary for a Git repo.

Usage:
    python git_summary.py                        # current dir, all branches
    python git_summary.py --repo /path/to/repo
    python git_summary.py --branch releases/2.0
    python git_summary.py --since 2025-01-01
    python git_summary.py --since 2025-01-01 --until 2025-06-01
    python git_summary.py --format json
    python git_summary.py --format csv
    python git_summary.py --format csv --out summary.csv
"""

import subprocess
import argparse
import json
import csv
import sys
from collections import defaultdict
from datetime import datetime

# ── Cookie Inc. team ────────────────────────────────────────────────
TEAM = {
    "Vicky":   ["vicky", "vignesh", "vickydecodes"],
    "RK":      ["rk", "rajkumar"],
    "Arul":    ["arul"],
    "Dilip":   ["dilip"],
    "Kishore": ["kishore"],
}

def resolve_member(author_name: str) -> str:
    """Map a raw git author name to a Cookie Inc. member."""
    lower = author_name.lower()
    for member, aliases in TEAM.items():
        if any(alias in lower for alias in aliases):
            return member
    return author_name  # unknown contributor — keep as-is


def run_git(args: list[str], cwd: str) -> str:
    result = subprocess.run(
        ["git"] + args,
        cwd=cwd,
        capture_output=True,
        text=True,
    )
    if result.returncode != 0:
        print(f"[git error] {result.stderr.strip()}", file=sys.stderr)
        sys.exit(1)
    return result.stdout.strip()


def get_branches(cwd: str) -> list[str]:
    raw = run_git(["branch", "-a", "--format=%(refname:short)"], cwd)
    return [b.strip() for b in raw.splitlines() if b.strip()]


def fetch_log(cwd: str, branch: str | None, since: str | None, until: str | None) -> list[dict]:
    fmt = "%H|%an|%ae|%ad|%s"
    cmd = ["log", f"--format={fmt}", "--date=short", "--numstat"]

    if branch:
        cmd.append(branch)
    if since:
        cmd += [f"--since={since}"]
    if until:
        cmd += [f"--until={until}"]

    raw = run_git(cmd, cwd)
    commits = []
    current = None

    for line in raw.splitlines():
        if "|" in line and len(line.split("|")) == 5:
            if current:
                commits.append(current)
            h, author, email, date, subject = line.split("|", 4)
            current = {
                "hash": h[:8],
                "author": author,
                "email": email,
                "date": date,
                "subject": subject,
                "added": 0,
                "deleted": 0,
                "files_changed": 0,
            }
        elif line and current and line[0].isdigit():
            parts = line.split("\t")
            if len(parts) == 3:
                added = int(parts[0]) if parts[0].isdigit() else 0
                deleted = int(parts[1]) if parts[1].isdigit() else 0
                current["added"] += added
                current["deleted"] += deleted
                current["files_changed"] += 1

    if current:
        commits.append(current)

    return commits


def summarise(commits: list[dict]) -> dict:
    stats = defaultdict(lambda: {
        "commits": 0,
        "added": 0,
        "deleted": 0,
        "files_changed": 0,
        "dates": [],
    })

    for c in commits:
        member = resolve_member(c["author"])
        s = stats[member]
        s["commits"] += 1
        s["added"] += c["added"]
        s["deleted"] += c["deleted"]
        s["files_changed"] += c["files_changed"]
        s["dates"].append(c["date"])

    # compute first/last active dates
    for member, s in stats.items():
        sorted_dates = sorted(s["dates"])
        s["first_commit"] = sorted_dates[0] if sorted_dates else "—"
        s["last_commit"] = sorted_dates[-1] if sorted_dates else "—"
        del s["dates"]

    return dict(stats)


def print_table(stats: dict, branch: str | None, since: str | None, until: str | None):
    print()
    print("╔══════════════════════════════════════════════════════════════════╗")
    print("║              Cookie Inc. — Git Contribution Summary              ║")
    print("╚══════════════════════════════════════════════════════════════════╝")
    if branch:
        print(f"  Branch : {branch}")
    if since or until:
        range_str = f"{since or '—'}  →  {until or 'now'}"
        print(f"  Period : {range_str}")
    print(f"  Generated : {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    print()

    col_w = [12, 8, 9, 9, 13, 13, 13]
    headers = ["Member", "Commits", "+Lines", "-Lines", "Files Δ", "First", "Last"]

    def row(cells):
        return "  " + "  ".join(str(c).ljust(w) for c, w in zip(cells, col_w))

    sep = "  " + "  ".join("─" * w for w in col_w)
    print(row(headers))
    print(sep)

    total = defaultdict(int)
    for member, s in sorted(stats.items(), key=lambda x: -x[1]["commits"]):
        print(row([
            member,
            s["commits"],
            f"+{s['added']}",
            f"-{s['deleted']}",
            s["files_changed"],
            s["first_commit"],
            s["last_commit"],
        ]))
        total["commits"] += s["commits"]
        total["added"] += s["added"]
        total["deleted"] += s["deleted"]
        total["files_changed"] += s["files_changed"]

    print(sep)
    print(row([
        "TOTAL",
        total["commits"],
        f"+{total['added']}",
        f"-{total['deleted']}",
        total["files_changed"],
        "", "",
    ]))
    print()


def write_csv(stats: dict, branch: str | None, since: str | None, until: str | None, out: str | None):
    rows = []
    total = defaultdict(int)

    for member, s in sorted(stats.items(), key=lambda x: -x[1]["commits"]):
        rows.append({
            "member":        member,
            "branch":        branch or "current",
            "since":         since or "",
            "until":         until or "",
            "commits":       s["commits"],
            "lines_added":   s["added"],
            "lines_deleted": s["deleted"],
            "files_changed": s["files_changed"],
            "first_commit":  s["first_commit"],
            "last_commit":   s["last_commit"],
            "generated_at":  datetime.now().strftime("%Y-%m-%d %H:%M"),
        })
        total["commits"]       += s["commits"]
        total["added"]         += s["added"]
        total["deleted"]       += s["deleted"]
        total["files_changed"] += s["files_changed"]

    rows.append({
        "member":        "TOTAL",
        "branch":        branch or "current",
        "since":         since or "",
        "until":         until or "",
        "commits":       total["commits"],
        "lines_added":   total["added"],
        "lines_deleted": total["deleted"],
        "files_changed": total["files_changed"],
        "first_commit":  "",
        "last_commit":   "",
        "generated_at":  datetime.now().strftime("%Y-%m-%d %H:%M"),
    })

    fieldnames = ["member", "branch", "since", "until", "commits",
                  "lines_added", "lines_deleted", "files_changed",
                  "first_commit", "last_commit", "generated_at"]

    dest = out or f"git_summary_{datetime.now().strftime('%Y%m%d_%H%M')}.csv"
    with open(dest, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)

    print(f"CSV written → {dest}")


def main():
    parser = argparse.ArgumentParser(description="Cookie Inc. Git contribution summary")
    parser.add_argument("--repo",    default=".", help="Path to git repo (default: current dir)")
    parser.add_argument("--branch",  default=None, help="Branch name (default: current branch)")
    parser.add_argument("--since",   default=None, help="Start date e.g. 2025-01-01")
    parser.add_argument("--until",   default=None, help="End date e.g. 2025-06-01")
    parser.add_argument("--format",  choices=["table", "json", "csv"], default="table")
    parser.add_argument("--out",     default=None, help="Output file path for CSV (default: auto-named)")
    args = parser.parse_args()

    commits = fetch_log(args.repo, args.branch, args.since, args.until)

    if not commits:
        print("No commits found for the given filters.")
        sys.exit(0)

    stats = summarise(commits)

    if args.format == "json":
        print(json.dumps(stats, indent=2))
    elif args.format == "csv":
        write_csv(stats, args.branch, args.since, args.until, args.out)
    else:
        print_table(stats, args.branch, args.since, args.until)


if __name__ == "__main__":
    main()