import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
{
  /* import type { UserData } from "../../../src/app/(admin)/userManagement/columns"; */
}
import type { UserData } from "@/app/(admin)/userManagement/columns";

// Function to load initial data from the JSON file - ALTERED DATA WILL BE FETCHED ON EVERY NEW RENDER
{
  /* const dataFilePath = path.resolve(
  "./public/mockData/mock-data-userDetails.json"
); */
}

{
  /* const dataFilePath = path.resolve("/data/mockData/mock-data-userDetails.json"); */
}

const dataFilePath = path.resolve(
  process.cwd(),
  "data",
  "mockData",
  "mock-data-userDetails.json"
);

const getItems = () => {
  const jsonData = fs.readFileSync(dataFilePath, "utf-8");
  return JSON.parse(jsonData);
};

const saveItems = (items: any) => {
  fs.writeFileSync(
    dataFilePath,
    JSON.stringify(items, null, 2)
  ); /* This line is responsible for writing in the file */
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  debugger;
  console.log("Method:", req.method);
  console.log("Request Body:", req.body);
  console.log("Request Query:", req.query);

  switch (req.method) {
    case "GET":
      res.status(200).json(getItems());
      break;
    case "POST":
      const newItem = req.body;
      const items = getItems();
      items.push(newItem);
      saveItems(items);
      res.status(200).json(newItem);
      break;
    case "PUT":
      const updatedItem = req.body;
      const updateItems = getItems();
      const index = updateItems.findIndex(
        (item: UserData) => item.userId === updatedItem.userId
      );
      if (index !== -1) {
        updateItems[index] = updatedItem;
        saveItems(updateItems);
        res.status(200).json(updatedItem);
      } else {
        res.status(404).json({ message: "Item not found" });
      }
      break;
    case "DELETE":
      debugger;
      const { id } = req.query;
      const deleteItems = getItems();
      {
        /* const filteredItems = deleteItems.filter(
        (item: any) => item.userId !== parseInt(id as string, 10)
      );*/
      }
      const filteredItems = deleteItems.filter(
        (item: UserData) => item.userId !== id
      );
      saveItems(filteredItems);

      res.status(200).json({ message: "Item deleted" });
      break;
    default:
      res.status(405).end(); // Method Not Allowed
      break;
  }
}
