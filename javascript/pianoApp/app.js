 let allbuttons = document.querySelectorAll('.key');

// allbuttons.forEach(el=>{
//     console.log(el)
//     console.log(el.getAttribute('data-key'))
//     // set action
//     el.addEventListener('click',function(e){
//         console.log('click')
//         // play audio
//     })
// })

//Atillas code
// let notes = document.querySelectorAll('audio')
// let buttons = document.querySelectorAll('.key')

// function PlayAudio(keyNumber){
//     notes.forEach(audio=>{
//         let getKeyOfAudio = audio.getAttribute('data-key')
//        // console.log(getKeyOfAudio)
//      //   audio.play()
//         if(getKeyOfAudio == keyNumber){
//             audio.play();
//         }
//     })
// }

// buttons.forEach(el=>{
//     el.addEventListener('click',function(e){
//         e.preventDefault()
//         let getKey = el.getAttribute('data-key')
//         PlayAudio(getKey)
//     })
//     el.addEventListener('')
// })
// mahmoods code
// let allbuttons = document.querySelectorAll(".key");

  allbuttons.forEach((el) => {
 console.log(el);
 console.log(el.getAttribute("data-key"));
 el.addEventListener(" ", function (e) {
//        e.preventDefault()
//    let notes = document.querySelectorAll("audio");
// // let buttons = document.querySelectorAll("audio");
//      notes.forEach((audio) => {
//                if (audio.dataset.key === el.dataset.key) {
//          audio.play();
//       }
//     });
//   });
// });
 

document.addEventListener('keydown',e=>{
  
  e.preventDefault()
  console.log(e.key)
  let arrayKey=[65]
});
 if( e.key == 'A')
 {
   PlayAudio(arrayKey[0])
 }
 })

