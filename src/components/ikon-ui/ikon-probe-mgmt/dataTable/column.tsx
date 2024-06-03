import React from 'react';
import { ColumnDef } from '@tanstack/table-core';
import { ProbeData } from '../data/schema';
import { DataTableColumnHeader } from './data-table-column-header';
import { DataTableRowActions } from './data-table-row-actions';

// Function to generate columns based on task features
export const createColumns = <T extends ProbeData>(
  data: T[],
  setData: React.Dispatch<React.SetStateAction<T[]>>
): ColumnDef<T, unknown>[] => { // Ensure correct typing for columns
  return [
    {
      accessorKey: 'PROBE_NAME',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Probe Name" />
      ),
      cell: ({ row }) => (
        <div className={`w-[250px] ${!row.original.ACTIVE ? 'text-red-900' : 'text-foreground'}`}>
          {row.getValue('PROBE_NAME')}
        </div>
      ),
      enableSorting: true,
      enableHiding: true,
    },
    {
      accessorKey: 'PROBE_ID',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Probe ID" />
      ),
      cell: ({ row }) => (
        <div className={`w-[250px] ${!row.original.ACTIVE ? 'text-red-900' : 'text-foreground'}`}>
          {row.getValue('PROBE_ID')}
        </div>
      ),
      enableSorting: true,
      enableHiding: true,
    },
    {
      accessorKey: 'USER_NAME',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="User Name" />
      ),
      cell: ({ row }) => (
        <div className={`w-[250px] ${!row.original.ACTIVE ? 'text-red-900' : 'text-foreground'}`}>
          {row.getValue('USER_NAME')}
        </div>
      ),
      enableSorting: true,
      enableHiding: true,
    },
    {
      accessorKey: 'LAST_HEARTBEAT',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Last Heartbeat" />
      ),
      cell: ({ row }) => (
        <div className={`w-[250px] ${!row.original.ACTIVE ? 'text-red-900' : 'text-foreground'}`}>
          {row.getValue('LAST_HEARTBEAT')}
        </div>
      ),
      enableSorting: true,
      enableHiding: true,
    },
    {
      id: 'actions',
      header: () => <div>Actions</div>,
      cell: ({ row }) => <DataTableRowActions row={row} data={data} updateTableData={setData} />,
    },
  ];
};

// Hook to use the columns in a component
export const useColumns = <T extends ProbeData>(
  data: T[],
  setData: React.Dispatch<React.SetStateAction<T[]>>
): ColumnDef<T, unknown>[] => { 
  return createColumns(data, setData);
};
