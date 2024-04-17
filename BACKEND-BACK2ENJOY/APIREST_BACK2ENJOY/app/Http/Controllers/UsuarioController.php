<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $usuario = Usuario::all();
        return response()->json($usuario);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $usuario = new Usuario;
        $usuario->nombre = $request->nombre;
        $usuario->apellidos = $request->apellidos;
        $usuario->correo = $request->correo;
        $usuario->contraseña = $request->contraseña;
        $usuario->rol_usuario_id = $request->rol_usuario_id;
        $usuario->save();

        $data = [
            'mensaje' => 'Usario creado correctamente',
            'usuario' => $usuario
        ];

        return response()->json($data);
    }

    /**
     * Display the specified resource.
     */
    public function show( $id)
    {
        $usuario = Usuario::findOrFail($id);
        return response()->json($usuario);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Usuario $usuario)
    {
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $usuario = Usuario::findOrFail($id);
        $usuario->nombre = $request->nombre;
        $usuario->apellidos = $request->apellidos;
        $usuario->correo = $request->correo;
        $usuario->contraseña = $request->contraseña;
        $usuario->rol_usuario_id = $request->rol_usuario_id;

        $usuario->save();

        $data = [
            'mensaje' => 'Usario actualizado correctamente',
            'usuario' => $usuario
        ];

        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy( $id)
    {
        $usuario = Usuario::findOrFail($id);
        $usuario->delete();
        $data = [
            'mensaje' => 'Usario eliminado correctamente',
            'usuario' => $usuario
        ];
        return response()->json($data);
    }
}
