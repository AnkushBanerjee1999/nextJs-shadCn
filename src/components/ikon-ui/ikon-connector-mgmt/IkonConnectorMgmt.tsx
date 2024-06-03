"use client"
import { ColumnDef } from "@tanstack/react-table"
import { getConnectorData, getDummyConnectorData } from "./(data)/ikon-connector-data"
import { connectorColumns } from "./(data)/ikon-connector-schema-def";
import { DataTable } from "./ikon-connector-table/ikon-connector-table";
import { Connector } from "./(data)/ikon-connector-schema-def";
import { useState, useEffect, useCallback } from "react";
import { EditConnectorForm } from "./ikon-connector-table/ikon-edit-connector";
import { Toaster } from "@/components/ui/toaster";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export default function IkonConnectorMgmt() {
  const connectorData = getConnectorData();
  const [initialConnectorData, setConnectorDetails] = useState(connectorData);
  const [editingConnector, setEditingConnector] = useState<Connector | null>(null);
  const { toast } = useToast();

  const onEdit = useCallback((connectorData: Connector) => {
    const updatedConnectorTable = JSON.parse(JSON.stringify(initialConnectorData));
    let selectedConnectorDetails = updatedConnectorTable.filter((item) => { return (item.ikonClientId === connectorData.ikonClientId) })
    setEditingConnector(selectedConnectorDetails[0]);
  }, [initialConnectorData]);

  //connector status change
  const onStatusChange = useCallback((connectorData: Connector) => {
    console.log(initialConnectorData);
    console.log(`Hello Edit ${connectorData.ikonClientId}`);
    const updatedConnectorTable = JSON.parse(JSON.stringify(initialConnectorData));
    setConnectorDetails(updatedConnectorTable.map((item) => (item.ikonClientId === connectorData.ikonClientId ? ({ ...item, status: item.status === "Active" ? "Inactive" : "Active" }) : item)));
    console.log(updatedConnectorTable);

    toast({
      title: "Connector Status",
      description: "Connector status is successfully updated to the system."
    })

  }, [initialConnectorData]);
  // on Edit Connector Save 
  const handleSave = (updatedConnector: Connector) => {
    const updatedConnectorTable = initialConnectorData.map((item) =>
      item.ikonClientId === updatedConnector.ikonClientId ? updatedConnector : item
    );
    setConnectorDetails(updatedConnectorTable);
    setEditingConnector(null);
  };
  const handleCancel = () => {
    setEditingConnector(null);
  };
  const columns = connectorColumns({ onEdit: onEdit, onStatusChange: onStatusChange });
  return (
    <>
      <div >
        <DataTable
          columns={columns as ColumnDef<unknown, unknown>[]}
          data={initialConnectorData}
          updateConnectorData={setConnectorDetails}
          onEdit={onEdit}
          onStatusChange={onStatusChange}
        />
        {editingConnector && (
          <EditConnectorForm
            connector={editingConnector}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        )}
      </div>
      <Toaster />
    </>
  )
}
