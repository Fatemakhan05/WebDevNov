console.log('hello')

{/* <table class="table table-dark">
<thead>
  <tr>
    <th scope="col">Cover</th>
    <th scope="col">Movie Name</th>
    <th scope="col">Director</th>
    
  </tr>
</thead>
<tbody id = "films"> */}
 
const addBtn = document.querySelector('#add-movie')
const [title,director,url] = document.querySelectorAll('input')
const tableBody = document.querySelector('tbody')
let movies=[];
function TestRemove(getEl){
    //  e.preventDefault();
      console.log(getEl.parentElement.parentElement.parentElement)
      getEl.parentElement.parentElement.parentElement.remove()
  }
addBtn.addEventListener('click',function(e){
    e.preventDefault();
    console.log('title,director,url,addBtn')
    let obj ={
        title:title.value,
        director:director.value,
        url:url.value,
        
         
    }
    //  localStorage.setItem('todos',title.value)
    //   localStorage.setItem('divalue',director.value)
    //  localStorage.setItem('urlvalue',url.value)
    console.log(obj);
    movies.push(obj);
    localStorage.setItem( "movien" ,JSON.stringify(movies))
    console.log(obj);
    tableBody.innerHTML += `<tr>
    <th scope="row">1</th>
    <td>${obj.title}</td>
    <td>${obj.director}</td>
    <td>${obj.url}<i class="fa fa-eur" aria-hidden="true"></i></td>
    <td><a href="#"><i class="fa fa-trash lead" onClick="TestRemove(this)" aria-hidden="true"></i></a></td></td>
    </tr>`
     
});
document.querySelector('.btn-dark').addEventListener('click',e=>{
    e.preventDefault();
    tableBody.innerHTML=" "
})
