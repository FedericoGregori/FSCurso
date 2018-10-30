const formulario = document.getElementById('formulario');
const {
  nombre,
  apellido,
  nac,
  email,
  user,
  pass,
} = formulario;
const error = document.getElementById('error');
const MINIMUN_LENGTH = 8;

function isValidForm() {
  return isNotEmpty(nombre)
      & isNotEmpty(apellido)
      & isNotEmpty(email)
      & isNotEmpty(nac)
      & isValidLength(pass)
      & isValidLength(user)
}

function isNotEmpty(field) {
  return (field.value != '' && field.value != undefined);
}

function alertEmpty(field_name) {
  alert('Por favor completa el campo: ' + field_name);
}

function alertInvalidLength(field_name) {
  alert('El campo ' + field_name + ' debe tener al menos ' + MINIMUN_LENGTH + ' caracteres');
}

function isValidLength(field) {
  return (field.value.length != undefined && field.value.length >= MINIMUN_LENGTH);
}

function applyValidator(fields, validator, showAlert) {  
  for (field of fields) {
    field.addEventListener('blur', (e) => {
      if (!validator(e.target)) {
        showAlert(e.target.name);
      }
    });
  }
}

applyValidator([nombre, apellido, email, nac], isNotEmpty, alertEmpty);
applyValidator([user, pass], isValidLength, alertInvalidLength);

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
const yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd
}
if (mm<10) {
  mm = '0' + mm
}

today = yyyy + '-' + mm + '-' + dd;
document.getElementById("nac").setAttribute("max", today);

// --- Modal --- 

$("#confirmacion").dialog({
  resizable: true,
  minHeight: 310,
  minWidth: 400,
  modal: true,
  autoOpen: false,
  buttons: {
    "Ok": function() {
      formulario.submit();
      $( "this" ).dialog( "close" ); 
    },
    "Cancelar": function() {
      alert("Envío cancelado");
      $( this ).dialog( "close" );
    }
  }
});

$("#disparador").click( function (){
  if (isValidForm()) {
    $("#confirmacion").dialog('open');
  } else {
    alert("Revise los campos");
  }			
  					
} );
