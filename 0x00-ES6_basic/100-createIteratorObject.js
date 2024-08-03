function createIteratorObject(report) {
  const departments = Object.keys(report);
  let departmentIdx = 0;
  let employeeIdx = 0;

  return {
    next() {
      if (departmentIdx === departments.length) {
        return { done: true };
      }

      const department = departments[departmentIdx];
      const employees = report[department];

      if (employeeIdx === employees.length) {
        departmentIdx += 1;
        employeeIdx = 0;
        return this.next();
      }

      const employee = employees[employeeIdx];
      employeeIdx += 1;

      return {
        value: `${department}: ${employee}`,
        done: false,
      };
    },
  };
}
