
export function TableAdminSolicitudes({data}) {
  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr className="border-2 border-black bg-gray-400 text-white">
            <th className="border-2 border-black ">Nombre de solicitud</th>
            <th className="border-2 border-black ">Docente</th>
            <th className="border-2 border-black ">Estado</th>
            <th className="border-2 border-black ">Fecha</th>
            <th className="border-2 border-black ">Comentarios</th>
            <th className="border-2 border-black ">Tipo</th>
          </tr>
        </thead>
        <tbody>
          {data.map((solicitud, index) => (
            <tr key={index}>
              <td className="px-2 border-2 border-black text-blue-600 hover:text-purple-500">{solicitud.nombre}</td>
              <td className="px-2 border-2 border-black">
                {solicitud.docente}
              </td>
              {solicitud.estado.toLowerCase() == "aprobado" && (
                <td className="px-2 border-2 border-black bg-green-400 text-white">
                  {solicitud.estado}
                </td>
              )}
              {solicitud.estado.toLowerCase() == "rechazado" && (
                <td className="px-2 border-2 border-black bg-red-400 text-white">
                  {solicitud.estado}
                </td>
              )}
              {solicitud.estado.toLowerCase() == "pendiente" && (
                <td className="px-2 border-2 border-black bg-yellow-400 text-white">
                  {solicitud.estado}
                </td>
              )}
              <td className="px-2 border-2 border-black">{solicitud.fecha}</td>
              <td className="px-2 border-2 border-black">
                {solicitud.comentario}
              </td>
              <td className="px-2 border-2 border-black">{solicitud.tipo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
