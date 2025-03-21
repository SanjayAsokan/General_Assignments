let book = { 
    title: "The Hobbit", 
    author: "J.R.R. Tolkien",
    year: 1937 
    }
    let values = ""
   for( let val in book){
     values +=val +":"+ book[val]+' '
  
   }  
  console.log(values)