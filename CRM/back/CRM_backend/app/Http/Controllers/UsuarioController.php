<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class UsuarioController extends Controller
{
    public function validate($id)
    {
        try {
            $response = Http::post('https://ejemplo.com/api/usuarios/validate/'.$id);
            $statusCode = $response->status();
            $data = $response->json();

            if ($statusCode == 200) {
                return response()->json(['message' => 'Usuario validado correctamente'], 200);
            } else {
                return response()->json(['message' => 'Error al validar usuario'], $statusCode);
            }
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error de conexión'], 500);
        }
    }

    public function delete($id)
    {
        try {
            $response = Http::delete('https://ejemplo.com/api/usuarios/delete/'.$id);
            $statusCode = $response->status();
            $data = $response->json();

            if ($statusCode == 200) {
                return response()->json(['message' => 'Usuario eliminado correctamente'], 200);
            } else {
                return response()->json(['message' => 'Error al eliminar usuario'], $statusCode);
            }
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error de conexión'], 500);
        }
    }
}
