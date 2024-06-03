"use client";
import { z } from "zod";
import { clientTask, clientSchema } from "./data/schema";
import { DataTable } from "./dataTable/data-table";
import clientData from "./data/clientData";
import { useEffect, useState } from "react";
import { useColumns } from "./dataTable/columns";
import { Toaster } from "@/components/ui/toaster";

async function getClient() {
  return z.array(clientSchema).parse(clientData);
}

export default function IkonClientMgmt() {
  const [task, setTasks] = useState<clientTask[]>([]);

  useEffect(() => {
    console.error("Calling Use Effect in Client mgmt");
    getClient().then((allClient) => {
      setTasks(allClient);
    });
  }, []);
  const generatedColumns = useColumns(task, setTasks);
  return (
    <>
      <DataTable
        data={task}
        updateTableData={setTasks}
        columns={generatedColumns}
      />
      <Toaster />
    </>
  );
}
