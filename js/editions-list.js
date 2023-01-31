(() => {
  const checkBtn = document.querySelector('.js-editions-heading');

  checkBtn.addEventListener('click', function () {
      this.classList.toggle('is-active');
  });
})();

