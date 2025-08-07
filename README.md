# Dimension-Inspired Landing Page

A modern, animated, and fully responsive landing page built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**—inspired by [dimension.dev](https://www.dimension.dev/).

---

## ✨ Features

- **Modern UI:** Dark theme with vibrant purple and accent colors.
- **Responsive Design:** Looks great on all devices.
- **Smooth Animations:** Powered by Framer Motion.
- **Reusable Components:** Modular sections (Navbar, Hero, Features, Integrations, Pricing, Testimonials, Product Tour, FAQ, Call to Action, Footer).
- **Easy Theming:** All colors managed via CSS variables and Tailwind.

---

## 🚀 Getting Started

### 1. **Clone the repository**
```bash
git clone https://github.com/PRIYANSHUSINGH2003/CodingJR-Landing-Page
cd CodingJR-Landing-Page
```

### 2. **Install dependencies**
```bash
pnpm install
# or
npm install
```

### 3. **Run the development server**
```bash
pnpm dev
# or
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the site.

### 4. **Build for production**
```bash
pnpm build
# or
npm run build
```

---

## 🖌️ **Color Theme**

All colors are defined in [`app/globals.css`](app/globals.css) using CSS variables:

- `--background`: #000000
- `--foreground`: #ffffff
- `--purple-primary`: #6b46c1
- `--purple-dark`: #553c9a
- `--purple-light`: #9f7aea
- `--accent`: #ed64a6
- `--text-primary`: #ffffff
- `--text-secondary`: #a0aec0
- `--border`: #2d3748
- `--gray-dark`: #1a1a1a
- `--gray-light`: #4a4a4a

Use these in your components with Tailwind’s arbitrary value syntax, e.g. `bg-[--background]`, `text-[--purple-primary]`.

---

## 📁 **Project Structure**

```
app/
  components/
    Navbar.tsx
    Hero.tsx
    Features.tsx
    FeatureCard.tsx
    Integrations.tsx
    Pricing.tsx
    Testimonials.tsx
    TestimonialCard.tsx
    ProductTour.tsx
    FAQ.tsx
    FAQItem.tsx
    CallToAction.tsx
    Footer.tsx
  globals.css
  layout.tsx
  page.tsx
```

---

## 🛠️ **Customization**

- **Add/Edit Sections:** Modify or add components in `app/components/`.
- **Change Colors:** Edit CSS variables in `app/globals.css`.
- **Animations:** Adjust Framer Motion variants in each component for custom effects.

---

## 📱 **Responsiveness**

All layouts use Tailwind’s responsive utilities (`md:`, `lg:`, etc.) for seamless adaptation to any screen size.

---

## 📦 **Dependencies**

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## 📸 **Demo**
hosted site:  [https://coding-jr-landing-page.vercel.app/](https://coding-jr-landing-page.vercel.app/)
[screen recording here._](https://www.loom.com/share/0db889434c2142ac908f6dc620587f66?sid=ed2f60e5-9a65-4e7e-a438-915b7d15f0fb)

---

## 📞 **Contact**

For questions, reach out at:  
**priyanshusingh00004@gmail.com**  
**Phone:** 9971196062, 9560728495

---

## 📝 **Assignment**

This project was created as part of the CodingJR internship assignment.  
**Submission deadline:** 09 August, 2025

---

**Enjoy building with Next.js, Tailwind, and Framer Motion!**