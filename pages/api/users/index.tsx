import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
{
  /* import type { UserData } from "../../../src/app/(admin)/userManagement/columns"; */
}
import type { UserData } from "@/components/ikon-ui/ikon-user-mgmt/user-data-schema";

// Function to load initial data from the JSON file - UNALTERED DATA TO BE FETCHED On EVERY NEW RENDER
const loadInitialData = () => {
  const filePath = path.join(
    process.cwd(),
    "data",
    "mockData",
    "mock-data-userDetails.json"
  );
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
};

let items = loadInitialData();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  debugger;
  console.log("Method:", req.method);
  console.log("Request Body:", req.body);
  console.log("Request Query:", req.query);

  switch (req.method) {
    case "GET":
      res.status(200).json(items);
      break;
    case "POST":
      const newItem = req.body;
      items.push(newItem);
      res.status(200).json(newItem);
      break;
    case "PUT":
      const updatedItem = req.body;
      items = items.map((item: UserData) =>
        item.userId === updatedItem.userId ? updatedItem : item
      );
      res.status(200).json(updatedItem);
      break;
    case "DELETE":
      const { userId } = req.query;
      items = items.filter((item: UserData) => item.userId !== userId);
      res.status(204).end();
      break;
    default:
      res.status(405).end(); // Method Not Allowed
      break;
  }
}
