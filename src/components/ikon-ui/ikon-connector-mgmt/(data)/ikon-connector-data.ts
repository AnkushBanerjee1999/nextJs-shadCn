import { ConnectorTable, Connector } from "./ikon-connector-schema-def";
import uuid from "react-uuid";
export function getDummyConnectorData(): Connector[] {
  var fakeConnectorData: Array<Connector> = [
    {
      authBackUrl:
        "https://developer.api.autodesk.com/authentication/v2/authorize?response_type=code&client_id=342d6957-6326-4314-ae6b-c99e2a0d72f1&redirect_uri=http://localhost:8080/api/auth/callback&scope=data:read%20data:write%20account:read%20account:write%20data:create",
      cde: "acc",
      clientId: "342d6957-6326-4314-ae6b-c99e2a0d72f1",
      clientSecret: "okcz7A+bvvOKBExvmXJE9gzRaLo2bfOc",
      createdBy: "09359d95-5824-4a38-8993-a7542f3df0b6",
      createdOn: "2024-05-31T16:20:11.379000+0530",
      ikonClientId: "697726f3-b588-4daa-b68d-07440784818d",
      password: "vgMVT4xKkxep3z6L/2kXtw==",
      port: 8080,
      userName: "user759@example.com",
      status: "Active",
    },
    {
      authBackUrl:
        "https://developer.api.autodesk.com/authentication/v2/authorize?response_type=code&client_id=8fad621b-6fcc-4257-9ba0-2b7af8c19ac5&redirect_uri=http://localhost:8080/api/auth/callback&scope=data:read%20data:write%20account:read%20account:write%20data:create",
      cde: "acc",
      clientId: "8fad621b-6fcc-4257-9ba0-2b7af8c19ac5",
      clientSecret: "okcz7A+bvvOKBExvmXJE9gzRaLo2bfOc",
      createdBy: "09359d95-5824-4a38-8993-a7542f3df0b6",
      createdOn: "2024-05-31T16:20:11.379000+0530",
      ikonClientId: "db143305-2d9f-4630-a994-0045ce5b6b60",
      password: "vgMVT4xKkxep3z6L/2kXtw==",
      port: 8080,
      userName: "user20@example.com",
      status: "Inactive",
    },
    {
      authBackUrl:
        "https://developer.api.autodesk.com/authentication/v2/authorize?response_type=code&client_id=f4590b6d-5485-4c6e-9e3b-310fd5b57415&redirect_uri=http://localhost:8080/api/auth/callback&scope=data:read%20data:write%20account:read%20account:write%20data:create",
      cde: "acc",
      clientId: "f4590b6d-5485-4c6e-9e3b-310fd5b57415",
      clientSecret: "okcz7A+bvvOKBExvmXJE9gzRaLo2bfOc",
      createdBy: "09359d95-5824-4a38-8993-a7542f3df0b6",
      createdOn: "2024-05-30T16:20:11.379000+0530",
      ikonClientId: "d5825416-fdda-4a79-854c-da0077bd7b57",
      password: "vgMVT4xKkxep3z6L/2kXtw==",
      port: 8080,
      userName: "user60@example.com",
      status: "Active",
    },
    {
      authBackUrl:
        "https://developer.api.autodesk.com/authentication/v2/authorize?response_type=code&client_id=a5e94c6d-856b-48c9-bd5e-5165b4c3bff7&redirect_uri=http://localhost:8080/api/auth/callback&scope=data:read%20data:write%20account:read%20account:write%20data:create",
      cde: "acc",
      clientId: "a5e94c6d-856b-48c9-bd5e-5165b4c3bff7",
      clientSecret: "okcz7A+bvvOKBExvmXJE9gzRaLo2bfOc",
      createdBy: "09359d95-5824-4a38-8993-a7542f3df0b6",
      createdOn: "2024-06-02T16:20:11.379000+0530",
      ikonClientId: "47de8025-1b3a-48ed-a745-2bcb9eb10313",
      password: "vgMVT4xKkxep3z6L/2kXtw==",
      port: 8080,
      userName: "user593@example.com",
      status: "Inactive",
    },
    {
      authBackUrl:
        "https://developer.api.autodesk.com/authentication/v2/authorize?response_type=code&client_id=1868dd96-6504-4e88-a17b-e7ea7883bfb3&redirect_uri=http://localhost:8080/api/auth/callback&scope=data:read%20data:write%20account:read%20account:write%20data:create",
      cde: "acc",
      clientId: "1868dd96-6504-4e88-a17b-e7ea7883bfb3",
      clientSecret: "okcz7A+bvvOKBExvmXJE9gzRaLo2bfOc",
      createdBy: "09359d95-5824-4a38-8993-a7542f3df0b6",
      createdOn: "2024-06-02T16:20:11.379000+0530",
      ikonClientId: "e8db7c4b-06d0-4f98-8b7e-e190142c4be4",
      password: "vgMVT4xKkxep3z6L/2kXtw==",
      port: 8080,
      userName: "user380@example.com",
      status: "Active",
    },
    {
      authBackUrl:
        "https://developer.api.autodesk.com/authentication/v2/authorize?response_type=code&client_id=9309a41e-2181-40c6-824e-aa5e2a367ab3&redirect_uri=http://localhost:8080/api/auth/callback&scope=data:read%20data:write%20account:read%20account:write%20data:create",
      cde: "acc",
      clientId: "9309a41e-2181-40c6-824e-aa5e2a367ab3",
      clientSecret: "okcz7A+bvvOKBExvmXJE9gzRaLo2bfOc",
      createdBy: "09359d95-5824-4a38-8993-a7542f3df0b6",
      createdOn: "2024-05-28T16:20:11.379000+0530",
      ikonClientId: "998c3f71-09b5-4c2d-86b2-16fd18f7331a",
      password: "vgMVT4xKkxep3z6L/2kXtw==",
      port: 8080,
      userName: "user242@example.com",
      status: "Inactive",
    },
    {
      authBackUrl:
        "https://developer.api.autodesk.com/authentication/v2/authorize?response_type=code&client_id=db92de43-d0e7-4464-8706-9e07bf47ab59&redirect_uri=http://localhost:8080/api/auth/callback&scope=data:read%20data:write%20account:read%20account:write%20data:create",
      cde: "acc",
      clientId: "db92de43-d0e7-4464-8706-9e07bf47ab59",
      clientSecret: "okcz7A+bvvOKBExvmXJE9gzRaLo2bfOc",
      createdBy: "09359d95-5824-4a38-8993-a7542f3df0b6",
      createdOn: "2024-05-26T16:20:11.379000+0530",
      ikonClientId: "531bb8a4-7f6b-4ffc-bf24-b3c32d909872",
      password: "vgMVT4xKkxep3z6L/2kXtw==",
      port: 8080,
      userName: "user918@example.com",
      status: "Active",
    },
  ];
  return fakeConnectorData;
}
export function getConnectorData(): Connector[] {
  // Fetch data from your API here.
  const getAllConnectorData = getDummyConnectorData();
  /* const connectorTableData = [];
    for(var i=0;i<getAllConnectorData.length;i++){
      let eachData = {
        cde: getAllConnectorData[i].cde,
        clientId: getAllConnectorData[i].clientId,
        ikonClientId: getAllConnectorData[i].ikonClientId,
        userName: getAllConnectorData[i].userName,
        status:getAllConnectorData[i].status 
      }
      connectorTableData.push(eachData);
    }*/
  // connectorTableData.push(eachData);
  return getAllConnectorData;
}

/* According to DS OF DIGITAL TWIN 29-05-2024
    authBackUrl: "https://developer.api.autodesk.com/authentication/v2/authorize?response_type=code&client_id=GwOlYJnJpAP6fmls9HoBRNRNg7M0XA8y&redirect_uri=http://localhost:8080/api/auth/callback&scope=data:read%20data:write%20account:read%20account:write%20data:create"
    cde: "acc"
    clientId: "GwOlYJnJpAP6fmls9HoBRNRNg7M0XA8y"
    clientSecret: "okcz7A+bvvOKBExvmXJE9gzRaLo2bfOc"
    createdBy: "09359d95-5824-4a38-8993-a7542f3df0b6"
    createdOn: "2024-05-24T16:20:11.379+0530"
    ikonClientId: "5d4b5cc5-25a4-41cd-86f3-38232ab47f5e"
    password: "vgMVT4xKkxep3z6L/2kXtw=="
    port: 8080
    userName: "sumalya.mukherjee@keross.com"
    */
