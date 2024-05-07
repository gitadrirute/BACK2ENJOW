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
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('apellidos');
            $table->string('nombreUsuario')->unique();
            $table->string("DNI")->unique();
            $table->string('correo')->unique();
            $table->string('contraseña');
            $table->boolean('validado');
            $table->timestamps();
            $table->unsignedBigInteger('rol_usuario_id');
            $table->foreign('rol_usuario_id')->references('id')->on('roles_usuarios');
        
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuarios');
    }
};
