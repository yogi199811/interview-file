import { useEffect, useState } from "react";
import React from "react";
import "../App.css";

function List() {
  const [list, setList] = useState("");
  const [items, setItems] = useState([]);
  const [bucket, setBucket] = useState([]);

  const fetchItem = async (food) => {
    try {
      if (food.length >= 2) {
        const result = await fetch(
          `https://api.frontendeval.com/fake/food/${food}`
        );
        const data = await result.json();
        setItems(data);
        console.log(data);
      }
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  useEffect(() => {
    fetchItem(list);
  }, [list]);

  const handleClick = (e) => {
    const idx = e.target.getAttribute("data_id");
    if (idx) {
      const obj = {
        id: Date.now(),
        data: items[idx],
        isDone: false,
      };

      // console.log(obj);
      setBucket((prev) => [...prev, obj]);
    }
    setList("");

    console.log(bucket);
  };
  const checkHandle = (id) => {
    setBucket(
      bucket.map((item) => {
        if (item.id === id) {
          item.isDone = !item.isDone;
        }
        return item;
      })
    );
  };

  const deleteHandle = (id) => {
    setBucket(bucket.filter((item) => item.id !== id));
  };


  return (
    <>
      <div className="card">
      <h1 className=" text-red-400 bg-red-100 p-4 m-5 "  >My Shopping List</h1>
        <div>
          <input
          placeholder="Search Items"
            type="text"
            onChange={(e) => setList(e.target.value)}
            value={list}
          />
        </div>

        {list.length >= 2 ? (
          <div className="shoping" onClick={handleClick}>
            {items.map((item, i) => {
              return (
                <div data_id={i} className="list" key={i}>
                  {item}
                </div>
              );
            })}
          </div>
        ) : null}

        <div className="bucket">
          {bucket.map((item) => {
            return (
              <div className="bucket_list" key={item.id}>
                <button
                  onClick={() => {
                    checkHandle(item.id);
                  }}
                >
                  ✅
                </button>
                <div className= {item.isDone ? "strik" :""}>

                {item.data}
                </div>
                <button onClick={() => deleteHandle(item.id)}>❌</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default List;
