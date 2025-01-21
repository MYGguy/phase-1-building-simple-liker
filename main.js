// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeButtons = document.querySelectorAll('.like-glyph');
const modal = document.getElementById('modal');

likeButtons.forEach(button => {
  button.addEventListener('click', handleLike);
})


function handleLike(e) {
  mimicServerCall()
    .then(() => {
      e.target.textContent = FULL_HEART;
      e.target.parentElement.classList.add('activated-heart');
    })
    .catch((error) => {
      modal.classList.remove('hidden');
      console.log(error);
      setTimeout(() => {
        modal.classList.add('hidden')
      }, 3000);
    })
}

// console.log(document.querySelector('like-glyph').innerHTML);

// handleLike();
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
