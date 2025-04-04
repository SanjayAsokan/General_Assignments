
let count =0
let Interval = setInterval(()=>{
  count++
  console.log("Loading...",count)
  if(count == 5)
  {
    clearInterval(Interval)
     console.log("Loaded successfully!")
  }
  
},1000)