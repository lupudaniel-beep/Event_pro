document.addEventListener('DOMContentLoaded', function() {
    const quoteForm = document.getElementById('quoteForm');
    
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            const eventType = document.getElementById('eventType');
            const eventDate = document.getElementById('eventDate');
            const guests = document.getElementById('guests');
            const terms = document.getElementById('terms');
            
            // Name validation
            if (!name.value.trim()) {
                showError(name, 'Numele este obligatoriu');
                isValid = false;
            } else if (name.value.trim().length < 2) {
                showError(name, 'Numele trebuie să aibă cel puțin 2 caractere');
                isValid = false;
            } else {
                showSuccess(name);
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
            if (!email.value.trim()) {
                showError(email, 'Email-ul este obligatoriu');
                isValid = false;
            } else if (!emailRegex.test(email.value)) {
                showError(email, 'Introduceți o adresă de email validă');
                isValid = false;
            } else {
                showSuccess(email);
            }
            
            // Phone validation
            const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
            if (!phone.value.trim()) {
                showError(phone, 'Numărul de telefon este obligatoriu');
                isValid = false;
            } else if (!phoneRegex.test(phone.value)) {
                showError(phone, 'Introduceți un număr de telefon valid');
                isValid = false;
            } else {
                showSuccess(phone);
            }
            
            // Event Type validation
            if (!eventType.value) {
                showError(eventType, 'Selectați tipul evenimentului');
                isValid = false;
            } else {
                showSuccess(eventType);
            }
            
            // Event Date validation
            if (!eventDate.value) {
                showError(eventDate, 'Selectați data evenimentului');
                isValid = false;
            } else {
                const selectedDate = new Date(eventDate.value);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                
                if (selectedDate < today) {
                    showError(eventDate, 'Data evenimentului nu poate fi în trecut');
                    isValid = false;
                } else {
                    showSuccess(eventDate);
                }
            }
            
            // Guests validation
            if (!guests.value) {
                showError(guests, 'Numărul de invitați este obligatoriu');
                isValid = false;
            } else if (guests.value < 1) {
                showError(guests, 'Numărul de invitați trebuie să fie mai mare decât 0');
                isValid = false;
            } else {
                showSuccess(guests);
            }
            
            // Terms validation
            if (!terms.checked) {
                showError(terms, 'Trebuie să acceptați termenii și condițiile');
                isValid = false;
            } else {
                showSuccess(terms);
            }
            
            if (isValid) {
                const successDiv = document.getElementById('formSuccess');
                successDiv.classList.remove('d-none');
                quoteForm.reset();
                
                setTimeout(() => {
                    successDiv.classList.add('d-none');
                }, 5000);
                
                console.log('Formular trimis cu succes!');
            }
        });
    }
    
    function showError(input, message) {
        const formGroup = input.closest('.col-md-6, .col-12');
        const errorDiv = formGroup.querySelector('.invalid-feedback') || createErrorDiv(formGroup);
        
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        errorDiv.textContent = message;
    }
    
    function showSuccess(input) {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
    }
    
    function createErrorDiv(formGroup) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'invalid-feedback';
        formGroup.appendChild(errorDiv);
        return errorDiv;
    }
    
    const inputs = document.querySelectorAll('#quoteForm input, #quoteForm select, #quoteForm textarea');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.classList.contains('is-invalid')) {
                this.classList.remove('is-invalid');
            }
        });
    });
});