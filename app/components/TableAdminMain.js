"use client";
import { EyeIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export function TableAdminMain({ data }) {
  const router = useRouter();

  const goToPageAdminSolicitudes = (siaceData) => {
    localStorage.setItem("siaceData", JSON.stringify(siaceData));
    router.push("/solicitudes/admin/solicitudesAdmin");
  };

  return (
    <div className="flex flex-col justify-center w-ful shadow-md">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr className="text-gray-500">
            <th className="py-2 px-3 uppercase tracking-wider border-[2px] border-[#ddd] text-left">
              SIACE
            </th>
            <th className="py-2 px-3 uppercase tracking-wider border-[2px] border-[#ddd] text-left">
              Escuela
            </th>
            <th className="py-2 px-3 uppercase tracking-wider border-[2px] border-[#ddd] text-left">
              Director
            </th>
            <th className="py-2 px-3 uppercase tracking-wider border-[2px] border-[#ddd] text-left"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((solicitud, index) => (
            <tr key={index}>
              <td className="py-2 px-3 text-left text-sm border-[2px] border-[#ddd]">
                {solicitud.siace}
              </td>
              <td className="py-2 px-3 text-left text-sm border-[2px] border-[#ddd]">
                {solicitud.escuela}
              </td>
              <td className="py-2 px-3 text-left text-sm border-[2px] border-[#ddd]">
                {solicitud.director}
              </td>
              <td className="py-2 px-3 text-left text-sm border-[2px] border-[#ddd]">
                <button onClick={() => goToPageAdminSolicitudes(solicitud)}>
                  <EyeIcon className="w-7 hover:text-blue-500" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
