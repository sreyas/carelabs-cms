// lib/navigation.js
import { useRouter, usePathname } from "next/navigation";

/**
 * Returns a function to navigate respecting current locale in the URL
 */
export const useLocalizedNavigate = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Extract locale from pathname if it exists
  const pathSegments = pathname.split("/").filter(Boolean);
  const locale = pathSegments[0]?.length === 5 || pathSegments[0] === "ca" ? pathSegments[0] : null;

  const navigate = (path) => {
    if (locale) {
      // prepend locale
      router.push(`/${locale}${path.startsWith("/") ? path : `/${path}`}`);
    } else {
      router.push(path);
    }
  };

  return navigate;
};
