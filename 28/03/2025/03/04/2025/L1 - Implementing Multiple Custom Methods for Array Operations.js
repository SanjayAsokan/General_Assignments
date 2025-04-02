function filterEvenNumbers(arr){
    let evennumbers = arr.filter((ele,i)=>{
      return arr[i] % 2 == 0
      
    })
    console.log("Even_Numbers :",evennumbers)
   }
   
   function sumOfArray(arr){
    let sumnumbers = arr.reduce((acc,curr)=>{
      return acc = acc +curr
      
    })
    console.log("SumOf_Numbers :",sumnumbers)
   }
   
   function sortAndConcat(arr,arr1){
    arr.sort()
    arr1.sort()
    return arr.concat(arr1)
   }
   
   
   let arr = [15, 30, 45, 60, 75, 90]
   let arr1 = [2,45,87,23,88]
   filterEvenNumbers(arr)
   console.log("------------------------------------------")
   sumOfArray(arr)
   console.log("------------------------------------------")
   console.log("SortAndConcat",sortAndConcat(arr,arr1))
   console.log("------------------------------------------")