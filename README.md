# Chithu Vibes — Developer Contribution Guide

This document defines the **commit standards and workflow rules** for all developers working on the chithuvibes_website project.
Follow these strictly to maintain code quality, clarity, and team efficiency.

---

## Git Commit Format

Every commit must follow this format:

```
type: short description
```

---

## Commit Types

| Type       | When to use                                  |
| ---------- | -------------------------------------------- |
| `feat`     | Adding a new feature or functionality        |
| `fix`      | Fixing a bug or broken functionality         |
| `refactor` | Restructuring code without changing behavior |
| `chore`    | Maintenance, config updates, dependencies    |
| `style`    | UI/CSS changes (no logic change)             |
| `docs`     | Documentation updates                        |
| `test`     | Adding or updating test cases                |
| `perf`     | Performance improvements                     |
| `hotfix`   | Urgent fix on production                     |

---

## Examples

```
feat: added gift products listing page
fix: resolved cart item count not updating
refactor: optimized sheet data fetch utility
chore: updated env example with sheet url key
style: improved mobile layout for product card
docs: updated readme with local setup steps
test: added test cases for cart context
hotfix: fixed checkout crash on mobile
```

---

## Commit Rules

- Keep the message **short and clear** (one line)
- Use **lowercase only**
- Do not write vague messages like:
  - ❌ fix: stuff
  - ❌ chore: changes
- Each commit should represent **one logical change only**
- Do not bundle unrelated changes in a single commit

---

## Branch & Workflow Rules

- Always pull latest before starting work:
  ```
  git pull origin main
  ```
- Never push directly to `main`
- Follow this flow:
  1. Create a new branch
  2. Complete your task
  3. Commit with proper format
  4. Push your branch
  5. Raise a Pull Request (PR)
- Example:
  ```
  git checkout -b feat/gift_products_page
  git add .
  git commit -m "feat: added gift products listing page"
  git push origin feat/gift_products_page
  ```

---

## Pull Request Rules

- PR title must follow commit format
- Add a short description of what was done
- Mention any related pages or components touched
- Ensure no console errors or warnings
- Make sure UI is responsive (mobile-first)

---

## Code Discipline

- Everything is **snake_case** — files, folders, variables, functions
- React component functions inside `.jsx` are the only PascalCase exception
- Data constants in `src/data/` are **UPPER_SNAKE_CASE**
- Write clean and readable code
- Reuse components wherever possible — check `src/components/` first
- Test your changes before pushing

---

## Final Note

This is a real product for a real client. Work like the client is watching.

Be clean. Be consistent. Be accountable.