'use client';
import React from 'react'
import { SidebarStyles } from './Sidebar.style';
import { useGlobalState } from '@/app/context/globalProvider';

function Sidebar() {
    const { theme } = useGlobalState();

    return (
        <SidebarStyles theme={theme}>Sidebar</SidebarStyles>
    )
}

export default Sidebar