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
// var number1=document.getElementById('num1')
// var number2=document.getElementById('num2')
// var getBtn = document.getElementById('btn')
// var result =document.getElementById('result')

// function DoCalc(){
//     console.log('hello test test')
//     var sumResult = Number( number1.value) + Number(number2.value)
//     console.log(sumResult)
//     result.innerHTML=`Result is ${sumResult}`

// }
//local variables and global variables
//local variable
// 
//  const Auto= {
//      a :function(){
//          console.log('hello')
//      },
//      b:function(){
//          console.log('hello 1')
//      },
//      getElementById :function(){
//          console.log('getelementmethod')
//      }
//  }
// const obj ={
//     a=1,
//     b:'string data',
//     c=true,
//     d:[1,2,3],
//     e:{id:1,title:'this is title'},
// }
// console.log(obj.e)
// obj.f()
const result =document.getElementById('result')
const AutoController={
    // turnLeft: function(){result.innerHTML.log='turning left...'},
    // turnRight: function(){console.log('turning right...')},
    // backword:function(){console.log('backword')}
    turnLeft: function(){result.innerHTML='Turning Left...'},
     turnRight: function(){result.innerHTML='Turning Right...'},
     backword:function(){result.innerHTML='Backword'},
     forword:function(){result.innerHTML='Forword'},
    
}
AutoController.turnRight()
AutoController.turnLeft()
AutoController.backword()
AutoController.forword()


