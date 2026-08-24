import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGitAlt,
  faGithub,
  faNpm,
  faCss3,
  faGit
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {

  return (
    <section id='skills' className=' scroll-mt-10 text-white h-130 w-full flex items-center'>

        <div className='w-full h-100 flex flex-col justify-start gap-20 items-center'>
      
          <div className=' ml-5 mt-5 font-bold text-4xl'>Skills & Technologies</div>
      
          <div className=' **:text-center **:text-lg [&_div]:text-center [&_div]:gap-2 [&_div]:bg-gray-900/15 [&_div]:border-blue-950/30 [&_div]:border-2 [&_div]:rounded-xl [&_div]:p-5 [&_div]:size-30 flex justify-center items-center gap-20'>

            <div className='text-center flex flex-col justify-center items-center'>
           <FontAwesomeIcon icon={faHtml5} className='text-orange-400' />
             <p>HTML5</p>
            </div>

            <div className='text-center flex flex-col justify-center items-center'>
           <FontAwesomeIcon icon={faCss3} className='text-blue-400' />
             <p>CSS3</p>
            </div>

            <div className='text-center flex flex-col justify-center items-center'>
             <p className='' >💨</p>
             <p>TailwindCSS</p>
            </div>

            <div className='text-center flex flex-col justify-center items-center'>
           <FontAwesomeIcon icon={faJs} className='text-yellow-300' />
             <p>JavaScript</p>
            </div>

            <div className='text-center flex flex-col justify-center items-center'>
           <FontAwesomeIcon icon={faReact} className='text-blue-300' />
             <p>React</p>
            </div>

            <div className='text-center flex flex-col justify-center items-center'>
           <FontAwesomeIcon icon={faGithub} />
             <p>Git</p>
            </div>

            <div className='text-center flex flex-col justify-center items-center'>
           <FontAwesomeIcon icon={faNpm} />
             <p>Npm</p>
            </div>

          </div>

        </div>

    </section>
  )
}

export default Skills