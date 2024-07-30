import { SimpleTable } from "./SimpleTable";
import { ButtonsAdmin } from "./ButtonsAdmin";
import { ButtonsDirector } from "./ButtonsDirector";
import { ButtonsDocente } from "./ButtonsDocente";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Disclosure from "./copy/Disclosure";

export function MainComponent({ columns, data, typeuser, arrayFieldsSearch }) {
  return (
    <div>
      <div className="bg-white shadow-md rounded-md px-4">
        <h3 className="font-bold text-3xl p-5">Solicitudes para {typeuser}</h3>
        <div className="py-3">
          <div className="flex justify-start items-center">
            {arrayFieldsSearch.map((field) => (
              <div className="border-[2px] border-black rounded-lg flex items-center p-1 mx-4">
                {field.type === "text" ? (
                  <div className="flex items">
                    <input
                      className=""
                      type="text"
                      placeholder={field.placeholder}
                    ></input>
                    <button>
                      <MagnifyingGlassIcon className="w-6" />
                    </button>
                  </div>
                ) : field.type === "select" ? (
                  <select
                    className="p-2 rounded-lg bg-white"
                    defaultValue={field.placeholder}
                  >
                    <option value={field.placeholder} disabled>
                      {field.placeholder}
                    </option>
                    {field.options.map((option) => (
                      <option value={option.value}>{option.name}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    className=""
                    type="date"
                    placeholder={field.placeholder}
                  ></input>
                )}
              </div>
            ))}
          </div>
        </div>
        <Disclosure>
          {typeuser === "docente" ? (
            <ButtonsDocente />
          ) : typeuser === "director" ? (
            <ButtonsDirector />
          ) : (
            <ButtonsAdmin />
          )}
          <SimpleTable columns={columns} data={data} typeuser={typeuser} />
        </Disclosure>
      </div>
    </div>
  );
}
