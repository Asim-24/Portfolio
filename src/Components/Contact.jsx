import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useForm } from '@formspree/react';

const Contact = () => {

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [msg, setmsg] = useState("");

    function form (e) {
      if(e.target.id === "name"){
        setname(e.target.value);
      } else if (e.target.id === "email"){
        setemail(e.target.value);
      } else if (e.target.id === "msg"){
        setmsg(e.target.value);
      }
    };

     const [state, submitform] = useForm("xgawbjvo");

    useEffect(()=>{
      if(state.succeeded){
        console.log("submitted successfully")
        setname("");
        setemail("");
        setmsg("");
      }
    },[state.succeeded])


  return (
    <div id='contact' className=' text-white h-170 w-full flex flex-col gap-2 justify-center items-center'>

      <p className='tracking-widest w-114 '>LET'S CONNECT</p>

      <p className='text-4xl font-serif font-extrabold tracking-wide w-115 mb-3'>Contact Me</p>

      <p className=' mb-6 ml-10 '>I’m always open to new ideas, collaborations, and interesting projects.</p>
 
      <form onSubmit={submitform} onChange={(e) => {form(e)}}  className='flex flex-col justify-center items-center gap-5'>

        <input type="text"  name='name'  value={name}   placeholder='Your Name'        required id='name'  className=' rounded-2xl bg-white/[0.05] h-12.5 w-115 p-5 focus:outline-none focus:border-2 focus:border-gray-700 ' />
        <input type="email" name='email' value={email}   placeholder='Your Email'       required id='email' className='rounded-2xl bg-white/[0.05] h-12.5 w-115  p-5 focus:outline-none focus:border-2 focus:border-gray-700' />
       
        <input name='message' value={msg} placeholder='Your Message....' required id='msg'   className=' rounded-2xl bg-white/[0.05] h-35 w-115 pl-5 pb-23  focus:outline-none focus:border-2 focus:border-gray-700' />

        <button type='submit' className='border-2 text-black font-semibold border-white/30 bg-mist-900 rounded-xl bg-sky-700 w-60 py-2'><FontAwesomeIcon className='text-xs text-black' icon={faPaperPlane} /> Send Message</button>

      </form>
        
    </div>
  )
}

export default Contact