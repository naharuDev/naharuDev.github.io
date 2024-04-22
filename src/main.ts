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

  <div class="bg-emerald-300 bg-opacity-10 z-20 overflow-hidden relative">
    <div class="w-40 h-40 rounded-full bg-emerald-100 object-center m-10 absolute filter blur-xl -z-10"></div> 
    <section class="px-10 pt-2 ">
      <div class="bg-emerald-50 h-1 sm:m-2 rounded-sm"></div>
      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-left px-15 lg:mx-20">LET'S COLABORATE<br> AND MAKE <br> SOMETHING GREAT</h1>
      <!--
        <div class="bg-emerald-50 h-1 sm:m-2 rounded-sm"></div> 
      --->
      
    </section>

    <section class ="px-10 py-20">
      <div class="bg-emerald-50 h-1 sm:m-2 rounded-sm "></div>
      <h1 class = "p-10 text-4xl">3D Animation</h1>
      <div class ="bg-lime-50 bg-opacity-20 h-10 "></div>
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
