<?php
$nombreUsuario = $_POST['name'];
$correoUsuario = $_POST['email'];
$telefonoUsuario = $_POST['phone'];
$edadUsuario = $_POST['age'];
$profesionUsuario = $_POST['profesion'];
$experienciaUsuario = $_POST['exp'];
$objetivosUsuario = $_POST['obj'];
$mensajeUsuario = $_POST['text'];
$email = 'antonioperezbarrossw@gmail.com';

// Las 2 primeras lineas habilitan el informe de errores
ini_set('display_errors', 1);
error_reporting(E_ALL);

// de quien es el mensaje
$from = $correoUsuario;
// para quien es el mensaje
$to = $email;
// asunto del mensaje
$subject = "Nuevo formulario de valoración inicial";
// cual es el mensaje
$mensaje = "
  <!DOCTYPE html>
  <html lang='es'>
  
  <head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Mensaje</title>
  
    <style>
      * {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
      }
  
      body {
        background-color: rgb(207, 207, 207);
        line-height: 1.4;
        font-family: 'Source Sans Pro', sans-serif;
        -webkit-font-smoothing: antialiased;
        text-align: center;
      }
  
      p {
        font-family: 'Source Sans Pro', sans-serif;
        color: #000000;
        font-size: 16px;
        line-height: 1.65;
      }
  
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: 'Catamaran', sans-serif;
        font-weight: 600;
      }
  
      .respuestas {
        background-color: #fff;
        margin-left: 20%;
        margin-right: 20%;
        margin-bottom: 10%;
        margin-top: 20px;
        border: black 2px solid;
        text-align: center;
      }

      @media (max-width: 480px){
        .respuestas {
          margin-left: 15px;
          margin-right: 15px;
        }
      }
  
      .logo {
        margin-top: 70px;
        margin-bottom: 0;
      }
  
      .titulo {
        padding: 40px;
      }
  
      .casilla {
        padding: 30px;
        text-align: left;
      }
    </style>
  </head>
  
  <body>
    <div class='logo'><img src='data:image/png;base64,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' alt=''></div>
    <div class='container'>
      <div class='respuestas'>
        <h1 class='titulo'>Nuevo formulario de valoración inicial</h1>
        <div class='casilla'>
          <h3>Nombre y Apellidos</h3>
          <p>$nombreUsuario</p>
        </div>
        <div class='casilla'>
          <h3>Correo electrónico</h3>
          <p>$correoUsuario</p>
        </div>
        <div class='casilla'>
          <h3>Número de teléfono</h3>
          <p>$telefonoUsuario</p>
        </div>
        <div class='casilla'>
          <h3>Edad</h3>
          <p>$edadUsuario</p>
        </div>
        <div class='casilla'>
          <h3>Profesión</h3>
          <p>$profesionUsuario</p>
        </div>
        <div class='casilla'>
          <h3>Experiencia deportiva previa</h3>
          <p>$experienciaUsuario</p>
        </div>
        <div class='casilla'>
          <h3>Objetivos</h3>
          <p>$objetivosUsuario</p>
        </div>
        <div class='casilla'>
          <h3>¿Por qué elegiste a ErTony?</h3>
          <p>$mensajeUsuario</p>
        </div>
      </div>
    </div>
  </body>
  
  </html>
  ";

//para el envío en formato HTML 
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
// More headers
$headers .= "De:" . $from ."\r\n";
$headers .= "Para:" . $to . "\r\n";

// esta funcion ejecuta el correo PHP

if ($_POST['SFS'] != ""){
  // Es un SPAMbot
  exit();
 
 } else {
  
  $sendMail = mail($to, $subject, $mensaje, $headers);
 
 }



