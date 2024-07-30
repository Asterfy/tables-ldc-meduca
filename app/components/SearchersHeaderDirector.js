import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export function SearchersHeaderDirector() {
  return (
    <div className="py-6">
      <div className="flex justify-start items-center">
        <div className="border-[2px] border-black rounded-lg flex items-center p-1 mx-2">
          <input
            className=""
            type="text"
            placeholder="Nombre solicitud"
          ></input>
          <button>
            <MagnifyingGlassIcon className="w-7" />
          </button>
        </div>
        <div className="border-[2px] border-black rounded-lg flex items-center p-1 mx-2">
          <input
            className=""
            type="text"
            placeholder="Nombre de Docente"
          ></input>
          <button>
            <MagnifyingGlassIcon className="w-7" />
          </button>
        </div>
        <div className="border-[2px] border-black rounded-lg h-10 flex items-center p-1 mx-2">
          <input className="" type="date" placeholder="Fecha"></input>
        </div>
        <div className="flex items-center p-2 text-lg mx-2">
          <select
            id="cars"
            className="p-2 border-2 border-black rounded-lg bg-white h-10"
          >
            <option value="Estado" disabled selected>
              Estado
            </option>
            <option value="todos">Todos</option>
            <option value="aprobado">Aprobado</option>
            <option value="rechazado">Rechazado</option>
            <option value="pendiente">Pendiente</option>
          </select>
        </div>
      </div>
    </div>
  );
}
