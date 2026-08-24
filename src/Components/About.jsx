import React from 'react'

const About = () => {
  return (
<div id='about' className="scroll-mt-20 flex items-center justify-center flex-col relative">

  <h1 className="text-white font-serif font-bold border-2 h-auto w-24 p-2 text-center rounded-xl bg-transparant">About</h1>

  <div className=" flex justify-center items-center w-350 gap-40 h-130">

      <div id='aboutimage' className='h-90 w-110  text-white text-center bg-[url(/about.png)] bg-center bg-cover'></div>

      <div className='flex flex-col items-start gap-5'>

        <h2 className='text-center text-white font-bold text-5xl'>About Me</h2>

        <div id='aboutdata' className="  rounded-2xl h-60 w-130 relative flex flex-col gap-5 justify-start items-start">

        <p className="text-white text-lg">
            I'm a frontend developer focused on building responsive,
            user-friendly web experiences. I work with HTML, CSS, JavaScript,
            and React, and I'm currently improving my skills by building
            real-world projects.
        </p>

        <div>

          <p className=' text-white text-4xl font-bold pb-5'>Currently focused on</p>
          
          <pre className=' text-white text-[18px] leading-relaxed'>
            # Frontend Development  # React
            <br/>
            # JavaScrit  # Started Building Projects

          </pre>

        </div>

      </div>

      </div>

  </div>

</div>
  );
}

export default About