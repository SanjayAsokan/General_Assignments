let user = [
    { name: "Alice", role: "admin", active: true },
    { name: "Bob", role: "user", active: true },
    { name: "Bob", role: "customer", active: true }
  ]
  
  for(let i=0;i<user.length;i++){
    let message = (user[i].role === "admin")
                ? (user[i].active ? "Admin Access Granted!" : "Admin Access Revoked")
                : (user[i].role === "user")
                ? (user[i].active ? "User Access Granted!" : "User Access Revoked") : "Access Denied"
    console.log(message)
  }