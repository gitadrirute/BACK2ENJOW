<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HistorialPremium extends Model
{
    use HasFactory;

    public function historialPremiumUsuario()
    {

        $this->belongsTo(Usuario::class);
    }

    public function metodoPago()
    {
        $this->hasOne(MetodoPago::class);
    }
}
