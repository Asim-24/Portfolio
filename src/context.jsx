import React from 'react'
import { createContext } from 'react'

export const GlobContext = createContext();


function Context({children}) {

  let data = "asim"

  return (
    <>
    <GlobContext.Provider value={data} >
        {children}
    </GlobContext.Provider>
    </>
  )
}

export default Context