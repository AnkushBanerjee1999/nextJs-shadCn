'use client'

import React, { useState } from 'react';
import { Table, TableBody, TableRow, TableCell, TableHeader } from '@/components/ui/table';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trash } from 'lucide-react';
import DropdownProjData from './project-data/dropdown-project-data';

function ProjectFormTable(props:{handleDropdownChange: Function,deleteRow : Function, rows: {key:number, selectedDropdownVal: string, uniqueId: string}[]}) {

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableCell>CDE Project</TableCell>
                    <TableCell>CDE UniqueId</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHeader>
            <TableBody>
                {props.rows.map((row:{key:number, selectedDropdownVal: string, uniqueId:string}) => {
                    return <TableRow key={row.key}>
                    <TableCell>
                        <Select value={row.selectedDropdownVal} onValueChange={(value) => props.handleDropdownChange(row.key, value)}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select a project" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {DropdownProjData.map((eachProj) => {
                                        return <SelectItem value={eachProj.projId}>{eachProj.projName}</SelectItem>
                                    })}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </TableCell>
                    <TableCell>
                        <Input disabled value={row.uniqueId} title={row.uniqueId}/>
                    </TableCell>
                    <TableCell>
                        <Button variant="destructive" className='px-2 text-xs' onClick={() => props.deleteRow(row.key)}><Trash /></Button>
                    </TableCell>
                </TableRow>
                })}
            </TableBody>
        </Table>
    );
};

export default ProjectFormTable;
