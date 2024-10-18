const fs = require('fs');

/** ***********  ✨ Codeium Command ⭐  ************ */
/**
 * @function countStudents
 * @description Given a path to a file, logs the total number of students and the number
 * of students in each field.
 * @param {string} path - The path to the file.
 * @throws {Error} If the file cannot be read.
 */
/** ****  995ca27a-8333-4c30-aede-fd2439431656  ****** */function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length > 1) {
      console.log(`Number of students: ${lines.length - 1}`);

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
          console.log(`Number of students in ${field}: ${studentsCount[field].length}. List: ${studentsCount[field].join(', ')}`);
        }
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
