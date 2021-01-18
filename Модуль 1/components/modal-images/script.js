// all images inside the image modal content class
const lightboxImages = document.querySelectorAll('.image-modal-content img');

// dynamically selects all elements inside modal popup
const modalElement = element =>
  document.querySelector(`.image-modal-popup ${element}`);

const body = document.querySelector('body');

// closes modal on clicking anywhere and adds overflow back
document.addEventListener('click', () => {
  body.style.overflow = 'auto';
  modalPopup.style.display = 'none';
});

const modalPopup = document.querySelector('.image-modal-popup');

// loops over each modal content img and adds click event functionality
lightboxImages.forEach(img => {
  const data = img.dataset;
  img.addEventListener('click', e => {
    body.style.overflow = 'hidden';
    e.stopPropagation();
    modalPopup.style.display = 'block';
    modalElement('h1').innerHTML = data.title;
    modalElement('p').innerHTML = data.description;
    modalElement('a').href = data.url;
    modalElement('.secondary-link').href = data.repo;
    modalElement('img').src = img.src;
  });
});
