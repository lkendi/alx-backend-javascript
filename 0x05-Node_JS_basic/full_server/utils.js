import fs from 'fs/promises';

export const readDatabase = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const students = JSON.parse(data);
    const result = {};

    for (const student of students) {
      const field = student.field;
      if (!result[field]) {
        result[field] = [];
      }
      result[field].push(student.firstname);
    }

    return result;
  } catch (error) {
    return Promise.reject(error);
  }
};
