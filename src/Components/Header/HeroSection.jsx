import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function HeroSection() {
  const slides = [
    {
      image: "https://i.ibb.co.com/chYfQQHR/vf3tukhevpyqcyareivs.jpg",
      text: "Bring Nature Into Your Home 🌿",
    },
    {
      image: "https://i.ibb.co.com/jkRVmXTM/pexels-veeterzy-38136.jpg",
      text: "Nature Green. Live Clean 🍃",
    },
    {
      image: "https://i.ibb.co.com/C5ShjCn6/tree-growth-in-nature-and-beautiful-morning-photo.jpg",
      text: "Every Plant Brings a Fresh Start 🌱",
    },
  ];

  return (
    <div className="w-full mx-auto bg-green-100">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        loop={true}
        speed={3000}
        className="w-11/12 mx-auto h-[400px] sm:h-[450px]  rounded-xl"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-linear-to-b from-black/20 to-black/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white text-2xl md:text-4xl font-bold text-center ">
                  {slide.text}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
