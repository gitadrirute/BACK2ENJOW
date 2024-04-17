<?php

namespace App\Http\Controllers;

use App\Models\Negocio;
use Illuminate\Http\Request;

class NegocioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $negocio = Negocio::all();

        return response()->json($negocio);
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
        $negocio = new Negocio;
        $negocio->nombre = $request->nombre;
        $negocio->direccion = $request->direccion;
        $negocio->telefono = $request->telefono;
        $negocio->imagenReferencia = $request->imagenReferencia;
        $negocio->estado = $request->estado;
        $negocio->sitioWeb = $request->sitioWeb;
        $negocio->horario = $request->horario;
        $negocio->informacion = $request->informacion;
        $negocio->categoria_negocio_id = $request->categoria_negocio_id;

        $negocio->save();

        $data = [
            'mensaje' => 'Negocio creado correctamente',
            'negocio' => $negocio
        ];

        return response()->json($data);
    }

    /**
     * Display the specified resource.
     */
    public function show( $id)
    {
        $negocio = Negocio::findOrFail($id);
        return response()->json($negocio);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Negocio $negocio)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $negocio = Negocio::findOrFail($id);
        $negocio->nombre = $request->nombre;
        $negocio->direccion = $request->direccion;
        $negocio->telefono = $request->telefono;
        $negocio->imagenReferencia = $request->imagenReferencia;
        $negocio->estado = $request->estado;
        $negocio->sitioWeb = $request->sitioWeb;
        $negocio->horario = $request->horario;
        $negocio->informacion = $request->informacion;
        $negocio->categoria_negocio_id = $request->categoria_negocio_id;
        $negocio->save();

        $data = [
            'mensaje' => 'Negocio actualizado correctamente',
            'negocio' => $negocio
        ];

        return response()->json($data);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy( $id)
    {
        $negocio = Negocio::findOrFail($id);
        $negocio->delete();

        $data = [
            'mensaje' => 'Negocio eliminado correctamente',
            'negocio' => $negocio
        ];

        return response()->json($data);
    }
}
