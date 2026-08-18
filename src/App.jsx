import React, { useContext } from 'react'
import { GlobContext } from './Context';

const App = () => {

  let valueex = useContext(GlobContext);

  let vol = useContext(GlobContext);

  return (
    <div>
      <h1 className='text-black'>hello {valueex} {} </h1>
    </div>
  )
}

export default App
