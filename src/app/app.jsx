// src/app/app.jsx
// ─────────────────────────────────────────────────────────────
// TEMPORARY PLACEHOLDER — Cookie Inc. internal dev file
// Confirms the stack is wired up. Delete return() contents
// and replace with BrowserRouter + ScrollToTop +
// CartProvider + AppRoutes when dev begins.
// ─────────────────────────────────────────────────────────────

import './app.css'

export default function App() {
  return (
    <div className="min-h-screen bg-cv-white flex flex-col">

            {/* Top bar */}
      <div className="w-full bg-cv-plum px-10 py-4 flex justify-between items-center">
        <span className="text-cv-white text-sm font-semibold tracking-widest uppercase">
          Chithu Vibes
        </span>
        <span className="text-cv-mauve text-xs">
          Cookie Inc. — Internal Dev Build
        </span>
      </div>

            {/* Main hero area — takes up remaining space */}
      <div className="flex-1 flex flex-col items-center justify-center gap-10 px-8 text-center">

                {/* Brand */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-cv-plum text-6xl font-bold tracking-tight">
            Chithu Vibes
          </p>
          <p className="text-cv-charcoal text-lg max-w-md leading-relaxed">
            Handcrafted gifts & calligraphy art, made with intention.
            The site is being carefully put together — check back soon.
          </p>
        </div>

                {/* Gold divider */}
        <div className="w-24 h-0.5 bg-cv-gold"></div>

                {/* Stack info — remove before go-live */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-cv-charcoal text-xs uppercase tracking-widest mb-1">
            Stack
          </p>
          <span className="text-cv-mauve text-base">React + Vite + Tailwind CSS v4</span>
          <span className="text-cv-mauve text-base">Google Sheets CMS · PapaParse</span>
          <span className="text-cv-mauve text-base">React Router · Context API</span>
        </div>

                {/* Dev handoff note */}
        <div className="bg-cv-plum rounded-xl px-8 py-6 max-w-md flex flex-col gap-2">
          <p className="text-cv-gold text-sm font-semibold tracking-wide">
            Hey dev 👋
          </p>
          <p className="text-cv-white text-sm leading-relaxed">
            Start with <span className="text-cv-gold">routes.jsx</span> and{' '}
            <span className="text-cv-gold">cart.context.jsx</span>. Naming is{' '}
            <span className="text-cv-mauve">snake_case</span>, data constants are{' '}
            <span className="text-cv-mauve">UPPER_SNAKE_CASE</span>.
            Read the docs before touching anything. Good luck. 🍪
          </p>
        </div>

      </div>

            {/* Footer */}
      <div className="w-full border-t border-cv-mauve/20 px-10 py-5 flex justify-between items-center">
        <span className="text-cv-charcoal text-xs opacity-50">
          Built by Cookie Inc. — Experience Every Byte
        </span>
        <span className="text-cv-gold text-xs opacity-60">
          v0.0.1 · placeholder
        </span>
      </div>

    </div>
  )
}
