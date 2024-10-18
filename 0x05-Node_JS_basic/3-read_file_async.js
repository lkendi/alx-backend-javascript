const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        
        reject(new Error('Cannot load the database'));
      } else {
        
        const lines = data.split('\n').filter(line => line.trim() !== '');

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
            if (studentsCount.hasOwnProperty(field)) {
              console.log(`Number of students in ${field}: ${studentsCount[field].length}. List: ${studentsCount[field].join(', ')}`);
            }
          }
          resolve();
        }
      }
    });
  });
}

module.exports = countStudents;
