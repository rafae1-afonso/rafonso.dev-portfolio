import TVComponent from "@/components/TVComponent";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export default function Home() {
  return <TVComponent>
    <section className="flex flex-col items-center gap-10 cursor-default">
      <h2>Web Developer</h2>
      <div className="text-5xl flex justify-center items-center gap-5">
        <span>&lt;</span>
        <h1>RAFAEL <br /> <span className="ml-30">AF0NSO</span></h1>
        <span className="flex items-center"><span className="text-6xl ml-10">/</span>&gt;</span>
      </div>
      <div className="flex gap-10">
        <Link
          href='https://www.linkedin.com/in/rafaelafonsofl/'
          target="_blank"
          className="duration-200 hover:text-blue-400 animate-[levitation_1s_infinite]"
        >
          <FaLinkedinIn size={45} />
        </Link>
        <Link
          href='https://github.com/rafae1-afonso'
          target="_blank"
          className="duration-200 hover:text-violet-900 animate-[levitation_1s_infinite_reverse]"
        >
          <FaGithub size={45} />
        </Link>
      </div>
    </section>
  </TVComponent>
}
