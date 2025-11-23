function evaluateEmployees(employees) {
  let filtered = employees.filter(emp => emp.tasksCompleted > 5);

  let performanceMapped = filtered.map(emp => {
    let level = "";

    if (emp.rating > 4.5) {
      level = "Excellent";
    } else if (emp.rating > 3 && emp.rating <= 4.5) {
      level = "Good";
    } else {
      level = "Needs Improvement";
    }

    return {
      name: emp.name,
      performance: level
    };
  });
  const priority = {
    "Excellent": 1,
    "Good": 2,
    "Needs Improvement": 3
  };

  performanceMapped.sort((a, b) => {
    return priority[a.performance] - priority[b.performance];
  });

  return performanceMapped;
}
const employees = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },
  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
  { name: "David", tasksCompleted: 10, rating: 4.9 }
];

console.log(evaluateEmployees(employees));
