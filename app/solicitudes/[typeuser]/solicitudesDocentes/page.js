"use client";
import { TableSolicitudesDocentes } from "@/app/components/TableSolicitudesDocentes";
import { ButtonsDirector } from "@/app/components/ButtonsDirector";
import { SearhcersSIACEDirector } from "@/app/components/SearhcersSIACEDirector";
import Disclosure from "@/app/components/copy/Disclosure";
import data from "../../../../dataRequestsAdminSolved.json";
import { Modal } from "@/app/components/Modal";
import { InfoSolicitud } from "@/app/components/InfoSolicitud";
import { useState } from "react";

export default function page() {
  const [openModal, setOpenModal] = useState(false);
  const [solicitud, setSolicitud] = useState([]);

  const seeInfoRequest = (data) => {
    setSolicitud(data);
    setOpenModal(true);
  };

  return (
    <div className="container mx-auto p-4">
      <h3 className="font-bold text-3xl p-5">Solicitudes de Docentes</h3>
      <div className="bg-slate-50 shadow-md rounded-md px-4 my-4">
        <SearhcersSIACEDirector />
      </div>
      <div>
        <Modal
          open={openModal}
          setOpen={setOpenModal}
          onClose={() => setOpenModal(false)}
        >
          <InfoSolicitud
            dataSolicitud={solicitud}
            closeModal={() => setOpenModal(false)}
          />
        </Modal>
      </div>
      <div className="bg-white shadow-md rounded-md px-4">
        <Disclosure>
          <ButtonsDirector selected="docentes" />
          <TableSolicitudesDocentes
            data={data}
            sendDataToParent={seeInfoRequest}
          />
        </Disclosure>
      </div>
    </div>
  );
}
