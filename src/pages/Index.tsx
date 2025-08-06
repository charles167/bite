import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import FloatingOrderButton from "@/components/FloatingOrderButton";
import Footer from "@/components/Footer";
import { productsData } from "@/data/products";
import MenuPreviewSlider from "@/components/MenuPreviewSlider";
import MenuNav from "@/components/MenuNav";
import CateringSection from "@/components/CateringSection";
import EventsSection from "@/components/EventsSection";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <MenuNav />

      <MenuPreviewSlider />
      
      <div id="menu" className="space-y-0">
       <ProductSection
  id="baked-goods"
  title="Baked Goods"
  // emoji="🧁"
  description="Freshly baked cookies, loaves, and muffins straight from the oven to you."
  products={productsData.bakedGoods}
/>

<ProductSection
  id="snacks"
  title="Snacks & Crisps"
  // emoji="🍿"
  description="Crunchy, crispy, and totally irresistible  your snack cravings, sorted."
  products={productsData.snacks}
/>

<ProductSection
  id="pastries"
  title="Pastries"
  // emoji="🥐"
  description="Layered, flaky, and buttery pastries crafted with skill and love."
  products={productsData.pastries}
/>

<ProductSection
  id="brunch"
  title="Brunch & Savouries"
  // emoji="🍳"
  description="Savory bites perfect for brunch gatherings or afternoon cravings."
  products={productsData.brunch}
/>

<ProductSection
  id="sauces"
  title="Sauces & Add-Ons"
  emoji="🥫"
  description="Finish your meal with flavorful sauces and tasty extras."
  products={productsData.sauces}
/>

      </div>

       <CateringSection/>
       <EventsSection/>
      
      <FloatingOrderButton />
      <Footer />
    </div>
  );
};



export default Index;
