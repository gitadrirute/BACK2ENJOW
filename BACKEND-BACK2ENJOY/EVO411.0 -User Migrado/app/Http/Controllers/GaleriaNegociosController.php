<?php

namespace App\Http\Controllers;

use App\Models\GaleriaNegocios;
use Illuminate\Http\Request;

class GaleriaNegociosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $galeriaNegocio = GaleriaNegocios::all();

        return response()->json($galeriaNegocio);
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
        $galeriaNegocio = new GaleriaNegocios();
        $galeriaNegocio->rutaImagen = $request->rutaImagen;
        $galeriaNegocio->negocio_id = $request->negocio_id;
        $galeriaNegocio->save();
        $data = [
            'mensaje' => 'Imagen creada correctamente',
            'tipo de oferta' => $galeriaNegocio
        ];

        return response()->json($data);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $galeriaNegocio = GaleriaNegocios::findOrFail($id);
        return response()->json($galeriaNegocio);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(GaleriaNegocios $galeriaNegocios)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,  $id)
    {
        $galeriaNegocio = GaleriaNegocios::findOrFail($id);

        $galeriaNegocio->rutaImagen = $request->rutaImagen;
        $galeriaNegocio->negocio_id = $request->negocio_id;
        $galeriaNegocio->save();
        $data = [
            'mensaje' => 'Imagen actualizada correctamente',
            'tipo de oferta' => $galeriaNegocio
        ];

        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy( $id)
    {
        $galeriaNegocio = GaleriaNegocios::findOrFail($id);
        $galeriaNegocio->delete();

        $data = [
            'mensaje' => 'Imagen eliminada correctamente',
            'usuario' => $galeriaNegocio
        ];
        return response()->json($data);
    }
}
