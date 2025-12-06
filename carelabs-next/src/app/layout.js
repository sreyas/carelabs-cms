
import Header from "@/components/Header";
import "./globals.css";
import "aos/dist/aos.css";
import Footer from "@/components/Footer";
import QuoteBar from "@/components/QuoteBar";
import Script from "next/script";
import  { Metadata } from 'next';


// export const metadata = {
//   title: "Carelabs",
//   description: "Electrical safety, power system studies, and compliance services.",
// };

export const metadata = {
  title: {
    template: '%s | Acme Carelabs', // %s is replaced by the child's title
    default: 'Carelabs', // Default title if a child doesn't specify one
  },
   description: "Electrical safety, power system studies, and compliance services.",
};

export default function RootLayout({ children }) {

  

  


  return (
    <html lang="en" >
      
      <body>
          
        <Header/>
        {children}
        <QuoteBar/>
        <Footer/>


  <link rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" 
          integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" />


          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>

        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet"/>
        
        {/* cloudflare */}
        <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>


      </body>
    </html>
  );
}
