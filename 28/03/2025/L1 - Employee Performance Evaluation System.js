let arr = [
    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    { name: "Eve", tasksCompleted: 7, rating: 2.8 }
  ];
  
  const task = arr.filter(ele => ele.tasksCompleted > 5);
  
  let names = task.map(ele => {
    let performance;
    
    if (ele.rating > 4.5) {
      performance = "Excellent";
    } else if (ele.rating >= 3 && ele.rating <= 4.5) {
      performance = "Good";
    } else {
      performance = "Needs Improvement";
    }
  
    return { name: ele.name, performance };
  });
  
  names.sort((a, b) => {
    const priority = { "Excellent": 3, "Good": 2, "Needs Improvement": 1 };
    return priority[b.performance] - priority[a.performance];
  });
  
  console.log(names);
  