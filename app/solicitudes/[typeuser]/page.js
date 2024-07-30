"use client"; // Asegúrate de que el componente esté marcado como cliente

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Asegúrate de usar next/navigation
import data from "../../../dataRequestsAdminSolved.json";
import { SimpleTable } from "@/app/components/SimpleTable";
import SolicitudesLayout from "./layout";

export default function Page({ params }) {
  const { typeuser } = params;
  const router = useRouter();

  useEffect(() => {
    if (typeuser === "docente") {
      router.push(`${typeuser}/nuevaSolicitud`);
    } else if (typeuser === "director") {
      router.push(`${typeuser}/solicitudesDocentes`);
    } else if (typeuser === "admin") {
      router.push(`${typeuser}/main`);
    }
  }, [typeuser, router]);

  return (
    <div>
      <p>Redirigiendo...</p>
    </div>
  );
}
