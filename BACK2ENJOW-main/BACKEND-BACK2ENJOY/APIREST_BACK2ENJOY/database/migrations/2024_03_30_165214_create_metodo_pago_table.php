<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('metodo_pago', function (Blueprint $table) {
            $table->id();
            $table->string('tipo');
            $table->string('nombreTitular');
            $table->integer('codigoSeguridad')->unique();
            $table->integer('numeroTarjeta')->unique();
            $table->string('pais');
            $table->string('ciudad');
            $table->integer('codigoPostal');
            //NO creo que sea necesario la fecha de creacion  por timestamps()
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('metodo_pago');
    }
};
