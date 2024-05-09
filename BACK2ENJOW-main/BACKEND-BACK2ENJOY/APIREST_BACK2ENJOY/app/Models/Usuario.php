<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;

    public function historialPremium()
    {

        return $this->hasMany(HistorialPremium::class);
    }

    public function roles()
    {
        return $this->belongsTo(RolesUsuario::class);
    }

    public function valoraciones()
    {
        return $this->hasMany(Valoraciones::class);
    }
}
