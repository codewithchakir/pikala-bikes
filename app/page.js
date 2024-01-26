import Image from "next/image";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Partners from "./components/Partners";
import Articles from "./components/Articles";
import About from "./components/About";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Articles />
      <Contact />
      <Partners />
    </main>
  );
}
