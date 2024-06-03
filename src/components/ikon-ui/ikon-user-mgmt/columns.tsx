"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import type { UserData } from "@/components/ikon-ui/ikon-user-mgmt/user-data-schema";

export const getColumns = (
  onEdit: (userId: string) => void,
  onDelete: (userId: string) => void,
  onToggleActive: (userId: string, isActive: boolean) => void
): ColumnDef<UserData>[] => [
  {
    accessorKey: "clientName",
    header: "Client Name",
  },
  {
    accessorKey: "userName",
    header: "User Name",
  },
  {
    accessorKey: "userLogin",
    header: "User Login",
  },
  {
    accessorKey: "userEmail",
    header: "User Email",
  },
  {
    accessorKey: "userPhone",
    header: "User Phone",
  },
  {
    accessorKey: "userActive",
    header: "User Status",
    cell: ({ row }) => {
      const userActive = row.getValue("userActive");
      return <div>{userActive ? "Active" : "Deactivated"}</div>;
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const userDetails = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => onEdit(userDetails.userId)}>
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onDelete(userDetails.userId)}>
              Delete
            </DropdownMenuItem>
            {userDetails.userActive ? (
              <DropdownMenuItem
                onClick={() => onToggleActive(userDetails.userId, false)}
              >
                Deactivate
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem
                onClick={() => onToggleActive(userDetails.userId, true)}
              >
                Activate
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
