import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import {
  clientTask,
  clientSchema,
} from "@/components/ikon-ui/ikon-client-mgmt/data/schema";
{
  /* import clientData from "@/../data/mockData/client-details.json";*/
}
import clientData from "@/components/ikon-ui/ikon-client-mgmt/data/clientData";
import { z } from "zod";
import uuid from "react-uuid";
import type { UserData } from "@/components/ikon-ui/ikon-user-mgmt/user-data-schema";

async function getClient() {
  return z.array(clientSchema).parse(clientData);
}

export function UserCreationForm({ isOpen, onClose, initialData, onSave }) {
  const [formData, setFormData] = useState({
    userId: "",
    clientName: "",
    userName: "",
    userLogin: "",
    userPassword: "",
    confirmedPassword: "",
    userEmail: "",
    userPhone: "",
    userAccess: "editAccess",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        userId: initialData.userId || uuid(),
        clientName: initialData.clientName || "",
        userName: initialData.userName || "",
        userLogin: initialData.userLogin || "",
        userPassword: "",
        confirmedPassword: "",
        userEmail: initialData.userEmail || "",
        userPhone: initialData.userPhone || "",
        userAccess: initialData.userAccess || "editAccess",
      });
    }
  }, [initialData]);

  const [clientDetails, setClientDetails] = useState<clientTask[]>([]);

  {
    useEffect(() => {
      console.error("Calling Use Effect for Client mgmt data");
      getClient().then((allClient) => {
        setClientDetails(allClient);
      });
    }, []);
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData : ", formData);
    onSave(formData);
    onClose();
  };

  const handleChange_old = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit_old = (e) => {
    e.preventDefault();

    let _newUser = {
      userLogin: formData.userLogin,
      groupNames: [],
      userActive: true,
      userPhone: formData.userPhone,
      userEmail: formData.userEmail,
      userName: formData.userName,
      userId: uuid(),
      clientName: formData.clientName,
    };

    onCreateUser(_newUser);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[825px]">
        <DialogHeader>
          <DialogTitle>{initialData ? "Edit User" : "Create User"}</DialogTitle>
          <DialogDescription>
            {initialData
              ? "This will edit the existing user in IKON Account"
              : "This will create a new user in IKON Account"}
          </DialogDescription>
        </DialogHeader>

        {/* <form onSubmit={handleSubmit}> */}
        {/* <div className="flex flex-col gap-2">
          <div className="mt-2">
            <Label htmlFor="selectedClient">Client</Label>
            <Label htmlFor="" className="mr-1 text-red-500">
              {" *"}
            </Label>
          </div>
          <div>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Select Client{" "}
                  <ChevronDownIcon className="ml-2 h-4 w-4 text-muted-foreground" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0" align="end">
                <Command id="selectedClient">
                  <CommandInput placeholder="Select Client" />
                  <CommandList>
                    <CommandEmpty>No roles found.</CommandEmpty>
                    <CommandGroup className="p-1.5">
                      {clientDetails.map((c) => (
                        <CommandItem
                          key={c.id}
                          className="teamaspace-y-1 flex flex-col items-start px-4 py-2"
                        >
                          <p>{c.clientName}</p>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div> */}

        {/* Form Fields */}
        {/* {["clientName", "userName", "userLogin", "userPassword", "confirmedPassword", "userEmail", "userPhone"].map((field) => (
          <div key={field} className="flex flex-col gap-2">
            <div className="mt-2">
              <Label htmlFor={field}>{field}</Label>
              <Label htmlFor={field} className="mr-1 text-red-500">{" *"}</Label>
            </div>
            <div>
              <Input id={field} value={formData[field]} onChange={handleChange} placeholder={field} />
            </div>
          </div>
        ))} */}

        <div className="flex flex-col gap-2">
          <div className="mt-2">
            <Label htmlFor="clientName">Client</Label>
            <Label htmlFor="" className="mr-1 text-red-500">
              {" *"}
            </Label>
          </div>
          <div>
            <Input
              id="clientName"
              value={formData.clientName}
              onChange={handleChange}
              placeholder="Client Name"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="mt-2">
            <Label htmlFor="userName">User Name</Label>
            <Label htmlFor="" className="mr-1 text-red-500">
              {" *"}
            </Label>
          </div>
          <div>
            <Input
              id="userName"
              value={formData.userName}
              onChange={handleChange}
              placeholder="User Name"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="mt-2">
            <Label htmlFor="userLogin">User Login</Label>
            <Label htmlFor="" className="mr-1 text-red-500">
              {" *"}
            </Label>
          </div>
          <div>
            <Input
              id="userLogin"
              value={formData.userLogin}
              onChange={handleChange}
              placeholder="User Login"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="mt-2">
            <Label htmlFor="userPassword">Password</Label>
            <Label htmlFor="" className="mr-1 text-red-500">
              {" *"}
            </Label>
          </div>
          <div>
            <Input
              id="userPassword"
              value={formData.userPassword}
              onChange={handleChange}
              placeholder="Password"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="mt-2">
            <Label htmlFor="confirmedPassword">Confirm Password</Label>
            <Label htmlFor="" className="mr-1 text-red-500">
              {" *"}
            </Label>
          </div>
          <div>
            <Input
              id="confirmedPassword"
              value={formData.confirmedPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="mt-2">
            <Label htmlFor="userEmail">User Email</Label>
            <Label htmlFor="" className="mr-1 text-red-500">
              {" *"}
            </Label>
          </div>
          <div>
            <Input
              id="userEmail"
              value={formData.userEmail}
              onChange={handleChange}
              placeholder="User Email"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="mt-2">
            <Label htmlFor="userPhone">User Phone No.</Label>
            <Label htmlFor="" className="mr-1 text-red-500">
              {" *"}
            </Label>
          </div>
          <div>
            <Input
              id="userPhone"
              value={formData.userPhone}
              onChange={handleChange}
              placeholder="User Phone No."
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="mt-2">
            <Label htmlFor="userAccess">Access</Label>
          </div>
          <RadioGroup
            value={formData.userAccess}
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, userAccess: value }))
            }
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="editAccess" id="editAccess" />
              <Label htmlFor="editAccess">Edit</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="viewAccess" id="viewAccess" />
              <Label htmlFor="viewAccess">View</Label>
            </div>
          </RadioGroup>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit} type="submit">
            {initialData ? "Save Changes" : "Create"}
          </Button>
        </DialogFooter>
        {/* </form> */}
      </DialogContent>
    </Dialog>
  );
}
