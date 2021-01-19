const approve = require('approvejs');
const axios = require('axios').default;

const forms = document.querySelectorAll('.mail-form');

forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = form.querySelector('input[name="name"]'),
              emailInput = form.querySelector('input[name="email"]'),
              phoneInput = form.querySelector('input[name="phone"]'),
              submitBtn = form.querySelector('.btn');

        const nameErrorField = form.querySelector('.name-errors');  
        const emailErrorField = form.querySelector('.email-errors');  
        const phoneErrorField = form.querySelector('.phone-errors'); 
        
        const validateName = () => {
            const nameResult = approve.value(nameInput.value, {
                required: true,
            });
            nameErrorField.textContent = nameResult.errors[0];
            
            return nameResult.approved;
        };


        const validateEmail = () => {
            const emailResult = approve.value(emailInput.value, {
                email: {
                    message: 'Email неправильный'
                },
                required: true,
            });
            emailErrorField.textContent = emailResult.errors[0];
            return emailResult.approved;
        };

        const validatePhone = () => {
            const phoneResult = approve.value(phoneInput.value, {
                required: true,
            });
            phoneErrorField.textContent = phoneResult.errors[0];
            
            return phoneResult.approved;
        };

        nameInput.addEventListener('input', validateName);
        emailInput.addEventListener('input', validateEmail);
        phoneInput.addEventListener('input', validatePhone);
        const nameIsValid = validateName();
        const emailIsValid = validateEmail();
        const phoneIsValid = validatePhone();

        if (nameIsValid && emailIsValid && phoneIsValid) {
            
            const formData = new FormData(form);
            axios.get('http://localhost:3000/mail')
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
            console.log('Сообщение отправлено');
        }
        
    });
});