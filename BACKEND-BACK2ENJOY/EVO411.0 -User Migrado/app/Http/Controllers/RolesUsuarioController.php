<?php

namespace App\Http\Controllers;

use App\Models\RolesUsuario;
use Illuminate\Http\Request;

class RolesUsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $rolesUsario = RolesUsuario::all();

        return response()->json($rolesUsario);
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
        $rolUsuario = new RolesUsuario;
        $rolUsuario->nombreRol = $request->nombreRol;
        $rolUsuario->contraseña = $request->contraseña;
        $rolUsuario->save();

        $data = [
            'mensaje' => 'Rol de usuario creado correctamente',
            'rolUsuario' => $rolUsuario
        ];

        return response()->json($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(RolesUsuario $rolesUsuario, $id)
    {
        $rolesUsuario = RolesUsuario::findOrFail($id);
        return response()->json($rolesUsuario);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(RolesUsuario $rolesUsuario)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, RolesUsuario $rolesUsuario, $id)
    {
        $rolesUsuario = RolesUsuario::findOrFail($id);
        $rolesUsuario->nombreRol = $request->nombreRol;
        $rolesUsuario->contraseña = $request->contraseña;
        $rolesUsuario->save();

        $data = [
            'mensaje' => 'Rol de usuario actualizado correctamente',
            'rolesUsuario' => $rolesUsuario
        ];

        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $rolesUsuario = RolesUsuario::findOrFail($id);

        $rolesUsuario->delete();
        $data = [
            'mensaje' => 'Rol de usuario eliminado correctamente',
            'rolusuario' => $rolesUsuario
        ];

        return response()->json($data);
    }
}
