import React, { useEffect } from 'react'
import axios from 'axios'

const Data = () => {
    const [data, setData] = React.useState([])

    useEffect(()=>{
        (async()=>{
            const {data} = await axios("/api/jokes")
            console.log(data);
            setData(data)
            

        })()
    },[])
  return (
    <div>
        {data.map((dets)=>(
            <h1 key={dets.id}>{dets.text}</h1>


        ))}

    </div>
  )
}

export default Data