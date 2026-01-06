'use client'
import Aboutme from "@/components/Aboutme";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Start from "@/components/Start";
import TVComponent from "@/components/TVComponent";
import { useEffect } from "react";

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
