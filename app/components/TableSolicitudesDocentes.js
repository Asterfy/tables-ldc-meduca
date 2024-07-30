import { DocumentCheckIcon } from "@heroicons/react/24/outline";

export function TableSolicitudesDocentes({ data, sendDataToParent }) {
  return (
    <div className="flex flex-col justify-center w-ful shadow-md">
      <table className="w-ful shadow-md">
        <thead className="bg-gray-50">
          <tr className="text-gray-500">
            <th className="py-2 px-3 uppercase tracking-wider border-[2px] border-[#ddd] text-left">
              Nombre de Solicitud
            </th>
            <th className="py-2 px-3 uppercase tracking-wider border-[2px] border-[#ddd] text-left">
              Docente
            </th>
            <th className="py-2 px-3 uppercase tracking-wider border-[2px] border-[#ddd] text-left">
              Fecha
            </th>
            <th className="py-2 px-3 uppercase tracking-wider border-[2px] border-[#ddd] text-left">
              Resolución
            </th>
            <th className="py-2 px-3 uppercase tracking-wider border-[2px] border-[#ddd] text-left">
              Comentario
            </th>
            <th className="py-2 px-3 uppercase tracking-wider border-[2px] border-[#ddd] text-left"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((solicitud, index) => (
            <tr key={index}>
              <td onClick={() => sendDataToParent(solicitud)} 
                className="py-2 px-3 text-blue-400 text-left text-sm border-[2px] border-[#ddd] hover:text-purple-700 hover:cursor-pointer">
                {solicitud.nombre}
              </td>
              <td className="py-2 px-3 text-left text-sm border-[2px] border-[#ddd]">
                {solicitud.docente}
              </td>
              <td className="py-2 px-3 text-left text-sm border-[2px] border-[#ddd]">
                {solicitud.fecha}
              </td>
              <td className="py-2 px-3 text-left text-sm border-[2px] border-[#ddd]">
                <select
                  id="cars"
                  className="border-[2px] border-black rounded-lg p-2 bg-white"
                >
                  <option value="aprobar">Aprobar</option>
                  <option value="rechazar">Rechazar</option>
                </select>
              </td>
              <td className="py-2 px-3 text-left text-sm border-[2px] border-[#ddd]">
                {solicitud.comentario}
              </td>
              <td className="py-2 px-3 text-left text-sm border-[2px] border-[#ddd]">
                <button>
                  <DocumentCheckIcon className="w-7" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
