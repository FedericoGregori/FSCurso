var formulario = document.getElementById('formulario'),
    nombre = formulario.nombre,
    apellido = formulario.apellido,
    nac = formulario.nac,
    email = formulario.email,
    user = formulario.user,
    pass = formulario.pass,
    error = document.getElementById('error');

function validarNombre(e){
    if (nombre.value == '' || nombre.value == null){
        error.style.display = 'block'
        error.innerHTML += '<li>Por favor completa el nombre.</li>'
        e.preventDefault();
    } else {
        error.style.display = 'none';
    }
}

function validarApellido(e){
    if (apellido.value == '' || apellido.value == null){
        error.style.display = 'block'
        error.innerHTML += '<li>Por favor completa el apellido.</li>'
        e.preventDefault();
    } else {
        error.style.display = 'none';
    }
}

function validarEmail(e){
    if (email.value == '' || email.value == null){
        error.style.display = 'block'
        error.innerHTML += '<li>Por favor completa el correo.</li>'
        e.preventDefault();
    } else {
        error.style.display = 'none';
    }
}

function validarUser(e){
    if (user.value == '' || user.value.length < 8){
        error.style.display = 'block'
        error.innerHTML += '<li>El usuario debe tener al menos 8 carácteres.</li>'
        e.preventDefault();
    } else {
        error.style.display = 'none';
    }
}

function validarPass(e){
    if (pass.value == '' || pass.value.length < 8 || pass.value == null){
        error.style.display = 'block'
        error.innerHTML += '<li>La contraseña debe tener al menos 8 carácteres.</li>'
        e.preventDefault();
    } else {
        error.style.display = 'none';
    }
}

function validarNac(e){
    if (nac.value == '' || nac.value == null){
        error.style.display = 'block'
        error.innerHTML += '<li>Por favor completa la fecha de nacimiento.</li>'
        e.preventDefault();
    } else {
        error.style.display = 'none';
    }
}

function validarFormulario(e){
    error.innerHTML = '';
    validarNombre(e);
    validarApellido(e);
    validarEmail(e);
    validarUser(e);
    validarNac(e);
    validarPass(e);
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