export function InfoSolicitud({ dataSolicitud, closeModal }) {
  return (
    <div className="text-lg w-[30rem]">
      <h3 className="text-left text-3xl font-bold my-4">
        Información Solicitud
      </h3>
      <p className="my-2">
        <span className="font-bold mr-2">Nombre de la solicitud:</span>
        {dataSolicitud.nombre}
      </p>
      <p className="my-2">
        <span className="font-bold mr-2">Solicitante:</span>
        {dataSolicitud.docente}
      </p>
      <p className="my-2">
        <span className="font-bold mr-2">Fecha de cierre de solicitud:</span>{" "}
        {dataSolicitud.fecha}
      </p>
      <div className="p-2 border-2 border-black rounded-lg my-3">
        <p className="text-slate-500 text-xl">Comentarios</p>
        <p className="text-wrap">{dataSolicitud.comentario}</p>
      </div>
      <div className="flex justify-center ">
        <button
          onClick={closeModal}
          className="py-2 px-3 rounded-lg bg-slate-400 text-white"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
