import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Houses',
        path: '/',
        icons: <AiIcons.AiFillHome/>,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: '10',
                path: '/',
                icon: <IoIcons.IoIosPaper/>, 
            },
            {
                    title: '25',
                    path: '/',
                    icon: <AiIcons.AiFillAndroid/>, 
            },
            {
                title: '50',
                path: '/',
                icon: <AiIcons.AiFillAndroid/>, 
            },
            ]
    },
    {
        title: 'Characters',
        path: '/',
        icons: <AiIcons.AiFillHome/>,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: '10',
                path: '/',
                icon: <IoIcons.IoIosPaper/>, 
            },
            {
                    title: '25',
                    path: '/',
                    icon: <AiIcons.AiFillAndroid/>, 
            },
            {
                title: '50',
                path: '/',
                icon: <AiIcons.AiFillAndroid/>, 
            },
            ]
    },
    {
        title: 'Books',
        path: '/',
        icons: <AiIcons.AiFillHome/>,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: '10',
                path: '/',
                icon: <IoIcons.IoIosPaper/>, 
            },
            {
                    title: '25',
                    path: '/',
                    icon: <AiIcons.AiFillAndroid/>, 
            },
            {
                title: '50',
                path: '/',
                icon: <AiIcons.AiFillAndroid/>, 
            },
            ]
    },
   
];

