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
import resume from '/resume.pdf'

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
    <>
      <div className=' text-white bg-teal-950 overflow-hidden relative z-[0]'>
        <div className='w-screen h-screen fixed '>
          <div className='mx-auto w-1/2 bg-black relative'>
            <div className='w-[600px] h-[600px] rounded-full bg-sky-400 opacity-50 m-auto absolute -left-52 filter blur-3xl animate-moveabit '></div>
            <div className='w-[300px] h-[300px] rounded-full bg-green-300 opacity-30 m-auto absolute left-2 filter blur-3xl animate-moveabit '></div>
            <div className='w-[500px] h-[500px] rounded-full bg-yellow-300 opacity-50 m-auto absolute -right-50 filter blur-3xl animate-moveabit '></div>
          
          </div>
        </div>


        <div className='h-auto w-full relative'>
          <div className='bg-cover bg-center w-full h-full absolute animate-fade' style={{ backgroundImage: "url(" + LineImage + ")" }}></div>
          <div className='px-10 text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold py-10 text-right sm:text-center bg-cover bg-center bg-clip-text text-transparent animate-skew' style={{ backgroundImage: "url(" + LineImage + ")" }}>
            AHMAD<br />FADLI<br />NAHARU<br />
          </div>
        </div>

        

        
        
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
              <br/>
              <div className='text-right'>
                <a href='https://youtu.be/UY-Cx9dtFVo' className= 'bg-emerald-600 rounded-lg my-5 px-3 py-1 hover:bg-emerald-500 outline outline-offset-2 outline-1 z-50'>full run-through video</a>
                <div className=' w-full h-4'/>
                <a href='https://youtu.be/Oh9vdGPKYIk' className= 'bg-emerald-600 rounded-lg my-5 px-3 py-1 hover:bg-emerald-500 outline outline-offset-2 outline-1'>old gameplay video</a>
              </div>
              

              </p>
              
                
            
            <div className='rounded-xl  bg-black overflow-hidden my-4 mx-4 h-52 sm:h-72 md:h-96 bg-contain bg-no-repeat bg-center' style={{backgroundImage:'url('+geckoGif+')'}}>   
            </div>
              <p className='text-justify px-10 pb-20'>
                This is a monster model that I use in this AR game project. its model, texture and animation and basicly every 3D assets was made in Blender 3D and exported to Unity. 
              </p>
            <div className='rounded-xl  bg-black overflow-hidden my-4 mx-4 h-52 sm:h-72 md:h-96 bg-contain bg-no-repeat bg-center' style={{backgroundImage:'url('+shitGif+')'}}>
            </div>
            <p className='text-justify px-10 pb-20'>
                I created a stink visual effect and flying flies visual effect by moving its UV coordinate. I achieved that by creating a custom shader in Unity.
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
            <p className='text-justify px-10 pb-20'>This is a seamless loop animation that I created for my one hour loop Song on Youtube. It is called Tea at my Backyard. 
              <div className='text-right'>
                <a href='https://youtu.be/O7fe0wh28ck' className= 'bg-emerald-600 rounded-lg my-5 px-3 py-1 hover:bg-emerald-500 outline outline-offset-2 outline-1'>Tea at my Backyard video</a>
                <div className=' w-full h-2 md:collapse'/>
              </div>
            </p>
            
            <div className='rounded-xl  bg-black overflow-hidden my-4 mx-4 h-52 sm:h-72 md:h-96'>
              <video className="h-full w-full" controls>
                <source src={videoDasom} type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
            </div>
            <p className='text-justify px-10 pb-20'>This animation was a gift for my friend's birthday, I made a spelling mistake but my friend said that it's better because it makes the cat has some kind of childlike vibe. </p>          
            </div>
        </section>

        

        
        </div>
    </div>
    
    <div className='w-full bg-black py-5 relative z-10'>
      {
        //<div className='bg-emerald-50 h-1 sm:m-2 rounded-sm '></div>
      }
      <div className='space-y-4 max-w-5xl mx-auto py-2  text-white  '>
        <section className='grid grid-cols-2 gap-4'>
          <div className='mx-10 text-left'>
            <p className='text-2xl'>contact <br/> </p>
            email<br/> <a href='mailto:fadlinaharu96@gmail.com' className=''> fadlinaharu96@gmail.com </a> <br/>
            instagram <br/> <a href='https://ig.me/m/ahmad_fadli96' className=''> @ahmad_fadli96 </a>
            <br/><br/>
            <p className='text-2xl'>download <br/> </p>
            <a href={resume} className='' download> resume </a>
          </div>
          <div className='mx-10 text-right'>
          </div>
          
        </section>
      </div>
    </div>
  </>
  )

}

export default App
