'use client'

import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { v4 as uuidv4 } from 'uuid';
import ProjectFormDialog from '@/components/ikon-ui/ikon-project-list/project-form';
import ProjectCardWidget from '@/components/ikon-ui/ikon-project-list/project-card-widget';
import LineChartComponent from './project-list-charts/line-chart-component';
import { Project } from "@/components/ikon-ui/ikon-project-list/project-form";
import DropdownProjData from "./project-data/dropdown-project-data";
import { CircleAlert } from "lucide-react";

export type Rows = {
    key: number,
    selectedDropdownVal: string,
    uniqueId: string
}[];

export const initialProject: Project = {
    projectId: "",
    projectName: '',
    cdes: [],
    imageUrl: "https://img.freepik.com/free-photo/office-skyscrapers-business-district_107420-95733.jpg?t=st=1713959016~exp=1713962616~hmac=b6459e8247c89472cc64f623577c27436e83f0755928d63ca29306d61df0bb5a&amp;w=1380"
};

function ProjectListCard() {
    const createBtnStyle = "absolute right-2 top-[-1rem]";
    const [projectId, setProjectId] = useState(uuidv4());
    const [formData, setFormData] = useState<Project>(initialProject);
    const [rowData, setRowData] = useState<Rows>([{ key: 1, selectedDropdownVal: DropdownProjData[0].projId, uniqueId: uuidv4() }]);
    const [allProjects, setAllProjects] = useState<Project[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);

    function onOpenChange(value: boolean) {
        if (!value) {
            setFormData(initialProject);
            setRowData([{ key: 1, selectedDropdownVal: DropdownProjData[0].projId, uniqueId: uuidv4() }]);
            setIsEditMode(false);
        }
        setIsOpen(value);
    }

    function generateProjectId() {
        setProjectId(uuidv4());
        initialProject.projectId = projectId;
    }

    function updateProjectData(projectData: Project) {
        if (isEditMode) {
            setAllProjects((prevProjects) =>
                prevProjects.map((project) =>
                    project.projectId === projectData.projectId ? projectData : project
                )
            );
        } else {
            setAllProjects((prevProjects) => [...prevProjects, projectData]);
        }
        setIsEditMode(false);
    }

    function openEditForm(id: string) {
        const projectToEdit = allProjects.find(project => project.projectId === id);
        if (projectToEdit) {
            setFormData(projectToEdit);
            const rowData = projectToEdit.cdes.map((cde, index) => ({
                key: index + 1,
                selectedDropdownVal: cde.cdeProjectId,
                uniqueId: cde.cdeUniqueId
            }));
            setRowData(rowData);
            setIsEditMode(true);
            setIsOpen(true);
        }
    }

    function deleteProjectData(id: string) {
        setAllProjects((prevProjects) => prevProjects.filter(project => project.projectId !== id));
    }

    return (
        <div>
            <div className='mb-7'>
                <h4 className="text-xl font-semibold mb-2 ml-1">Project Summary</h4>
                <Card className="shadow-md">
                    <CardContent className="h-[250px] flex flex-row-reverse p-0 mb-4">
                        <div className="w-[400px] h-[250px]">
                            <span className="font-semibold px-6">Updated Past Months</span>
                            <LineChartComponent />
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className='relative'>
                <h4 className="text-xl font-semibold mb-2 ml-1">Project List</h4>
                <ProjectFormDialog
                    formData={formData}
                    rowData={rowData}
                    generateProjectId={generateProjectId}
                    buttonStyle={createBtnStyle}
                    updateProjectData={updateProjectData}
                    onOpenChange={onOpenChange}
                    isOpen={isOpen}
                    isEditMode={isEditMode}
                />
                {/* <Card className="shadow-md h-[500px]">
                    <CardContent className="mt-10">
                        {allProjects.length > 0 ?
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ml-4 gap-2">
                                {allProjects.map((card) => (
                                    <ProjectCardWidget
                                        key={card.projectId}
                                        id={card.projectId}
                                        imageUrl={card.imageUrl}
                                        title={card.projectName}
                                        deleteProjectData={deleteProjectData}
                                        openEditForm={openEditForm}
                                    />
                                ))}
                            </div> :
                            <div className="flex items-center justify-center h-full align-middle jus">
                                <div className="text-center p-6 align-middle">
                                    <CircleAlert size={48} className="align-middle"/>
                                    <p className="text-gray-600 text-lg">No Projects Available</p>
                                </div>
                            </div>
                        }
                    </CardContent>
                    <CardFooter>
                    </CardFooter>
                </Card> */}

                <Card className="shadow-md h-[450px]">
                    <CardContent className="mt-9 h-full">
                        {allProjects.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ml-4 gap-2">
                                {allProjects.map((card) => (
                                    <ProjectCardWidget
                                        key={card.projectId}
                                        id={card.projectId}
                                        imageUrl={card.imageUrl}
                                        title={card.projectName}
                                        deleteProjectData={deleteProjectData}
                                        openEditForm={openEditForm}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="flex items-center justify-center h-full">
                                <div className="text-center p-6">
                                    <CircleAlert size={100} className="mx-auto mb-4" />
                                    <span><p className="text-black-900 text-xl font-bold">No projects available</p></span>
                                </div>
                            </div>
                        )}
                    </CardContent>
                    <CardFooter>
                        {/* You can add footer content here if needed */}
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}

export default ProjectListCard;
