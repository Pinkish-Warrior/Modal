'use stict';

// creating variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');
console.log(btnsShowModal);

//loop through modal array
for (let i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener('click', function () {
    // console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
// creating a function and store it to "closeModal" variable, as to make code DRY
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

// creating a event listener for escape keydown
document.addEventListener('keydown', function (e) {
  // the bellow is used as to identify the key pressed
  // console.log(e.key);
  if (e.key === 'Escape') {
    if (!modal.classList.contains('.hidden')) {
      closeModal();
    }
  }
});
