"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export function FormSolicitud({ closeModal }) {
  const { register, handleSubmit } = useForm();

  const onSubmitForm = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div>
      <h3 className="text-center font-bold text-2xl my-3">Crear solicitud</h3>
      <form onSubmit={onSubmitForm} className="">
        <div className="mb-4">
          <label className="text-lg mr-2">Nombre de solicitud:</label>
          <input
            className="h-7 border-[1px] border-black rounded-lg p-2" 
            type="text"
            {...register("nombreSolicitud", { required: true })}
          ></input>
        </div>
        <div className="mb-4">
          <label className="text-lg mr-2 ">Solicitante:</label>
          <input
            className="h-7 border-[1px] border-black rounded-lg p-2"
            type="text"
            {...register("solicitante", { required: true })}
          ></input>
        </div>
        <div className="mb-4">
          <label className="text-lg mr-2">Fecha de cierre de solicitud:</label>
          <input
            className="border-[1px] border-black rounded-lg p-2"
            type="date"
            {...register("fechaCierre", { required: true })}
          ></input>
        </div>
        
        <div className="mb-4 grid">
          <label className="text-lg mr-2">Comentarios:</label>
          <textarea style={{'resize':'none'}} className="border-[1px] border-black rounded-lg p-2" {...register("comentario", { required: true })}></textarea>
        </div>
        <div className="flex justify-center">
          <button
            onClick={closeModal}
            className="py-2 px-3 bg-blue-400 mx-2 text-white rounded-xl"
          >
            Cancelar
          </button>
          <button className="py-2 px-3 bg-blue-400 mx-2 text-white rounded-xl">
            Enviar solicitud
          </button>
        </div>
      </form>
    </div>
  );
}
