"use client";
import { ChevronDown, Globe, Mail, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const RegionModal = ({ setIsModalOpen }) => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("");

  // Regions list
  const regions = [
    { name: "Global", link: "www.carelabs.com", order: 1, siteUrl: "Go to: www.carelabs.com", lang: "", langValue: "en" },
    { name: "Middle East & Africa", link: "www.carelabs-mea.com", order: 2, siteUrl: "Go to: carelabs-mea.com", lang: "mea", langValue: "en-MEA" },
    { name: "Asia-Pacific", link: "www.carelabs-apac.com", order: 3, siteUrl: "Go to: carelabs-apac.com", lang: "apac", langValue: "en-APAC" },
    { name: "Europe", link: "www.carelabs-eu.com", order: 4, siteUrl: "Go to: carelabs-eu.com", lang: "eu", langValue: "en-EU" },
    { name: "Americas", link: "www.carelabs-americas.com", order: 5, siteUrl: "Go to: carelabs-americas.com", lang: "an", langValue: "en-AM" },
    { name: "Canada", link: "www.carelabs.ca", order: 6, siteUrl: "Go to: carelabs.ca", lang: "ca", langValue: "en-CA" }
  ];

  // 💡 Auto-detect current locale from URL and pre-select region
  useEffect(() => {
    const pathParts = window.location.pathname.split("/").filter(Boolean);
    const currentLocale = pathParts[0] || "";

    const matchedRegion =
      regions.find((r) => r.lang === currentLocale) ||
      regions[0]; // default: Global

    setSelectedRegion(matchedRegion.name);
  }, []);

  // Change region
  const handleSelectRegion = (region) => {
    setSelectedRegion(region.name);
    setIsDropdownOpen(false);
    setIsModalOpen(false);

    const currentPath = window.location.pathname;
    const pathParts = currentPath.split("/").filter(Boolean);
    const knownLocales = regions.map((r) => r.lang).filter(Boolean);

    // remove old locale
    if (knownLocales.includes(pathParts[0])) pathParts.shift();

    // build new path
    const newPath = region.lang
      ? `/${region.lang}/${pathParts.join("/")}`
      : `/${pathParts.join("/")}`;

    router.push(newPath);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center h-screen bg-black/60 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}
    >
      <div className="relative w-[90%] md:w-[70%] lg:w-[30%] rounded-2xl shadow-xl p-6 bg-white">
        {/* Close Button */}
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-xl text-gray-500 hover:text-black hover:bg-gray-100"
        >
          <X size={24} />
        </button>

        <div className="text-center flex flex-col items-center justify-center xl:flex-row gap-2 mb-6">
          <Globe size={24} className="xl:mt-2 text-blue-600 mb-3" />
          <h2 className="text-xl font-semibold">Explore Carelabs in your region</h2>
        </div>

        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full bg-white border border-gray-300 rounded-full px-4 py-3 pr-10 flex justify-between items-center"
          >
            {selectedRegion || "Select a region"}
            <ChevronDown
              className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isDropdownOpen && (
            <ul className="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border overflow-y-auto max-h-60 z-10">
              {regions.map((region) => (
                <li
                  key={region.name}
                  onClick={() => handleSelectRegion(region)}
                  className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                >
                  {region.name} ({region.lang || "global"})
                </li>
              ))}
            </ul>
          )}
        </div>

        <p className="text-center text-sm text-gray-600 p-3">
          You're viewing: <span className="font-semibold">{selectedRegion || "site"}</span>
        </p>

        <div className="flex items-center justify-center gap-2">
          <p className="text-sm">
            {
              regions.find((r) => r.name === selectedRegion)?.siteUrl ||
              "Go to: www.carelabs.com"
            }
          </p>
          <Mail size={14} />
        </div>
      </div>
    </div>
  );
};

export default RegionModal;
