function personInfo(){
    console.log("Name :",this.Username)
    console.log("Age :",this.Userage)
  }
  let obj = {
    Username : "Sanju",
    Userage : 23
  }
  
  personInfo.call(obj)
  
  // Output:
  
  // Name : Sanju
  // Age : 23