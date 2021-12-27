let people = [
    {id:1,title:'test'},{id:2,title:'test1'},{id:3,title:'python'}
]


const updateSomething = (oldTitle,newTitle,old_id,new_id)=>{
    for(let i in people){
        if(people[i].title===oldTitle && people[i].id === old_id){
            people[i].title=newTitle
            people[i].id = new_id
            break;
        }
    }
}

updateSomething('test','hellloooooo')
updateSomething('test1','intecbrussel')
updateSomething('python','javascript')

console.log(people)
