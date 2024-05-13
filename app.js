function showYoungestStd(students) {
    let youngestStd =students[0];
    for(let i=1; i<students.length; i++){
        if(students[i].age<youngestStd.age){

        }
    }
    console.log(youngestStd.name);
}

var students=[
    {name: 'ali', age:15},
    {name: 'noor',age:25},
    {name:'olaa', age:18},
];
showYoungestStd(students);