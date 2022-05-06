// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.getElementById('modal')
const articleHearts = document.querySelectorAll('.like-glyph')
modal.className = 'hidden'
// articleHearts.addEventListener('click',(e)=>console.log(e))
function likeCallback(e){
const heart = e.target;
mimicServerCall()
.then(function(message){
  alert("You notified the server!");
  alert(message)
  if(heart.innerText === FULL_HEART) {
    heart.innerText = EMPTY_HEART
    heart.className = ''
  }
  else {
  heart.innerText = FULL_HEART
  heart.className = 'activated-heart'
  }

})
.catch(function(err){
  modal.classList.remove('hidden')
  document.body.querySelector('#modal-message').innerHTML = "Something went wrong!"
  setTimeout(()=>{
    modal.className = 'hidden'},3000)
})
}

for (const glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < 0.2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
