import React from 'react'
import carelabzImage from '@/assets/carlabz.jpg'


// const galleryImages = [
//     {
//         url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&w=1200&q=80",
//         alt: "Mountain landscape during sunrise"
//     },
//     {
//         url: "https://images.unsplash.com/photo-1517816428104-719bba5e9f12?auto=format&w=1200&q=80",
//         alt: "Person walking on a snowy path"
//     },
//     {
//         url: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&w=1200&q=80",
//         alt: "Vintage workspace setup"
//     },
//     {
//         url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&w=1200&q=80",
//         alt: "Foggy forest in the morning"
//     },
//     {
//         url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&w=1200&q=80",
//         alt: "Golden hour beach waves"
//     },
//     {
//         url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&w=1200&q=80",
//         alt: "Desert dunes under blue sky"
//     },
//     {
//         url: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&w=1200&q=80",
//         alt: "Classic yellow car parked in street"
//     },
//     {
//         url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&w=1200&q=80",
//         alt: "Flower field with sunset"
//     },
//     {
//         url: "https://images.unsplash.com/photo-1520975918318-3b1c1d5d1958?auto=format&w=1200&q=80",
//         alt: "Modern architectural building"
//     },
//     {
//         url: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&w=1200&q=80",
//         alt: "Dark moody forest trees"
//     },
//      {
//         url: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&w=1200&q=80",
//         alt: "Classic yellow car parked in street2"
//     },
//     {
//         url: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&w=1200&q=80",
//         alt: "Dark moody forest trees1"
//     }
// ];


const OurTeamGallery = ({ data }) => {
  if (!data) return null;

  const galleryImages = data.What_it_feels_gallery || [];

  return (
    <div className="w-full flex flex-col items-center justify-center mt-20">
      <div className="flex flex-col w-[85%] p-5 text-center 2xl:w-[50%]">
        <h2 className="text-[30px] montserrat-font font-semibold mb-4"
           dangerouslySetInnerHTML={{ __html: data.title }}
        >
        </h2>
        <p className="text-[18px] para-text poppins-font">
         {data.description}
        </p>
      </div>

      <div className="flex flex-col w-[85%] rounded-2xl mt-10 2xl:w-[65%] mx-auto">
        {[...Array(Math.ceil(galleryImages.length / 6) || 1)].map((_, patternIndex) => {
          const start = patternIndex * 6;
          const imgs = galleryImages.slice(start, start + 6);

          const renderImage = (img) => (
            <div key={img.image.url} className="relative w-full h-full rounded-[16px] overflow-hidden bg-gray-200 group">
              <img src={img.image.url} alt={img.hovertext || "Gallery image"} className="w-full h-full object-cover" />
              {/* Hover text */}
             <div className="absolute inset-0 bg-[#00000069] montserrat-font font-semibold flex items-end justify-center p-2 text-white text-sm transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          {img.hovertext}
        </div>

            </div>
          );

          return (
            <div key={patternIndex} className="w-full flex flex-col lg:flex-row items-center justify-center mb-8">
              {/* LEFT COLUMN */}
              <div className="w-full h-[300px] sm:h-[500px] lg:w-[50%] lg:h-[600px] p-3 flex flex-col gap-5">
                {imgs[0] && <div className="h-[55%]">{renderImage(imgs[0])}</div>}
                <div className="w-full h-[45%] flex gap-3">
                  {imgs[1] && <div className="w-[50%] h-full">{renderImage(imgs[1])}</div>}
                  {imgs[2] && <div className="w-[50%] h-full">{renderImage(imgs[2])}</div>}
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="w-full h-[300px] sm:h-[500px] lg:w-[50%] lg:h-[600px] p-3 flex flex-col gap-5">
                <div className="w-full h-[45%] flex gap-3">
                  {imgs[3] && <div className="w-[50%] h-full">{renderImage(imgs[3])}</div>}
                  {imgs[4] && <div className="w-[50%] h-full">{renderImage(imgs[4])}</div>}
                </div>
                {imgs[5] && <div className="w-full h-[55%]">{renderImage(imgs[5])}</div>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurTeamGallery;
