<?php
session_start();

// *VALIDACION FORMULARIO DE LLAMADA
if (isset($_POST["submitBtn__call_us_form"])) {
    $name = $_POST["name__call_us_form"];
    $tel = $_POST["tel__call_us_form"]; 

    $terms = isset($_POST["terms__call_us_form"]);
    $spam = isset($_POST["spam__call_us_form"]);

    $ip = $_SERVER["REMOTE_ADDR"];
    $captcha = $_POST['g-recaptcha-response'];
    $secretKey = "6LclarspAAAAALUaImhg76gAM4qa0v-UrI7s_bx9";

    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$captcha&remoteip=$ip");

    $atributos =json_decode($response, TRUE);

    //guarda mensajes de error
    $errors = array();

    //validaciones del formulario
    if (!$atributos["success"]) {
        $errors[] = "¡Verificar captcha!";
    }

    if (strlen($name) > 3)  {
        $regex ='/^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/';
        if (!preg_match($regex, $name)) {
            $errors[] = "¡El campo Nombre* no puede tener numeros!";
        }
    }else $errors[] = "¡El campo Nombre* es debe tener minimo 3 caracteres!";

    if (isset($tel)) {
        // $regex = '/^[9|6|7][0-9]{8}$/';
        $regex = '/(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/';
        if (!preg_match($regex, $tel)) {
            $errors[] = "¡Formato invalido para el numero de telefono!";
        }
    }
    
    if (!$terms) {
        $errors[] = "¡Tienes que aceptar los terminos de privacidad!";
    }

    if (count($errors) == 0) {

        $formData = array(
            'nombre' => $name,
            'telefono' => $tel,
            'terminos_privacidad' => $terms,
            'publicidad' => $spam
        );

        $_SESSION['call_us_atributes'] = $atributos;
        $_SESSION['call_us_form_data'] = $formData;
        $_SESSION['call_us_success'] = "¡Formulario enviado con éxito!";
        header("Location: index.php#call_us");
        exit;
    }else {
        // Si no se han enviado los datos requeridos, establecer un mensaje de error
        $_SESSION['call_us_errors'] = $errors;
        $_SESSION['call_us_atrr'] = $atributos;
        header("Location: index.php#call_us"); // Redirigir de vuelta al formulario
        exit;
    }
}
?>