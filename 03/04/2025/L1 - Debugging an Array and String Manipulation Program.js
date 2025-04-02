function manageStudents() {
    let students = ["Alice", "Bob", "Charlie"];

    // Adding 
    students.splice(1, 0, "David");
    students.splice(6, 6, "Davidmiller");


    // Checking
    console.log(students.includes("Davidmiller"));  

    // separated by commas
    console.log(students.join(" , "));
}

manageStudents();

