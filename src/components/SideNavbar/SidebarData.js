import React from 'react';
import {AiOutlineTeam} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import {CgListTree} from 'react-icons/cg';
import {RiLogoutBoxLine} from 'react-icons/ri';

export const SidebarData =[
    {
        title:'Genealogy',
        path:"/register",
        icon:<CgListTree />,
        cName:"nav-text"
    },

    {
        title:'My Team',
        path:"/team",
        icon:<AiOutlineTeam />,
        cName:"nav-text"
    },

    {
        title:'My Profile',
        path:"/profile",
        icon:<CgProfile />,
        cName:"nav-text"
    },

    {
        title:'Logout',
        path:"/sign",
        icon:<RiLogoutBoxLine />,
        cName:"nav-text"
    }
];