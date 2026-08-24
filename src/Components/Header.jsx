import React from 'react'


const Header = () => {
  return (
    <>

    <header>

<nav className=' border-b-2 border-gray-900 text-white flex justify-between h-14 backdrop-blur-sm w-full max-w-full fixed z-1'>

    <a href='#Home' className=' flex justify-center items-center ml-5'>
      
      <div className='h-7 w-7 bg-white rounded-xl bg-[url(/usericon.svg)] bg-cover bg-center '></div>
      <div className='text-white text-xl font-semibold p-2'>Asim Shaikh</div>
    
    </a>


    <ul className='flex justify-center items-center gap-10 h-full w-1/3 mr-2' >

        <li><a href='#Home'>Home</a></li>
        <li><a href='#stats'>Stats</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#contact'>Contact</a></li>

    </ul>

</nav>

    </header>

    </>
  )
}

export default Header