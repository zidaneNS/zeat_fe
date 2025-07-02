'use client';

import { baseUrl } from "@/lib/api";
import { User } from "@/lib/type";
import { redirect } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
    user: User | null,
    getUser: () => Promise<void>,
    logout: () => Promise<void>
}

const initContext: AuthContextType = {
    user: null,
    getUser: async () => {},
    logout: async () => {}
}

const authContext = createContext<AuthContextType>(initContext);

export default function useAuth() {
    return useContext(authContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    const getUser = async () => {
        const token = localStorage.getItem('token');
        if (!token) return;
        
        try {
            const response = await fetch(`${baseUrl}/user`, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            const result = await response.json();
            if (response.status === 200) {
                const data = result.data;
                setUser(data as User);
            } else {
                console.log(result);
            }
        } catch (err) {
            console.log('fail to fetch user info', err);
        }
    }

    const logout = async () => {
        const token = localStorage.getItem('token');
        if (!token) return
        
        try {
            const response = await fetch(`${baseUrl}/logout`, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            const result = await response.json();
            if (response.status === 200) {
                localStorage.removeItem('token');
                setUser(null);
            } else {
                console.log(result);
            }
        } catch (err) {
            console.log('logout error', err);
        }

        redirect('/auth');
    }

    useEffect(() => {
        getUser();
    }, []);

    return <authContext.Provider value={{ user, getUser, logout }}>{children}</authContext.Provider>
}