import React, { useEffect, useState } from 'react'

const RandomColor = () => {
    const [color, setColor] = useState("black")
    const getColor = ()=>{
        let random = "0123456789ABCDEF"
        let letters = "#"

        for(let i =0 ;i<6 ;i++){
            letters +=  random[ Math.floor( Math.random()*16 ) ]
        }

        return letters

    }



    const changeColor = ()=>{
        let color = getColor()
        console.log(color);
        
        setColor(color)
    }

    useEffect(()=>{
        changeColor()
    },[])
  return (
    <>
    <div style={{display:"flex", margin:"10px",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>

        <div style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:color, border:"2px solid black", width:"40vh",height:"40vh"}}>

        </div>


        
    <button onClick={changeColor} style={{marginTop:100}}>Change color</button>
    </div>
        </>
  )
}

export default RandomColor