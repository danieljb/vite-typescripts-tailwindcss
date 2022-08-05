import "./style.css";
import tailwindLogo from "./tailwind.svg";
import typescriptLogo from "./typescript.svg";
import { setupCounter } from "./counter";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank" class="font-medium text-blue-500 hover:text-blue-600 inline-block">
      <img src="/vite.svg" alt="Vite logo" class="h-24 p-6 will-change-[filter] filter drop-shadow-none hover:drop-shadow-lg" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank" class="font-medium text-blue-500 hover:text-blue-600 inline-block">
      <img src="${typescriptLogo}" alt="TypeScript logo" class="h-24 p-6 will-change-[filter] filter drop-shadow-none hover:drop-shadow-lg" />
    </a>
    <a href="https://tailwindcss.com/" target="_blank" class="font-medium text-blue-500 hover:text-blue-600 inline-block">
      <img src="${tailwindLogo}" alt="TailwindCSS logo" class="h-24 p-6 will-change-[filter] filter drop-shadow-none hover:drop-shadow-lg" />
    </a>
    <h1 class="text-5xl font-bold leading-5">Vite + TypeScript + TailwindCSS</h1>
    <div class="p-8">
      <button id="counter" type="button" class="rounded-lg border border-transparent px-3 py-5 bg-slate-200 transition-colors hover:border-blue-500"></button>
    </div>
    <p class="text-gray-400">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
