const people = [ 
    { name: "Alice", address: 
    { city: "New York", street:
    { name: "Broadway", number: 123 } } },
    
    { name: "Bob", address: 
    { city: "Los Angeles", street:
    { name: "Sunset Boulevard", number: 456 } } } ];
    
  var Finalarr = []
  for(let i=0 ; i<people.length;i++){
    var details = people[i]
    let {name, address:{city, street}} = details
  Finalarr.push(`${name} lives in ${city} on ${street.name}`)
  }                
  console.log(Finalarr)