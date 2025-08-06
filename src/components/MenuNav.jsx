import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const navItems = [
 
  { name: "Baked Goods", href: "#baked-goods", image:"https://i.pinimg.com/1200x/cc/ae/ab/ccaeabf7766f4f303dba162bc08c907e.jpg" },
  { name: "Snacks & Crisps", href: "#snacks", image: "https://i.pinimg.com/736x/2b/b6/45/2bb645c22874e805163ce22b4e31729b.jpg" },
  { name: "Pastries", href: "#pastries", image: "https://i.pinimg.com/1200x/1c/a8/3d/1ca83dc6d7543d869fd3191f67701202.jpg" },
  { name: "Brunch", href: "#brunch", image:  "https://i.pinimg.com/1200x/dc/d0/e9/dcd0e911a644c7722fcc5aed9f3f3906.jpg" },
  { name: "Sauces", href: "#sauces", image: "https://i.pinimg.com/1200x/31/f4/77/31f4772b80fec883dca74c46858b214a.jpg" },
];

const MenuNav = ({ onSelect }) => {
  const handleClick = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    if (onSelect) onSelect(href);
  };

  return (
    <div className="w-full px-2 py-3 bg-white sticky top-16 z-40 shadow-sm">
      <Swiper
        spaceBetween={10}
        slidesPerView={"auto"}
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
        className="flex"
      >
        {navItems.map((item) => (
          <SwiperSlide
            key={item.name}
            className="!w-auto flex justify-center items-center"
          >
            <button
              onClick={() => handleClick(item.href)}
              className="flex flex-col items-center justify-center w-20 h-20 p-2 rounded-xl hover:bg-purple-100 transition"
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-8 h-8 object-contain mb-1"
                />
              )}
              <span className="text-xs font-medium text-center">{item.name}</span>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MenuNav;
