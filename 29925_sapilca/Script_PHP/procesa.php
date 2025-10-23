<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        $codigo_postal = htmlspecialchars($_POST['pswCodigoPostal']);
        $referencia = htmlspecialchars($_POST['Mensaje']);

        // Mostrar los datos
        // Nota: En una aplicación real, NUNCA muestres una contraseña (Código Postal) en pantalla.
        // Esto es solo para fines de depuración del ejercicio.
        echo "<p><strong>Código Postal (Ingresado):</strong> " . $codigo_postal . "</p>";
        echo "<p><strong>Referencia de Dirección:</strong> " . $referencia . "</p>";

    } else {
        echo "<p>No se recibieron datos por el método POST.</p>";
    }
?>