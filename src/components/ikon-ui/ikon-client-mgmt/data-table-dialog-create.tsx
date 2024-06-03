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
import { clientTask } from "./data/schema";
import { useState } from "react";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

interface DialogClientProps<TData> {
  tableData: Array<any>;
  updateTableData: Function;
}

function DialogClientCreate<TData>({
  tableData,
  updateTableData,
}: DialogClientProps<TData>) {
  const [clientName, setClientName] = useState("");
  const [description, setDescription] = useState("");
  const { toast } = useToast();

  const saveClientData = async () => {
    const newTask: clientTask = {
      id: `${Date.now()}`, // Generate a unique ID
      clientName,
      description,
    };
    const updatedTable = JSON.parse(JSON.stringify(tableData));
    updatedTable.push(newTask);
    updateTableData(updatedTable);
    setClientName("");
    setDescription("");
    toast({
      title: "Client Created",
      description: "The client has been successfully added.",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-8 border-dashed" style={{ marginLeft: "auto" }}>
          Create Client
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Client</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <div className="mt-2">
            <Label htmlFor="clientName">Client Name</Label>
            <Label htmlFor="clientName"></Label>
          </div>
          <div>
            <Input
              id="clientName"
              value={clientName}
              placeholder=""
              onChange={(e) => setClientName(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
          </div>
          <div>
            <Textarea
              id="description"
              value={description}
              placeholder=""
              onChange={(e) => setDescription(e.target.value)}
              className="resize-none"
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" onClick={saveClientData}>
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export { DialogClientCreate };
