/*
 * ========= ARCHIVO ÚNICO: validar.js =========
 */

/*
 * --- Lógica para FormRegistro.html ---
 */

function actualizarFormulario() {
  // Obtenemos los elementos del DOM
  var radioTercero = document.getElementById('rbTercero');
  var radioPropietario = document.getElementById('rbPropietario');
  var formularioConfidencial = document.getElementById('FormularioConfidencial');
  var botonRegistrar = document.getElementById('btnRegistrar');

  // REGLA 1: Si "Entrega a un tercero" está activado, se visualiza el formulario confidencial
  if (radioTercero.checked) {
    formularioConfidencial.style.display = 'block';
  } else {
    formularioConfidencial.style.display = 'none';
  }

  // REGLA 2: El botón "REGISTRAR" estará activado solo cuando "Entrega al Propietario" esté activo
  if (radioPropietario.checked) {
    botonRegistrar.disabled = false;
  } else {
    botonRegistrar.disabled = true;
  }
}

/*
 * --- Lógica para FormContacto.html ---
 */

// 1. FUNCIÓN DE VALIDACIÓN (Llamada desde 'enviarFormulario')
function validarCampos() {
  // Obtenemos los valores usando getElementById como pide el PDF
  var email = document.getElementById('txtEmail').value;
  var telefono = document.getElementById('txtTelefono').value;

  // Validación 1: Correo Electrónico
  var expresionEmail = /^[a-z][\w.-]+@\w[\w.-]+\.[a-z][a-z]$/i;
  if (!expresionEmail.test(email)) {
    alert('Error: El formato del correo electrónico no es válido.');
    return false; // Detiene el envío
  }

  // Validación 2: Teléfono
  if (telefono.length !== 10 || isNaN(telefono)) {
    alert('Error: El teléfono debe tener exactamente 10 dígitos numéricos.');
    return false; // Detiene el envío
  }

  // Si todas las validaciones pasan
  return true;
}


// 2. FUNCIÓN DE ENVÍO (Llamada por el botón 'onclick')
function enviarFormulario(boton) {
  
  // Primero, validamos los campos
  if (validarCampos()) {
    
    // Si la validación es exitosa, implementamos la lógica del PDF
    
    // a. Deshabilitar el botón
    boton.disabled = true;
    
    // b. Cambiar el mensaje que muestra el botón
    boton.value = "Enviando datos ..........";
    
    // c. Enviar el formulario
    boton.form.submit();
  }
}