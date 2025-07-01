import Link from "next/link";
import { CiUser } from "react-icons/ci";

export default function Navbar() {
    return (
        <nav className="w-full fixed top-0 left-0 flex justify-between px-6 py-4 shadow-xl bg-gradient-to-r from-indigo-950 to-indigo-700 items-center">
            <h2 className="text-2xl font-bold text-orange-400 cursor-pointer text-shadow-lg/40">Zeat</h2>
            <Link href="/auth" className="flex gap-x-4 text-white">
                <div className="flex items-center gap-x-2 cursor-pointer hover:bg-white/20 rounded-md duration-300 py-2 px-4">
                <CiUser className="w-6 h-6" />
                <p className="text-sm">Sign In</p>
                </div>
            </Link>
        </nav>
    )
}