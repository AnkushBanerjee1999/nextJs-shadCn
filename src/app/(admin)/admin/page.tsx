import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
//import IkonClientMgmt from "@/components/ikon-ui/common/layout/ikon-client-mgmt/IkonClientMgmt";
import IkonConnectorMgmt from "@/components/ikon-ui/ikon-connector-mgmt/IkonConnectorMgmt";
import IkonUserMgmt from "@/components/ikon-ui/ikon-user-mgmt/ikon-user-mgmt";
import IkonClientMgmt from "@/components/ikon-ui/ikon-client-mgmt/ikon-client-mgmt";
import IkonProbeMgmt from "@/components/ikon-ui/ikon-probe-mgmt/Ikon-probe-mgmt";

export default function Page() {


 const tabStyle = "border-b-2 border-white hover:bg-background hover:text-foreground hover:border-blue-500 data-[state=active]:border-blue-500 dark:border-black dark:data-[state=active]:border-blue-500 rounded-none";

  return (
    <div>
<div className="mb-4">
        <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
          Admin
        </h1>
      </div>

      <div className="flex flex-col space-y-4 h-full">
        <div className=" lg:flex-row items-start justify-between w-full border rounded-lg p-4">
      <Tabs defaultValue="client" className="w-100">
        <TabsList>
          <TabsTrigger className={tabStyle} value="client">Client</TabsTrigger>
          <TabsTrigger className={tabStyle} value="users">Users</TabsTrigger>
          <TabsTrigger className={tabStyle} value="probes">Probes</TabsTrigger>
          <TabsTrigger className={tabStyle} value="connector">Connector</TabsTrigger>
        </TabsList>
        <TabsContent value="client">
          {" "}
          <IkonClientMgmt />
        </TabsContent>
        <TabsContent value="users" className="w-100">
          <IkonUserMgmt />
        </TabsContent>
        <TabsContent value="probes">
          <IkonProbeMgmt />
        </TabsContent>
        <TabsContent value="connector">
          <IkonConnectorMgmt />
        </TabsContent>
      </Tabs>
 </div>
      </div>
    </div>
  );
}
