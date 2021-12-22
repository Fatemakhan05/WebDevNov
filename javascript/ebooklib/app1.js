const [book_name,book_aurthor,book_date,price] = document.querySelectorAll('input')
const book_category =document.readySelector('#book_category')
const addBtn =document.querySelector('.addbookbtn')
let books =[]
addBtn.removeEventListener('click',function(e){
console.log(book_name,book_aurthor,book_date,price,book_category)
console.log(book_category.option[book_category.selectedindex])
let obj ={
    book_name:book_name.value,
    book_aurthor:book_aurthor.value,
    book_date:book_date.value,
    bookcategory:book_category.value,
price:price.value
}
console.log(obj);
books.push(obj);
console.log(books)
tableBody.innerHTML += `<tr>`

