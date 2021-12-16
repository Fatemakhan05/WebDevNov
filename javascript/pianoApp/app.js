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


