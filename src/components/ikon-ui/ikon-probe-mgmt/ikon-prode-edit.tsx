import React, { useState } from 'react';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { probeSchema, ProbeData } from '@/components/ikon-ui/ikon-probe-mgmt/data/schema';

interface EditModalFormProps {
  isOpen: boolean;
  onClose: () => void;
  data: ProbeData;
  onSave: (data: ProbeData) => void;
}

const EditModalForm: React.FC<EditModalFormProps> = ({ isOpen, onClose, data, onSave }) => {
  const { control, handleSubmit, reset } = useForm<ProbeData>({
    resolver: zodResolver(probeSchema),
    defaultValues: data,
  });

  const onSubmit = (formData: ProbeData) => {
    onSave(formData);
    onClose();
    reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Probe</DialogTitle>
          <DialogClose />
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="PROBE_NAME"
            control={control}
            render={({ field }) => (
              <div className="flex flex-col gap-2">
                <div className="mt-2">
                    <label>Probe Name</label>
                    <label htmlFor="probeName" className="mr-1 text-red-500">*</label>
                </div>
                <Input {...field} />
              </div>
            )}
          />
          {/* Add more form fields as needed */}
         <DialogFooter>
          <DialogClose asChild>
            <Button type="submit">
              Save
            </Button>
          </DialogClose>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditModalForm;
