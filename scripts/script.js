document.addEventListener('DOMContentLoaded', function() {
    const togglePasswordIcons = document.querySelectorAll('.toggle-password');
<<<<<<< HEAD

    togglePasswordIcons.forEach(icon => {
        const passwordInput = icon.closest('.input-group').querySelector('input');

=======
    
    togglePasswordIcons.forEach(icon => {
        const passwordInput = icon.closest('.input-group').querySelector('input');
        
>>>>>>> 55398258e963cc450bfb7dba500c7cd9c53f7141
        icon.addEventListener('click', (e) => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            icon.classList.toggle('bi-eye');
            icon.classList.toggle('bi-eye-slash');
        });
    });

    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
<<<<<<< HEAD
        const inputs = form.querySelectorAll('input:not([type="checkbox"])');
        inputs.forEach(input => {
            const parentElement = input.closest('.form-control')?.parentElement || 
                                  input.closest('.input-group') || 
                                  input.parentElement;
            
            parentElement.style.position = 'relative';
        });

        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const emailInput = form.querySelector('input[type="email"], input[type="text"][placeholder="E-mail"]');
            const passwordInputs = form.querySelectorAll('input[type="password"]');
            const fullNameInput = form.querySelector('input[placeholder="Nome completo"]');
            const confirmPasswordInput = form.querySelector('input[placeholder="Confirme sua senha"]');

            let isValid = true;

=======
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = form.querySelector('input[type="text"][placeholder="E-mail"]');
            const passwordInputs = form.querySelectorAll('input[type="password"], input[type="text"][placeholder="Senha"]');
            const fullNameInput = form.querySelector('input[placeholder="Nome completo"]');
            
            let isValid = true;
        
>>>>>>> 55398258e963cc450bfb7dba500c7cd9c53f7141
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                emailInput.classList.add('is-invalid');
                isValid = false;
            } else {
                emailInput.classList.remove('is-invalid');
            }
<<<<<<< HEAD

            let passwordValue = '';
            passwordInputs.forEach((passwordInput, index) => {
=======
            
            passwordInputs.forEach(passwordInput => {
>>>>>>> 55398258e963cc450bfb7dba500c7cd9c53f7141
                if (passwordInput.value.length < 8) {
                    passwordInput.classList.add('is-invalid');
                    isValid = false;
                } else {
                    passwordInput.classList.remove('is-invalid');
                }
<<<<<<< HEAD
                
                if (index === 0) passwordValue = passwordInput.value;
            });

            if (confirmPasswordInput) {
                if (confirmPasswordInput.value !== passwordValue || confirmPasswordInput.value.length < 8) {
                    confirmPasswordInput.classList.add('is-invalid');
                    isValid = false;
                } else {
                    confirmPasswordInput.classList.remove('is-invalid');
                }
            }

=======
            });
            
>>>>>>> 55398258e963cc450bfb7dba500c7cd9c53f7141
            if (fullNameInput && fullNameInput.value.trim() === '') {
                fullNameInput.classList.add('is-invalid');
                isValid = false;
            } else if (fullNameInput) {
                fullNameInput.classList.remove('is-invalid');
            }
<<<<<<< HEAD

            if (isValid) {
                const alertDiv = document.createElement('div');
                alertDiv.classList.add('alert', 'alert-success', 'position-fixed', 'top-0', 'end-0', 'm-3', 'alert-dismissible', 'fade', 'show');
                alertDiv.setAttribute('role', 'alert');
                alertDiv.innerHTML = `
                    Operação realizada com sucesso! 😁
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                `;
                
                document.body.appendChild(alertDiv);

                setTimeout(() => {
                    const bsAlert = new bootstrap.Alert(alertDiv);
                    bsAlert.close();
                }, 3000);
=======
            
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
>>>>>>> 55398258e963cc450bfb7dba500c7cd9c53f7141
            }
        });
    });
});