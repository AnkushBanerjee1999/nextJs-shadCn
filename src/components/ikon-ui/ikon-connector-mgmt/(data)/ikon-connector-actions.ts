import uuid from "react-uuid";
export function CreateConnector(formData: FormData) {
  const defaultConnectorProps = {
    authBackUrl: "https:localhost:3000",
    createdBy: "moumita",
    createdOn: new Date().toUTCString(),
    userId: uuid(),
    ikonClientId: uuid(),
    port: 8080,
    status: "Active",
  };
  const newConnectorData = { ...defaultConnectorProps, ...formData };
  return newConnectorData;
}
