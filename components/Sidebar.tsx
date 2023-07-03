"use client"

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

import { Box, SidebarItem } from "@/components";

interface SidebarProps {
    children: React.ReactNode;
    songs?: string;
}

const Sidebar = ({ children, songs }: SidebarProps) => {

    const pathname = usePathname();

    const routes = useMemo(() => [
        {
            label: 'Home',
            icon: HiHome,
            active: pathname !== '/search',
            href: '/'
        },
        {
            label: 'Search',
            icon: BiSearch,
            href: '/search',
            active: pathname === '/search'
        },
    ], [pathname]);

    return (
        <div
            className={twMerge(`flex h-full`, 'h-[calc(100%-80px)]'
            )}
        >
            <div className="hidden md:flex flex-col gap-y-2 
                bg-black h-full w-[300px] p-2"
            >
                <Box>
                    <div className="flex flex-col gap-y-4 px-5 py-4">
                        {routes.map((item) => (
                            <SidebarItem key={item.label} {...item} />
                        ))}
                    </div>
                </Box>
                <Box className="overflow-y-auto h-full">
                    <p>Songs</p>
                </Box>
            </div>
            <main className="h-full flex-1 overflow-y-auto py-2">
                {children}
            </main>
        </div>
    );
}

export default Sidebar