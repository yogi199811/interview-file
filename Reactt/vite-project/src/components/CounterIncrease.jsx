import React, { useState } from "react";

const CounterIncrease = () => {
  const [count, setCount] = useState(0);
  const counterIncrease = ()=>{
    if(count>=10){
     alert("count should not more then 10")
    //  setCount(0)


    }else{

        setCount(count+1)
    }
    
    

  }
  const counterDecrease = ()=>{
    if(count<=0){
        alert("can not decrease the value")
    }else{
        setCount(count-1)
    }
  }
  return (
    <>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <h1>Count Increase</h1>
        <p>{count}</p>
        <button
          style={{ backgroundColor: "red", padding: "8px", border: "2px" }}
          onClick={counterIncrease}
        >
          Click to increase
        </button>
        <br />
        <br />
        <br />
        <button
          style={{ backgroundColor: "gray", padding: "8px", border: "2px" }}
          onClick={counterDecrease}
        >
          Click to decrease
        </button>
      </div>
    </>
  );
};

export default CounterIncrease;
