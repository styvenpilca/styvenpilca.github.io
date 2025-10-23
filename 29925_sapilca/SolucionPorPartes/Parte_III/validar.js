
function actualizarFormulario() {
  var radioTercero = document.getElementById('rbTercero');
  var radioPropietario = document.getElementById('rbPropietario');
  var formularioConfidencial = document.getElementById('FormularioConfidencial');
  var botonRegistrar = document.getElementById('btnRegistrar');

  if (radioTercero.checked) {
    formularioConfidencial.style.display = 'block';
  } else {
    formularioConfidencial.style.display = 'none';
  }

  if (radioPropietario.checked) {
    botonRegistrar.disabled = false;
  } else {
    botonRegistrar.disabled = true;
  }
}

/*
 * --- Lógica para FormContacto.html (TERCERA PARTE) ---
 */

function validar() {
  // [cite: 75] Utilice la siguiente instrucción: valor = document.getElementById('campo').value
  var email = document.getElementById('txtEmail').value;
  var telefono = document.getElementById('txtTelefono').value;

  // [cite: 72] Validación 1: Correo Electrónico
  // Usamos la expresión regular exacta del PDF
  var expresionEmail = /^[a-z][\w.-]+@\w[\w.-]+\[\w.-]*[a-z][a-z]\$/i;
  
  if (!expresionEmail.test(email)) {
    alert('Error: El formato del correo electrónico no es válido.');
    return false; // Detiene el envío
  }

  // (Exactamente 10 caracteres Y solo dígitos
  if (telefono.length !== 10 || isNaN(telefono)) {
    alert('Error: El teléfono debe tener exactamente 10 dígitos numéricos.');
    return false; // Detiene el envío
  }

  // Si todas las validaciones pasan
  return true;
}

/**
 *  Esta función es llamada por el evento 'onclick' del botón
 * para implementar la lógica de deshabilitar y enviar.
 */
function enviarFormulario(boton) {
  
  // 1. Primero, llamamos a la función validar() [cumpliendo el objetivo de cite: 73]
  if (validar()) {
    
    // Si la validación es exitosa, implementamos la lógica restante:
    
    //  2. Deshabilitar el botón
    boton.disabled = true;
    
    //  3. Cambiar el mensaje que muestra el botón
    boton.value = "Enviando datos ..........";
    
    //  4. Enviar el formulario
    boton.form.submit();
  }
}