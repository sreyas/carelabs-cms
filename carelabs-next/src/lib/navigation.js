// lib/navigation.js
"use client";

import { useRouter, usePathname } from "next/navigation";
import { useRegions } from "./regionContext";



export const useLocalizedNavigate = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { regions } = useRegions();

 console.log("RegionS:::",regions);

 const filteredLanguages = regions
  .map(r => r.language)   // get language
  .filter(lang => lang);  // remove null or undefined

console.log(filteredLanguages);
 
  // Extract locale from pathname
  const pathSegments = pathname.split("/").filter(Boolean);
  console.log("Pathsegments",pathSegments);
  
  // Example: 'en-US' or 'ca', adjust the check based on your locale format
const locale = filteredLanguages.includes(pathSegments[0]) ? pathSegments[0] : null;
  console.log("Localein Nav",locale);
  

  const navigate = (path) => {
    // Prepend the locale if it exists
    const finalPath = locale
      ? `/${locale}${path.startsWith("/") ? path : `/${path}`}`
      : path;
     console.log("FinalPath",finalPath);
     
    router.push(finalPath);
  };

  return navigate;
};
