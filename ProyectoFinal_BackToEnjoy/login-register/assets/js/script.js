//Ejecutando funciones
document
  .getElementById("btn__iniciar-sesion")
  .addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(
  ".contenedor__login-register"
);
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

//FUNCIONES

function anchoPage() {
  if (window.innerWidth > 850) {
    caja_trasera_register.style.display = "block";
    caja_trasera_login.style.display = "block";
  } else {
    caja_trasera_register.style.display = "block";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.display = "none";
    formulario_login.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_register.style.display = "none";
  }
}

anchoPage();

function iniciarSesion() {
  if (window.innerWidth > 850) {
    formulario_login.style.display = "block";
    contenedor_login_register.style.left = "10px";
    formulario_register.style.display = "none";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.opacity = "0";
  } else {
    formulario_login.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_register.style.display = "none";
    caja_trasera_register.style.display = "block";
    caja_trasera_login.style.display = "none";
  }
}

function register() {
  if (window.innerWidth > 850) {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "410px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";
  } else {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.display = "none";
    caja_trasera_login.style.display = "block";
    caja_trasera_login.style.opacity = "1";
  }
}

const tipoRegistroCheckbox = document.getElementById("toggle");
const usuarioInputs = document.querySelectorAll(".usuario");
const empresaInputs = document.querySelectorAll(".empresa");

tipoRegistroCheckbox.addEventListener("change", function () {
  if (this.checked) {
    // Si el checkbox está activado, mostrar los inputs de usuario y ocultar los de empresa
    usuarioInputs.forEach((input) => (input.style.display = "none"));
    empresaInputs.forEach((input) => (input.style.display = "block"));
  } else {
    // Si el checkbox está desactivado, mostrar los inputs de empresa y ocultar los de usuario
    usuarioInputs.forEach((input) => (input.style.display = "block"));
    empresaInputs.forEach((input) => (input.style.display = "none"));
  }
});

function mifuncion(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  const nombre = document.querySelector("[name=nombre]").value;
  const correo = document.querySelector("[name=correo]").value;
  const usuario = document.querySelector(".usuario [name=usuario]").value;
  const contrasena = document.querySelector("[name=contrasena]").value;

  let tipoRegistro;
  if (tipoRegistroCheckbox.checked) {
    tipoRegistro = "empresa";
  } else {
    tipoRegistro = "usuario";
  }

  // Aquí puedes enviar los datos al servidor, incluyendo el tipo de registro
  // Por ejemplo, puedes utilizar fetch() para enviar una solicitud POST

  fetch("URL_DE_TU_API", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre,
      correo,
      usuario,
      contrasena,
      tipoRegistro,
    }),
  })
    .then((response) => {
      // Aquí manejas la respuesta del servidor
      if (response.ok) {
        // Si la respuesta es exitosa, puedes redirigir al usuario a otra página, mostrar un mensaje, etc.
        console.log("Registro exitoso");
      } else {
        // Si la respuesta no es exitosa, puedes mostrar un mensaje de error o realizar otra acción
        console.error("Error al registrar usuario");
      }
    })
    .catch((error) => {
      // Si hay algún error en la solicitud, puedes manejarlo aquí
      console.error("Error en la solicitud:", error);
    });
}

var boton = document.getElementById("bot");
boton.addEventListener("click", mifuncion);
