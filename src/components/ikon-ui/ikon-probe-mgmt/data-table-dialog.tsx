"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ProbeData } from "@/components/ikon-ui/ikon-probe-mgmt/data/schema";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface DialogProps<TData> {
  tableData: Array<any>;
  updateTableData: Function;
}

function DialogProbe<TData>({
  tableData,
  updateTableData,
}: DialogProps<TData>) {
  const [PROBE_NAME, setProbeName] = useState("");
  const { toast } = useToast();

  const saveProbeData = async () => {
    const newTask: ProbeData = {
      id: `${Date.now()}`, // Generate a unique ID
      PROBE_NAME,
      ACTIVE: true, // Hardcoded value for the ACTIVE field
      ALIVE: true,
      LAST_HEARTBEAT: "2024-05-29 14:13:06",
      PROBE_ID: "777adf66-484b-4e9a-a9d5-c14bd912e052",
      USER_ID: "a01d4783-5a8c-4231-8409-982ad30cadbe",
      USER_NAME: "baishakhi Probe",
    };
    const updatedTable = JSON.parse(JSON.stringify(tableData));
    updatedTable.push(newTask);
    toast({
      title: "Probe Created",
      description: "Probe has been successfully created.",
    });
    updateTableData(updatedTable);
    setProbeName("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-8 border-dashed" style={{ marginLeft: "auto" }}>
          Create Probe
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Probe</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <div className="mt-2">
            <Label htmlFor="probeName">Probe Name</Label>
            <Label htmlFor="probeName" className="mr-1 text-red-500">
              *
            </Label>
          </div>
          <div>
            <Input
              id="probeName"
              value={PROBE_NAME}
              placeholder=""
              onChange={(e) => setProbeName(e.target.value)}
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" onClick={saveProbeData}>
              Save
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export { DialogProbe };
