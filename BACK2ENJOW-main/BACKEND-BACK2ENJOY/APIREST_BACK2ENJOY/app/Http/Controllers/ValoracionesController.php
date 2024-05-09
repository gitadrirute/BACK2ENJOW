<?php

namespace App\Http\Controllers;

use App\Models\Valoraciones;
use Illuminate\Http\Request;

class ValoracionesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $valoracion =  Valoraciones::all();
        return response()->json($valoracion);
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
        $valoracion = new Valoraciones;
        $valoracion->puntuacion = $request->puntuacion;
        $valoracion->comentario = $request->comentario;
        $valoracion->save();

        $data = [
            'mensaje' => 'Valoracion de usuario creada correctamente',
            'valoracion' => $valoracion
        ];
        return response()->json($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(Valoraciones $valoracion)
    {
        $data = [
            'mensaje' => 'Detalles de la valoracion del usuario',
            'valoracion' => $valoracion
        ];
        return response()->json($data);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Valoraciones $valoracion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Valoraciones $valoracion)
    {
        $valoracion->puntuacion = $request->puntuacion;
        $valoracion->comentario = $request->comentario;
        $valoracion->save();

        $data = [
            'mensaje' => 'Valoracion de usuario actualizada correctamente',
            'valoracion' => $valoracion
        ];
        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Valoraciones $valoracion)
    {
        $valoracion->delete();
        $data = [
            'mensaje' => 'Valoracion de usuario eliminada correctamente',
            'valoracion' => $valoracion
        ];
        return response()->json($data);
    }
}
