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
        $valoracion->valoracion = $request->valoracion;
        $valoracion->comentario = $request->comentario;
        $valoracion->usuario_id = $request->usuario_id;
        $valoracion->negocio_id = $request->negocio_id;

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
    public function show( $id)
    {
        $valoracion = Valoraciones::findOrFail($id);
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
    public function update(Request $request, $id)
    {
        $valoracion = Valoraciones::findOrFail($id);
        $valoracion->valoracion = $request->valoracion;
        $valoracion->comentario = $request->comentario;
        $valoracion->usuario_id = $request->usuario_id;
        $valoracion->negocio_id = $request->negocio_id;
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
    public function destroy( $id)
    {
        $valoracion = Valoraciones::findOrFail($id);
        $valoracion->delete();
        $data = [
            'mensaje' => 'Valoracion de usuario eliminada correctamente',
            'valoracion' => $valoracion
        ];
        return response()->json($data);
    }
}