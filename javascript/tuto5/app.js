// var message = document .getElementById('message')
// var getUserName=document.getElementById('username')
// // console .log(message)
// console.log(getUserName)
// // message.innerHTML="text has been changed"
// function SayMyName(){
//     console.log(getUserName.value)
// //     message.innerHTML= "Text has been changed "
// message.innerHTML=`your username is ${getUserName.value }`
// }
// SayMyName()
var number1=document.getElementById('num1')
var number2=document.getElementById('num2')
var getBtn = document.getElementById('btn')
var result =document.getElementById('result')

function DoCalc(){
    console.log('hello test test')
    var sumResult = Number( number1.value) + Number(number2.value)
    console.log(sumResult)
    result.innerHTML=`Result is ${sumResult}`

}