import { TableAdminMain } from "@/app/components/TableAdminMain";
import { SearchersHeaderAdmin } from "@/app/components/SearchersHeaderAdmin";
import Disclosure from "@/app/components/copy/Disclosure";
import data from "../../../../dataRequestsAdminSchools.json";

export default function page() {
  return (
    <div className="container mx-auto p-4">
      <h3 className="font-bold text-3xl p-5">Solicitudes Admin</h3>
      <div className="bg-slate-50 shadow-md rounded-md px-4 my-4">
        <SearchersHeaderAdmin />
      </div>
      <div className="bg-white shadow-md rounded-md px-4">
        <Disclosure>
          <TableAdminMain data={data} />
        </Disclosure>
      </div>
    </div>
  );
}
