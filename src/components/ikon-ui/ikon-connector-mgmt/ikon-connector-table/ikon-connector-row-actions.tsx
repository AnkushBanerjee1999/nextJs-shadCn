import { Button } from '@/components/ui/button';
import { Row } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  onEdit: (value: TData) => void;
  onStatusChange: (value: TData) => void;
}

export default function ConnectorTableRowActions<TData>({ row, onEdit, onStatusChange }: DataTableRowActionsProps<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => onEdit(row.original)}>Edit</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => onStatusChange(row.original)}>Toggle Status</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};