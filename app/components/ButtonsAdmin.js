"use client";
import { useRouter } from "next/navigation";

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
    </div>
  );
}
