// console.log('nested array')
// let nestedarray =[1,2,3,4,5,[6,7] ,[8,9,10]]
// console.log(nestedarray[6][1])
// let nestedcomplex=[1,2,3,[4,5,6,[7,8,9]]]
// console.log (nestedcomplex[3][3][1] )

var result;
var date =new Date()
 result = new Date()



var result;
var date = new Date();
result = new Date()

// get year!
result = date.getFullYear()

// get current month
result = date.getMonth();


// toLocaleString
let options = {weekday:'long',year:'numeric',month:'long',day:'numeric'}
result = date.toLocaleString('nl-BE',options)

// seconds, minutes, hours

result = date.getSeconds();
result = date.getMinutes(); // 10:15
result = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

// setInterval(function(){
//     console.log('hello world!')
// },1000)


setInterval(getRealTime,1000)

function getRealTime(){
    var dateObj = new Date();
    let getTime = `${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`
    document.getElementById('time').innerHTML = getTime
    console.log(getTime)
}

getRealTime()
