export default function Page() {
    return (
        <main className="mt-20 flex flex-col gap-y-4 h-screen px-6">
            <h1 className="text-3xl text-indigo-700 font-bold">Order History</h1>
            <section className="h-full overflow-y-auto py-4 px-6 scrollbar-thin scrollbar-track-400/20 scrollbar-thumb-400 w-full">
                <div className="max-h-full grid grid-cols-1 gap-y-4 px-2 py-3 w-full">
                    {Array.from({ length: 5 }).map((_, idx) => (
                        <div key={idx} className="bg-white rounded-md shadow-xl flex flex-col gap-y-3 px-6 py-4 text-indigo-700">
                            <div className="flex w-full justify-between items-center">
                                <div className="flex flex-col justify-center">
                                    <h2 className="text-2xl">Order #99999</h2>
                                    <p className="text-slate-700 text-sm">02/07/2025</p>
                                </div>
                                <p className="py-2 px-4 bg-orange-400/30 text-orange-600 text-sm rounded-lg">
                                    Processing
                                </p>
                            </div>
                            <p className="text-sm">Item :</p>
                            <div className="flex w-full justify-between items-center">
                                <div className="flex gap-x-2 items-center">
                                    <div className="h-12 w-12 rounded-md bg-indigo-300"></div>
                                    <div className="flex flex-col justify-center">
                                        <p className="font-semibold text-orange-600">Food Name</p>
                                        <p className="text-slate-700">Qty: 1</p>
                                    </div>
                                </div>
                                <p className="text-md font-bold text-slate-700">Rp 10.000</p>
                            </div>
                            <span className="border-b border-slate-600/30 w-full"></span>
                            <div className="flex w-full justify-between items-center">
                                <div className="flex flex-col">
                                    <p>Payment Method :</p>
                                    <p className="text-md font-semibold text-orange-600">GoPay</p>
                                </div>
                                <div className="flex flex-col items-center gap-y-2">
                                    <p className="text-sm text-indigo-500">Total :</p>
                                    <p className="text-lg font-bold">Rp 12.000</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}