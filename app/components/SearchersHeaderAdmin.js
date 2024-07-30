import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

export function SearchersHeaderAdmin() {
  return (
    <div className="py-6">
        <div className="flex justify-start items-center">
          <div className="border-[2px] border-black rounded-lg flex items-center p-1 mx-2">
            <input className="" type="text" placeholder="Nombre director"></input>
            <button> <MagnifyingGlassIcon className="w-7"/></button>
          </div>
          <div className="border-[2px] border-black rounded-lg flex items-center p-1 mx-2">
            <input className="" type="text" placeholder="Nombre escuela"></input>
            <button> <MagnifyingGlassIcon className="w-7"/></button>
          </div>
          <div className="border-[2px] border-black rounded-lg flex items-center p-1 mx-2">
            <input className="" type="text" placeholder="SIACE"></input>
            <button> <MagnifyingGlassIcon className="w-7"/></button>
          </div>
        </div>
    </div>
  )
}
