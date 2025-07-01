import { RiDeleteBin6Line } from "react-icons/ri";

export default function Page() {
    return (
        <main className="flex flex-col h-screen px-8 gap-y-4 mt-20">
            <h1 className="text-3xl font-bold text-indigo-700">Waiting for Checkout</h1>
            <section className="h-full flex flex-col px-4 w-full overflow-y-auto scrollbar-thin scrollbar-track-indigo-400/20 scrollbar-thumb-400">
                <div className="max-h-full grid grid-cols-1 gap-y-4 w-full">
                    {Array.from({ length: 15 }).map((_, idx) => (
                        <div key={idx} className="w-full flex justify-between bg-white rounded-md shadow-xl px-4 py-2 items-center text-indigo-700">
                            <div className="flex gap-x-2 items-center">
                                <span className="h-16 w-16 rounded-md bg-indigo-400"></span>
                                <div className="flex flex-col justify-center">
                                    <p className="text-lg font-semibold">Name</p>
                                    <p>Rp 10.000</p>
                                </div>
                            </div>
                            <div className="flex gap-x-6 items-center">
                                <div className="flex items-center">
                                    <div className="flex justify-center items-center bg-orange-400 rounded-md py-2 px-4 text-white cursor-pointer hover:bg-orange-300 duration-300">-</div>
                                    <div className="px-6 py-2 bg-orange-300/40 h-full text-slate-700">1</div>
                                    <div className="flex justify-center items-center bg-orange-400 rounded-md py-2 px-4 text-white cursor-pointer hover:bg-orange-300 duration-300">+</div>
                                </div>
                                <button className="text-white py-2 px-4 bg-indigo-700 rounded-md cursor-pointer hover:bg-indigo-500 duration-300">Checkout</button>
                                <div className="flex flex-col gap-y-4 items-center">
                                    <p>Rp 10.000</p>
                                    <RiDeleteBin6Line className="text-red-500 size-6 cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}