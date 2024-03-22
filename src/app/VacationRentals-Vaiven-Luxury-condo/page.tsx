import { layoutSize } from "@/constants/style.constant"
import Hero from "./components/Hero"
import MainContent from "./components/MainContent"

export default function page() {
  
  return (
    <main>
      <div className={'text-[#222] text-sm font-medium leading-normal'}>
        <Hero />
      </div>
      <section className={layoutSize}>
        <MainContent />
      </section>
    </main>
  )
}
