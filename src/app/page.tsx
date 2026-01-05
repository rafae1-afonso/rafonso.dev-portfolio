import Aboutme from "@/components/Aboutme";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Start from "@/components/Start";
import TVComponent from "@/components/TVComponent";

export default function Home() {
  return <TVComponent>
    <div id='start'></div>
    <Navbar />
    <Start />
    <Aboutme />
    <Projects />
    <Footer />
  </TVComponent>
}
