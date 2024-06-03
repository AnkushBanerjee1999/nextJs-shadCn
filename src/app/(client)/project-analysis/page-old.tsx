"use client";
import React, { useState } from "react";
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
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Downloaded from "@/components/ikon-ui/ikon-project-analysis/activities-download";
import { Tree, TreeViewElement, File, Folder, CollapseButton } from "@/components/ikon-ui/ikon-project-analysis/tree-view-api";
import PieChartComponent from '@/components/ikon-ui/ikon-project-analysis/project-analysis-chart/pie-chart-component'
import ProjectSummaryCde from "@/components/ikon-ui/ikon-project-analysis/project-summary-cde";
import { Clock3 } from 'lucide-react'
import {Layers3} from 'lucide-react'
import BarChartComponent from "@/components/ikon-ui/ikon-project-analysis/project-analysis-chart/bar-chart-component";


type TreeItemProps = {
  elements: TreeViewElement[];
};

type TOCProps = {
  toc: TreeViewElement[];
};

export const TreeItem = ({ elements }: TreeItemProps) => {
  return (
    <ul className="w-full space-y-1">
      {elements.map((element) => (
        <li key={element.id} className="w-full space-y-2">
          {element.children && element.children.length > 0 ? (
            <Folder
              element={element.name}
              value={element.id}
              isSelectable={element.isSelectable}
              className="px-px pr-1"
            >
              <TreeItem key={element.id} aria-label={`folder ${element.name}`} elements={element.children} />
            </Folder>
          ) : (
            <File key={element.id} value={element.id} isSelectable={element.isSelectable}>
              <span>{element?.name}</span>
            </File>
          )}
        </li>
      ))}
    </ul>
  );
};

const TOC = ({ toc }: TOCProps) => {
  return (
    <div className="flex">
      <Card className="w-[700px]">
        <CardHeader>
          <CardTitle>Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <Tree className="w-full h-60 bg-background p-2 rounded-md" indicator={true}>
            {toc.map((element) => (
              <TreeItem key={element.id} elements={[element]} />
            ))}
            <CollapseButton elements={toc} expandAll={true} />
          </Tree>
        </CardContent>
      </Card>
    </div>
  );
};

