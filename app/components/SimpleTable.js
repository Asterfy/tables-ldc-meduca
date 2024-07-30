"use client";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

export function SimpleTable({ columns, data }) {

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="flex flex-col justify-center w-ful shadow-md">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className=" text-gray-500">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="py-2 px-3 uppercase tracking-wider border-[2px] border-[#ddd] text-left"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => {
                const isStateColumn = cell.column.id === "estado";
                const stateValue = cell.getValue();
                let bgColor = "";

                if (isStateColumn) {
                  bgColor =
                    stateValue.toLowerCase() === "aprobado"
                      ? "bg-green-600 text-white"
                      : stateValue.toLowerCase() === "rechazado"
                      ? "bg-red-400 text-white"
                      : stateValue.toLowerCase() === "pendiente"
                      ? "bg-yellow-400 text-white"
                      : "";
                }

                return (
                  <td
                    key={cell.id}
                    className={`py-2 px-3 text-left text-sm border-[2px] border-[#ddd] ${bgColor} ${
                      row.id % 2 === 0 ? "" : ""
                    }`}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}