const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        return reject(new Error('Cannot load the database'));
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');

      if (lines.length <= 1) {
        console.log('No students found');
        return resolve('No students found\n');
      }

      let result = `Number of students: ${lines.length - 1}\n`;
      console.log(result.trim());
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
          const count = studentsCount[field].length;
          result += `Number of students in ${field}: ${count}. List: ${studentsCount[field].join(', ')}\n`;
          console.log(`Number of students in ${field}: ${count}. List: ${studentsCount[field].join(', ')}`);
        }
      }

      return resolve(result);
    });
  });
}

module.exports = countStudents;
