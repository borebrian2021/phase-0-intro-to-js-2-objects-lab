// Write your solution in this file!
let employee={name:"brian",streetAddress:"Nairobi"};
function updateEmployeeWithKeyAndValue(employee, key, value){
    var newEmployee = Object.assign({}, employee, {[key]: value});
    return newEmployee;
}
function deleteFromEmployeeByKey(employee, key){
    var newEmployee = Object.assign({}, employee);
    delete newEmployee[key];
    return newEmployee;

}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
  return employee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
  return employee;
}