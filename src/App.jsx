import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LineImage from './assets/Coffee Line.png'
import ImgTeaRender from './assets/Coffee.png'
import videoTea from '/0001-0250.mp4'
import videoDasom from '/hadiah dasom.mp4'

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

        
        
        <div className='h-auto w-full relative'>
          <div className='bg-cover bg-center w-full h-full absolute animate-fade' style={{ backgroundImage: "url(" + LineImage + ")" }}></div>
          <div className='px-10 text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold py-10 text-right sm:text-center bg-cover bg-center bg-clip-text text-transparent animate-skew' style={{ backgroundImage: "url(" + LineImage + ")" }}>
            AHMAD<br />FADLI<br />NAHARU<br />
          </div>
        </div>

        <div className='space-y-4 max-w-3xl mx-auto relative'>
        <div className='w-40 h-40 rounded-full bg-emerald-100 opacity-40 object-center m-10 absolute filter blur-3xl animate-moveabit mix-blend-color-dodge'></div>
        
        <section className='px-10 pt-2 pb-6'>
          {/*<div className='bg-emerald-50 h-1 sm:m-2 rounded-sm'/>*/}
          <h1 className="pt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-left px-15 ">
            
            LET'S<br/> COLABORATE<br /> AND MAKE <br /> SOMETHING GREAT</h1>
        </section>

        <section className='px-10 pt-2 pb-6 '>
          <div className='bg-emerald-50 h-1 sm:m-2 rounded-sm '></div>
          <h1 className='p-10 py-5 text-3xl text-center'>Game Development</h1>
          <div className='flex flex-col  h-full w-full'>
            <div className='rounded-xl bg-black overflow-hidden my-4 mx-4 h-52 sm:h-72 md:h-96 bg-contain bg-no-repeat bg-center ' style={{backgroundImage:'url('+ImgTeaRender+')'}} />
            <div className='rounded-xl  bg-black overflow-hidden my-4 mx-4 h-52 sm:h-72 md:h-96'>
              
            </div>
            <div className='rounded-xl  bg-black overflow-hidden my-4 mx-4 h-52 sm:h-72 md:h-96'>
              
            </div>
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
              <video className="h-full w-full" autoPlay loop>
                <source src={videoTea} type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
            </div>
            <p className='text-justify px-10 pb-20'>This is an seamless loop animation that I create for my one hour loop Song on Youtube. It is called Tea at my Backyard. 
              <a href='https://youtu.be/O7fe0wh28ck' className=' text-blue-300 underline'>Click here</a> to go to my youtube video. 
            </p>
            <div className='rounded-xl  bg-black overflow-hidden my-4 mx-4 h-52 sm:h-72 md:h-96'>
              <video className="h-full w-full" controls loop>
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
