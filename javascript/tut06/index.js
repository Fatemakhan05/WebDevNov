 
const users=[{
    id:1,
    fname:"Atila",
    lname:"Admin",
    role:'Admin',
    email: "Sincere@april.biz",
    password: 1234
},
{
    id:2,
fname:"john",

lname:"abc",
role:'Admin',
password: 4567
},
{
    id:3,
    fname:"Fatema",
    lname:"user",
    role:'user',
    password: 8910
}

]
var username = document.getElementById('user')
var password =  document.getElementById('lname')


//  if( getuser.password === 1234){
//      console.log('admin')
//  }
//  else{
//      console.log('failed')
//  }

 function userCheck()
  
    {
        const getuser = users.filter(user=>user.fname = 'Atila')
        if( getuser.password === 1234)
        {
           alert( 'you are admin')
                 console.log('admin')
             }
             else{
                 alert('you are user')
                  console.log('failed') 
             } 
              
            }
             
     
//  users.forEach(function(user){
//       if(user.fname == username.value   && user.password == password.value) 
//      {
//         alert('welcome to Admin page')   
//       }
    
//      else
//      {
//         alert('Wecome to user page')
//      }
//  })
// }
      
     
    
    




