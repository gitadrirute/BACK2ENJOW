
<?php session_start()?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" href="./img/Logos Nimio/escudo.png" sizes="12x16">
  <title>landing javi</title>
  <link rel="stylesheet" href="./css/styles.css">

   <!-- Link Swiper's CSS -->
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

   <!-- captcha de google -->
   <script src="https://www.google.com/recaptcha/api.js" async defer></script>

  <!-- HECHO POR JAVIER BARRIOS PARA NIMIO -->

  <!-- todo /misma fuente para todo-->
  <!-- FALTA EL ENVIO DE CORREOS AL ENVIAR EL FORM BIEN -->
    
</head>
<body>
  <header>
      <img class="logo" src="./img/Logos/logo back2enjoy.png" alt="">
      <nav class="links">
          <ul class="link_list">
              <li class="link"><a href="#product">Inicio</a></li>
              <li class="link"><a href="#about_us_Advantages">Quiénes somos</a></li>
              <li class="link"><a href="#join">Pide presupuesto</a></li>
              <li class="link"><a href="#faq-section">Preguntas Frecuentes</a></li>
          </ul>
      </nav>
      <a class="clickable_btn" href="#contact"><b>Contacto</b></a>
      <a class="clickable_btn" href="#contact"><b>Registrate</b></a>
  </header>

  <span class="ir-arriba"><img width="30px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAA
    eP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADjElEQVR4nO2az29MURTHP6I6IxV02jKx0qVU8E+g9ZtdqR1ho6Rs0XVZSZr4O/yI1AJNEL+1iagqK3Qh2Gk1yMi
    J70tOxsz0zZs7M4/4Ji99nXPvuefce+6555z74D/+XeSAfcAF4DrwCvgCLOix9ynRrM1eoJ2UIAscBm4CP4FClc8PYAwYADLNUGA5cBqYdUJ9A24BZ7UyGzTjy/S0
    6zejnQNuq0/U/wMwpMlpCHYCb50Aj4EjwKoEvFYDR4Enjt8boI86wmbqshvwKbAtIP9e4LnjP1qP1clLcBvgK3ACWBp6EH7zPAnMudVeG4p5t5a7IK+zkfpjEzCtMWc
    kQ03ocgwfAZ00Du3AXY39VlaRCFlnTveBNhqPNuCBM7NEe+ayMyc77JqFDmcV5gCqdrHRxm7EnoizZ+Ykk3m32IdddE6Yd0oLTrnNH8vEzrhzoh4uNilagAnJZkpVRE
    ahgjXeSvqwQ7LNLrYqA85DpBFLnCc9WKnhTTWy2CkE8oqjJmo5B4pwTDLeoAxyCqu/JQwAi5GX645ip6lAyrQrv/leTs59GtBC8ZBKTBW9h1DmjvjtKUW8KKLlEyGVy
    Jf5rRYMi9dIKeL1SlrGhEWqL8THUt11jrbG0aaLaNViv/hcKUV8LaJlcUkQZ9ZDrUyPm6w/8FnEXOCVKEaIlelU/4+liAsittZRiVDKZFydIIgiSZQIoUymkiLVmlYt
    StSqTFcl06p2s08GcqfeAUyE2OzXRLQKYBw8VNUjxAGXlxIPQrjf6EC04lnaMVzpQAwZotQb45J1V7lgLAoarQKYVuRc0LiyXKMxaWplzLTiuGS0kKosDqmR5RBpTaye
    Scb+xQ6a92q4nfRhl2R7F+caYkiNn6Ww+DAp2QbjdMi6Wq8VlNOCIRcBxL4U6lOnORXHmo0twLxkqvoqY9TNgJUtm4UuFeVMlktJGGRVFioodGhGEXuFQqGC/mZqmY1
    X7lrB/m/kwXfPXcfVfOHT7ZbWzGwzjdkTMxrTovL1oRivdWY2p9qrucPQaJF3mnfmZDlLUGSdA4hyh76AJ7ZdZUTnRLSx63r33uuWParaH0v4FUNOsVMUdhRkSiFvix
    ddnVMunCkoIrXw+rwSnx657VY9Hbo0OqA2465OEIUdg836AiKjqvgNpQDVfsLxXVFsf7MUKAUrKO9W1nZVefgn91GNvb9UejqitmXzif/gL8cvZOJOLT/oEqcAAAAASUVORK5CYII=">
  </span>

  <hr width="1500px">
    
  <div class="seccion_busqueda" id="seccion_busqueda">  
    <!-- Swiper -->
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" id="">
          <img src="./img/swiper Images/malaga1.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./img/swiper Images/malaga2.jpeg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./img/swiper Images/malaga3.jpeg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./img/swiper Images/malaga4.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./img/swiper Images/malaga5.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./img/swiper Images/malaga6.jpg" alt="">
        </div>
      </div>
      <!-- <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div> -->
      <!-- <div class="swiper-pagination"></div> -->
    </div>

    <div class="menu_busqueda">
      <form action="">
        <label for="opciones">Que quieres hacer</label>
        <select name="opciones" id="opciones">
          <option value="viajes">viajes</option>
          <option value="restaurantes">restaurantes</option>
          <option value="hoteles">hoteles</option>
        </select>
        <input type="text" name="palabra_clave" id="palabra_clave">
        <input type="submit" value="Buscar">
      </form>
    </div>
  </div>
  </div>

  <div id="about_us_Advantages">
    <section id="about_us" class="about_us">
      <h1 class="about_us__title">¡Unete a Back2enjoy!</h1>
      <div class="about_us__container">
        <div class="about_us__img">
          <!-- Swiper -->
          <div class="swiper mySwiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="./img/swiper Images/malaga3.jpeg" alt="">
              </div>
              <div class="swiper-slide" id="">
                <img src="./img/swiper Images/malaga1.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="./img/swiper Images/malaga2.jpeg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="./img/swiper Images/malaga5.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="./img/swiper Images/malaga4.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="./img/swiper Images/malaga6.jpg" alt="">
              </div>
            </div>
            <!-- <div class="swiper-button-next"></div>
                  <div class="swiper-button-prev"></div> -->
            <!-- <div class="swiper-pagination"></div> -->
          </div>
        </div>
        <div class="about_us__content">
          <h3>Descubre Málaga como nunca antes con BackToEnjoy</h3>
          <p>En BackToEnjoy, nos dedicamos a facilitar tu experiencia turística en la hermosa ciudad de Málaga. Nuestro equipo está comprometido a proporcionarte recomendaciones auténticas y valoraciones honestas de otros usuarios para que puedas disfrutar al máximo tu visita.</p>
          <p>Con una combinación de tecnología innovadora y conocimiento local, nos esforzamos por ofrecerte una guía completa y personalizada para explorar los rincones más fascinantes de Málaga. Desde restaurantes ocultos hasta atracciones menos conocidas, estamos aquí para ayudarte a descubrir los secretos mejor guardados de esta encantadora ciudad.</p>
          <p>Únete a nosotros en esta emocionante aventura y haz que tu viaje a Málaga sea inolvidable. Descubre lo que BackToEnjoy puede hacer por ti:</p>
          <div class="btns_container">
              <a class="clickable_btn" href="#contact"><b>Contacto</b></a>
              <a class="clickable_btn" target="_blank" href="#budget"><b>Registrate ahora</b></a>
          </div>
        </div>
      </div>
    </section>
  
    <!-- cartas de ventajas  -->
    <section class="advantages">
  <h2 id="advantages__title">¿Por qué con BackToEnjoy?</h2>
  <div class="advantages__cards">
    <div class="advantages__card">
      <h2>Recomendaciones Auténticas</h2>
      <p>Descubre los mejores lugares de Málaga con recomendaciones honestas y valoraciones de otros usuarios.</p>
    </div>
    <div class="advantages__card">
      <h2>Experiencias Únicas</h2>
      <p>Explora rincones fascinantes y atracciones menos conocidas para vivir experiencias auténticas en Málaga.</p>
    </div>
    <div class="advantages__card">
      <h2>Conocimiento Local</h2>
      <p>Aprovecha el conocimiento local de la comunidad para descubrir los secretos mejor guardados de la ciudad.</p>
    </div>
    <div class="advantages__card">
      <h2>Personalización de Itinerario</h2>
      <p>Personaliza tu viaje con nuestras recomendaciones y haz que cada momento en Málaga sea memorable.</p>
    </div>
    <div class="advantages__card">
      <h2>Acceso Exclusivo</h2>
      <p>Únete a nuestra comunidad y accede a contenido exclusivo, guías de viaje y descuentos especiales para turistas.</p>
    </div>
    <div class="advantages__card">
      <h2>Facilidad de Uso</h2>
      <p>Nuestra plataforma fácil de usar te permite encontrar rápidamente las mejores recomendaciones para tu viaje.</p>
    </div>
  </div>
