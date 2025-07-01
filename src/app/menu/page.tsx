import { IoCartOutline } from "react-icons/io5";

export default function Page() {
    return (
        <main className="mt-20 h-screen flex flex-col w-full gap-y-6">
            <section className="w-full flex flex-col items-center gap-y-4">
                <h2 className="text-4xl font-bold text-indigo-700 w-full text-center">Delicious Food & Refreshing Drinks</h2>
                <p className="text-slate-700 w-2/3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quaerat vitae sit consectetur possimus autem nam, sunt dolor dolore enim!</p>
            </section>
            <section className="w-full flex justify-center">
                <div className="bg-white text-slate-800 flex px-4 py-2 rounded-md shadow-xl gap-x-3">
                    {Array.from({ length: 3 }).map((_, idx) => (
                        <div key={idx} className="py-2 px-4 rounded-md cursor-pointer hover:bg-indigo-700 hover:text-white duration-300">item</div>
                    ))}
                </div>
            </section>
            <section className="h-full w-full px-4 py-6 overflow-y-auto scrollbar-thin scrollbar-track-indigo-400/20 scrollbar-thumb-indigo-400">
                <div className="grid grid-cols-4 max-h-full gap-x-4 gap-y-6">
                    {Array.from({ length: 20 }).map((_, idx) => (
                        <div key={idx} className="w-full bg-white shadow-xl rounded-md flex flex-col px-4 py-2 gap-y-3 text-indigo-800 hover:-translate-y-4 duration-300">
                            <div className="w-full rounded-md bg-slate-300 h-32"></div>
                            <div className="w-full flex justify-between items-center">
                                <p className="text-lg font-semibold">Name</p>
                                <p className="text-sm bg-indigo-300/20 py-2 px-4 rounded-xl">Food</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, earum.</p>
                            <p className="text-2xl font-bold">Rp 10.000</p>
                            <button className="flex justify-center items-center gap-x-4 w-full bg-indigo-700 cursor-pointer text-white rounded-md py-2 hover:bg-indigo-500 duration-300 mt-auto">
                                <IoCartOutline className="size-6" />
                                <p>Add to Cart</p>
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}