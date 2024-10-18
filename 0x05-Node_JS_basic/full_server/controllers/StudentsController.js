const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(process.argv[2]);
      const fields = Object.keys(students).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

      let response = 'This is the list of our students\n';
      fields.forEach((field) => {
        response += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
      });
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const students = await readDatabase(process.argv[2]);
      res.status(200).send(`List: ${students[major].join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
