<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\DB;

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
        try {

            $validated = $request->validate(
                [
                    'nombre' => 'required|regex:/^[a-zA-Z\s]+$/|max:30', //no puedo escribir caracteres especiales
                    'apellidos' => 'required|regex:/^[a-zA-Z\s]+$/|max:40', //no puedo escribir caracteres especiales
                    'nombreUsuario' => 'required|max:13|min:5|unique:usuarios,nombreUsuario',
                    'DNI' => 'required|size:9|regex:/^[0-9]{8}[A-Za-z]$/|unique:usuarios,DNI', //asegura que el DNI consista en exactamente 8 números seguidos de una letra (puede ser mayúscula o minúscula).
                    'correo' => 'required|email|max:35|min:13|unique:usuarios,correo',
                    'contraseña' => 'required|confirmed|max:30|min:8|regex:/[A-Z]/|regex:/[a-z]/|regex:/[0-9]/|regex:/[@$!%*?&]/', // la contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.

                ],
                [
                    'nombre.required' => 'El campo nombre es obligatorio',
                    'nombre.regex' => 'El campo nombre no puede contener caracteres especiales',
                    'nombre.max' => 'El campo nombre no puede tener mas de 30 caracteres',
                    'apellidos.required' => 'El campo apellidos es obligatorio',
                    'apellidos.regex' => 'El campo apellidos no puede contener caracteres especiales',
                    'apellidos.max' => 'El campo apellidos no puede tener mas de 40 caracteres',
                    'nombreUsuario.required' => 'El campo nombre de usuario es obligatorio',
                    'nombreUsuario.max' => 'El nombre de usuario debe de tener 13 caracteres como maximo',
                    'nombreUsuario.min' => 'El nombre de usuario no debe de tener menos de 5 caracteres',
                    'nombreUsuario.unique' => 'Este nombre de usuario ya existe',
                    'DNI.required' => 'El campo DNI es obligatorio',
                    'DNI.size' => 'El DNI debe de tener 9 caracteres',
                    'DNI.regex' => 'El DNI debe de tener el formato correcto',
                    'DNI.unique' => 'Este DNI ya existe',
                    'correo.required' => 'El campo correo es obligatorio',
                    'correo.email' => 'El correo debe de tener el formato correcto',
                    'correo.max' => 'El campo correo supera el limite máximo de caracteres:35',
                    'correo.min' => 'El campo correo no supera el minimo de caracteres: 13',
                    'correo.unique' => 'Este correo ya existe',
                    'contraseña.required' => 'El campo contraseña es obligatorio',
                    'contraseña.confirmed' => 'La  confirmacion de la contraseña no coincide',
                    'contraseña.max' => 'El campo contraseña no puede tener mas de 30 caracteres',
                    'contraseña.min' => 'El campo contraseña no puede tener menos de 8 carcateres',
                    'contraseña.regex' => 'La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial',
                    'contraseña_confirmation'=>'required'

                ]

            );

            $rolPredeterminado = 2;
            $validacionPredeterminada = 0;

            $usuario = new Usuario;
            $usuario->nombre = $validated['nombre'];
            $usuario->apellidos =  $validated['apellidos'];
            $usuario->nombreUsuario =  $validated['nombreUsuario'];
            $usuario->DNI = $validated['DNI'];
            $usuario->correo =  $validated['correo'];
            $usuario->contraseña = Hash::make($validated['contraseña']);
            $usuario->validado =  $validacionPredeterminada;
            $usuario->rol_usuario_id = $rolPredeterminado; //rol con id 2 , usuario normal
            $usuario->save();

            $data = [
                'mensaje' => 'Usuario creado correctamente',
                'usuario' => $usuario
            ];

            return response()->json($data, Response::HTTP_CREATED);
        } catch (ValidationException $errorValidacion) {

            return response()->json([
                'mensaje' => 'Error de validacion',
                'error' => $errorValidacion->errors()
            ], 422);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
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
        $usuario->nombreUsuario = $request->nombreUsuario;
        $usuario->DNI = $request->DNI;
        $usuario->correo = $request->correo;
        $usuario->contraseña = $request->contraseña;
        $usuario->validado = $request->validado;
        $usuario->rol_usuario_id = $request->rol_usuario_id;

        $usuario->save();

        $data = [
            'mensaje' => 'Usuario actualizado correctamente',
            'usuario' => $usuario
        ];

        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $usuario = Usuario::findOrFail($id);
        $usuario->delete();
        $data = [
            'mensaje' => 'Usario eliminado correctamente',
            'usuario' => $usuario
        ];
        return response()->json($data);
    }

    public function mostrarUsuariosNoValidos(){

        $usuariosNoValidos = Usuario::where('validado',false)->get(); 

        $data = [
            'mensaje' => 'Usuario no validados',
            'usuario' => $usuariosNoValidos
        ];
        return response()->json($data);

    }

    public function UsuariosNoValidConFotos(){

        $UsuarioNoValidFotos = DB::table('galeria_usuarios')
        ->join('usuarios', 'usuarios.id', '=','galeria_usuarios.usuario_id')
        ->select('usuarios.nombre','usuarios.apellidos','usuarios.nombreUsuario','usuarios.correo' ,'galeria_usuarios.rutaImagen')
        ->where('usuarios.validado',false)->get(); 

        $data=[
           'mensaje' => 'Usuarios  pendientes de validación con sus fotos',
           'usuario' => $UsuarioNoValidFotos

        ];

        return response()->json($data);
        
    }


    
}
