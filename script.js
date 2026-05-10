document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const resultDiv = document.getElementById('formResult');

    if (!form) return;

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        resultDiv.innerHTML = '';
        resultDiv.className = 'form-message';

        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const messageValue = messageInput.value.trim();

        let hasError = false;

        if (nameValue === '') {
            showError('Пожалуйста, введите ваше имя.');
            hasError = true;
        }

        if (emailValue === '') {
            showError('Пожалуйста, введите email.');
            hasError = true;
        } else if (!isValidEmail(emailValue)) {
            showError('Некорректный формат email (пример: name@example.com).');
            hasError = true;
        }

        if (messageValue === '') {
            showError('Пожалуйста, введите текст сообщения.');
            hasError = true;
        }

        if (!hasError) {
            showSuccess(nameValue, emailValue, messageValue);
            form.reset();
        }
    });

    function showError(text) {
        const errorP = document.createElement('p');
        errorP.textContent = text;
        errorP.style.color = '#e94560';
        errorP.style.fontWeight = 'bold';
        errorP.style.marginBottom = '10px';
        resultDiv.appendChild(errorP);
        resultDiv.style.border = '1px solid #e94560';
        resultDiv.style.padding = '15px';
        resultDiv.style.borderRadius = '5px';
        resultDiv.style.marginBottom = '20px';
        resultDiv.style.backgroundColor = 'rgba(233, 69, 96, 0.1)';
    }

    function showSuccess(name, email, message) {
        const successP = document.createElement('p');
        successP.textContent = `Спасибо, ${name}! Ваша заявка принята!`;
        successP.style.color = '#4cd137';
        successP.style.fontWeight = 'bold';
        successP.style.marginBottom = '10px';
        resultDiv.appendChild(successP);
        
        const detailsP = document.createElement('p');
        detailsP.textContent = `Мы отправим ответ на ${email}`;
        detailsP.style.color = '#a0a0a0';
        detailsP.style.fontSize = '0.9em';
        resultDiv.appendChild(detailsP);

        resultDiv.style.border = '1px solid #4cd137';
        resultDiv.style.padding = '15px';
        resultDiv.style.borderRadius = '5px';
        resultDiv.style.marginBottom = '20px';
        resultDiv.style.backgroundColor = 'rgba(76, 209, 55, 0.1)';
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});