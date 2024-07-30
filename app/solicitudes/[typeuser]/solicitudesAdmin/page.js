"use client";
import { TableAdminSolicitudes } from "@/app/components/TableAdminSolicitudes";
import { AllSearchersHeader } from "@/app/components/AllSearchersHeader";
import { InfoDirectorAdmin } from "@/app/components/InfoDirectorAdmin";
import Disclosure from "@/app/components/copy/Disclosure";
import { useState,useEffect } from "react";
import data from "../../../../dataRequestsAdminSolved.json";

export default function page() {
  const [siaceData, setSiaceData] = useState(null);

  useEffect(() => {
    const localData = localStorage.getItem("siaceData");
    if (localData) {
      setSiaceData(JSON.parse(localData));
    }
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h3 className="font-bold text-3xl p-5">Solicitudes Admin</h3>
      <div className="bg-slate-50 shadow-md rounded-md px-4 my-4">
        <InfoDirectorAdmin dataInfo={siaceData} />
        <AllSearchersHeader />
      </div>
      <div className="bg-white shadow-md rounded-md px-4">
        <Disclosure>
          <TableAdminSolicitudes data={data} />
        </Disclosure>
      </div>
    </div>
  );
}
