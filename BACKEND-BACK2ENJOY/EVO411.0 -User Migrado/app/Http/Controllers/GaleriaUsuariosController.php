<?php

namespace App\Http\Controllers;

use App\Models\GaleriaUsuarios;
use Illuminate\Http\Request;

class GaleriaUsuariosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $galeriaUsuario = GaleriaUsuarios::all();

        return response()->json($galeriaUsuario);
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
        $galeriaUsuario = new GaleriaUsuarios();
        $galeriaUsuario->rutaImagen = $request->rutaImagen;
        $galeriaUsuario->usuario_id = $request->usuario_id;
        $galeriaUsuario->save();

        $data = [
            'mensaje' => 'galeria creada correctamente',
            'galeria' => $galeriaUsuario
        ];

        return response()->json($data);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $galeriaUsuario = GaleriaUsuarios::findOrFail($id);
        return response()->json($galeriaUsuario);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(GaleriaUsuarios $galeriaUsuarios)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $galeriaUsuario = GaleriaUsuarios::findOrFail($id);

        $galeriaUsuario->rutaImagen = $request->rutaImagen;
        $galeriaUsuario->usuario_id = $request->usuario_id;

        $galeriaUsuario->save();
        $data = [
            'mensaje' => 'galeria actualizada correctamente',
            'galeria' => $galeriaUsuario
        ];

        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $galeriaUsuario = GaleriaUsuarios::findOrFail($id);
        $galeriaUsuario->delete();

        $data = [
            'mensaje' => 'galeria eliminada correctamente',
            'galeria' => $galeriaUsuario
        ];
        return response()->json($data);
    }

   
}
