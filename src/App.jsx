import { useState } from 'react'
import reactLogo from './assets/react.svg'
import logo from '/logo.svg'
import LineImage from './assets/Coffee Line.png'
import ImgTeaRender from './assets/Coffee.png'
import videoTea from '/0001-0250.mp4'
import videoDasom from '/hadiah dasom.mp4'
import geckoGif from '/gecko.gif'
import shitGif from '/shit.gif'
import MonsCareVid from '/2024-05-02 03-24-08.mp4'

function App() {
  const [count, setCount] = useState(0)

  if (false) {
    return (
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className="text-7xl font-bold underline bg-red-50">
          Hello world!
        </h1>
      </>
    )
  }
  return (
      <div className=' text-white bg-teal-950 overflow-hidden relative'>
        
        <div className='w-full h-20 bg-black z-10'>

        </div>
        
        <div className='h-auto w-full relative'>
          <div className='bg-cover bg-center w-full h-full absolute animate-fade' style={{ backgroundImage: "url(" + LineImage + ")" }}></div>
          <div className='px-10 text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold py-10 text-right sm:text-center bg-cover bg-center bg-clip-text text-transparent animate-skew' style={{ backgroundImage: "url(" + LineImage + ")" }}>
            AHMAD<br />FADLI<br />NAHARU<br />
          </div>
        </div>
        <div className='w-96 h-96 rounded-full bg-emerald-400 m-auto object-center fixed filter blur-3xl animate-moveabit '></div>
        
        
        
        <div className='space-y-4 max-w-3xl mx-auto relative'>
        <section className='px-10 pt-2 pb-6'>
          {/*<div className='bg-emerald-50 h-1 sm:m-2 rounded-sm'/>*/}
          <h1 className="pt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-left px-15 ">
            
            LET'S<br/> COLABORATE<br /> AND MAKE <br /> SOMETHING GREAT</h1>
        </section>

        <section className='px-10 pt-2 pb-6 '>
          <div className='bg-emerald-50 h-1 sm:m-2 rounded-sm '></div>
          <h1 className='p-10 py-5 text-4xl text-center'>Game Development</h1>
          <h1 className='p-10 py-5 text-3xl text-Left'>MonsCare</h1>
          <div className='flex flex-col  h-full w-full'>
            <div className='rounded-xl bg-black overflow-hidden my-4 mx-4 h-52 sm:h-72 md:h-96'>
            <video className="h-full w-full" controls>
                <source src={MonsCareVid} type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
              </div>
              <p className='text-justify px-10 pb-20'>
                This is my old Augmented Reality project which I created when I was in Campus back in 2019, It is called MonsCare. This AR game is about taking care of a Monster. 
                Recently, I rewrite the AI behavior, add new mechanics, new animations, new shaders, new textures, new icons, and add some sound effects. I have a plan to add more functionalities in the future.
                <a href='https://youtu.be/UY-Cx9dtFVo' className=' text-blue-300 underline'>Click here</a> to see the run-through gameplay video and 
                <a href='https://youtu.be/Oh9vdGPKYIk' className=' text-blue-300 underline'>Click here</a> for my old one.
              </p>
            
            <div className='rounded-xl  bg-black overflow-hidden my-4 mx-4 h-52 sm:h-72 md:h-96 bg-contain bg-no-repeat bg-center' style={{backgroundImage:'url('+geckoGif+')'}}>   
            </div>
              <p className='text-justify px-10 pb-20'>
                This is a monster that I use in the game project. its model, texture and animation and basicly every 3D assets was made in Blender 3D and exported to Unity. 
              </p>
            <div className='rounded-xl  bg-black overflow-hidden my-4 mx-4 h-52 sm:h-72 md:h-96 bg-contain bg-no-repeat bg-center' style={{backgroundImage:'url('+shitGif+')'}}>
            </div>
            <p className='text-justify px-10 pb-20'>
                I created this smoke like smell and flying flies visual effect by moving its UV coordinate. I achieved that by creating a custom shader in Unity.
            </p>
          </div>
          
        </section>

        <section className="px-10 pt-2 pb-6 space-y-4 max-w-5xl mx-auto">
          <div className="bg-emerald-50 h-1 sm:m-2 rounded-sm "></div>
          <h1 className="px-10 py-5 text-3xl text-center">My Artworks</h1>
          <div className='flex flex-col h-full w-full'>
            <div className='rounded-xl bg-black overflow-hidden my-4 mx-4 h-52 sm:h-72 md:h-96 bg-contain bg-no-repeat bg-center ' style={{backgroundImage:'url('+ImgTeaRender+')'}} />
            <p className='text-justify px-10 pb-20'>A simple scene that I created in Blender3D. I use this artwork as a background text of my name, as you can see in the top of this page.
            </p>

            <div className='rounded-xl  bg-black overflow-hidden my-4 mx-4 h-52 sm:h-72 md:h-96'>
              <video className="h-full w-full" autoPlay controls loop>
                <source src={videoTea} type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
            </div>
            <p className='text-justify px-10 pb-20'>This is an seamless loop animation that I create for my one hour loop Song on Youtube. It is called Tea at my Backyard. 
              <a href='https://youtu.be/O7fe0wh28ck' className=' text-blue-300 underline'>Click here</a> to go to my youtube video. 
            </p>
            <div className='rounded-xl  bg-black overflow-hidden my-4 mx-4 h-52 sm:h-72 md:h-96'>
              <video className="h-full w-full" controls>
                <source src={videoDasom} type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
            </div>
            <p className='text-justify px-10 pb-20'>This animation was a gift for my friend's birthday, I made a spelling mistake but my friend said that it's better because it makes the cat has a kind of childlike vibe. </p>          
            </div>
        </section>

        <section className='px-10 pt-2 pb-6 bg-black'>
          <div className='bg-emerald-50 h-1 sm:m-2 rounded-sm '></div>
          <h1 className='p-10 py-5 text-3xl'> </h1>
          <div className=''></div>
        </section>

        
        </div>
    </div>
  )

}

export default App
