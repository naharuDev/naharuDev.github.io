import './tailwind.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="bg-gradient-to-t from-cyan-950 to-sky-800">

    <!-- 
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a> 
    -->

    <h1 class="text-center pt-5" >Hi, Welcome</h1>
    <article class="text-justify px-10 pt-5">
      <p> 
        My name is Ahmad Fadli Naharu, I am a Game Programmer. Mostly, I'm working using Unity3D Game Engine.
        Other than my role as a Game Programmer, I love art both in visual and in audio form. In this Web Page,
        I present my portofolios and my artworks. 
      </p> 
    </article>
    
    <div class="px-10 pt-5">
      <button id="counter" type="button" class=" rounded-lg bg-sky-800" ></button>
    </div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
