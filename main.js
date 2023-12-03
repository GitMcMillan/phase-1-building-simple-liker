// Defining text characters for the empty and full hearts for you to use later.

const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// //When the "server" returns a failure status:
// Respond to the error using a .catch(() => {}) block after your .then(() => {}) block.
// Display the error modal by removing the .hidden class
// Display the server error message in the modal
// Use setTimeout to hide the modal after 3 seconds (add the .hidden class)

const heart = document.querySelector(".like-glyph")

heart.addEventListener("click", (e) => {
  mimicServerCall()
    .then(() => clickHandler(e.target))
    .catch(handleError)

})

function clickHandler() {
  if (heart.textContent === EMPTY_HEART) {
    heart.textContent = FULL_HEART
    heart.ClassList.add("activated-heart class")
  } else if (heart.textContent === FULL_HEART) {
    heart.textContent = EMPTY_HEART
    // heart.ClassList.remove("activated-heart class")
  }
}






function handleError(message) {
  modal.classList.remove('hidden');
  modal.textContent = message;
  setTimeout(() => modal.classList.add('hidden'), 3000)
  // modal.className = "";
  // modal.innerText = message;
  // setTimeout(() => modal.className = "hidden", 3000);
}


















// const likeButtons = document.querySelectorAll(`.like-glyph`)
// const modal = document.querySelector(`#modal`)


// likeButtons.forEach(mouseClick => mouseClick.addEventListener(`click`, onSuccess))

// // likeButton.addEventListener(`click`, (e) => mimicServerCall()
// //   .then((e) => { })
// //   .catch(() => { })
// // )

// function clickResponse(e) {
//   mimicServerCall()
//     .then(() => onSuccess(e.target))
//     .catch(() => { handleError })
// };

// function onSuccess(heartFill) {
//   if (heartFill.textContent === EMPTY_HEART) {
//     heartFill.textContent === FULL_HEART;
//     heartFill.classList.add(`activated-heart`)
//   } else {
//     heartFill.textContent === EMPTY_HEART;
//     heartFill.classList.remove(`activated-heart`)
//   }
// };

// function handleError(message) {
//   modal.classList.remove('hidden');
//   modal.textContent = message;
//   setTimeout(() => modal.classList.add('hidden'), 3000)

// };
// // // const modalText = function (tag) {
// // //   modal.textContent = message

// // //   setTimeout(() => {
// // //     modal.classList.add(".hidden")
// // //   }, "3000");
// // //   //document.getElementById("myElement").classList.add("myClass")
// // //   //let value = document.getElementById("myDIV").className
// // // }








//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
