<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;

Route::get('/', function () {
    echo 'api';

    return view('welcome');
});



Route::middleware('auth:sanctum ')->get('/user', function (Request $request){
    return $request->user;
});



// En web.php si estás trabajando con la autenticación de Laravel
Route::get('/csrf-token', function() {
    return response()->json(['csrf_token' => csrf_token()]);
});

//RUTAS ROLES DE USUARIO
Route::get('/rolesUsuario', 'App\Http\Controllers\RolesUsuarioController@index');
Route::post('/rolesUsuario', 'App\Http\Controllers\RolesUsuarioController@store');
Route::get('/rolesUsuario/{rol}', 'App\Http\Controllers\RolesUsuarioController@show');
Route::put('/rolesUsuario/{rol}', 'App\Http\Controllers\RolesUsuarioController@update');
Route::delete('/rolesUsuario/{rol}', 'App\Http\Controllers\RolesUsuarioController@destroy');

//RUTAS USUARIOS
Route::get('/usuarios', 'App\Http\Controllers\UsuarioController@index');
Route::post('/usuarios', 'App\Http\Controllers\UsuarioController@store');
Route::get('/usuarios/{usuario}', 'App\Http\Controllers\UsuarioController@show');
Route::put('/usuarios/{usuario}', 'App\Http\Controllers\UsuarioController@update');
Route::delete('/usuarios/{usuario}', 'App\Http\Controllers\UsuarioController@destroy');

//RUTAS HISTORIAL PREMIUM
Route::get('/historialesPremium', 'App\Http\Controllers\HistorialPremiumController@index');
Route::post('/historialesPremium', 'App\Http\Controllers\HistorialPremiumController@store');
Route::get('/historialesPremium/{historial}', 'App\Http\Controllers\HistorialPremiumController@show');
Route::put('/historialesPremium/{historial}', 'App\Http\Controllers\HistorialPremiumController@update');
Route::delete('/historialesPremium/{historial}', 'App\Http\Controllers\HistorialPremiumController@destroy');

//RUTAS METODO DE PAGO
Route::get('/metodosPago', 'App\Http\Controllers\MetodoPagoController@index');
Route::post('/metodosPago', 'App\Http\Controllers\MetodoPagoController@store');
Route::get('/metodosPago/{metodo}', 'App\Http\Controllers\MetodoPagoController@show');
Route::put('/metodosPago/{metodo}', 'App\Http\Controllers\MetodoPagoController@update');
Route::delete('/metodosPago/{metodo}', 'App\Http\Controllers\MetodoPagoController@destroy');


//RUTAS VALORACIONES
Route::get('/valoraciones', 'App\Http\Controllers\ValoracionesController@index');
Route::post('/valoraciones', 'App\Http\Controllers\ValoracionesController@store');
Route::get('/valoraciones/{valoracion}', 'App\Http\Controllers\ValoracionesController@show');
Route::put('/valoraciones/{valoracion}', 'App\Http\Controllers\ValoracionesController@update');
Route::delete('/valoraciones/{valoracion}', 'App\Http\Controllers\ValoracionesController@destroy');

//RUTAS  DE CATEGORIAS DE NEGOCIOS
Route::get('/categoriaNegocios', 'App\Http\Controllers\CategoriasNegocioController@index');
Route::post('/categoriaNegocios', 'App\Http\Controllers\CategoriasNegocioController@store');
Route::get('/categoriaNegocios/{categoria}', 'App\Http\Controllers\CategoriasNegocioController@show');
Route::put('/categoriaNegocios/{categoria}', 'App\Http\Controllers\CategoriasNegocioController@update');
Route::delete('/categoriaNegocios/{categoria}', 'App\Http\Controllers\CategoriasNegocioController@destroy');

//RUTAS DE NEGOCIOS
Route::get('/negocios', 'App\Http\Controllers\NegocioController@index');
Route::post('/negocios', 'App\Http\Controllers\NegocioController@store');
Route::get('/negocios/{negocio}', 'App\Http\Controllers\NegocioController@show');
Route::put('/negocios/{negocio}', 'App\Http\Controllers\NegocioController@update');
Route::delete('/negocios/{negocio}', 'App\Http\Controllers\NegocioController@destroy');


//RUTAS DE OFERTAS
Route::get('/ofertas', 'App\Http\Controllers\OfertaController@index');
Route::post('/ofertas', 'App\Http\Controllers\OfertaController@store');
Route::get('/ofertas/{oferta}', 'App\Http\Controllers\OfertaController@show');
Route::put('/ofertas/{oferta}', 'App\Http\Controllers\OfertaController@update');
Route::delete('/ofertas/{oferta}', 'App\Http\Controllers\OfertaController@destroy');

//RUTAS DE TIPOS DE OFERTAS
Route::get('/tiposOfertas', 'App\Http\Controllers\TipoOfertaController@index');
Route::post('/tiposOfertas', 'App\Http\Controllers\TipoOfertaController@store');
Route::get('/tiposOfertas/{tipo}', 'App\Http\Controllers\TipoOfertaController@show');
Route::put('/tiposOfertas/{tipo}', 'App\Http\Controllers\TipoOfertaController@update');
Route::delete('/tiposOfertas/{tipo}', 'App\Http\Controllers\TipoOfertaController@destroy');