const validation = new JustValidate('.form', {
  errorFieldCssClass: 'is-invalid',
  errorFieldStyle: {
    border: '1px solid rgba(209, 22, 22, 1)',
  },
  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {
    color: 'rgba(209, 22, 22, 1)',
    textDecoration: 'underlined',
  }
});
validation
  .addField('.contacts-input-name', [
    {
      rule: 'required',
      errorMessage: 'Поле обязательно для ввода'
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Минимальное количество символов 2'
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Максимальное количество символов 30'
    },
    {
      rule: 'customRegexp',
      value: /[A-Za-zА-Яа-яЁё\s]/,
      errorMessage: 'Недопустимый формат'
    },
  ])
  .addField('.contacts-input-tel ', [
    {
      rule: 'required',
      errorMessage: 'Поле обязательно для ввода'
    }],
    ).onSuccess((event) => {
      console.log('Validation passes and form submitted', event);

      let formData = new FormData(event.target);

      console.log(...formData);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Отправлено');
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      event.target.reset();

    });
