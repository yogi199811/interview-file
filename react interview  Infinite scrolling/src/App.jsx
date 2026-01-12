import React, { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [data, setData] = React.useState([]);
  const [page, setPage] = useState(1);

  const getImage = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=9`
      );

      const result = await res.json();
      setData((prev)=>[...prev,...result])
      console.log(result);

      
    } catch (error) {
      console.log(error, "something went wrong");
    } finally {
    }
  };


  const handleChange = ()=>{
    console.log("scrolltotal" + document.documentElement.scrollHeight);
    console.log("innerheight", + window.innerHeight);
    console.log("scrollTop" + document.documentElement.scrollTop);

    if(window.innerHeight +  document.documentElement.scrollTop + 1 >=  document.documentElement.scrollHeight){

      setPage((prev)=> prev + 1)

    }

  }
  
  useEffect(() => {
    getImage()
    }, [page]);



    useEffect(()=>{
      window.addEventListener("scroll",handleChange)
      return ()=> window.removeEventListener("scroll",handleChange)
    },[])
    
 

  return (
    <div>
      <h1>hii</h1>

      {data.map((item,i) => {
        return (
          <div key={i}>
            <img src={item.thumbnailUrl} alt="data" />
          </div>
        );
      })}
    </div>
  );
};

export default App;

// https://jsonplaceholder.typicode.com/photos?_page=${index}&_limit=9
