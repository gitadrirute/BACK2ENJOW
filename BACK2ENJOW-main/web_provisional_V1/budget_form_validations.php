<?php
session_start();
if (isset($_POST["submitBtn__budget_form"])) {
    $full_name = $_POST["full_name__budget_form"];
    $email = $_POST["email__budget_form"];
    $tel = $_POST["tel__budget_form"];
    $terms = isset($_POST["budget_terms"]);
    $spam = isset($_POST["budget_spam"]);

    $ip = $_SERVER["REMOTE_ADDR"];
    $captcha = $_POST['g-recaptcha-response'];
    $secretKey = "6LclarspAAAAALUaImhg76gAM4qa0v-UrI7s_bx9";

    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$captcha&remoteip=$ip");

    $atributos =json_decode($response, TRUE);//guarda un array con el hostname, la fecha y si ha salido bien

    //guarda mensajes de error
    $errors = array();

    if (!$atributos["success"]) {
        $errors[] = "¡Verificar captcha!";
    }

    if (strlen($full_name) > 3)  {
        $regex ='/^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/';
        if (!preg_match($regex, $full_name)) {
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

    if (!$terms) {
        $errors[] = "¡Tienes que aceptar los terminos de privacidad!";
      }
  

    if (count($errors) == 0) {

        $formData = array(
            'nombre' => $full_name,
            'email' => $email,
            'telefono' => $tel,
            'terminos_privacidad' => $terms,
            'publicidad' => $spam
        );

        $_SESSION['budget_atributes'] = $atributos;
        $_SESSION['budget_form_data'] = $formData;
        $_SESSION['budget_success'] = "¡Formulario enviado con éxito!";
        header("Location: index.php#budget");
        exit;
    }else {
        // Si no se han enviado los datos requeridos, establecer un mensaje de error
        $_SESSION['budget_errors'] = $errors;
        $_SESSION['budget_atrr'] = $atributos;
        header("Location: index.php#budget"); // Redirigir de vuelta al formulario
        exit;
    }
}
?>