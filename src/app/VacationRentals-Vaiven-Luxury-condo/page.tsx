import { layoutSize } from "@/constants/style.constant"
import Hero from "./components/Hero"
import MainContent from "./components/MainContent"
import Navbar from "@/components/Shared/Navbar"

export default function page() {
  
  return (
    <main>
      {/* <Navbar /> */}
      <div className={'text-[#222] text-sm font-medium leading-normal'}>
        <Hero />
      </div>
      <section className="container px-6 md:px-10 custom-lg:px-20 mx-auto ">
        <MainContent />
      </section>
    </main>
  )
}
