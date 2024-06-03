"use client";

import React, { useEffect, useState, useRef } from "react";

import type { UserData } from "@/components/ikon-ui/ikon-user-mgmt/user-data-schema";
import { getColumns } from "./columns";
import { DataTable } from "./data-table";
import { Button } from "@/components/ui/button";

import { UserCreationForm } from "./forms/dialog-user-creation-form";

export default function IkonUserMgmt({}: Props) {
  const [data, setData] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editUserData, setEditUserData] = useState(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const hasFetchedData = useRef(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/users`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!hasFetchedData.current) {
      fetchData();
      hasFetchedData.current = true;
    }
  }, []);

  const handleSaveUser = async (user: UserData) => {
    debugger;
    try {
      const method = editUserData ? "PUT" : "POST";
      const url = `${apiUrl}/users`;
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      if (!response.ok) throw new Error("Network response was not ok");
      await fetchData();
    } catch (error) {
      console.error("Failed to save user:", error);
    }
  };

  const handleCreateUser = async (newUser: UserData) => {
    try {
      const response = await fetch(`${apiUrl}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      await fetchData();
    } catch (error) {
      console.error("Failed to add item:", error);
    }
  };

  const handleUpdate = async (id: string) => {
    const itemToUpdate = data.find((item) => item.userId === id);
    if (!itemToUpdate) return;

    const updatedItem = {
      ...itemToUpdate,
      userName: "EDITED",
      userActive: false,
    };
    try {
      const response = await fetch(`${apiUrl}/users`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedItem),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      debugger;
      await fetchData();
    } catch (error) {
      console.error("Failed to update item:", error);
    }
  };

  const handleEdit = (userId) => {
    const user = data.find((item) => item.userId === userId);
    if (user) {
      setEditUserData(user);
      setIsDialogOpen(true);
    }
  };

  const handleAdd = () => {
    setEditUserData(null);
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`${apiUrl}/users?userId=${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      await fetchData();
    } catch (error) {
      console.error("Failed to delete item:", error);
    }
  };

  const handleToggleActive = async (id: string, isActive: boolean) => {
    const itemToUpdate = data.find((item) => item.userId === id);
    if (!itemToUpdate) return;

    const updatedItem = {
      ...itemToUpdate,
      userActive: isActive,
    };
    try {
      const response = await fetch(`${apiUrl}/users`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedItem),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      await fetchData();
    } catch (error) {
      console.error("Failed to toggle active state:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>

        <div>&nbsp;&nbsp;&nbsp;Please wait while data is being fetched...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 w-full">
      {/* <PageTitle title="User Management" /> */}

      <div className="flex justify-end">
        {/* <UserCreationForm onCreateUser={handleCreateUser} /> */}
        <Button className="h-8 border-dashed" onClick={handleAdd}>
          Create User
        </Button>
      </div>

      {/* <DataTable
        columns={getColumns(handleUpdate, handleDelete, handleToggleActive)}
        data={data}
      /> */}

      <DataTable
        columns={getColumns(handleEdit, handleDelete, handleToggleActive)}
        data={data}
      />
      {isDialogOpen && (
        <UserCreationForm
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          initialData={editUserData}
          onSave={handleSaveUser}
        />
      )}
    </div>
  );
}
