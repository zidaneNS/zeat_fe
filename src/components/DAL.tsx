'use client';

import { redirect, usePathname } from "next/navigation";
import React, { useEffect } from "react";

export default function DAL({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const protectedRoutes = ['/menu', '/checkout', '/history'];

    useEffect(() => {
        const token = localStorage.getItem('token');
    
        if (protectedRoutes.includes(pathname) && !token) return redirect('/auth');
    }, [pathname]);

    return children
}