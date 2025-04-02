const lessonFormInputWrappers = document.querySelectorAll('.lesson-form__input-wrapper');

lessonFormInputWrappers.forEach((inputWrapper) => {
  const lessonInput = inputWrapper.querySelector('.lesson-form__input');
  const errorMessage = document.createElement('div');

  lessonInput.addEventListener('invalid', () => {
    lessonInput.classList.add('lesson-form__input--error');
    errorMessage.classList.add('lesson-form__error-message');
    errorMessage.textContent = lessonInput.validationMessage;
    inputWrapper.appendChild(errorMessage);
  });

  lessonInput.addEventListener('input', () => {
    if (lessonInput.classList.contains('lesson-form__input--error')) {
      lessonInput.classList.remove('lesson-form__input--error');
    }
    if (inputWrapper.contains(errorMessage)) {
      inputWrapper.removeChild(errorMessage);
    }
  });
});
