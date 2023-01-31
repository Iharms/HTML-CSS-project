const btns = document.querySelectorAll('.galery-slide');
const modalOverlay = document.querySelector('.galery-modal-overlay')
const modals = document.querySelectorAll('.galery-modals');

btns.forEach((el)=>{
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('galery-modal-overlay--visible');
    })

    document.querySelector(`[data-target="${path}"]`).classList.add('galery-modal--visible');
    modalOverlay.classList.add('galery-modal-overlay--visible');
    document.body.style.overflow = "hidden";
  });
});


modalOverlay.addEventListener('click', (e) => {

    modals.forEach((el) => {
      el.classList.remove('galery-modal--visible');
    });
    modalOverlay.classList.remove('galery-modal-overlay--visible');
    document.body.style.overflow = "auto";
});
