let array = [
    { name: "Laptop", price: 1000 }, 
    { name: "Mouse", price: 20 }]

let processProducts = array.map(produce => produce.name)


array.forEach(produce =>{
    if(produce.price >50)
      console.log(`${produce.name} is above $50`)
    else
      console.log(`${produce.name}is below $50`)
  })
  


