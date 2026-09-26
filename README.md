# 💪 FitLog — Workout Library

FitLog is a dark, no-nonsense gym companion built with Next.js. Browse a
library of twelve lifts, drill into a workout's full instructions and specs,
lock lifts into **Today's Plan**, save others for later, and track your daily
volume — all backed by a live workout API.

## 🛠️ Technologies Used

- **Next.js** (App Router) — routing, layouts, and server/client components
- **React** — UI and state management
- **TypeScript** — static typing across components, context, and API data
- **Tailwind CSS v4** — utility-first styling and responsive layout
- **daisyUI** — themed UI primitives (buttons, tabs, badges, cards)
- **react-toastify** — toast notifications for user actions
- **FitLog API** (`api.abcz.workers.dev`) — workout data source

## ✨ Key Features

1. **Workout Library** — all 12 workouts fetched from the API and displayed
   as responsive cards (3-column grid on desktop) with category tags,
   equipment, and a duration/calories/rating stats row.
2. **Sort dropdown** — re-sort the library by Duration, Calories, or Rating
   without leaving the page.
3. **Workout Detail Pages** — a two-column layout with a key-specs panel and
   numbered step-by-step instructions for every lift.
4. **Today's Plan & Saved tracking** — add a workout to today's plan or save
   it for later straight from the detail page, with live toast feedback and
   navbar badge counters; state persists across reloads via `localStorage`.
5. **My Plan dashboard** — live metrics (exercises, minutes, calories),
   tabbed Today's Plan / Saved lists, mark-as-done and remove actions, a
   five-lift daily cap, and a friendly empty state.
6. **Fully responsive & resilient** — works across mobile, tablet, and
   desktop, with dedicated loading states and a custom 404 page.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.
