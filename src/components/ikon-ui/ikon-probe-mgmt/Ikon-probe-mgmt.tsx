"use client";
import { z } from "zod";
import { ProbeData, probeSchema } from "./data/schema";
import { DataTable } from "./dataTable/data-table";
import probeData from "./data/probeData";
import { useEffect, useState } from "react";
import { useColumns } from "./dataTable/column";
import { Toaster } from "@/components/ui/toaster";

async function getProbe() {
  return z.array(probeSchema).parse(probeData);
}

export default function IkonProbeMgmt() {
  const [task, setTasks] = useState<ProbeData[]>([]);
  useEffect(() => {
    console.error("Calling Use Effect in Client mgmt");
    getProbe().then((allProbe) => {
      setTasks(allProbe);
    });
  }, []);

  // Correct usage of useColumns
  const generatedColumns = useColumns(task, setTasks);

  return (
    <>
      <DataTable
        data={task}
        updateTableData={setTasks}
        columns={generatedColumns}
      />
      {<Toaster />}
    </>
  );
}
