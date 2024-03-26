import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header";


export default function VacationRootLayout({children}:Readonly<{
   children: React.ReactNode;
 }>){
   return (
      <section>
         <header className="border-b border-b-[rgba(0, 0, 0, 0.08)]">
            <Header />
         </header>
         {children}

         <footer className="border-t border-[rgba(34,34,34,.15)] bg-[rgb(247,247,247)]">
            <Footer />
         </footer>
      </section>
   )
}