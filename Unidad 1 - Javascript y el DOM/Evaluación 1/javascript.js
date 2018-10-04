var formulario = document.getElementById('formulario'),
    nombre = formulario.nombre,
    apellido = formulario.apellido,
    nac = formulario.nac,
    email = formulario.email,
    user = formulario.user,
    pass = formulario.pass,
    error = document.getElementById('error');
var MINIMUN_LENGTH = 8;

function validarFormulario(e){
    error.innerHTML = '';
    if (!isValidForm()) {
        e.preventDefault();
    }
}

function isValidForm() {
    return isNotEmpty(nombre, "el nombre")
        & isNotEmpty(apellido, "el apellido")
        & isNotEmpty(email, "el correo electronico")
        & isNotEmpty(nac, "la fecha de nacimiento")
        & isValidLength(pass, "La contraseña")
        & isValidLength(user, "El nombre de usuario")
}

function isNotEmpty(field, field_name) {
    if (field.value === '' || field.value === undefined) {
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor completa ' + field_name + '</li>';
        return false;
    }
    return true;
}

function isValidLength(field, field_name) {
    if (field.length === undefined || field.length < MINIMUN_LENGTH) {
        error.style.display = 'block';
        error.innerHTML += '<li> ' + field_name  + ' debe tener al menos ' + MINIMUN_LENGTH + ' caracteres' + '</li>';
        return false;
    }
   return true;
}

formulario.addEventListener('submit', validarFormulario);
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    }
    if(mm<10){
        mm='0'+mm
    }

today = yyyy+'-'+mm+'-'+dd;
document.getElementById("nac").setAttribute("max", today);
