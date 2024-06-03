"use client"
import React from 'react'
import { CircleDot } from 'lucide-react';
import TimelineItem from './timeline-item';
import TimelineHeader from './timeline-header';
import { Separator } from "@/components/ui/separator"


function Downloaded() {
    return (
        <>
            <TimelineHeader
                title="ACC - Connector"
                description="#5635-342808"
                date="4/09/2023"
            />
            <TimelineItem
                title="Revit File Download"
                description="ACH-P1-Z01-FP-001.rvt"
                status="Success"
            />
            <TimelineItem
                title="Revit File Download"
                description="ACH-P1-Z01-FP-002.rvt"
                status="Success"
            />
            <TimelineItem
                title="Revit File Download"
                description="ACH-P1-Z01-FP-003.rvt"
                status="Success"
            />
            <TimelineItem
                title="Revit File Download"
                description="COO-PI-Z01-FP-SDIOO.nwd"
                status="Success"
            />
            <Separator className="mb-4" />

        </>
    );



}

export default Downloaded