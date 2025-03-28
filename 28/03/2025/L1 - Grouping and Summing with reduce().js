let arr = ["electronics", "clothing", "electronics",
    "toys", "clothing", "toys", "toys"]

const count = arr.reduce((acc, category)=>{
acc[category]=(acc[category] || 0) + 1 
return acc
},{}) 
console.log(count)