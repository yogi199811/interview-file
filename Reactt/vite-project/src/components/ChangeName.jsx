import React, { useEffect, useState } from 'react'

const ChangeName = () => {
  const [name,setName]= useState("Yogesh")

  useEffect(()=>{
    

    
    return ()=>{
      setTimeout(() => {
        
        setName("")
      }, 3000);
    }
  })
  return (
      <h1>
        {name}
      </h1>
  )
}

export default ChangeName