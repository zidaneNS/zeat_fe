'use client';

import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";
import { useState } from "react";

export default function Page() {
    const [isLogin, setIsLogin] = useState<boolean>(true);
    
    return (
        <main className="flex min-h-screen items-center justify-center mt-20">
            {isLogin ? <LoginForm setIsLogin={setIsLogin} /> : <RegisterForm setIsLogin={setIsLogin} />}
        </main>
    )
}