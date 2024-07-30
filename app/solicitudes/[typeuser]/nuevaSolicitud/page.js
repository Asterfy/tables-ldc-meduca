"use client";
import { ButtonsDocente } from "@/app/components/ButtonsDocente";
import { TableNuevaSolicitud } from "@/app/components/TableNuevaSolicitud";
import Disclosure from "@/app/components/copy/Disclosure";
import { Modal } from "@/app/components/Modal";
import { FormSolicitud } from "@/app/components/FormSolicitud";
import { useState } from "react";

export default function page() {
  
  const [openForm, setOpenForm] = useState(false)

  const openCreateRequest = (data) => {
    setOpenForm(true)
    console.log(data)
  }
  const data = [
    {
      nombre: "Solicitud 1",
      valido: true,
    },
    {
      nombre: "Solicitud 2",
      valido: false,
    },
    {
      nombre: "Solicitud 3",
      valido: true,
    },
    {
      nombre: "Solicitud 4",
      valido: false,
    },
    {
      nombre: "Solicitud 5",
      valido: true,
    },
    {
      nombre: "Solicitud 6",
      valido: false,
    },
    {
      nombre: "Solicitud 7",
      valido: true,
    },
    {
      nombre: "Solicitud 8",
      valido: false,
    },
    {
      nombre: "Solicitud 9",
      valido: true,
    },
    {
      nombre: "Solicitud 10",
      valido: false,
    },
    {
      nombre: "Solicitud 11",
      valido: true,
    },
    {
      nombre: "Solicitud 12",
      valido: false,
    },
    {
      nombre: "Solicitud 13",
      valido: true,
    },
    {
      nombre: "Solicitud 14",
      valido: false,
    },
    {
      nombre: "Solicitud 15",
      valido: true,
    },
    {
      nombre: "Solicitud 16",
      valido: false,
    },
    {
      nombre: "Solicitud 17",
      valido: true,
    },
    {
      nombre: "Solicitud 18",
      valido: false,
    },
    {
      nombre: "Solicitud 19",
      valido: true,
    },
    {
      nombre: "Solicitud 20",
      valido: false,
    },
  ]
  return (
    <div className="container mx-auto p-4">
      <h3 className="font-bold text-3xl p-5">Mis solicitudes</h3>
      <div className="bg-slate-50 shadow-md rounded-md px-4 my-4 h-28">
      </div>
      <Modal open={openForm} setOpen={setOpenForm} onClose={() => setOpenForm(false)}>
        <FormSolicitud closeModal={() => setOpenForm(false)} />
      </Modal>
      <div className="bg-white shadow-md rounded-md px-4">
        <Disclosure>
          <ButtonsDocente selected="new"/>
          <TableNuevaSolicitud data={data} sendDataToParent={openCreateRequest}/>
        </Disclosure>
      </div>
    </div>
  );
}
