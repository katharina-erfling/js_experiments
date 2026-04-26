const gradesTable = [
  ['Name', 'Mathematics', 'English', 'Biology'],
  ['Anna', 85, 92, 78],
  ['Ben', 90, 88, 84],
  ['Clara', 76, 95, 89],
];

// Change Anna's math grade to 88
gradesTable[1][1] = 88;

// Add a new row for another student
gradesTable.push(['David', 82, 79, 91]);

console.log(gradesTable);


const calculateAvgGrades = (table) => {
  table.slice(1).forEach(grade => {
    const grades = grade.slice(1).reduce((total, grade) => total + grade, 0) / grade.slice(1).length;
  })
};
