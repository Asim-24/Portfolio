import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <>
    <section id='Home' className=' h-150 min-w-full flex justify-center items-center'>

        <div className=' h-74 w-xl relative right-10 flex flex-col gap-4'>
           
           <div className='flex flex-col gap-3'>

            <h1 className='text-white text-6xl font-semibold'>Hi, I'm Asim</h1>
            <h2 className='text-white text-4xl font-medium' >I'm a Frontend Developer</h2>
            <p className='text-white text-xl mt-5 mb-2 font-light'>Passionate about building scalable web applications and solving complex problems with clean, efficient code.</p>

           </div>

           <div className=' bottom-0 w-full h-16 flex gap-4 items-center' >

            <a href="https://github.com/Asim-24" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faGithub} className='text-black p-1 ml-4 bg-green-900 rounded-xl text-3xl origin-bottom hover:scale-x-110 hover:scale-y-110 hover:text-black hover:bg-white transition-all duration-300 ease-in-out ' /></a>
            <a href="https://linkedin.com/in/asimshaikh24" target='_blank' rel='noopener noreferrer'> <FontAwesomeIcon icon={faLinkedin} className='text-black bg-green-900 rounded-xl p-1 text-3xl origin-bottom hover:scale-x-110 hover:scale-y-110 hover:text-black hover:bg-white transition-all duration-300 ease-in-out' /></a>
            <a href="https://drive.google.com/file/d/1sHt_ThKk8JRRuJ_BMCwgTWwtc_EUBfps/view?usp=sharing" className='text-white p-1 text-xl text-center border-2 ml-5 border-white h-auto w-32 rounded-xl pb-2 active:bg-green-900 hover:bg-white hover:text-black transition-all duration-500 ease-in-out '>Resume</a>
            
           </div>

        </div>

        <div className='h-90 w-110 relative top-5 left-18 bg-[url(/home.png)] bg-cover bg-center'>

        </div>

    </section>
    </>
  )
}

export default Home