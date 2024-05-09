<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Negocio extends Model
{
    use HasFactory;

    protected $table = 'nombre_de_la_tabla'; // Reemplaza 'nombre_de_la_tabla' con el nombre real de tu tabla de negocios

    protected $fillable = [
        // Define aquí los campos que puedes llenar masivamente
        'nombre',
        'direccion',
        // Agrega más campos según sea necesario
    ];
}
