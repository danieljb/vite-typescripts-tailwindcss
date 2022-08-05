
# Vite + TypeScript + TailwindCSS

This is a setup to get Vite + TypeScript + TailwindCSS running without any framework.

It was initialized as follows:

```shell
# setup vite
npm create vite@latest
# follow instructions, select
# → [project_name]
# → vanilla
# → typescript

cd ./[project_name]

# install tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Update `tailwind.config.cjs`:

```diff
/** @type {import('tailwindcss').Config} */
module.exports = {
-  content: [],
+  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Update `style.css`:

```diff
- :root { /* … */
+ @tailwind base;
+ @tailwind components;
+ @tailwind utilities;
```

Done!
