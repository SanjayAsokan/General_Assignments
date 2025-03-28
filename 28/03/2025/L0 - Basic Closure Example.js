function outerFunction(message){
    return function(){
      console.log(message)
    }
  }
  const result = outerFunction("Closur Functon")
  result()