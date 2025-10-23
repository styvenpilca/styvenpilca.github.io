    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        $calle_principal = htmlspecialchars($_POST['txtPrincipal']);
        $transversal = htmlspecialchars($_POST['txtTransversal']);
        $entrega = htmlspecialchars($_POST['rbEntrega2']);
        $canton = htmlspecialchars($_POST['cmbCantones']);

        // Mostrar los datos
        echo "<p><strong>Calle Principal:</strong> " . $calle_principal . "</p>";
        echo "<p><strong>Transversal:</strong> " . $transversal . "</p>";
        echo "<p><strong>Tipo de Entrega:</strong> " . $entrega . "</p>";
        echo "<p><strong>Cantón:</strong> " . $canton . "</p>";

    } else {
        echo "<p>No se recibieron datos por el método POST.</p>";
    }
    ?>