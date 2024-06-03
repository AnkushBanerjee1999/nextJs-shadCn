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
import { clientTask, clientSchema } from "./data/schema";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";

interface DialogDemoPropsEdit {
  isOpen: boolean;
  onClose: () => void;
  tableData: clientTask;
  onSave: (tableData: clientTask) => void;
}

const DialogDemoEdit: React.FC<DialogDemoPropsEdit> = ({
  isOpen,
  onClose,
  tableData,
  onSave,
}) => {
  const { control, handleSubmit, reset } = useForm<clientTask>({
    resolver: zodResolver(clientSchema),
    defaultValues: tableData,
  });

  const onSubmit = (formData: clientTask) => {
    onSave(formData);
    onClose();
    reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Client</DialogTitle>
          <DialogClose />
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="clientName"
            control={control}
            render={({ field }) => (
              <div className="flex flex-col gap-2">
                <div className="mt-2">
                  <label className="text-sm font-medium">Client Name</label>
                  <label htmlFor="clientName"></label>
                </div>
                <Input {...field} />
              </div>
            )}
          />
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <div className="flex flex-col gap-2">
                <div className="mt-2">
                  <label className="text-sm font-medium">Description</label>
                  <label htmlFor="description"></label>
                </div>
                <Textarea className="resize-none" {...field} />
              </div>
            )}
          />

          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit" className="mt-2">
                Save Changes
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogDemoEdit;
