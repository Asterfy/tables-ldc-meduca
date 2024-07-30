"use client";
import Link from "next/link";
import { CalendarIcon } from "@heroicons/react/24/outline";
import {HomeIcon} from "@heroicons/react/24/outline"

export function Sidebar() {
  return (
    <div className="min-h-[100vh] h-auto bg-[#08224F] w-28">
      <div className="text-white flex flex-col items-center mx-2 px-2 py-4 my-10 rounded-lg hover:cursor-pointer hover:bg-blue-800">
        <HomeIcon className="w-7" />
        <span className="text-xs text-center flex pt-2">Home</span>
      </div>
      <div className="text-white flex flex-col items-center mx-2 px-2 py-4 my-10 rounded-lg hover:cursor-pointer hover:bg-blue-800">
        <CalendarIcon className="w-7" />
        <span className="text-xs text-center flex pt-2">Mis Solicitudes</span>
      </div>
      {/* <Link
        href={`/solicitudes`}
        key="Solicitudes"
        className="bg-blue-meduca-2 text-white group flex flex-col items-center px-2 py-4 font-medium rounded-md sm:flex-none"
      >
        <span className="text-xs text-center flex pt-2">Mis Solicitudes</span>
      </Link> */}
    </div>
  );
}
