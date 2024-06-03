"use client";

import { ColumnDef } from "@tanstack/table-core"; // Make sure to import ColumnDef from TanStack Table
import { clientTask } from "../data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

// Function to generate columns based on task features
export const createColumns = <T extends clientTask>(
  data: T[],
  setData: React.Dispatch<React.SetStateAction<T[]>>
): ColumnDef<T, unknown>[] => {
  // Ensure correct typing for columns
  return [
    {
      accessorKey: "clientName",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Client Name" />
      ),
      cell: ({ row }) => {
        return (
          <div className="w-[150px] text-foreground">
            {row.getValue("clientName")}
          </div>
        );
      },
      filterFn: (row, columnId, filterValue) => {
        const cellValue = String(row.getValue(columnId)).toLowerCase();
        if (Array.isArray(filterValue)) {
          return filterValue.some((value) =>
            cellValue.includes(String(value).toLowerCase())
          );
        }
        return cellValue.includes(String(filterValue).toLowerCase());
      },
      enableSorting: true,
      enableHiding: true,
    },
    {
      accessorKey: "description",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Description" />
      ),
      cell: ({ row }) => {
        const eachRowdescription: string = row.getValue(
          "description"
        ) as string;
        const maxLength = 100;
        const truncatedDescription =
          eachRowdescription.length > maxLength
            ? eachRowdescription.substring(0, maxLength) + "..."
            : eachRowdescription;

        return (
          <div className="w-full text-foreground overflow-hidden whitespace-nowrap">
            {truncatedDescription}
          </div>
        );
      },
      filterFn: (row, columnId, filterValue) => {
        const cellValue = String(row.getValue(columnId)).toLowerCase();
        if (Array.isArray(filterValue)) {
          return filterValue.some((value) =>
            cellValue.includes(String(value).toLowerCase())
          );
        }
        return cellValue.includes(String(filterValue).toLowerCase());
      },
      enableSorting: false,
      enableHiding: false,
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <DataTableRowActions
          row={row}
          tableData={data}
          updateTableData={setData}
        />
      ),
    },
  ];
};

// Hook to use the columns in a component
export const useColumns = <T extends clientTask>(
  data: T[],
  setData: React.Dispatch<React.SetStateAction<T[]>>
): ColumnDef<T, unknown>[] => {
  return createColumns(data, setData);
};
