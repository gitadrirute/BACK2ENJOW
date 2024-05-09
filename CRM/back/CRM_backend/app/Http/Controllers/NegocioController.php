<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class NegocioController extends Controller
{
    public function validate($id)
    {
        try {
            $response = Http::post('https://ejemplo.com/api/negocios/validate/'.$id); /* Aqui va API */
            $statusCode = $response->status();
            $data = $response->json();

            if ($statusCode == 200) {
                return response()->json(['message' => 'Negocio validado correctamente'], 200);
            } else {
                return response()->json(['message' => 'Error al validar negocio'], $statusCode);
            }
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error de conexión'], 500);
        }
    }

    public function delete($id)
    {
        try {
            $response = Http::delete('https://ejemplo.com/api/negocios/delete/'.$id); /* Aqui va API */
            $statusCode = $response->status();
            $data = $response->json();

            if ($statusCode == 200) {
                return response()->json(['message' => 'Negocio eliminado correctamente'], 200);
            } else {
                return response()->json(['message' => 'Error al eliminar negocio'], $statusCode);
            }
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error de conexión'], 500);
        }
    }
}
