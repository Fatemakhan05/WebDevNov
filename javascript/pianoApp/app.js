<<<<<<< HEAD
// let allbuttons = document.querySelectorAll('.key')

// allbuttons.forEach(el=>{
//     console.log(el)
//     console.log(el.getAttribute('data-key'))
//     // set action
//     el.addEventListener('click',function(e){
//         console.log('click')
//         // play audio
//     })
// })


let notes = document.querySelectorAll('audio')
let buttons = document.querySelectorAll('.key')

function PlayAudio(keyNumber){
    notes.forEach(audio=>{
        let getKeyOfAudio = audio.getAttribute('data-key')
       // console.log(getKeyOfAudio)
     //   audio.play()
        if(getKeyOfAudio == keyNumber){
            audio.play();
        }
    })
}

buttons.forEach(el=>{
    el.addEventListener('click',function(e){
        e.preventDefault()
        let getKey = el.getAttribute('data-key')
        PlayAudio(getKey)
    })
    el.addEventListener('')
})
=======
 let allbuttons = document.querySelectorAll(".key");

 allbuttons.forEach((el) => {
   console.log(el);
  console.log(el.getAttribute("data-key"));
  el.addEventListener("click", function (e) {
       e.preventDefault()
   let notes = document.querySelectorAll("audio");
// let buttons = document.querySelectorAll("audio");
     notes.forEach((audio) => {
               if (audio.dataset.key === el.dataset.key) {
         audio.play();
      }
    });
  });
});
// function PlayAudio(keyNumber){
//     notes.forEach(audio=>{
//         let getKeyOfAudio = audio.getattribute('data-key')
//         if(getKeyOfAudio==keyNumber){
//             audio.play();

//         }
//     })
// }
//   buttons.foreach((el)=> {
//     el.addEventListener('click',function(e){
//     e.preventDefault()
//     let getKey =el.getattribute('data-key')
//     PlayAudio(getKey)
//     });
// })


>>>>>>> 6f9110f3dc12cb18c77baee993d81e51aa3f6786
