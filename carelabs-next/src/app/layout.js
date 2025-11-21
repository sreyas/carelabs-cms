import Header from "@/components/Header";
import "./globals.css";
import "aos/dist/aos.css";
import Footer from "@/components/Footer";
import QuoteBar from "@/components/QuoteBar";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" 
          integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" />

        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet"/>
  
      </head>
      
      <body>
        <Header/>
        {children}
        <QuoteBar/>
        <Footer/>
      </body>
    </html>
  );
}