const TOCWrapper = () => {
  const toc: TreeViewElement[] = [
    {
      id: "1",
      name: "components",
      children: [
        {
          id: "2",
          name: "extension",
          children: [
            {
              id: "3",
              name: "tree-view.tsx",
            },
            {
              id: "4",
              name: "tree-view-api.tsx",
            },
          ],
        },
        {
          id: "5",
          name: "dashboard-tree.tsx",
        },
      ],
    },
    {
      id: "6",
      name: "pages",
      children: [
        {
          id: "7",
          name: "page.tsx",
        },
        {
          id: "8",
          name: "page-guide.tsx",
        },
      ],
    },
    {
      id: "18",
      name: "env.ts",
    },
  ];

  return <TOC toc={toc} />;
};
const ProjectDetails = () => {
  const [summarySelection, setSummarySelection] = useState("CDE");
  const [activitiesSelection, setActivitiesSelection] = useState("Activities");

  const handleSummaryClick = (selection) => {
    setSummarySelection(selection);
  };

  const handleActivitiesClick = (selection) => {
    setActivitiesSelection(selection);
  };
  const toc: TreeViewElement[] = [
    {
      id: "1",
      name: "components",
      children: [
        {
          id: "2",
          name: "extension",
          children: [
            {
              id: "3",
              name: "tree-view.tsx",
            },
            {
              id: "4",
              name: "tree-view-api.tsx",
            },
          ],
        },
        {
          id: "5",
          name: "dashboard-tree.tsx",
        },
      ],
    },
    {
      id: "6",
      name: "pages",
      children: [
        {
          id: "7",
          name: "page.tsx",
        },
        {
          id: "8",
          name: "page-guide.tsx",
        },
      ],
    },
    {
      id: "18",
      name: "env.ts",
    },
  ];
  const projectData = [
    {
      projectName: "Projectwise",
      projectDesc: "project desc",
      total: 76,
      used: 50,
      icon: <Clock3 color="#8ccef1" className='w-[40px] h-[40px] m-1'/>
    },
    {
      projectName: "ACC",
      projectDesc: "project desc",
      total: 96,
      used: 93,
      icon: <Clock3 color="#8ccef1" className='w-[40px] h-[40px] m-1'/>
    },
    {
      projectName: "BIM 360",
      projectDesc: "project desc",
      total: 214,
      used: 207,
      icon: <Clock3 color="#8ccef1" className='w-[40px] h-[40px] m-1'/>
    },
    {
      projectName: "Dropbox",
      projectDesc: "project desc",
      total: 100,
      used: 66,
      icon: <Layers3 color="#8ccef1" className='w-[40px] h-[40px] m-1'/>
    }
    
  ];



  return (

    <>
      <div className="mb-4">
        <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
          Project Details
        </h1>
      </div>

      <div className="flex flex-col space-y-4 h-full">
      <div className="flex flex-row items-start justify-between w-full border  rounded-lg p-4 space-x-4 max-h-[160px]">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Project Name</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
        <div className="flex justify-end">
        <div className="flex-grow">
        <PieChartComponent />
        </div>
        <div className="flex-grow">
        <BarChartComponent />
        </div>
        </div>
        </div>
        <div className="max-w-full border  rounded-lg p-4 flex-grow ">
          <div className="flex flex-row h-full">
            <div className="flex flex-col lg:mb-0 flex-grow mr-4">
              <Menubar className="w-[12.7rem] mb-2">
                <MenubarMenu>
                  <MenubarTrigger>Summary</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem onClick={() => handleSummaryClick("CDE")}>CDE</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem onClick={() => handleSummaryClick("DocumentSubmenu")}>Documents</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem onClick={() => handleSummaryClick("Disciplines")}>Disciplines</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger onClick={() => handleSummaryClick("Documents")}>Documents</MenubarTrigger>
                </MenubarMenu>
              </Menubar>
              <Card className="h-full">
                <CardContent>
                  <h2><u>{summarySelection}</u></h2>
                  {summarySelection === "Documents" ? (
                    <div className="p-4">
                      <Tree className="w-full h-60 bg-background p-2 rounded-md" indicator={true}>
                        {toc.map((element) => (
                          <TreeItem key={element.id} elements={[element]} />
                        ))}
                        <CollapseButton elements={toc} expandAll={true} />
                      </Tree>
                    </div>
                  ) : (
                    <div></div>
                  )}
                  {summarySelection === "CDE" ? (
                    <div className="">
                      {projectData.map((project, index) => (
                        <ProjectSummaryCde
                          key={index}
                          projectName={project.projectName}
                          projectDesc={project.projectDesc}
                          total={project.total}
                          used={project.used}
                          icon={project.icon}
                        />
                      ))}
                    </div>
                  ) : (
                    <div>No summary available.</div>
                  )}



                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col lg:mb-0 flex-grow">
              <Menubar className="w-[24.6rem] mb-2">
                <MenubarMenu>
                  <MenubarTrigger onClick={() => handleActivitiesClick("Activities")}>Activities</MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger onClick={() => handleActivitiesClick("3D Viewer")}>3D Viewer</MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger onClick={() => handleActivitiesClick("Analytics")}>Analytics</MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger onClick={() => handleActivitiesClick("AI Assistant")}>AI Assistant</MenubarTrigger>
                </MenubarMenu>
              </Menubar>
              <Card className="h-full">
                <CardContent>
                  <h2><u>{activitiesSelection}</u></h2>
                  {activitiesSelection === "Activities" ? (
                    <div className="p-4">
                      <Downloaded />
                      <Downloaded />
                    </div>
                  ) : (
                    <div>Content for Activities: {activitiesSelection}</div>
                  )}
                   {activitiesSelection === "Analytics" ? (
                    <>
                    <div className="flex">
                      <PieChartComponent />
                      <PieChartComponent />
                    </div>
                    <div className="flex">
                    <PieChartComponent />
                    <PieChartComponent />
                  </div>
                  </>
                  ) : (
                    <div></div>
                  )}

                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
