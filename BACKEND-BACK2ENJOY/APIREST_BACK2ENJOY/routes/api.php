<?php 

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum ')->get('/user', function (Request $request){
    return $request->user;
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

