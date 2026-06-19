'use client'
import { useEffect } from "react";
import Aboutme from "@/components/organisms/Aboutme";
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import Projects from "@/components/organisms/Projects";
import Start from "@/components/organisms/Start";
import TVComponent from "@/components/TVComponent";

export default function Home() {

  useEffect(() => {

    const myObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scrollShow')
        } else {
          entry.target.classList.remove('scrollShow')
        }
      })
    })

    const scrollHiddenElements = document.querySelectorAll('.scrollHidden');
    scrollHiddenElements.forEach((element) => myObserver.observe(element));

    return () => myObserver.disconnect();
  });

  return <TVComponent>
    <div id='start'></div>
    <Navbar />
    <Start />
    <Aboutme />
    <Projects />
    <Footer />
  </TVComponent>
}
