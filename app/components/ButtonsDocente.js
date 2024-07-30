"use client";
import { useRouter } from "next/navigation";

export function ButtonsDocente( {selected = ""}) {
  const router = useRouter();

  const handleNewClick = () => {
    router.push("/solicitudes/docente/nuevaSolicitud");
  };

  const handleMeClick = () => {
    router.push("/solicitudes/docente/misSolicitudes");
  };

  return (
    <div className="mt-3">
      <button
        onClick={handleNewClick}
        className={`py-1 px-2 text-black border-2 border-black rounded-tl-lg rounded-tr-lg ${
          selected == "new" ? "bg-gray-300" : "bg-white hover:bg-gray-300"
        }`}
      >
        Nueva Solicitud
      </button>
      <button
        onClick={handleMeClick}
        className={`py-1 px-2 text-black border-2 border-black rounded-tl-lg rounded-tr-lg ${
          selected != "new" ? "bg-gray-300" : "bg-white hover:bg-gray-300"
        }`}
      >
        Mis Solicitudes
      </button>
    </div>
  );
}
