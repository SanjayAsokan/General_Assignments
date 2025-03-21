const studet = {
    John: 85,
    Emma: 92,
    Sam: 67,
    Bob: 45
  }
  for(let key in studet){
    let sco =studet[key]
    var grade = (sco >= 90) ? "A" : 
              (sco >= 80) ? "B" : 
              (sco >= 70) ? "C" : 
              (sco >= 60) ? "D" : "F";
    console.log(`${key} - ${grade}`)
  }
  
  
  