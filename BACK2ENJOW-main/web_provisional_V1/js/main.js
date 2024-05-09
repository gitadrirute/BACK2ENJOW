// TODO -- CAMBIAR LA DINAMICA DE LAS CARTAS
//*Movimiento de las cajas
// const boxes = document.querySelectorAll('.advantages__card');
// let index = 0;
// let selected = false;
// var boxId = 0;
// boxes.forEach((box, i) => {

//     // box.addEventListener('mouseenter', () => {
//     //     if (!selected) {
//     //         console.log('Hover dentro del elemento '+ i);
//     //         box.classList.add('highlighted');
//     //         boxId = i
//     //     }
//     // });

//     // box.addEventListener('mouseleave', () => {
//     //     if (!selected) {
//     //         console.log('Hover fuera del elemento');
//     //         box.classList.remove('highlighted');
//     //     }
//     // });

//     box.addEventListener('click', () => {
//         console.log('Elemento seleccionado');
//         box.classList.add('highlighted');
//         selected = true;
//     });

//     box.addEventListener('dblclick', () => {
//         console.log('Elemento seleccionado');
//         box.classList.remove('highlighted');
//         selected = true;
//     });
// });

// function highlightBox() {
//     if (!selected) {
//         boxes.forEach((box, i) => {
//             if (i === index) {
//                 box.classList.add('highlighted');
//             } else {
//                 box.classList.remove('highlighted');
//             }
//         });

//         index++;
//         if (index >= boxes.length) {
//             index = 0;
//         }
//         if (selected) {
//             index = boxId
            
//         }
//     }
// }
// setInterval(highlightBox, 4000);

/*//////////////////*/
//*popups formus

//*Variables formulario de telefono
const showFormBtn1 = document.getElementById('showFormBtn_1');
const formPopup1 = document.getElementById('form__Popup_1');

showFormBtn1.addEventListener('click', () => {
    formPopup1.style.display = 'block';
    overlay.style.display = 'block'; 
});

//*Variables formulario de presupuesto
const showFormBtn2 = document.getElementById('showFormBtn_2');
const formPopup2 = document.getElementById('form__Popup_2');

const overlay = document.getElementById('overlay');

showFormBtn2.addEventListener('click', () => {
    formPopup2.style.display = 'block';
    overlay.style.display = 'block'; 
});

//sale al clicar fuera del form
overlay.addEventListener('click', () => {
    formPopup1.style.display = 'none';
    formPopup2.style.display = 'none';
    overlay.style.display = 'none'; 
});

//////////////////////////////////////////*/
//Validacion del formulario popup

/* const submitBtn = document.getElementById("submitBtn__budget_form");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    var name = document.getElementById('name__budget_form').value;
    var lastName = document.getElementById('lastName__budget_form').value;
    var email = document.getElementById('email__budget_form').value;
    var password = document.getElementById('tel__budget_form').value;
    var terms = document.getElementById('budget_terms').checked;
    var spam = document.getElementById('budget_spam').checked;

    
    if (!validateName(name)) {
        let nameAlert="Por favor ingrese un nombre válido.";
        showAlert(nameAlert)
        return false;
    }

    if (!validateLastName(lastName)) {
        let lastNameAlert="Por favor ingrese apellidos válidos.";
        showAlert(lastNameAlert)
        return false;
    }

    if (!validateEmail(email)) {
        let emailAlert="Por favor ingrese una dirección de email electrónico válida."
        showAlert(emailAlert)
        return false;
    }

    if (!validatePassword(password)) {
        let passwordAlert="La contraseña debe tener al menos 6 caracteres."
        showAlert(passwordAlert)
        return false;
    }

    if (!terms) {
        let termsAlert="Por favor acepte los términos de privacidad."
        showAlert(termsAlert)
        return false;
    }

    console.log("name: "+name+" ap:"+lastName+" cont:"+password);
    
    return false;
});

function validateName(name) {
    let regex = /^[a-zA-Z]+$/;
    return regex.test(name);
}

function validateLastName(lastName) {
    let regex = /^[a-zA-Z]+$/;
    return regex.test(lastName);
}

function validatePassword(password) {
    return password.length >= 6;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

////////////////////*/
/*custom alert
function showAlert(message) {
    var popup = document.getElementById('customPopup');
    var popupMessage = document.getElementById('popupMessage');

    popupMessage.textContent = message;
    popup.style.display = 'block';
}

function closePopup() {
    var popup = document.getElementById('customPopup');
    popup.style.display = 'none';
}
 */
//////////////////////////////*
//limpieza de formularios

// var forms = document.querySelectorAll(".join__form form, .contact_form form");

// forms.forEach(function(form) {
//     form.addEventListener("submit", function(event) {
//         event.preventDefault();

//         // Vacía los valores de todos los campos del formulario
//         var inputs = form.querySelectorAll("input[type=text], input[type=email], input[type=tel], input[type=password], textarea");
//         inputs.forEach(function(input) {
//             input.value = "";
//         });

//         // Reinicia el estado de los checkboxes
//         var checkboxes = form.querySelectorAll("input[type=checkbox]");
//         checkboxes.forEach(function(checkbox) {
//             checkbox.checked = false;
//         });
//     });
// });

////////////////////////////////////////////////////*/
//* Seccion para la interaccion de las preguntas
var faqs = document.querySelectorAll('.faq');

// Agregar evento de clic al div contenedor de cada pregunta
faqs.forEach(function(faq) {
    var answer = faq.querySelector('.answer');
    var isOpen = false; // Estado inicial: respuesta oculta

    faq.addEventListener('click', function() {
        // Ocultar todas las respuestas si se selecciona una nueva pregunta
        if (!isOpen) {
            faqs.forEach(function(faq) {
                faq.querySelector('.answer').style.maxHeight = null; // Resetear la altura máxima
            });
        }

        // Toggle de la respuesta de la pregunta actual
        if (isOpen) {
            answer.style.maxHeight = null; // Ocultar la respuesta si está visible
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px'; // Mostrar la respuesta con una altura máxima
        }

        isOpen = !isOpen; // Cambiar el estado de la respuesta
    });
});

/*////////////////////////////*/
//*Formulario de contacto

// function mostrarContenidoFormulario(event) {
//     // Evitar el envío convencional del formulario
//     event.preventDefault();

//     // Seleccionar el formulario por su ID
//     var form = document.getElementById("form_2");

//     // Obtener todos los campos del formulario
//     var inputs = form.querySelectorAll("input[type=text], input[type=email], input[type=tel], textarea");

//     // Crear un objeto para almacenar los datos del formulario
//     var formData = {};

//     // Recorrer todos los campos y almacenar su valor en el objeto formData
//     inputs.forEach(function(input) {
//         formData[input.name] = input.value;
//     });

//     // Mostrar los datos del formulario en la consola
//     console.log(formData);
// }

// // Adjuntar la función al evento "submit" del formulario
// document.getElementById("form_2").addEventListener("submit", mostrarContenidoFormulario);

/*//////////////////////////*/
//*Funcion ir arriba
$(document).ready(function(){
	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});
});

/*//////////////////////////////////////////*/
//*Bajada suave de los enlaces del header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

/*
*Funcionamiento del swiper
*/
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 50,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    speed: 2000,
});

