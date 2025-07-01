import { Dispatch, SetStateAction } from "react";
import FormInputField from "../FormInputField";

export default function RegisterForm({
    setIsLogin
}: {
    setIsLogin: Dispatch<SetStateAction<boolean>>
}) {
    return (
        <form className="flex flex-col gap-y-4 bg-orange-300 rounded-md shadow-xl py-4 px-6 w-1/2 text-orange-800">
            <div className="flex flex-col w-full items-center gap-y-4">
                <h1 className="text-2xl text-orange-700 font-bold">Zeat</h1>
                <div className="flex flex-col w-full gap-y-2 items-center">
                    <p className="text-xl font-semibold text-orange-600">Welcome Back</p>
                    <p>Sign up to your account</p>
                </div>
            </div>
            <FormInputField
                type="text"
                name="name"
                placeholder="Enter your name"
                title="Name"
            />
            <FormInputField
                type="email"
                name="email"
                placeholder="Enter your email"
                title="Email"
            />
            <FormInputField
                type="password"
                name="password"
                placeholder="Enter your password"
                title="Password"
            />
            <FormInputField
                type="password"
                name="password_confirmation"
                placeholder="Enter your password"
                title="Confirm Password"
            />
            <button className="w-full bg-indigo-700 rounded-md shadow-xl text-white cursor-pointer hover:bg-indigo-500 duration-300 text-center py-2">
                Sign Up
            </button>
            <div className="w-full flex flex-col items-center">
                <p>Already have an account?</p>
                <p onClick={() => setIsLogin(prev => !prev)} className="text-orange-950 font-semibold cursor-pointer">Sign In</p>
            </div>
        </form>
    )
}