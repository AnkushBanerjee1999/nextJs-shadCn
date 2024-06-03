"use client";

import React from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { DialogProbe } from "../data-table-dialog";
import { probeFilteredData } from "../data/probeFilterData";


interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  tableData: Array<any>;
  updateTableData: Function;
  handleFilterChange: (selectedValues: string[]) => void;
}

function DataTableToolbar<TData>({
  table,
  tableData,
  updateTableData,
  handleFilterChange,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    table.getColumn("PROBE_NAME")?.setFilterValue(event.target.value);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter Probe..."
          value={
            (table.getColumn("PROBE_NAME")?.getFilterValue() as string) ?? ""
          }
          onChange={handleChange}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("PROBE_NAME") && (
          <DataTableFacetedFilter
            column={table.getColumn("PROBE_NAME")}
            title="Probe"
            options={probeFilteredData}
          />
        )}

        {isFiltered && (
          <Button
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
        <DialogProbe tableData={tableData} updateTableData={updateTableData} />
      </div>
    </div>
  );
}

export { DataTableToolbar };
