// 
//
// var number1 =10
// var number2=20 
// function sumofnumbers(){
//     return number1 +number2
 

// console.log(sumofnumbers())
// function sumofnumbers(p1,p2){
//     return p1+p2
// }
// // 
// console.log(sumofnumbers(50,40))
// function sayMyName(username){
//     return "Hello your name is " +username

// }
// console.log (sayMyName('root'))
// function sayMyName(username){
//     return `Hello your name  is ${username}`
// }
// console.log(sayMyName('root'))
// f

// function Layer1(number1){
//     console.log("this is Layer1 Function",number1)
//     function Layer2(){
//         console.log(number1,`Layer2 function`)
//     }
//     Layer2()
// }
// Layer1(5)
// var myName =`root`
// function  Kepeer1(param){
//     return `your name is ${param}`
//     function  Kepeer2(param){
//         return `your name is ${param}`
    

// }
// function printService(param){
//     console.log(param)
// }

// printService(Kepeer2(Kepeer1(myName)))
// }
// var myStudents=[]
// function addStudent(name){
//     myStudents.push(name)
// }
// addStudent('Ayan')
// addStudent('Ender')
// addStudent('salman')
// console.log(myStudents)
// var myStudents = []
// function addStudent(student){
//     return myStudents.push(student)
// }
// const Student_1={
//     name:`romeo`,
//     age:20
// }
// const Student_2={
//     name:`julait`,
//     age:19
// }
//     const Student_3={
//         name:`maira`,
//         age:16
//     }

// addStudent(Student_1)
// addStudent(Student_2)
// addStudent(Student_3)
// console.log(myStudent)
// function params(  tax,grosssalary){
 
// }
// param_1={basic:3500
// }
// Param_2={ grosssalary:48000}
// param_3={tax:50/100}

// let getNettoSalary=(2000*25)/100//exact tax ammount
// // console.log(2000-getNettoSalary);
function getNettoSalary(bruto,tax){
    let taxAmount=(bruto *tax)/100//tax amount 500
    // console.log(taxAmount)
        return bruto - taxAmount//2000-500
}
console.log(getNettoSalary(2000,25))
console.log(getNettoSalary(3000,25))


    
 



