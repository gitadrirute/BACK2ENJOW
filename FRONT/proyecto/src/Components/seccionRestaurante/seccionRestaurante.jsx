import React, { useState } from "react";

const SeccionRestaurante = () => {
  return (
    <div className="max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-zinc-800 flex flex-col md:flex-row">
    <div className="relative md:w-1/2">
        <img className="w-full h-48 md:h-auto md:max-h-full object-cover" src="https://placehold.co/600x300" alt="Food"/>
        <div className="absolute inset-0 flex items-center justify-between px-3 py-2">
            <button className="text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-1">
                <span>&lt;</span>
            </button>
            <button className="text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-1">
                <span>&gt;</span>
            </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-1 pb-2">
            <span className="block w-2 h-2 bg-zinc-400 rounded-full"></span>
            <span className="block w-2 h-2 bg-white rounded-full"></span>
            <span className="block w-2 h-2 bg-zinc-400 rounded-full"></span>
        </div>
    </div>
    <div className="p-4 md:w-1/2">
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">PAY</span>
                <span className="ml-2 text-sm text-zinc-600 dark:text-zinc-400">JAPONÉS</span>
            </div>
            <div className="flex items-center space-x-1">
                <span className="text-zinc-800 dark:text-white text-lg font-semibold">9.9</span>
                <span className="text-zinc-400 dark:text-zinc-300">16</span>
            </div>
        </div>
        <div className="mt-2">
            <p className="text-lg font-bold text-zinc-800 dark:text-white">Futotta</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">C. Duque de la Victoria, 3, 29015, Málaga</p>
        </div>
        <div className="flex items-center justify-between mt-3">
            <span className="text-sm text-zinc-600 dark:text-zinc-400">Precio medio 15 €</span>
            <span className="text-xs text-red-600">¡-20% en carta!</span>
        </div>
    </div>
</div>
  )
}

export default SeccionRestaurante