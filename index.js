function showYoungestStudent(students) { 
}

module.exports = showYoungestStudent;

var students = [
    {name : "noor" ,age: 23} ,
    {name : "aya" , age:19}, 
    {name : "ahmed" , age:33},
];

var max = Math.max( [    {name : "noor" ,age: 23} ,
{name : "ahmed" , age:33},])
var maxValues  = students.filter (i => i == max)

var min = math.min ([{name : "aya" , age:19},])
var minValues = students.filter (i => i == min)

console.log(maxValues)
console.log(minValues)