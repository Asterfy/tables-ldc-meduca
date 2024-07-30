import { ButtonsDocente } from "@/app/components/ButtonsDocente";
import { SimpleTable } from "@/app/components/SimpleTable";
import { SearchersHeaderDocente } from "@/app/components/SearchersHeaderDocente";
import data from "../../../../dataRequestsDocente.json";
import Disclosure from "@/app/components/copy/Disclosure";
export default function page() {
  const columns = [
    {
      header: "Nombre de solicitud",
      accessorKey: "nombre",
    },
    {
      header: "Estado",
      accessorKey: "estado",
    },
    {
      header: "Fecha",
      accessorKey: "fecha",
    },
    {
      header: "Comentarios",
      accessorKey: "comentario",
    },
  ];
  return (
    <div className="container mx-auto p-4">
      <h3 className="font-bold text-3xl p-5">Mis solicitudes</h3>
      <div className="bg-slate-50 shadow-md rounded-md px-4 my-4">
        <SearchersHeaderDocente />
      </div>
      <div className="bg-white shadow-md rounded-md px-4">
        <Disclosure>
          <ButtonsDocente />
          <SimpleTable columns={columns} data={data} />
        </Disclosure>
      </div>
    </div>
  );
}
