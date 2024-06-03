import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm, useFormState, SubmitHandler } from 'react-hook-form';
import { Connector } from "../(data)/ikon-connector-schema-def";
import { CreateConnector } from "../(data)/ikon-connector-actions";
import { useState } from "react";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

interface DialogProps<TData> {
  //connectorTableData: Array<any>;
  //updateConnectorTableData: Function;
  data: Array<any>;
  updateConnectorData: Function;
}
export function CreateConnectorForm<TData>({
  data,
  updateConnectorData,
}: DialogProps<TData>) {
  console.log(updateConnectorData);
  const { register, handleSubmit, reset, control } = useForm<Connector>();
  const { isSubmitting, errors } = useFormState({ control });
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const onSubmit: SubmitHandler<FormData> = (connectorFormData) => {
    console.log("newData");
    let newConnector = CreateConnector(connectorFormData);
    console.log(newConnector);
    const updatedConnectorTable = JSON.parse(JSON.stringify(data));
    updatedConnectorTable.push(newConnector);
    updateConnectorData(updatedConnectorTable);
    reset();
    setOpen(false);
    toast({
      title: "Connector Created",
      description: "New Connector is successfully added to the system."
    })
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="h-8 border-dashed" style={{ marginLeft: "auto" }}>
          Create Connector
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1000px]">
        <DialogHeader>
          <DialogTitle>Create New Connector</DialogTitle>
        </DialogHeader>
        <form>
          <div className="flex flex-col gap-2">
            <div className="mt-2">
              <Label htmlFor="cde" className="text-right">
                CDE
              </Label>
            </div>
            <div>
              <Input
                id="cde"
                defaultValue="acc"
                className="col-span-3"
                {...register("cde", { required: 'CDE field is required' })}
              />
              <span>{errors.cde && <p>{errors.cde.message}</p>}</span>
            </div>

            <div>
              <Label htmlFor="clientId" className="text-right">
                Client ID
              </Label>
            </div>

            <div>
              <Input
                id="clientId"
                defaultValue=""
                className="col-span-3"
                {...register("clientId", { required: 'Client ID field is required' })}
              />
            </div>

            <div>
              <Label htmlFor="clientSecret" className="text-right">
                Client Secret
              </Label>
            </div>

            <div>
              <Input
                id="clientSecret"
                defaultValue=""
                className="col-span-3"
                type="password"
                {...register("clientSecret", { required: 'Client Secret field is required' })}
              />
            </div>

            <div>
              <Label htmlFor="userName" className="text-right">
                User Name
              </Label>
            </div>
            <div>
              <Input
                id="userName"
                defaultValue=""
                className="col-span-3"
                {...register("userName", { required: 'User Name field is required' })}
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
            </div>
            <div>
              <Input
                id="password"
                defaultValue=""
                className="col-span-3"
                type="password"
                {...register("password", { required: 'User Password field is required' })}
              />
            </div>
          </div>
          <DialogFooter className="mt-6">
            <Button type="submit" disabled={isSubmitting} onClick={handleSubmit(onSubmit)}>Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
