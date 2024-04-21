import './tailwind.css'
import backgroundImage from './img/Coffee Line.png'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class ="h-auto w-full relative -z-30 overflow-hidden">
    <img src="${backgroundImage}" class="absolute object-center object-cover h-full w-full animate-fade">
      <div class ="bg-cover bg-center bg-clip-text text-transparent px-10 text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold py-10 text-right sm:text-center  " 
      style = "background-image : url(${backgroundImage})"  >
      AHMAD<br> FADLI<br> NAHARU
      </div>
    </img>
  </div>

  <div class="bg-green-400 bg-transparent z-20 overflow-hidden relative">
    
    <section class="p-10">
      <div class="bg-emerald-50 h-1 sm:m-2 rounded-sm"></div>
      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center lg:text-left lg:mx-20">LET'S COLABORATE AND MAKE SOMETHING GREAT</h1>
      <div class="bg-emerald-50 h-1 sm:m-2 rounded-sm"></div>
    </section>

    <section class ="px-10 py-20">
      <div class="bg-emerald-50 h-1 sm:m-2 rounded-sm"></div>
      <h1 class = "p-10">3D Animation</h1>
      <card></card>
    </section>
    
    <div class="px-10 pt-5">
      <button id="counter" type="button" class=" rounded-lg bg-sky-800" ></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
