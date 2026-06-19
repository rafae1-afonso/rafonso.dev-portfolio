'use client'
import CursorComponent from "@/components/atoms/CursorComponent";
import TVComponent from "@/components/TVComponent";
import Link from "next/link";

export default function Home() {

  return <TVComponent>
    <CursorComponent />
    <div className="font-2p px-5 lg:px-10 flex flex-col items-center justify-center h-screen gap-5">
      <h1 className="lg:text-4xl flex gap-2 lg:flex-row"><span className="text-red-500 text-shadow-red-500 text-shadow-[0_0_10px_current]">ERROR 404</span> - Not Found</h1>
      <Link href="/" className="duration-200 flex px-0.5 font-2p hover:shadow-[0_0_5px_white] hover:bg-white hover:text-black">
        Go back
      </Link>
    </div>
  </TVComponent>
}
