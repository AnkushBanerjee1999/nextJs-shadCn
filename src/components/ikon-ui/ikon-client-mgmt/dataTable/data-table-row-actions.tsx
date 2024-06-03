"use client";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { clientSchema, clientTask } from "../data/schema";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

import DialogDemoEdit from "@/components/ikon-ui/ikon-client-mgmt/data-table-dialog-edit";

// Assuming Identifiable is an interface that extends your data with an id field
interface Identifiable extends clientTask {
  id: string;
  clientName: string;
  description: string;
}

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  tableData: TData[];
  updateTableData: (tableData: TData[]) => void;
}

function DataTableRowActions<TData extends Identifiable>({
  row,
  tableData,
  updateTableData,
}: DataTableRowActionsProps<TData>) {
  const selectedClientData = clientSchema.parse(row.original);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [currentRowData, setCurrentRowData] = useState<TData | null>(null);
  const { toast } = useToast();

  //Edit each client
  const handleClientEdit = (row: Row<TData>) => {
    setCurrentRowData(row.original);
    setEditModalOpen(true);
  };

  //Save on edit
  const handleSave = (updatedData: TData) => {
    const newData = tableData.map((item) =>
      item.id === updatedData.id ? updatedData : item
    );
    updateTableData(newData);
    toast({
      title: "Client Edited",
      description: "The client has been successfully edited.",
    });
  };

  //Delete each client
  const handleClientDelete = () => {
    console.log(selectedClientData);
    const updatedData = tableData.filter((t) => t.id !== selectedClientData.id);
    updateTableData(updatedData);
    toast({
      title: "Client Deleted",
      description: "The client has been successfully deleted.",
    });
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted text-foreground"
          >
            <DotsHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem key="edit" onClick={() => handleClientEdit(row)}>
            Edit
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleClientDelete}>
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {currentRowData && (
        <DialogDemoEdit
          isOpen={isEditModalOpen}
          onClose={() => setEditModalOpen(false)}
          tableData={currentRowData}
          onSave={handleSave}
        />
      )}
    </>
  );
}

export { DataTableRowActions };
