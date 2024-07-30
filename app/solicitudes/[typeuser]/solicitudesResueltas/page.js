import data from "../../../../datRequestsDirectorSolved.json";
import { SimpleTable } from "@/app/components/SimpleTable";
import { SearchersHeaderDirector } from "@/app/components/SearchersHeaderDirector";
import Disclosure from "@/app/components/copy/Disclosure";
import { ButtonsDirector } from "@/app/components/ButtonsDirector";

export default function page() {
  const columns = [
    {
      header: "Nombre de solicitud",
      accessorKey: "nombre",
    },
    {
        header: "Docente",
        accessorKey: "Docente",
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
      <h3 className="font-bold text-3xl p-5">Solicitudes Resueltas</h3>
      <div className="bg-slate-50 shadow-md rounded-md px-4 my-4 w">
        <SearchersHeaderDirector />
      </div>
      <div className="bg-white shadow-md rounded-md px-4">
        <Disclosure>
          <ButtonsDirector />
          <SimpleTable columns={columns} data={data} />
        </Disclosure>
      </div>
    </div>
  );
}
