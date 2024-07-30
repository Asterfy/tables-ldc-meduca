// SolicitudesLayout.js
import { Sidebar } from "@/app/components/Sidebar";
import { BellAlertIcon, HeartIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { ButtonsAdmin } from "@/app/components/ButtonsAdmin";
import { ButtonsDirector } from "@/app/components/ButtonsDirector";
import { ButtonsDocente } from "@/app/components/ButtonsDocente";
import Disclosure from "@/app/components/copy/Disclosure";
import { Children } from "react";

export default function SolicitudesLayout({ params, children }) {
  const { typeuser } = params;

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full relative">
        <div className="border-b-2 border-b-gray-200 flex justify-end p-2 shadow-md">
          <h1 className="absolute left-5 top-3 text-lg">
            Libreta Digital de Calificaciones
          </h1>
          <BellAlertIcon className="w-9 mx-2" />
          <UserCircleIcon className="w-9 mx-2" />
        </div>
        {children}
      </div>
    </div>
  );
}