</section>

  </div>
  <!-- FORMULARIO DE LLAMADA -->
  <div class="call_us_container" id="call_us">
    <div class="call_us" > 
      <h2>¿Quieres que te llamemos para informarte mejor?</h2>
      <div id="showFormBtn_1" class="buttonBox">
        <button>¡LLamanos ahora!</button>
      </div>
      <div class="highlighted_call_us_info" id="call_us_form_info"> 
        <?php
          // Mostrar mensaje de éxito si existe
          if (isset($_SESSION['call_us_success'])) {
            echo "<p class='success_msg'>" . $_SESSION['call_us_success'] . "</p>";
            unset($_SESSION['call_us_success']); // Limpiar el mensaje de la sesión
          }
          // Mostrar mensajes de error si existen
          if (isset($_SESSION['call_us_errors'])) {
            foreach ($_SESSION['call_us_errors'] as $error) {
                echo "<p class='error_msg'>" . $error . "</p>";
            }
            unset($_SESSION['call_us_errors']); // Limpiar los mensajes de error de la sesión
          }
        ?>
      </div>
    </div>
  </div>
  <div id="form__Popup_1" class="popup">
    <section class="call_us__form">
        <h2>LLamanos para obtener más información</h2>
        <hr><br>
        <form id="form_1" class="forms" action="./call_us_validations.php" method="post">
            <input class="input__form" type="text" id="name__call_us_form" name="name__call_us_form" placeholder="NOMBRE Y APELLIDOS *" required>
            <input class="input__form" type="tel" id="tel__call_us_form" name="tel__call_us_form" placeholder="TELÉFONO *" required>
            <label><input type="checkbox" name="spam__call_us_form" id="spam__call_us_form"> Acepto recibir notificaciones de nuevos productos</label>   
            <label><input type="checkbox" name="terms__call_us_form" id="terms__call_us_form" > Acepto terminos de privacidad *</label>
            <br>
            <div id="call_us_captcha" class="g-recaptcha" data-sitekey="6LclarspAAAAANvD2k-mJZZ8lGZHYOHUmvH628_d"></div>
            <button id="submitBtn__call_us_form" class="input__form" name="submitBtn__call_us_form" type="submit">Enviar</button>
        </form>
    </section>
  </div>

  <div id="customPopup" class="custom-popup">
    <div class="popup-content">
        <span class="close-btn" onclick="closePopup()">&times;</span>
        <p id="popupMessage"></p>
    </div>
  </div>

  <section class="budget" id="budget">
    <div id="overlay"></div> 
      <div class="budget__title">
        <h1>Da el primer paso hacia una experiencia única en Málaga</h1>
        <p>Con nuestro servicio de creación de rutas personalizadas, podrás descubrir lo mejor que Málaga tiene para ofrecer de acuerdo a tus necesidades y preferencias.</p>
        <p>No pierdas más tiempo buscando, ¡permítenos diseñar la ruta perfecta para ti!</p>
        <br>
        <div id="showFormBtn_2" class="buttonBox">
          <button>¡Obten tu ruta personalizada ahora!</button>
        </div>
      </div>

      <div class="highlighted_budget_info" id="budget_form_info"> 
        <?php
          // Mostrar mensaje de éxito si existe
          if (isset($_SESSION['budget_success'])) {
            echo "<p class='success_msg'>" . $_SESSION['budget_success'] . "</p>";
            unset($_SESSION['budget_success']); // Limpiar el mensaje de la sesión
          }
          // Mostrar mensajes de error si existen
          if (isset($_SESSION['budget_errors'])) {
            foreach ($_SESSION['budget_errors'] as $error) {
                echo "<p class='error_msg'>" . $error . "</p>";
            }
            unset($_SESSION['budget_errors']); // Limpiar los mensajes de error de la sesión
          }
        ?>
      </div>
    </div>
  
    <div class="budget__img">
        <img src="./img/Logos/ruta_logo.jpeg" width="500px">
    </div>
  </section>
