export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  if (!Array.isArray(listStudents)) {
    return [];
  }

  const filteredStudents = listStudents.filter((student) => student.location === city);

  return filteredStudents.map((student) => {
    const newGrade = newGrades.find((grade) => grade.studentId === student.id);
    return { ...student, grade: newGrade ? newGrade.grade : 'N/A' };
  });
}
