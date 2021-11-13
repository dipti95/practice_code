console.log('Here is your assesment');
//Given the following array of students.  
const students = [
    {
        id: 1,
        first_name: "John",
        last_name: "Smith",
        age: 21,
    }, {
        id: 2,
        first_name: "Howard",
        last_name: "Johnson",
        age: 28,
    }, {
        id: 3,
        first_name: "Tim",
        last_name: "Matthew",
        age: 17,
    }, {
        id: 4,
        first_name: "Thomas",
        last_name: "Jackson",
        age: 23,
    },
];
//console.log(students[0])
​
//********** Challenge 1 **********************
////////Create an array of all the id values.///////
//example: [1, 2, 3, 4]
function getId(x){
   let arrId = [];
   for(let ele of x){
       arrId.push(ele.id);
   }
   
   return arrId
}

console.log(getId(students))
​
// //********** Challenge 2 **********************
// ////////create an array of students 21 and over./////
// //example: [{id: 1,first_name: "John",last_name: "Smith",age: 21}, etc.....]
​function getStudent(x){
    let arr = []
    for(let ele of x){
        if(ele.age >= 21) arr.push(ele);
    }
    return arr
}
console.log(getStudent(students))

​
​
​
// // //********** Challenge 3 **********************
// // ////////get the first object from the array of students who is older than 15 but younger than 25/////
function student(x){
    let arr = 0;
    for(let ele of x){
        if(ele.age > 15 && ele.age <25) arr.push(ele)
    }
    return arr
}
console.log(student(students))
​
​
​
​
//********** Challenge 4 **********************
//un-comment the following lines (the object and the console.log).  This will cause an errors. Fix the errors so it will work correctly.
const myObj = {
    name: 'Chris',
    age: 16,
    location: "Florida",
    is_developer: true,
    grades: {
    	math: "A",
    	english: "A",
    	science: "B",
    }
​
};
console.log(myObj.grades.math);
console.log(myObj.grades.math);
​
//********** Challenge 5 **********************
//// If this was a script, Which one will work, how do you fix the errors.  Explain the behavior ////
//// uncommennt the function and function calls below ////
​
​

​
function funcOne () {
	console.log('funcOne called.');
}
var funcTwo = function () {
    console.log('funcTwo called.');
}
const funcThree  = function () {
    console.log('funcThree called.');
}
​funcOne();
funcTwo();
funcThree();
​
​