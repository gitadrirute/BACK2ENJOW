<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipoOferta extends Model
{
    use HasFactory;

    public function ofertas(){

        $this->hasMany(Oferta::class);
    }
}
