import Link from "next/link";

export default function Page() {
  return (
    <main className="h-full">

      {/* Hero Section */}
      <section className="h-screen w-full">
        <div className="flex flex-col items-center justify-center gap-y-8 bg-indigo-700 h-full text-white">
          <h1 className="text-4xl font-bold">Welcome to <span className="text-orange-400">Zeat</span></h1>
          <p>Comfy your stomach comfy your day</p>
          <Link href="/menu" className="px-6 py-4 rounded-md cursor-pointer text-black bg-orange-400 hover:bg-orange-500 duration-300">
            Start Shopping
          </Link>
        </div>
      </section>

      {/* Why Section */}
      <section className="h-screen flex flex-col px-2 items-center justify-center gap-y-12 w-full">
        <h2 className="text-4xl font-bold text-indigo-800">Why Choose Zeat?</h2>
        <div className="w-full px-4 grid grid-cols-3 gap-x-6">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div key={idx} className="flex flex-col gap-y-4 justify-center items-center bg-orange-200 py-4 px-6 rounded-md w-full shadow-xl">
              <span className="h-20 w-20 bg-slate-400 rounded-md"></span>
              <p className="text-xl font-semibold text-orange-800">Premium Quality</p>
              <p className="text-orange-700 text-center w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}