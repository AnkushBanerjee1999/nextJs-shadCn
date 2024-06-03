"use client";

import React, { useState } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { DialogClientCreate } from "../data-table-dialog-create";
import { clientFilteredData } from "../data/clientFilterData";
import { ChangeEvent, ChangeEventHandler } from "react";

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
  const [isSearch, setSearchField] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    table.getColumn("clientName")?.setFilterValue(event.target.value);
    setSearchField(true);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter clients..."
          value={
            (table.getColumn("clientName")?.getFilterValue() as string) ?? ""
          }
          onChange={handleChange}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        <DataTableFacetedFilter
          column={table.getColumn("clientName")}
          title="Client Name"
          options={clientFilteredData}
          setSearchField={isSearch}
        />

        {isFiltered && (
          <Button
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
        <DialogClientCreate
          tableData={tableData}
          updateTableData={updateTableData}
        />
      </div>
    </div>
  );
}

export { DataTableToolbar };
