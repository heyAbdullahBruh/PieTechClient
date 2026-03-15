# Pietenium: Premium Digital Agency Portfolio

The official digital storefront for Pietenium, a high-performance digital solutions agency. This project is a premium, professional business portfolio with a focus on immersive UX, editorial clarity, and authoritative branding.

---

## 🛠 Tech Stack

### Core
- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Library**: [React 19+](https://react.dev/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Validation**: [Zod](https://zod.dev/)

### Styling & UI
- **Styling**: Vanilla CSS Modules (Glassmorphism, CSS Variables)
- **Icons**: [FontAwesome 6](https://fontawesome.com/) (Professional Tier)
- **Animations**: CSS Keyframes & Transitions
- **Rich Text**: [Tiptap](https://tiptap.dev/)

### Utilities
- **Cookies**: `js-cookie`
- **Phone Validation**: `libphonenumber-js`
- **Analytics**: Custom integrated dashboard

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd PieteniumClient
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add necessary variables (e.g., reCAPTCHA keys).
   ```bash
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
   RECAPTCHA_SECRET_KEY=your_secret_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to see the result.

---

## 📂 Project Structure

```text
├── public/          # Static assets (images, videos, etc.)
├── src/
│   ├── app/         # Next.js App Router (pages, layouts, globals)
│   ├── components/  # Reusable UI components (Navbar, Footer, Home, etc.)
│   ├── customHooks/ # Custom React hooks
│   ├── data/        # Static data and constants
│   ├── store/       # Zustand store definitions
│   └── utility/     # Utility functions and helpers
├── .env.local       # Environment variables (local)
├── next.config.mjs  # Next.js configuration
└── package.json     # Project dependencies and scripts
```

---

## 📜 Available Scripts

- `npm run dev`: Starts the development server with Turbopack.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality issues.

---

## 📉 Recent Transformations (Project Overview)

### Phase 1: Brand & Immersive UX
- **Dynamic Banners**: Implemented theme-aware, video-background heroes with premium glassmorphism overlays.
- **Glassmorphism Design System**: Standardized all components with high-end blurred surfaces.
- **Animated Interactions**: Added `animate-fade` and `animate-slide-up` entries.

### Phase 2: Business Expansion
- **Development Process**: Interactive visualization of our framework.
- **Engagement Models**: Detailed tiered service models (Retainers, Project-Based).

### Phase 3: Portfolio & Case Studies
- **Editorial Listings**: Standardized project cards with hover-scaling effects.
- **Case Study Discovery**: Added "Related Projects" and detailed narratives.

### Phase 4: Articles & Insights
- **Editorial Layout**: Transformed "Pulse" blog into a formal editorial section.
- **Readability Overhaul**: Refined typography and content spacing.

### Phase 5: Client Portal & Graceful Error Handling
- **Dashboard Upgrade**: Sleek command center with analytics overview.
- **Void-Page 404**: Branded "Drifted into the Void" experience.

---

## 📈 Quality Assurance

- **Full SEO Optimization**: Automated title tags and meta descriptions.
- **Production Built**: Verified with a complete `npm run build` cycle.
- **Responsive Mastery**: Verified across Mobile, Tablet, and Desktop breakpoints.

---

_Created with surgical precision to convince and convert high-ticket clients._
