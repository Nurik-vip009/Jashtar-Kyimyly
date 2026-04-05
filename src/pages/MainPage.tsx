import { Banners } from "@/widgets/Banners";
import BrandsPages from "./BrandsPages/BrandsPages";
import { EventsPages } from "./EventsPages/EventsPages";
import { NewsPages } from "./NewsPages/NewsPages";
import Movement from "@/widgets/Movment/ui/Movement";

const MainPage = () => {
  return (
    <div>
      <Banners />
      <Movement />
      <EventsPages />
      <NewsPages />
      <BrandsPages />
    </div>
  );
};

export default MainPage;
