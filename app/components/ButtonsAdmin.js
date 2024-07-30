"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export function ButtonsAdmin({selected}) {
  const router = useRouter();

  const handleDocenteClick = () => {
    router.push("/solicitudes/docente");
  };

  const handleResueltasClick = () => {
    setIsSelectedDocente(false);
    setIsSelectedResueltas(true);
  };

  return (
    <div className="flex mt-3 items-center">
      <button
        onClick={handleDocenteClick}
        className={`py-1 px-2 text-black border-2 border-black rounded-tr-lg ${
          isSelectedDocente ? "bg-gray-300" : "bg-white hover:bg-gray-300"
        }`}
      >
        Solicitudes docentes
      </button>
      <button
        onClick={handleResueltasClick}
        className={`py-1 px-2 text-black border-2 border-black rounded-tl-lg rounded-tr-lg ${
          isSelectedResueltas ? "bg-gray-300" : "bg-white hover:bg-gray-300"
        }`}
      >
        Solicitudes resueltas
      </button>
      {/* <div className="flex items-center absolute right-24 p-2 text-lg">
        <label className="mr-2" htmlFor="estado">
          Estado:
        </label>
        <select id="estado" className="p-2 border-2 border-black rounded-lg">
          <option value="todos">Todos</option>
          <option value="activado">Activado</option>
          <option value="desactivado">Desactivado</option>
        </select>
      </div> */}
    </div>
  );
}
