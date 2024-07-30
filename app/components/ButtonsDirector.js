"use client";
import { useRouter } from "next/navigation";

export function ButtonsDirector({selected=""}) {
  const router = useRouter();

  const handleDocenteClick = () => {
    router.push("/solicitudes/director/solicitudesDocentes");
  };

  const handleResueltasClick = () => {
    router.push("/solicitudes/director/solicitudesResueltas");
  };

  return (
    <div className="mt-3">
      <button
        onClick={handleDocenteClick}
        className={`py-1 px-2 text-black border-[1px] rounded-tr-lg border-black ${
          selected == "docentes" ? "bg-gray-300" : "bg-white hover:bg-gray-300"
        }`}
      >
        Solicitudes docentes
      </button>
      <button
        onClick={handleResueltasClick}
        className={`py-1 px-2 text-black border-[1px] rounded-tr-lg rounded-tl-lg border-black ${
          selected != "docentes" ? "bg-gray-300" : "bg-white hover:bg-gray-300"
        }`}
      >
        Solicitudes resueltas
      </button>
    </div>
  );
}
