## OBS Studio Wallpaper Website (Frontend)

Welcome to the **OBS Studio Wallpaper Website** frontend! This repository contains the React dashboard and UI components for a wallpaper website built with TypeScript and Clerk for authentication.

---

### 🚀 Project Overview

* **Website Name:** OBS Studio Wallpaper Website
* **Purpose:** A wallpaper gallery and dashboard where authenticated users can browse, upload, and manage wallpapers.
* **Frontend Stack:**

  * React.js (with functional components and hooks)
  * TypeScript for type safety
  * Vite (or Create React App/Vite) for bundling
  * Tailwind CSS for styling (optional, adjust if using a different CSS framework)
  * Framer Motion for animations
  * Clerk for authentication and user management
  * React Router for client-side routing

---

### 🔧 Prerequisites

* Node.js (v16+)
* npm or yarn

---

### ⚙️ Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/<your-username>/obs-studio-wallpapers-frontend.git
   cd obs-studio-wallpapers-frontend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the project root and add your Clerk frontend API key:

   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
   ```

4. **Run in Development Mode**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Visit `http://localhost:3000` (or as indicated) to see the app running.

---

### 🔒 Authentication with Clerk

* We use **Clerk** for user sign-up, sign-in, and session management.
* Wrap your app in `ClerkProvider` with your `publishableKey`.
* Use `<SignIn>` and `<SignUp>` components from `@clerk/clerk-react`.

Example in `main.tsx` or `index.tsx`:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ClerkProvider publishableKey={clerkPubKey}>
    <App />
  </ClerkProvider>
);
```

---

### 📂 Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Sidebar.tsx
│   ├── GlowEffect.tsx
│   └── GlowEffectButton.tsx
├── pages/            # Route-based pages (React Router)
│   ├── HomePage.tsx
│   ├── ExplorePage.tsx
│   └── Dashboard.tsx
├── App.tsx           # Main App with routing
├── main.tsx          # Entry point (ClerkProvider setup)
├── lib/              # Utility functions (e.g. cn)
└── styles/           # Global CSS / Tailwind configuration
```

---

### 🛠️ Available Scripts

* `npm run dev` — Start development server
* `npm run build` — Build for production
* `npm run preview` — Preview production build locally

---

### 🧑‍💻 Contribution

I built the frontend in **2 days**, and the backend is coming soon! If you’d like to contribute:

1. Fork the repo
2. Create a new feature branch (`git checkout -b feature/awesome-feature`)
3. Commit your changes (`git commit -m "feat: add awesome feature"`)
4. Push to your branch (`git push origin feature/awesome-feature`)
5. Open a Pull Request

I will gladly give credit to contributors.

**Contact:** [fnaticritersh2004@gmail.com](mailto:fnaticritersh2004@gmail.com)

---

### 📄 License

This project is open-source. Feel free to use and modify!
