import React, { useEffect, useState } from "react";

const ApiCalling = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=9_page=${page}`
        );
        const result = await res.json();
        console.log(result);
        setData((prev)=>[...prev,...result]);
      } catch (error) {
        console.log(error);
        setError("Something went wrong while fetching data.");
      } finally {
        setLoading(false);
      }
    })();
  }, [page]);

    const handleScroll = async() => {
    try {
        if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
          return  setPage((prev)=>prev + 1)
        }
    } catch (error) {
        console.log(error);
        
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return ()=> window.removeEventListener("scroll",handleScroll);
  },[]);

  return (
    <>
      <div>
        {loading && "loading......"}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {!loading &&
          !error &&
          data.map((item) => {
            return (
              <div
                style={{
                  marginBottom: "1rem",
                  border: "1px solid #ccc",
                  padding: "1rem",
                }}
                
              >
                {/* <p>{item.id}</p> */}
                <h4>{item.title}</h4>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ApiCalling;