<!-- * ALOMEJOR PETA ! VALIDAR ESTE FORMULARIOOOOOOO-->
  <div id="form__Popup_2" class="popup">
    <section class="budget__form">
      <h2>Pide tu presupuesto en <b>Nimio Estudio</b></h2>
      <hr><br>
      <form id="form_2" class="forms" action="./budget_form_validations.php" method="post">
          <input class="input__form" type="text" id="name__budget_form" name="full_name__budget_form" placeholder="NOMBRE Y APELLIDOS*" required>
          <input class="input__form" type="email" id="email__budget_form" name="email__budget_form" placeholder="CORREO *" required>
          <input class="input__form" type="tel" id="tel__budget_form" name="tel__budget_form" placeholder="TELÉFONO" >

          <label><input type="checkbox" name="budget_spam" id="budget_spam"> Acepto recibir notificaciones de nuevos productos</label>   
          <label><input type="checkbox" name="budget_terms" id="budget_terms" > Acepto terminos de privacidad *</label>
          <br>
          <div id="budget_captcha" class="g-recaptcha" data-sitekey="6LclarspAAAAANvD2k-mJZZ8lGZHYOHUmvH628_d"></div>
          <button id="submitBtn__budget_form" name="submitBtn__budget_form" class="input__form" type="submit">Enviar</button>
      </form>
      
    </section>
  </div>

  <div id="customPopup" class="custom-popup">
    <div class="popup-content">
        <span class="close-btn" onclick="closePopup()">&times;</span>
        <p id="popupMessage"></p>
    </div>
  </div>
  
  <div class="faq-section" id="faq-section">
    <h2>Preguntas Frecuentes</h2>
    
    <div class="faq">
      <h3 class="question">¿Cómo puedo encontrar las mejores recomendaciones en BackToEnjoy?</h3>
      <div class="answer">
        <p>
          En BackToEnjoy, puedes encontrar las mejores recomendaciones de lugares y actividades en Málaga explorando nuestra plataforma. Utiliza nuestras funciones de búsqueda y filtros para descubrir lo que más te interesa y lee las reseñas y valoraciones de otros usuarios para tomar decisiones informadas sobre tu visita.
        </p>
      </div>
    </div>
    
    <div class="faq">
      <h3 class="question">¿Qué tipo de lugares y actividades puedo encontrar en BackToEnjoy?</h3>
      <div class="answer">
        <p>
          BackToEnjoy ofrece una amplia variedad de recomendaciones, incluyendo restaurantes, bares, atracciones turísticas, actividades al aire libre, eventos culturales y mucho más. Sea cual sea tu interés, estamos aquí para ayudarte a descubrir las mejores experiencias en Málaga.
        </p>
      </div>
    </div>
    
    <div class="faq">
      <h3 class="question">¿Cómo puedo contribuir con mis propias recomendaciones en BackToEnjoy?</h3>
      <div class="answer">
        <p>
          ¡Nos encantaría que compartieras tus recomendaciones favoritas con la comunidad de BackToEnjoy! Simplemente regístrate en nuestra plataforma y podrás agregar tus propias reseñas y valoraciones para ayudar a otros turistas a descubrir los tesoros ocultos de Málaga.
        </p>
      </div>
    </div>
    
    <div class="faq">
      <h3 class="question">¿Qué tan actualizada está la información en BackToEnjoy?</h3>
      <div class="answer">
        <p>
          Nos esforzamos por mantener nuestra plataforma actualizada con la información más reciente sobre lugares y eventos en Málaga. Sin embargo, ten en cuenta que la disponibilidad y los horarios pueden cambiar, por lo que siempre recomendamos verificar la información directamente con los proveedores antes de tu visita.
        </p>
      </div>
    </div>
    
    <div class="faq">
      <h3 class="question">¿Cómo puedo contactar con el equipo de BackToEnjoy si tengo más preguntas?</h3>
      <div class="answer">
        <p>
          Si tienes más preguntas o necesitas ayuda adicional, no dudes en ponerte en contacto con nuestro equipo a través de nuestro formulario en línea o enviándonos un correo electrónico. Estamos aquí para ayudarte y asegurarnos de que tengas la mejor experiencia posible en tu visita a Málaga con BackToEnjoy.
        </p>
      </div>
    </div>
