'use client';

import { baseUrl } from "@/lib/api";
import { User } from "@/lib/type";
import React, { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
    user: User | null
    token: string | null
}

const initContext: AuthContextType = {
    user: null,
    token: null
}

const authContext = createContext<AuthContextType>(initContext);

export default function useAuth() {
    return useContext(authContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        if (!token) {
            setToken(localStorage.getItem('token'));
        }

        const getUser = async () => {
            try {
                const response = await fetch(`${baseUrl}/user`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });

                if (response.status === 200) {
                    const result = await response.json();
                    console.log(result);
                } else {
                    const result = await response.json();
                    console.log(result);
                }
            } catch (err) {
                console.log('fail to fetch user info', err);
            }
        }

        getUser();
    }, []);

    return <authContext.Provider value={{ user, token }}>{children}</authContext.Provider>
}