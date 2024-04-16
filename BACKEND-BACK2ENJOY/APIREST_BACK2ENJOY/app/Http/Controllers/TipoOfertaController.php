<?php

namespace App\Http\Controllers;

use App\Models\TipoOferta;
use Illuminate\Http\Request;

class TipoOfertaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tipoOferta = TipoOferta::all();
        return response()->json($tipoOferta);
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
        $tipoOferta = new TipoOferta;
        $tipoOferta->nombre = $request->nombre;
        $tipoOferta->iconoReferencia = $request->iconoReferencia;
        $tipoOferta->descripcion = $request->descripcion;
        $tipoOferta->save();

        $data = [
            'mensaje' => 'tipo de oferta creada correctamente',
            'tipo de oferta' => $tipoOferta
        ];

        return response()->json($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(TipoOferta $tipoOferta, $id)
    {
        $tipoOferta = TipoOferta::findOrFail($id);
        return response()->json($tipoOferta);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TipoOferta $tipoOferta)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TipoOferta $tipoOferta, $id)
    {
        $tipoOferta = TipoOferta::findOrFail($id);
        $tipoOferta->nombre = $request->nombre;
        $tipoOferta->iconoReferencia = $request->iconoReferencia;
        $tipoOferta->descripcion = $request->descripcion;


        $tipoOferta->save();

        $data = [
            'mensaje' => 'tipo de oferta actualizada correctamente',
            'tipo de oferta' => $tipoOferta
        ];

        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TipoOferta $tipoOferta, $id)
    {
        $tipoOferta = TipoOferta::findOrFail($id);
        $tipoOferta->delete();
        return response()->json($tipoOferta);

    }
}
