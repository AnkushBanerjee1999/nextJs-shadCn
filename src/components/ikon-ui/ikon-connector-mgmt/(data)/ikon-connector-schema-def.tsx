"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import ConnectorTableRowActions from "../ikon-connector-table/ikon-connector-row-actions"
//connector data type schema

export type Connector = {
  authBackUrl: string
  cde: "acc"
  clientId: string
  clientSecret: string
  createdBy: string
  createdOn: string
  readonly ikonClientId: string
  password: string
  port: number
  userName: string
  status: "Active" | "Inactive"
}
export type ConnectorTable = {
  cde: "acc"
  clientId: string
  readonly ikonClientId: string
  userName: string
  status: "Active" | "Inactive"
}
//connector table col schema
interface connectorColumnsProps {
  onEdit: (connectorData: Connector) => void;
  onStatusChange: (connectorData: Connector) => void;
}
export const connectorColumns = ({ onEdit, onStatusChange }: connectorColumnsProps): ColumnDef<ConnectorTable>[] => [
  {
    accessorKey: "cde",
    header: "CDE"
  },
  {
    accessorKey: "clientId",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Acc Client ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    }
  },
  {
    accessorKey: "userName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          User Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const connectorStatus = row.getValue("status");
      if (connectorStatus == "Active") {
        return <Badge>Active</Badge>
      } else {
        return <Badge variant="destructive">Inactive</Badge>
      }

    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <ConnectorTableRowActions row={row} onEdit={onEdit} onStatusChange={onStatusChange} />
  }
]