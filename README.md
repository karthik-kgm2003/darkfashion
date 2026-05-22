# DARK Fashion & Trends 🖤

> Premium streetwear e-commerce site — Padinjarangadi, Kerala.
> Built with **Astro 4**, **Tailwind CSS**, and **Content Collections**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 📁 Project Structure

```
dark-fashion/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automatic GitHub Pages CI/CD
├── public/
│   └── logo.png                # ← Add your DARK logo here
├── src/
│   ├── content/
│   │   ├── config.ts           # Zod schema for products collection
│   │   └── products/           # JSON product files
│   │       ├── dark-acid-wash-oversized-tee.json
│   │       ├── dark-utility-cargo-pant.json
│   │       ├── dark-satin-bomber-jacket.json
│   │       └── dark-ripstop-bucket-hat.json
│   ├── layouts/
│   │   └── MainLayout.astro    # Global layout (nav + footer)
│   └── pages/
│       ├── index.astro         # Homepage with hero + product grid
│       └── products/
│           └── [id].astro      # Dynamic product detail pages
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## 🌐 GitHub Pages Deployment

### 1. Update `astro.config.mjs`

Replace `your-github-username` with your actual GitHub username:

```js
export default defineConfig({
  site: 'https://YOUR_GITHUB_USERNAME.github.io',
  base: '/dark-fashion',
  // ...
});
```

### 2. Push to GitHub

```bash
git init
git add .
git commit -m "feat: initial DARK Fashion site"
git remote add origin https://github.com/YOUR_USERNAME/dark-fashion.git
git push -u origin main
```

### 3. Enable GitHub Pages

In your repo → **Settings** → **Pages** → Source: **GitHub Actions**

The workflow in `.github/workflows/deploy.yml` will automatically build and deploy on every push to `main`.

---

## ➕ Adding Products

Create a new JSON file in `src/content/products/`. The filename becomes the product URL slug.

**Example:** `src/content/products/dark-hoodie.json`

```json
{
  "name":        "DARK Heavyweight Hoodie",
  "price":       2299,
  "category":    "Tops",
  "description": "Your product description here...",
  "image":       "https://your-image-url.com/hoodie.jpg",
  "inStock":     true,
  "tags":        ["hoodie", "heavyweight", "streetwear"],
  "sizes":       ["S", "M", "L", "XL", "XXL"],
  "colors":      ["Jet Black", "Slate Grey"],
  "featured":    false
}
```

**Available categories:** `Tops` | `Bottoms` | `Outerwear` | `Accessories` | `Footwear` | `Sets`

---

## 🎨 Customisation

| What            | Where                                      |
|-----------------|--------------------------------------------|
| Logo            | `public/logo.png`                          |
| Brand colors    | `tailwind.config.mjs` + layout CSS vars    |
| Contact details | `src/layouts/MainLayout.astro` (footer)    |
| WhatsApp number | Replace `919400000000` in layout + pages   |
| Fonts           | Google Fonts link in `MainLayout.astro`    |

---

## 🛠 Tech Stack

- **Framework:** [Astro 4](https://astro.build) (Static Site Generation)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com)
- **Data:** Astro Content Collections + JSON + Zod validation
- **Fonts:** Bebas Neue, Barlow, Barlow Condensed (Google Fonts)
- **Hosting:** GitHub Pages via GitHub Actions

---

*Made with ♥ in Padinjarangadi, Kerala.*
# darkfashion
# darkfashion
