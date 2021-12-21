/*

    <li class="list-group-item d-flex justify-content-between">
                        My todo titleDELETE ME
                        <a href="#" class="delete-item"> 
                            <i class="fa fa-remove"></i> 
                        </a>
                    </li>


*/

const todoInput = document.querySelector('#todo')
const addTodoBtn = document.querySelector('.addBtn')
const addTodoBodyForAlert = document.querySelector('.addTodoBody')
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

addTodoBtn.addEventListener('click', e => {
    e.preventDefault();

    let obj = {
        todo_title: todoInput.value,
        todo_date: todoDate.value
    }
    console.log(obj)

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

    }else{
        responseMessage('danger','Error!')
    }
    

})