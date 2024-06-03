import { BsDatabaseFillUp , BsDatabaseFillGear , BsFillPersonCheckFill } from "react-icons/bs";
import { SideNavItem } from "./types/type";

export const side_nav_items:SideNavItem[]=[
    {
        title:'Project List',
        path:'/project-list',
        icon:<BsDatabaseFillGear size={20}></BsDatabaseFillGear>
    },
    {
        title:'Project Analysis',
        path:'/project-analysis',
        icon:<BsDatabaseFillUp size={20}></BsDatabaseFillUp>
    },
    {
        title:'Admin',
        path:'/admin',
        icon:<BsFillPersonCheckFill size={20}></BsFillPersonCheckFill>
    }
]