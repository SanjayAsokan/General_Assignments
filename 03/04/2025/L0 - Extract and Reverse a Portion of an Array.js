function extractAndReverse(arr){
    let rev =  arr.slice(3,5)
    let final = []
    for(let i=rev.length-1;i>=0;i--){
      final.push(rev[i])
    }
    console.log(final)
   }
   let arr = [15, 30, 45, 60, 75, 90]
   extractAndReverse(arr)