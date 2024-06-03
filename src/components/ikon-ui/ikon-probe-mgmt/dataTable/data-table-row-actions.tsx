"use client";
import React, { useState } from "react";
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
import { probeSchema, ProbeData } from "../data/schema";
import EditModalForm from "@/components/ikon-ui/ikon-probe-mgmt/ikon-probe-edit";
import { useToast } from "@/components/ui/use-toast";

// Assuming Identifiable is an interface that extends your data with an id field
interface Identifiable {
  id: string;
}

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  data: TData[];
  updateTableData: (data: TData[]) => void;
}

const handleDeactive = <TData extends Identifiable>(
  row: Row<TData>,
  data: TData[],
  updateTableData: (data: TData[]) => void,
  toast: (options: { title: string; description: string }) => void
) => {
  const result = probeSchema.safeParse(row.original);
  if (result.success) {
    const updatedData = data.map((item) =>
      item.id === result.data.id ? { ...item, ACTIVE: false } : item
    );
    updateTableData(updatedData);
    toast({
      title: "Probe Deactivated",
      description: "Probe Name has been successfully deactivated.",
    });
  } else {
    console.error("Parsing error:", result.error);
  }
};

const handleActivate = <TData extends Identifiable>(
  row: Row<TData>,
  data: TData[],
  updateTableData: (data: TData[]) => void,
  toast: (options: { title: string; description: string }) => void
) => {
  const result = probeSchema.safeParse(row.original);
  if (result.success) {
    const updatedData = data.map((item) =>
      item.id === result.data.id ? { ...item, ACTIVE: true } : item
    );
    updateTableData(updatedData);
    toast({
      title: "Probe Activated",
      description: "Probe Name has been successfully activated.",
    });
  } else {
    console.error("Parsing error:", result.error);
  }
};

function DataTableRowActions<TData extends Identifiable>({
  row,
  data,
  updateTableData,
}: DataTableRowActionsProps<TData>) {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [currentRowData, setCurrentRowData] = useState<TData | null>(null);
  const { toast } = useToast();

  const handleEdit = (row: Row<TData>) => {
    setCurrentRowData(row.original);
    setEditModalOpen(true);
  };

  const handleSave = (updatedData: TData) => {
    const newData = data.map((item) =>
      item.id === updatedData.id ? updatedData : item
    );
    updateTableData(newData);
    toast({
      title: "Probe Name Updated",
      description: "Probe Name has been successfully updated.",
    });
  };

  const isActive = row.original.ACTIVE;

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
          {isActive ? (
            <>
              <DropdownMenuItem key="edit" onClick={() => handleEdit(row)}>
                Edit
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                key="deactivate"
                onClick={() =>
                  handleDeactive(row, data, updateTableData, toast)
                }
              >
                Deactivate
              </DropdownMenuItem>
            </>
          ) : (
            <DropdownMenuItem
              key="activate"
              onClick={() => handleActivate(row, data, updateTableData, toast)}
            >
              Activate
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      {currentRowData && (
        <EditModalForm
          isOpen={isEditModalOpen}
          onClose={() => setEditModalOpen(false)}
          data={currentRowData}
          onSave={handleSave}
        />
      )}
    </>
  );
}

export { DataTableRowActions };
