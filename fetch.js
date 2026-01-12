fetch("https://randomuser.me/api/").then((res)=>{
    return res.json()

}).then((data)=>{console.log(data);}).catch((error)=>{console.log(error);})