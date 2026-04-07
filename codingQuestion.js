const orders = [
  { orderId: 1, status: "PLACED", amount: 200 },
  { orderId: 2, status: "DELIVERED", amount: 400 },
  { orderId: 3, status: "PLACED", amount: 100 }
];



// Write logic to return:

// {
//  totalOrders: 3,
//  totalRevenue: 700,
//  delivered: 1
// }


const ans = orders.reduce((acc,crr)=>{
    acc.totalOrders++
    acc.totalRevenue = acc.totalRevenue + crr.amount
    
    if(crr.status === "DELIVERED"){
        acc.delivered += 1
    }
    
    return acc
    
    
},{
    totalOrders:0,
    totalRevenue:0,
    delivered: 0
})

console.log(ans)









