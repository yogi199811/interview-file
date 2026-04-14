import React, { useEffect, useState } from 'react'

const debounce = ({value,delay}) => {
    const [debounce ,setDebounce] = useState("")
    useEffect(()=>{
       timer = setTimeout(() => {
            setDebounce(value)
        }, delay);

        return ()=>{
            clearTimeout(timer)
        }

       

    },[value,delay])
  return (
    <div>debounce
        <h1>{debounce}</h1>
    </div>
  )
}

export default debounce