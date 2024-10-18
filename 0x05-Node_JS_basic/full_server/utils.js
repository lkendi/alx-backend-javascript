const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        return reject(err);
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');

      if (lines.length <= 1) {
        return resolve({});
      }

      const fields = lines[0].split(',').map(field => field.trim()); 
      const result = {};

      fields.forEach(field => {
        result[field] = [];
      });

      for (const line of lines.slice(1)) {
        const studentData = line.split(',').map(item => item.trim()); 
        const firstName = studentData[0];
        const field = studentData[1];

        if (result[field]) {
          result[field].push(firstName);
        } else {
          console.warn(`Field ${field} not recognized. Skipping student ${firstName}.`);
        }
      }

      resolve(result);
    });
  });
}

module.exports = readDatabase;
