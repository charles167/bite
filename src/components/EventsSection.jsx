import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const EventsSection = () => {
  const handleWhatsApp = (message) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/2349136034654?text=${encodedMessage}`, "_blank");
  };

  const events = [
    {
      title: "Brunch Catering",
      description: "Delight your guests with a morning filled with fresh bakes and warm beverages.",
      image: "https://res.cloudinary.com/dspkz3qiq/image/upload/v1753975130/front-view-packed-food-prepared-takeaway-_1_qsuyw6.png",
      message: "Hello! I’d like to inquire about brunch catering.",
    },
    {
      title: "School Events",
      description: "Perfect treats for school parties, PTA meetings, and student celebrations.",
      image: "https://res.cloudinary.com/dspkz3qiq/image/upload/v1753975130/delicious-donuts-ai-generated_fnvwmb.png",
      message: "Hi! I’m planning a school event and need catering.",
    },
    {
      title: "Office Events",
      description: "Impress clients or treat your team with our premium selection for office occasions.",
      image: "https://res.cloudinary.com/dspkz3qiq/image/upload/v1753974967/23636885_m021t006_paper_food_box_mockup_02_zgvdob.png",
      message: "Hi, I’d like to organize office event catering.",
    },
    {
      title: "Birthdays",
      description: "Celebrate birthdays with delicious cakes, pastries, and party packs.",
      image: "https://res.cloudinary.com/dspkz3qiq/image/upload/v1753975128/closeup-yummy-chocolate-cookies-against-white-table_e5gnct.png",
      message: "Hi! I want to plan birthday catering with you.",
    },
  ];

  return (
    <section className="bg-[#FFF9F0] py-20 px-4 md:px-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#541A1A] text-center mb-10">
        Events We Cater
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-3xl overflow-hidden flex flex-col items-center text-center p-6 hover:shadow-xl transition"
          >
            <img
              src={event.image}
              alt={event.title}
              className="h-40 w-full object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-bold text-[#541A1A]">{event.title}</h3>
            <p className="text-[#3D3D3D] text-sm mt-2">{event.description}</p>
            <Button
              onClick={() => handleWhatsApp(event.message)}
              className="mt-4 bg-[#541A1A] text-white rounded-full px-6 py-2 text-sm hover:bg-[#6e2525]"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Contact via WhatsApp
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
