//  /*

//     <li class="list-group-item d-flex justify-content-between">
//                         My todo titleDELETE ME
//                         <a href="#" class="delete-item"> 
//                             <i class="fa fa-remove"></i> 
//                         </a>
//                     </li>




 const todoInput = document.querySelector('#todo')
 const addTodoBtn = document.querySelector('.addBtn')
 // const addTodoBtn = document.querySelector(".addBtn")
 const addTodoBodyForAlert = document.querySelector(".addToDoBody")
 const todoDate = document.querySelector('.todoDate')
 const ListGroupOfTodos = document.querySelector('.todolist')

 let g = t => document.createElement(t)

 function responseMessage(alertType, message) {
    let divAlert = g('div')
     divAlert.className = `alert alert-${alertType}`
    divAlert.setAttribute('role', 'alert')
    divAlert.innerHTML = `${message}`
    addTodoBodyForAlert.appendChild(divAlert)
    setTimeout(function(){
        divAlert.remove();
    },2000)
}
filter.addEventListener('keyup',function(e){
    //  console.log(filter.value)
      //
      const listofTodos = document.querySelectorAll('.list-group-item')
      listofTodos.forEach(function(todo){
         // console.log(todo)
         let filterValue = filter.value
          let todoTitle = todo.textContent.trim()
          todoTitle = todoTitle.substring(0,todoTitle.length-2)
          console.log(todoTitle)
          console.log(filterValue.indexOf(todoTitle))
          if(filterValue!=""){

          
          if(filterValue.indexOf(todoTitle) === -1){
              todo.setAttribute('style','display:none !important')
           }else{
               todo.setAttribute('style','display:flex!important;')
           }
               todo.setAttribute('style','display:flex!importantant;')
          
        }
      })
      console.log(listofTodos)
  })
  

 ListGroupOfTodos.addEventListener('click',(event)=>{
     event.preventDefault();
    if(event.target.className ==='fa fa-remove'){
         let findParent = event.target.parentElement.parentElement
        console.log(findParent)
         findParent.remove();
     }
    //run here
})
    


let todo=[]
addTodoBtn.addEventListener('click', e => {
    e.preventDefault();

    let obj = {
         todo_title: todoInput.value,
     todo_date: todoDate.value
      }
     console.log(obj)
    console.log(addTodoBodyForAlert)
    if(todoInput.value !=""){
        responseMessage('success','Todo added')
       // success
         ListGroupOfTodos.innerHTML+=`
       <li class="list-group-item d-flex justify-content-between">
       ${todoInput.value} - ${todoDate.value}
       <a href="#" class="delete-item"> 
         <i class="fa fa-remove"></i> 
        </a>
             </li>
         `
todo.push(obj)
console.log(todo)
localStorage.setItem('todos',JSON.stringify(todo))


     }else{
         responseMessage('danger','Error!')
     }
})
window.addEventListener('DOMContentLoaded', (event) => {
    let todos = JSON.parse(localStorage.getItem('todos'))
    todo.forEach(todo=> {
        ListGroupOfTodos.innerHTML+=`
        <li class="list-group-item d-flex justify-content-between">
        ${todo.todo_title} - ${todo.todo_date}
        <a href="#" class="delete-item"> 
            <i class="fa fa-remove"></i> 
        </a>
    </li>
        `
    })
 });
 
     
 
 
    

 
 