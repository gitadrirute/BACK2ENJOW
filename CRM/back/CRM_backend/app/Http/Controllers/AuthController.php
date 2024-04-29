<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $client = new Client();
        
        try {
            $response = $client->post('https://example.com/api/login', [ /* Aqui la va API */
                'form_params' => [
                    'username' => $request->username,
                    'password' => $request->password,
                ]
            ]);

            $statusCode = $response->getStatusCode();
            $data = $response->getBody()->getContents();

            // Verificar el estado de la respuesta y tomar acciones en consecuencia
            if ($statusCode == 200) {
                // Autenticación exitosa
                return response()->json(['message' => 'Login correcto'], 200);
            } else {
                // Error de autenticación
                return response()->json(['message' => 'Password o Username invalido'], 401);
            }
        } catch (\Exception $e) {
            // Manejar errores de conexión o del servidor API
            return response()->json(['message' => 'Error al conectarse a la API'], 500);
        }
    }
}
