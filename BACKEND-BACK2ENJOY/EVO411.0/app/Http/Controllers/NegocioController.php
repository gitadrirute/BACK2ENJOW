<?php

namespace App\Http\Controllers;

use App\Models\Negocio;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\DB;

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
        try {

            $validated = $request->validate(
                [
                    'nombre' => 'required|regex:/^[a-zA-Z\s]+$/|max:50|unique:negocios,nombre',
                    'NIF' => 'required|regex:/^[0-9]{8}[A-Za-z]$/|unique:negocios,nif',
                    'direccion' => 'required|max:150',
                    'telefono' => 'required|regex:/^\d{9,15}$/|unique:negocios,telefono',
                    'sitioWeb' => 'required|url|max:120|unique:negocios,sitioWeb',
                    'horario' => 'required|regex:/^([01]?[0-9]|2[0-3]):(00|15|30|45)-([01]?[0-9]|2[0-3]):(00|15|30|45)$/',
                    'informacion' => 'max:250',
                    'ubicacion' => 'required|regex:/^([-+]?\d{1,2}\.\d+),\s*([-+]?\d{1,3}\.\d+)$/',
                    'categoria_negocio_id' => 'required',
                    'usuario_id' => 'required'
                ],
                [
                    'nombre.required' => 'El campo nombre es obligatorio',
                    'nombre.regex' => 'El campo nombre no puede contener caracteres especiales',
                    'nombre.max' => 'El campo nombre no puede tener mas de 50 caracteres',
                    'nombre.unique' => 'Esta empresa ya esta registrada',
                    'NIF.required' => 'El campo NIF es obligatorio',
                    'NIF.regex' => 'El campo NIF debe de seguir el formato',
                    'NIF.unique' => 'Este NIF ya está en uso',
                    'direccion.required' => 'El campo dirección de usuario es obligatorio',
                    'direccion.max' =>  'La dirección no puede tener más de 150 caracteres',
                    'telefono.required' => 'El número de teléfono es obligatorio',
                    'telefono.regex' => 'El número de teléfono debe tener entre 9 y 15 dígitos',
                    'telefono.unique' => 'Este teléfono ya existe',
                    'sitioWeb.required' => 'El campo sitio web es obligatorio',
                    'sitioWeb.url' => 'El campo sitio web debe contener una URL válida',
                    'sitioWeb.max' => 'El campo sitio web no puede tener más de 120 caracteres',
                    'sitioWeb.unique' => 'Este sitio web ya está en uso',
                    'horario.required' => 'El campo horario es obligatorio',
                    'horario.regex' => 'El horario debe estar en formato de HH:MM - HH:MM',
                    'informacion.max' => 'El campo de inofrmacion ha superado el limite de caracteres',
                    'ubicacion.regex' => 'La ubicación debe estar en formato de coordenadas geográficas (latitud, longitud)',
                    'categoria_negocio_id.required' => 'El campo categoría de negocio es obligatorio',
                    'usuario_id.required' => 'El campo usuario es obligatorio',

                ]
            );

            $validacionPredeterminada = 0;

            $negocio = new Negocio;
            $negocio->nombre = $validated['nombre'];
            $negocio->NIF = $validated['NIF'];
            $negocio->direccion = $validated['direccion'];
            $negocio->telefono = $validated['telefono'];
            $negocio->sitioWeb = $validated['sitioWeb'];
            $negocio->horario =  $validated['horario'];
            $negocio->informacion = $validated['informacion'];
            $negocio->ubicacion = $validated['ubicacion'];
            $negocio->validado = $validacionPredeterminada;
            $negocio->categoria_negocio_id = $validated['categoria_negocio_id'];
            $negocio->usuario_id = $validated['usuario_id'];

            $negocio->save();

            $data = [
                'mensaje' => 'Negocio creado correctamente',
                'negocio' => $negocio
            ];

            return response()->json($data, Response::HTTP_CREATED);
        } catch (ValidationException $errores) {

            return response()->json([
                'mensaje' => 'Error de validacion',
                'error' => $errores->errors()
            ], 422);
        }
    }


    /**
     * Display the specified resource.
     */
    public function show($id)
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
        $negocio->NIF = $request->NIF;
        $negocio->direccion = $request->direccion;
        $negocio->telefono = $request->telefono;
        $negocio->sitioWeb = $request->sitioWeb;
        $negocio->horario = $request->horario;
        $negocio->informacion = $request->informacion;
        $negocio->ubicacion = $request->ubicacion;
        $negocio->validado = $request->validado;
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
    public function destroy($id)
    {
        $negocio = Negocio::findOrFail($id);
        $negocio->delete();

        $data = [
            'mensaje' => 'Negocio eliminado correctamente',
            'negocio' => $negocio
        ];

        return response()->json($data);
    }

    public function NegociosNoValidConFotos(){

        $NegociosNoVaildFotos = DB::table('galeria_negocios')
        ->join('negocios', 'negocios.id', '=','galeria_negocios.negocio_id')
        ->select('negocios.nombre','negocios.NIF','galeria_negocios.rutaImagen')
        ->where('negocios.validado',false)->get(); 

        $data=[
           'mensaje' => 'Negocios  pendientes de validación con sus fotos',
           'negocios' => $NegociosNoVaildFotos

        ];

        return response()->json($data);
        
    }
}
