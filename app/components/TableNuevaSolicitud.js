import { DocumentPlusIcon } from "@heroicons/react/24/outline";

export function TableNuevaSolicitud({ data, sendDataToParent }) {
  return (
    <div className="flex flex-col justify-center w-ful shadow-md">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr className="text-gray-500">
            <th className="py-2 px-3 uppercase tracking-wider border-[2px] border-[#ddd] text-left">
              Nombre de Solicitud
            </th>
            <th className="py-2 px-3 uppercase tracking-wider border-[2px] border-[#ddd] text-left">
              Valido
            </th>
            <th className="py-2 px-3 uppercase tracking-wider border-[2px] border-[#ddd] text-left"></th>
            <th className="py-2 px-3 uppercase tracking-wider border-[2px] border-[#ddd] text-left"></th>
            <th className="py-2 px-3 uppercase tracking-wider border-[2px] border-[#ddd] text-left"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((solicitud, index) => (
            <tr key={index}>
              <td className="py-2 px-3 text-left text-sm border-[2px] border-[#ddd]">
                {solicitud.nombre}
              </td>
              <td className="py-2 px-3 text-left text-sm border-[2px] border-[#ddd]">
                <button
                  class="flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  role="switch"
                >
                  {solicitud.valido ? (
                    <span class="h-4 w-4 translate-x-3.5 transform rounded-full bg-green-500 shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"></span>
                  ) : (
                    <span class="h-4 w-4 translate-x-0 transform rounded-full bg-red-500 shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"></span>
                  )}
                </button>
              </td>
              <td className="py-2 px-3 text-left text-sm border-[2px] border-[#ddd]"></td>
              <td className="py-2 px-3 text-left text-sm border-[2px] border-[#ddd]"></td>
              <td className="py-2 px-3 text-left text-sm border-[2px] border-[#ddd]">
                <button onClick={() => sendDataToParent(solicitud)}>
                  <DocumentPlusIcon className="w-7 hover:text-blue-600" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
