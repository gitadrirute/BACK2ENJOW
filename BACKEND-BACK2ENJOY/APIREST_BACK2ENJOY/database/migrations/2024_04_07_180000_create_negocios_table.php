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
        Schema::create('negocios', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('direccion');
            $table->integer('telefono');
            $table->string('imagenReferencia');
            $table->string('estado');
            $table->string('sitioWeb');
            $table->string('horario');
            $table->string('informacion');
            $table->unsignedBigInteger('categoria_negocio_id');
            $table->foreign('categoria_negocio_id')->references('id')->on('categorias_negocios');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('negocios');
    }
};