</div>


  <section class="contact" id="contact">
    <div class="contact_form">
      <h1><b>Contacto</b></h1>
      <div class="highlighted_form_info" id="contact_form_info"> 
          <?php
            // Mostrar mensaje de éxito si existe

            if (isset($_SESSION['contact_success'])) {
              echo "<p class='success_msg'>" . $_SESSION['contact_success'] . "</p>";
              unset($_SESSION['contact_success']); // Limpiar el mensaje de la sesión
            }

            // Mostrar mensajes de error si existen
            if (isset($_SESSION['contact_errors'])) {
              foreach ($_SESSION['contact_errors'] as $error) {
                  echo "<p class='error_msg'>" . $error . "</p>";
              }
              unset($_SESSION['contact_errors']); // Limpiar los mensajes de error de la sesión
            }
          ?>
        </div>
        <form id="form_3" action="./contact_form_validations.php" method="post">
          <div class="inputbox">
            <input type="text" id="fullName__contact_form" name="fullName__contact_form" required>
            <span>Nombre y apellidos</span>
          </div>
          <div class="inputbox">
            <input type="email" id="email__contact_form" name="email__contact_form" required>
            <span>Correo</span>
          </div>
          <div class="inputbox">
            <input type="tel" id="tel__contact_form" name="tel__contact_form" required >
            <span>Teléfono</span>
          </div>
          <div class="inputbox">
            <textarea id="dudas" name="escribenos__contact_form" required ></textarea>
            <span>Escribenos</span>
          </div>
          <div class="checkbox_container">
            <label><input type="checkbox" name="spam__contact_form" id="spam__contact_form"> Acepto recibir notificaciones de nuevos productos</label> <br><br>
            <label><input required type="checkbox" name="terms__contact_form" id="terms__contact_form" > Acepto terminos de privacidad *</label>
          </div><br>
          <div class="g-recaptcha" data-sitekey="6LclarspAAAAANvD2k-mJZZ8lGZHYOHUmvH628_d"></div>
          <div class="inputbox">
            <input class="clickable_btn"  type="submit" name="submit__contact_form" value="Enviar">
          </div>
        </form>
      <br>
    </div>
  </section>

  <section class="NewsLetter_section">
    <div class="NewsLetter_container">
      <div class="NewsLetter_info">
        <!-- *Aqui va el texto + fromu de correo -->
        <h1>Suscribete a nuestra newsletter</h1>
        <p>Recibe actualizaciones sobre nuestras tiendas online y consejos de marketing digital para que tu tienda triunfe en el mercado digital.</p>
        <form action="">
          <input type="text" name="email"><br><br>
          <input type="checkbox" name="privacy">
          <label for="privacy">Acepto la política de privacidad</label><br>
          <p>He leído y acepto las condiciones contenidas en la <a href="./legal/privacidad.html">Política de Privacidad</a> sobre el 
            tratamiento de mis datos para gestionar mi consulta o petición.</p>
          <input class="clickable_btn" type="submit" value="Enviar">
        </form>
      </div>
    </div>
    <div class="NewsLetter_cards">
      <!-- * Aqui va seccion de cartas de ventajas de newsletter -->
      <div class="NewsLetter_card">
          <img src="./img/Logos Nimio/nimio_escudo-blanco.png" alt="">
          <h3>Descuentos Exclusivos</h3>
          <p>Suscríbete a nuestra newsletter y recibe descuentos exclusivos en nuestros servicios y productos.</p>
      </div>
      <div class="NewsLetter_card">
          <img src="./img/Logos Nimio/nimio_escudo-blanco.png" alt="">
          <h3>Contenido Exclusivo</h3>
          <p>Obtén acceso prioritario a contenido exclusivo, como guías, consejos y recursos para mejorar tu presencia en línea.</p>
      </div>
      <div class="NewsLetter_card">
          <img src="./img/Logos Nimio/nimio_escudo-blanco.png" alt="">
          <h3>Actualizaciones y Novedades</h3>
          <p>Recibe las últimas actualizaciones y novedades sobre nuestros servicios, productos y proyectos directamente en tu bandeja de entrada.</p>
      </div>
      <div class="NewsLetter_card">
          <img src="./img/Logos Nimio/nimio_escudo-blanco.png" alt="">
          <h3>Comunicación Directa</h3>
          <p>Mantente en contacto directo con nosotros y participa en encuestas, eventos y promociones exclusivas para suscriptores.</p>
      </div>
    </div>
  </section>
  
  <!-- todo/ posibilidad de añadir columna de redes sociales -->
  <footer>
    <div class="footer_links">
      <div class="footer__section">
        <h3>Explorar</h3>
          <ul class="link_list">
            <li class="link"><a href="#product">Inicio</a></li>
            <li class="link"><a href="#about_us_Advantages">Quiénes somos</a></li>
            <li class="link"><a href="#join">Pide presupuesto</a></li>
            <li class="link"><a href="#faq-section">Preguntas Frecuentes</a></li>
          </ul>
        </div>
      <div class="footer__section">
        <h3>Políticas de Privacidad</h3>
        <ul>
            <li><a href="./legal/avisoLegal.html">Aviso legal y condiciones de uso</a></li><!-- *done -->
            <li><a href="./legal/politicaPrivacidad.html">Política de privacidad</a></li><!-- *done -->
            <li><a href="./legal/politicaCookies.html">Política de cookies</a></li><!-- *done -->
        </ul>
      </div>
      <div class="footer__section">
          <h3>Seguridad</h3>
          <ul>
              <li><a href="#">Seguridad de la información</a></li>
              <li><a href="#">Protección de datos</a></li>
          </ul>
      </div>
      <div class="footer__section">
          <h3>Contacto</h3>
          <ul>
              <li><a href="#call_us">Soporte</a></li>
              <li><a href="#contact">Contáctanos</a></li>
          </ul>
      </div>
    </div>
    <p>Derechos de autor © 2024 - Back to Enjoy S.L. </p>
  </footer>

  <!-- Scripts necesarios para el correcto funcionamiento de la web -->
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <!-- Swiper JS -->
  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  <script src="./js/main.js"></script>
</body>
</html>
