import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Stats = () => {

    let [repos, setrepo] = useState("");

    useEffect( ()=>{

       const getrepos = async () => {
       const res = await axios.get("https://api.github.com/users/Asim-24/repos");
       setrepo(res.data.length);
        };

        getrepos();

    },[]);

  return (
    <div id='stats' className=' h-60 mt-10 scroll-mt-14 flex justify-center items-center gap-10 relative'>
        
        <div className='stats-cards'> <p>01+</p> <p>Projects Built</p> </div>
        <div className='stats-cards'> <p>07+</p> <p>Core Skills</p> </div>
        <div className='stats-cards'> <p>{repos}+</p> <p>Github Repos</p> </div>
        <div className='stats-cards'> <p>∞</p> <p>Learning Forever</p> </div>

    </div>
  )
}

export default Stats