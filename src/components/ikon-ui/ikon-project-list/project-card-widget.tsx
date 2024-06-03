import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { Edit, Trash } from "lucide-react";


function ProjectCardWidget(card: { id: string, imageUrl: string, title: string, deleteProjectData: Function, openEditForm: Function}) {
    // const cardStyle = 
    //     `backgroundImage: 'url(${card.imageUrl})',
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     color: 'white', `;
        
    const cardStyle = {
        backgroundImage: `url(${card.imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'black', 
    };    
    
    return (
        <>
            <ContextMenu>
                <ContextMenuTrigger>
                    <Card style={cardStyle} key={card.id} className="shadow rounded-lg overflow-hidden w-[98%] h-[160px] bg">
                        {/* <img className="w-full h-full object-cover" src={card.imageUrl} alt={`Card Image ${card.index + 1}`} /> */}
                        <CardTitle className="text-lg ml-2" title={card.title}>
                            <h2>{card.title.length > 25 ? card.title.substring(0,25) + "..." : card.title}</h2>
                        </CardTitle>
                    </Card>
                </ContextMenuTrigger>
                <ContextMenuContent>
                    <ContextMenuItem onClick={() => card.openEditForm(card.id)}><Edit className="w-[15px] mr-2" />Edit</ContextMenuItem>
                    <ContextMenuItem onClick={() => card.deleteProjectData(card.id)}><Trash className="w-[15px] mr-2" />Delete</ContextMenuItem>
                </ContextMenuContent>
            </ContextMenu>


        </>
    )
}

export default ProjectCardWidget;