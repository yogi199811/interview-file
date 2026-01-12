import React, { useEffect, useState } from "react";
import "./App.css"

const App = () => {
  const [product, setProduct] = React.useState([]);
  const [page , setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0);
 







  const mydata = async () => {
    const productUrl = `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`;
    const res = await fetch(productUrl);
    const deta = await res.json();
    console.log(deta);
    setProduct(deta.products);
    setTotalPages(Math.floor(deta.total / 10))
  };

  useEffect(() => {
    mydata();
  }, [page]);

  const handlePage = (selected)=>{
    if(selected<=totalPages && selected !==page && selected>= 1)
    setPage(selected)
    
    

  }

  console.log(totalPages);
  

  return (
    <>
      {product.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <img src={item.thumbnail} />
        </div>
      ))}
      <div className="second">
        {product.length>0 && <div className="pagination">
          <span
           className={page>1 ?"":"disable"}
              onClick={()=>handlePage(page-1)}>←</span>


          {[...Array(totalPages)].map((_,i)=>(
            <span key={i} className={page===i+1 ? "pagination_selected":null} onClick={()=>handlePage(i+1)}>{i+1}</span>
          ))}

          

          

          <span className={page<totalPages ?"":"disable"} onClick={()=>handlePage(page+1)} >→</span>
         
          </div>}
        
      </div>
    </>
  );
};

export default App;

// https://dummyjson.com/products?limit=10
