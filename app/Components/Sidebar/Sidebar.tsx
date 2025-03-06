'use client';
import React from 'react'
import { Button, NavItem, SidebarImage, SidebarStyles, SidebarStylesProfile } from './Sidebar.style';
import { useGlobalState } from '@/app/context/globalProvider';
import Image from 'next/image';
import menu from '@/app/utils/menu';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

function Sidebar() {
    const { theme } = useGlobalState();
    const pathname = usePathname();
    const isActive = (link: string) => pathname === link;


    return (
        <SidebarStyles theme={theme}>
            <SidebarStylesProfile>
                <div className="profile-overlay"></div>
                <SidebarImage>
                    <Image width={70} height={70} src="/avatar.jpg" alt="profile" />
                </SidebarImage>
                <h1>
                    <span>John</span>
                    <span>Doe</span>
                </h1>
            </SidebarStylesProfile>
            <ul>
                {menu.map((item) => (
                    <NavItem key={item.id} className={isActive(item.link) ? "isActive" : ""}>
                        {item.icon}
                        <Link href={item.link}>{item.title}</Link>
                    </NavItem>

                ))}
            </ul>
            <Button></Button>
        </SidebarStyles>
    )
}

export default Sidebar