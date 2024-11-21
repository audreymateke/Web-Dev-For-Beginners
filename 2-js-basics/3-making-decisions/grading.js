let allStudents = [
    'A',
    'B-',
    1,
    4,
    5,
    2
  ];
  
  let studentsWhoPassed = [];
  
  // Iterate through all students
  for (let i = 0; i < allStudents.length; i++) {
    let grade = allStudents[i];
  
    // First grading system: numbers
    if (typeof grade === 'number') {
      if (grade >= 3) {
        studentsWhoPassed.push(grade); // Add passing grades to the array
      }
    } 
    // Second grading system: letters
    else if (typeof grade === 'string') {
      if (['A', 'A-', 'B', 'B-', 'C'].includes(grade)) {
        studentsWhoPassed.push(grade); // Add passing grades to the array
      }
    }
  }
  
  // Print results
  console.log("Students who passed:", studentsWhoPassed);
  