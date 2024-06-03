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
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

interface DialogProps<TData> {
  connector: Connector;
  onSave: (updatedConnector: Connector) => void;
  onCancel: () => void;
}
export function EditConnectorForm<TData>({
  connector,
  onSave,
  onCancel
}: DialogProps<TData>) {
  const { register, handleSubmit, reset, control } = useForm<Connector>({ defaultValues: connector });
  const { isSubmitting, errors } = useFormState({ control });
  const { toast } = useToast();

  const onSubmit: SubmitHandler<FormData> = (connectorEditFormData) => {
    // Creating the updated connector object
    const updatedConnector = { ...connector, ...connectorEditFormData };
    onSave(updatedConnector);

    // Reset the form
    reset();
    onCancel();
    toast({
      title: "Connector Updated",
      description: "Connector is successfully edited to the system."
    })
  };

  return (
    <Dialog open={true} onOpenChange={(open) => !open && onCancel()}>
      <DialogContent className="sm:max-w-[1000px]">
        <DialogHeader>
          <DialogTitle>Update Connector</DialogTitle>
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
                className="col-span-3"
                {...register("cde", { required: 'CDE field is required' })}
              />
              {errors.cde && <p className="text-red-600">{errors.cde.message}</p>}
            </div>

            <div>
              <Label htmlFor="clientId" className="text-right">
                Client ID
              </Label>
            </div>

            <div>
              <Input
                id="clientId"
                className="col-span-3"
                {...register("clientId", { required: 'Client ID field is required' })}
              />
              {errors.clientId && <p className="text-red-600">{errors.clientId.message}</p>}
            </div>

            <div>
              <Label htmlFor="clientSecret" className="text-right">
                Client Secret
              </Label>
            </div>

            <div>
              <Input
                id="clientSecret"
                className="col-span-3"
                type="password"
                {...register("clientSecret", { required: 'Client Secret field is required' })}
              />
              {errors.clientSecret && <p className="text-red-600">{errors.clientSecret.message}</p>}
            </div>

            <div>
              <Label htmlFor="userName" className="text-right">
                User Name
              </Label>
            </div>
            <div>
              <Input
                id="userName"
                className="col-span-3"
                {...register("userName", { required: 'User Name field is required' })}
              />
              {errors.userName && <p className="text-red-600">{errors.userName.message}</p>}
            </div>

            <div>
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
            </div>
            <div>
              <Input
                id="password"
                className="col-span-3"
                type="password"
                {...register("password", { required: 'User Password field is required' })}
              />
              {errors.password && <p className="text-red-600">{errors.password.message}</p>}
            </div>
          </div>
          <DialogFooter className="mt-6">
            <Button type="submit" disabled={isSubmitting} onClick={handleSubmit(onSubmit)}>Save changes</Button>
            <Button type="button" onClick={onCancel}>Cancel</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
