const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        return reject(new Error('Cannot load the database'));
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');

      // Check if there are no students
      if (lines.length <= 1) {
        return resolve('No students found\n');
      }

      let result = `Number of students: ${lines.length - 1}\n`;
      const studentsCount = {};

      for (let i = 1; i < lines.length; i += 1) {
        const studentData = lines[i].split(',');
        const firstName = studentData[0];
        const field = studentData[3];

        if (!studentsCount[field]) {
          studentsCount[field] = [];
        }

        studentsCount[field].push(firstName);
      }

      for (const field in studentsCount) {
        if (Object.prototype.hasOwnProperty.call(studentsCount, field)) {
          result += `Number of students in ${field}: ${studentsCount[field].length}. List: ${studentsCount[field].join(', ')}\n`;
        }
      }

      resolve(result);
    });
  });
}

module.exports = countStudents;
