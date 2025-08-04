import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { useRef } from "react";

const menuItems = [
  { title: "Chicken Sandwich", image: "https://i.pinimg.com/1200x/0d/5d/22/0d5d22654674651d50e4de3f5e1b2c96.jpg" },
 { title: "Chicken Skewers ", image: "https://i.pinimg.com/1200x/5a/4b/2b/5a4b2bb584e3c64c6fac9c903b5652aa.jpg" },

  { title: "Reign Bread", image: "https://i.pinimg.com/1200x/1e/68/a8/1e68a89d4f46a0bb987b170cd08d1715.jpg" },
  { title: "Spiced Kuli Kuli", image: "https://i.pinimg.com/736x/e3/b3/96/e3b396298652fa0a2baae784c0feedad.jpg" },

  { title: "jollof rice ", image: "https://i.pinimg.com/1200x/09/c4/10/09c4103fbcca0e9371d25a4879806f33.jpg" },
];

const MenuPreviewSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-12 bg-muted relative">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-12 text-magnolia-purple leading-tight">

          Explore Our Menu
        </h2>
        <div className="relative">
          {/* Custom Arrows */}
          <div
            ref={prevRef}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-4xl text-magnolia-purple font-bold"
          >
            ‹
          </div>
          <div
            ref={nextRef}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-4xl text-magnolia-purple font-bold"
          >
            ›
          </div>

          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            autoplay={{ delay: 2500 }}
            loop={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            modules={[Autoplay, Navigation]}
          >
            {menuItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center text-center space-y-3 group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-md shadow-md transition duration-300 transform group-hover:scale-105 group-hover:shadow-xl border border-border"
                  />
                  <p className="font-medium text-sm text-muted-foreground">{item.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default MenuPreviewSlider;
