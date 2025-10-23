    <?php
    // Comprobar si el formulario fue enviado usando POST
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        // Recoger y limpiar los datos del formulario
        $nombre = htmlspecialchars($_POST['txtNombre']);
        $descripcion = htmlspecialchars($_POST['txtaDescripcion']);
        $precio = htmlspecialchars($_POST['numPrecio']); // Usando el 'name' que añadimos
        $impuesto = htmlspecialchars($_POST['cmbImpuesto']);
        $promocion = htmlspecialchars($_POST['rbPromocion']);

        // Comprobar si el checkbox 'Logística' fue marcado
        $logistica = isset($_POST['ckboxLogistica']) ? "Sí" : "No";

        // Manejo básico del archivo de la foto
        $foto_nombre = "No se subió archivo";
        if (isset($_FILES['foto']) && $_FILES['foto']['error'] == 0) {
            $foto_nombre = htmlspecialchars($_FILES['foto']['name']);
            // Opcional: mover el archivo subido a una carpeta 'uploads'
            // move_uploaded_file($_FILES['foto']['tmp_name'], 'uploads/' . $foto_nombre);
        }

        // Mostrar los datos recibidos
        echo "<p><strong>Nombre del Producto:</strong> " . $nombre . "</p>";
        echo "<p><strong>Descripción:</strong> " . $descripcion . "</p>";
        echo "<p><strong>Precio:</strong> $" . $precio . "</p>";
        echo "<p><strong>Impuesto:</strong> " . $impuesto . "%</p>";
        echo "<p><strong>Promoción:</strong> " . $promocion . "</p>";
        echo "<p><strong>Información Confidencial:</strong> " . $logistica . "</p>";
        echo "<p><strong>Nombre del archivo de foto:</strong> " . $foto_nombre . "</p>";

    } else {
        echo "<p>No se recibieron datos por el método POST.</p>";
    }
    ?>