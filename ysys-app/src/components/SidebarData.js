import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Houses',
        path: '/houses',
        icons: <AiIcons.AiFillHome/>,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Lannister',
                path: '/houses/lannister',
                icon: <IoIcons.IoIosPaper/>, 
            },
            {
                    title: 'Stark',
                    path: '/houses/stark',
                    icon: <AiIcons.AiFillAndroid/>, 
            },
            ]
    },
    {
        title: 'Dragons',
        path: '/dragons',
        icons: <FaIcons.FaAndroid/>,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill /> ,
        subNav: [
            {
                title: 'Drogon',
                path: '/dragons/drogon',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                    title: 'Rhaegal',
                    path: '/dragons/rhaegal',
                    icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: 'Viserion',
                path: '/dragons/viserion',
                icon: <IoIcons.IoIosPaper /> 
        },
        ]
    },
    {
        title: 'World',
        path: '/world',
        icons: <AiIcons.AiFillHome/>,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill /> ,
        subNav: [
            {
                title: 'Regions',
                path: '/world/regions',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                    title: 'Cities',
                    path: '/world/cities',
                    icon: <IoIcons.IoIosPaper /> 
            },
        ]
    },
    {
        title: 'Characters',
        path: '/characters',
        icons: <AiIcons.AiFillHome/>,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill /> ,
        subNav: [
            {
                title: 'John Snow',
                path: '/characters/john-snow',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                    title: 'Daenerys Targaryen',
                    path: '/characters/daenerys-targaryen',
                    icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: 'Tyrion Lannister',
                path: '/characters/tyrion-lannister',
                icon: <IoIcons.IoIosPaper /> 
        },
        ]
    },
   
];

