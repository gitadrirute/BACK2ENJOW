<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;
class UsuarioNormalMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        if (Auth::check() && Auth::user()->rol_usuario == 2) {
            return $next($request);
        }

        return response()->json([
            'mensaje' => 'Acceso prohibido: No tienes permiso para acceder a este recurso.',
        ], 403);
        
        
    }
}
