document.addEventListener('DOMContentLoaded', function() {
    const togglePasswordIcons = document.querySelectorAll('.toggle-password');
    
    togglePasswordIcons.forEach(icon => {
        const passwordInput = icon.closest('.input-group').querySelector('input');
        
        icon.addEventListener('click', (e) => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            icon.classList.toggle('bi-eye');
            icon.classList.toggle('bi-eye-slash');
        });
    });

    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = form.querySelector('input[type="text"][placeholder="E-mail"]');
            const passwordInputs = form.querySelectorAll('input[type="password"], input[type="text"][placeholder="Senha"]');
            const fullNameInput = form.querySelector('input[placeholder="Nome completo"]');
            
            let isValid = true;
        
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                emailInput.classList.add('is-invalid');
                isValid = false;
            } else {
                emailInput.classList.remove('is-invalid');
            }
            
            passwordInputs.forEach(passwordInput => {
                if (passwordInput.value.length < 8) {
                    passwordInput.classList.add('is-invalid');
                    isValid = false;
                } else {
                    passwordInput.classList.remove('is-invalid');
                }
            });
            
            if (fullNameInput && fullNameInput.value.trim() === '') {
                fullNameInput.classList.add('is-invalid');
                isValid = false;
            } else if (fullNameInput) {
                fullNameInput.classList.remove('is-invalid');
            }
            
            if (isValid) {
                const successToast = `
                <div class="toast position-fixed top-0 end-0 m-3" role="alert" data-bs-autohide="true">
                    <div class="toast-header">
                        <strong class="me-auto">Sucesso!</strong>
                    </div>
                    <div class="toast-body">
                        😁 Operação realizada com sucesso!
                    </div>
                </div>
                `;
                
                document.body.insertAdjacentHTML('beforeend', successToast);
                const toastEl = document.querySelector('.toast');
                const toast = new bootstrap.Toast(toastEl);
                toast.show();
            }
        });
    });
});