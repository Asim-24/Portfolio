import React, { useContext } from 'react'
import { GlobContext } from './context';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Stats from './Components/Stats';
import AnimatedBackground from './Components/AnimatedBackground';
import AnimatedBackground2 from './Components/AnimatedBackground2';

const App = () => {

  let value = useContext(GlobContext);

  return (
    <>
    <div className='bg-black'>

    <AnimatedBackground />

    <Header />
    <Home />
    <Stats />
    <Skills />
    <About />
    <Contact />
    
    </div>
    </>
  )
}

export default App
