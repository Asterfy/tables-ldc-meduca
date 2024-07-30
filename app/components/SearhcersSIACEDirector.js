import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export function SearhcersSIACEDirector() {
  return (
    <div className="py-6">
      <div className="flex justify-center items-center">
        <div className="border-[2px] border-black rounded-lg flex items-center p-1 mx-4">
          <input
            className=""
            type="text"
            placeholder="Nombre solicitud"
          ></input>
          <button>
            <MagnifyingGlassIcon className="w-7" />
          </button>
        </div>
        <div className="border-[2px] border-black rounded-lg flex items-center p-1 mx-4">
          <input className="" type="text" placeholder="Nombre docente"></input>
          <button>
            <MagnifyingGlassIcon className="w-7" />
          </button>
        </div>
        <div className="border-[2px] border-black rounded-lg h-10 flex items-center p-1 mx-4">
          <input className="" type="date" placeholder="Fecha"></input>
        </div>
      </div>
    </div>
  );
}
