<?php
session_start();
//VALIDACION DE FORMULARIO DE CONTACTO
 if (isset($_POST["submit__contact_form"])) {

    //campos del formulario
    $fullName = $_POST["fullName__contact_form"];
    $email = $_POST["email__contact_form"];
    $tel = $_POST["tel__contact_form"]; // es opcional
    $escribenos = $_POST["escribenos__contact_form"];

    $terms = isset($_POST["terms__contact_form"]);
    $spam = isset($_POST["spam__contact_form"]);

    $ip = $_SERVER["REMOTE_ADDR"];
    $captcha = $_POST['g-recaptcha-response'];
    $secretKey = "6LclarspAAAAALUaImhg76gAM4qa0v-UrI7s_bx9";

    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$captcha&remoteip=$ip");

    $atributos =json_decode($response, TRUE);//guarda un array con el hostname, la fecha y si ha salido bien

    //guarda mensajes de error
    $errors = array();

    //validaciones del formulario
    if (!$atributos["success"]) {
      $errors[] = "¡Verificar captcha!";
    }

    if (strlen($fullName) > 3)  {
      $regex ='/^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/';
      if (!preg_match($regex, $fullName)) {
          $errors[] = "¡El campo Nombre* no puede tener numeros!";
      }
    }else $errors[] = "¡El campo Nombre* es debe tener minimo 3 caracteres!";

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $errors[] = "¡la dirección de Correo no es valida!";
    }

    if (isset($tel)) {
        // $regex = '/^[9|6|7][0-9]{8}$/';
        $regex = '/(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/';
        if (!preg_match($regex, $tel)) {
            $errors[] = "¡Formato invalido para el numero de telefono!";
        }
    }

    if(empty($escribenos)){
      $errors[] = "Te recomendamos que añadas un mensaje para mejorar tu experiencia";
    }

    if (!$terms) {
      $errors[] = "¡Tienes que aceptar los terminos de privacidad!";
    }

    /*
    *Si no hay errores, se crea un json con toda la info del formulario
    * y se almacena en la session junto con un mensaje de extito
    -
    *Si hay errores, no hace nada y vuelve al index con los mensajes de error
    
    */
    if (count($errors) == 0) {

        $formData = array(
            'fullName' => $fullName,
            'email' => $email,
            'telefono' => $tel,
            'mensaje' => $escribenos,
            'terminos_privacidad' => $terms,
            'publicidad' => $spam
        );

        $_SESSION['contact_atributes'] = $atributos;
        $_SESSION['contact_form_data'] = $formData;
        $_SESSION['contact_success'] = "¡Formulario enviado con éxito!";
        header("Location: index.php#contact");
        exit;
    }else {
        // Si no se han enviado los datos requeridos, establecer un mensaje de error
        $_SESSION['contact_errors'] = $errors;
        $_SESSION['contact_atrr'] = $atributos;
        header("Location: index.php#contact"); // Redirigir de vuelta al formulario
        exit;
    }
 }

?>