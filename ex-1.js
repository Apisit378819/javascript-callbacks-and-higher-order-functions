// Exercise #1: For Each Function

function forEach(array, operation) {
  operation(array);
  // Start coding here
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]

function Totalemployee(employeeSalaries) {
  for (let index = 0; index < employeeSalaries.length; index++) {
    newEmployeeSalaries.push(employeeSalaries[index] + 5000);
  }
}

forEach(employeeSalaries, Totalemployee);
console.log(newEmployeeSalaries);

//  [25005, 45000, 37000, 19500, 349000]
