import { UserCircleIcon } from "@heroicons/react/24/outline";

export function InfoDirectorAdmin({dataInfo}) {
  if (!dataInfo) {
    return null;
  }
  return (
    <div className="my-4 text-lg border-2 border-black p-3 flex  items-center relative">
      <UserCircleIcon className="w-16 mr-9" />
      <div className="">
        <p>
          <span className="font-bold">Nombre:</span> {dataInfo.director ?? "No disponible"}
        </p>
        <p>
          <span className="font-bold">Centro Educativo:</span> {dataInfo.escuela ?? "No disponible"}
        </p>
      </div>
      <div className="absolute right-12">
        <p>
          <span className="font-bold">Cantidad de Docentes:</span> {dataInfo.cantidadDocentes ?? 0}
        </p>
        <p>
          <span className="font-bold">Código SIACE:</span> {dataInfo.siace ?? "No disponible"}
        </p>
      </div>
    </div>
  );
}
