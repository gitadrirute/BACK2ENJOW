<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

use function Laravel\Prompts\error;

class UsuarioNormalMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        
            if (Auth::check() && Auth::user()->rol_usuario_id == 2) {
                return $next($request);
            }

            return response()->json([
                'mensaje' => 'Acceso prohibido: No tienes permiso para acceder a este recurso.',
            ], 403);
    }
}
