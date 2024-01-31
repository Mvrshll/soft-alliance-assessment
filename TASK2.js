const student = {
  name: "Peter",
  age: 15,
  grades: [95, 59, 78],
};

function calculateAverageGrade(student) {
  const totalGrades = student.grades.reduce((a, b) => a + b, 0);
  const averageGrade = totalGrades / student.grades.length;
  return { name: student.name, averageGrade: averageGrade.toFixed(2) };
}

const result = calculateAverageGrade(student);
console.log(result);
