
# Vite + TypeScript + TailwindCSS

This is a setup to get Vite + TypeScript + TailwindCSS running without any framework. It was initialized using [create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite)’s _vanilla ts_ template. The config was altered to support Tailwind v3 according to [official instructions](https://tailwindcss.com/docs/guides/vite).

## Usage #

Use _degit_ to use this repository as a template (replace `your-project-name` with the actual name of your project):

```shell
npx degit dinghystudio/vite-typescripts-tailwindcss#main [your-project-name]
cd [your-project-name]
# don’t forget to edit project name in `package.json`

npm install
```

To run the development server run:

```shell
npm run dev
```

Production build:

```shell
npm run build # build output can be found in ./dist
npm run preview # serve the build output for preview
```

## How this repository was set up #

This repository was setup as follows:

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
