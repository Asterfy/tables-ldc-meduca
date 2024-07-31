export default function CustomTableDirector({data }) {
  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="border-2 border-black bg-gray-400 text-white">
            <th className="border-2 border-black ">Nombre de Solicitud</th>
            <th className="border-2 border-black ">Docente</th>
            <th className="border-2 border-black ">Fecha</th>
            <th className="border-2 border-black ">Resolución</th>
            <th className="border-2 border-black ">Comentario</th>
            <th className="border-2 border-black "></th>
          </tr>
        </thead>
        <tbody>
          {data.map((solicitud, index) => (
            <tr key={index}>
              <td className="px-2 border-2 border-black">{solicitud.nombre}</td>
              <td className="px-2 border-2 border-black">
                {solicitud.nombreDocente}
              </td>
              <td className="px-2 border-2 border-black">{solicitud.fecha}</td>
              <td className="px-2 border-2 border-black">
                <select id="cars">
                  <option value="aprobar">Aprobar</option>
                  <option value="rechazar">Rechazar</option>
                </select>
              </td>
              <td className="px-2 border-2 border-black max-w-3xl">
                {solicitud.comentario}
              </td>
              <td className="px-2 border-2 border-black">
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
