'use client';
import React from 'react'
import { SidebarStyles } from './Sidebar.style';
import { useGlobalState } from '@/app/context/globalProvider';
import Image from 'next/image';

function Sidebar() {
    const { theme } = useGlobalState();

    return (
        <SidebarStyles theme={theme}>
            <div className="profile">
                <div className="profile-overlay"></div>
                <div className="image">
                    <Image width={70} height={70} src="/avatar.jpg" alt="profile" />
                </div>
                <h1>
                    <span>John</span>
                    <span>Doe</span>
                </h1>
            </div>
            <ul className="nav-items">
            </ul>
        </SidebarStyles>
    )
}

export default Sidebar