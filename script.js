// Obtener elementos del formulario
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const nameError = document.getElementById('nameError');

// Función para validar el campo "Nombre"
function validateName() {
    const nameValue = nameInput.value.trim();
    let isValid = true;

    // Limpiar mensajes de error previos
    nameError.textContent = '';

    // Validar que no esté vacío
    if (nameValue === '') {
        nameError.textContent = 'El campo Nombre no puede estar vacío.';
        isValid = false;
    }
    // Validar longitud máxima
    else if (nameValue.length > 50) {
        nameError.textContent = 'El campo Nombre no puede superar los 50 caracteres.';
        isValid = false;
    }

    return isValid;
}

// Manejar evento de envío del formulario
form.addEventListener('submit', function (event) {
    const isNameValid = validateName();

    // Prevenir envío del formulario si hay errores
    if (!isNameValid) {
        event.preventDefault();
    }
});


// Obtener elementos del formulario
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');

// Función para validar el campo "E-mail"
function validateEmail() {
    const emailValue = emailInput.value.trim();
    let isValid = true;

    // Limpiar mensajes de error previos
    emailError.textContent = '';

    // Validar que no esté vacío
    if (emailValue === '') {
        emailError.textContent = 'El campo E-mail no puede estar vacío.';
        isValid = false;
    } 
    // Validar formato de correo electrónico
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
        emailError.textContent = 'El campo E-mail debe tener un formato válido (ej. texto@texto.com).';
        isValid = false;
    }

    return isValid;
}

// Manejar evento de envío del formulario
form.addEventListener('submit', function (event) {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();

    // Prevenir envío del formulario si hay errores
    if (!isNameValid || !isEmailValid) {
        event.preventDefault();
    }
});

// Obtener el botón de envío
const submitButton = document.getElementById('submitButton');

// Función para validar todo el formulario
function validateForm() {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();

    // Habilitar el botón solo si todos los campos son válidos
    submitButton.disabled = !(isNameValid && isEmailValid);
}

// Escuchar los eventos de entrada en cada campo para activar las validaciones en tiempo real
nameInput.addEventListener('input', validateForm);
emailInput.addEventListener('input', validateForm);

// Enviar el formulario si todos los campos son válidos
form.addEventListener('submit', function (event) {
    // Validar nuevamente antes de enviar
    const isNameValid = validateName();
    const isEmailValid = validateEmail();

    if (!(isNameValid && isEmailValid)) {
        event.preventDefault(); // Prevenir envío si hay errores
    } else {
        alert('¡Formulario enviado con éxito!');
    }
});
