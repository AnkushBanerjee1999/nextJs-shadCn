'use client'

import React, { useState, useEffect } from "react";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import ProjectFormTable from './project-form-table';
import { v4 as uuidv4 } from 'uuid';
import DropdownProjData from "./project-data/dropdown-project-data";
import { initialProject, Rows } from "./project-list-card";

export type Cde = {
    cdeProjectId: string,
    // cdeProjectName: string,
    cdeUniqueId: string
}

export type Project = {
    projectId: string,
    projectName: string,
    cdes: Cde[],
    imageUrl: string
}

type Props = { 
    rowData: Rows, 
    formData: Project, 
    buttonStyle: string, 
    updateProjectData: Function, 
    isOpen: boolean, 
    onOpenChange: Function, 
    generateProjectId: Function, 
    isEditMode: boolean 
}

function ProjectFormDialog(props: Props) {
    const [uid, setUid] = useState(uuidv4());
    const [rowId, setRowId] = useState(1);
    const [rows, setRows] = useState<Rows>(props.rowData);
    const [projectData, setProjectData] = useState<Project>(initialProject);

    useEffect(() => {
        setRows(props.rowData);
        setProjectData(props.formData);
    }, [props.rowData, props.formData]);

    function generateUniqueId() {
        const uid = uuidv4();
        setUid(uid);
        clearData();
        props.generateProjectId();
    }

    function clearData() {
        setRows([{ key: 1, selectedDropdownVal: DropdownProjData[0].projId, uniqueId: uid }]);
        setRowId(2);
        setProjectData(initialProject);
    }

    function addNewRow() {
        const newuid = uuidv4();
        setRowId(rowId + 1);
        setRows([...rows, { key: rowId, selectedDropdownVal: DropdownProjData[0].projId, uniqueId: newuid }]);
    }

    function handleDropdownChange(rowKey: number, newValue: string) {
        console.log(rowKey);
        
        setRows((prevRows) =>
            prevRows.map((row) =>
                row.key === rowKey ? { ...row, selectedDropdownVal: newValue } : row
            )
        );
    }

    function deleteRow(rowKey: number) {
        setRows((prevRows) =>
            prevRows.filter((row) =>
                row.key !== rowKey
            )
        );
    }

    function handleChange(event: { target: { name: any; value: any; }; }) {
        setProjectData({ ...projectData, [event.target.name]: event.target.value });
    }

    function saveProjectData() {
        const cdesData = rows.map(row => ({
            cdeProjectId: row.selectedDropdownVal,
            cdeUniqueId: row.uniqueId
        }));
        projectData.cdes = cdesData;
        props.updateProjectData(projectData);
        props.onOpenChange(false); // Close the dialog after saving
    }

    return (
        <Dialog open={props.isOpen} onOpenChange={(open) => props.onOpenChange(open)}>
            <DialogTrigger asChild>
                <Button variant="outline" onClick={generateUniqueId} className={props.buttonStyle}>CREATE</Button>
            </DialogTrigger>
            <DialogContent className="md:max-w-[38%]">
                <DialogHeader>
                    <DialogTitle>{props.isEditMode ? "Edit Project" : "Add Project"}</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4 pl-4">
                    <div className="grid grid-cols-1 items-center gap-4">
                        <Label htmlFor="projId" className="text-left">
                            Project Id
                        </Label>
                        <Input
                            id="projId" name='projectId'
                            placeholder=""
                            className="col-span-3"
                            value={projectData.projectId}
                            disabled
                        />
                    </div>
                    <div className="grid grid-cols-1 items-center gap-4">
                        <Label htmlFor="projName" className="text-left">
                            Project Name
                        </Label>
                        <Input
                            id="projName" name="projectName"
                            placeholder="Enter Project Name"
                            onChange={handleChange}
                            className="col-span-3"
                            value={projectData.projectName}
                        />
                    </div>
                </div>
                <div className="rounded-md">
                    <ProjectFormTable rows={rows} handleDropdownChange={handleDropdownChange} deleteRow={deleteRow}></ProjectFormTable>
                    <Button size="sm" onClick={addNewRow} className="float-right m-2">Add</Button>
                </div>
                <DialogClose>
                    <Button type="submit" className="float-right" onClick={saveProjectData}>Save changes</Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
}

export default ProjectFormDialog;
