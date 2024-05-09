<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\NegocioController;

/*
|--------------------------------------------------------------------------
| Rutas Web
|--------------------------------------------------------------------------
|
| Aquí es donde puedes registrar rutas web para tu aplicación. Estas
| rutas son cargadas por el RouteServiceProvider dentro de un grupo que
| contiene el grupo de middleware "web". Ahora crea algo grandioso!
|
*/

Route::get('/', function () {
    return view('welcome');
});

/* Validar el Negocio y Usuario */
Route::post('negocios/validate/{id}', [NegocioController::class, 'validate']);
Route::post('usuarios/{id}/validate', [UsuarioController::class, 'validate']);
/* Borrar el negocio y usuario */
Route::delete('negocios/delete/{id}', [NegocioController::class, 'delete']);
Route::delete('usuarios/{id}', [UsuarioController::class, 'delete']);


// Rutas de la API para el controlador de autenticación
Route::post('login', [AuthController::class, 'login']);

