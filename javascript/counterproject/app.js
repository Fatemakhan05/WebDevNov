let buttenSelect1 = document.getElementById("btn-danger");
let buttenSelect2 = document.getElementById("btn-warning");
let buttenSelect3 = document.getElementById("btn-secondary");
var counterPlaceHolder = document.getElementById("counter-placeholder");
let counter = document.querySelector("#counter");
let btn = document.querySelectorAll("btn");
var number = 0;
//  let todos;

function f() {
  number++;
  if (number <= 0) {
  } else {
    if (number > 0)
     number--;
  }
      
number;



  
}
buttenSelect1.addEventListener("click", function () {
   localStorage.setItem('todos',number)
  number++;
  counterPlaceHolder.innerHTML = number;
//    localStorage.setItem('todos',JSON.stringify('todos'))
 });
  
buttenSelect2.addEventListener("click", function () {
    localStorage.setItem('todos',number)
  number--;
  counterPlaceHolder.innerHTML = number;
//   localStorage.setItem('todos',JSON.stringify('number'))

});
 
 buttenSelect3.addEventListener("click", function () {
      number = 0 ;
     counterPlaceHolder.innerHTML = number;
   });

 
   