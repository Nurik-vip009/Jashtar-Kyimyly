import { Banners } from "@/widgets/Banners";
import { Movement } from "@/widgets/Movement";
import { Events } from "@/widgets/Events";
import { News } from "@/widgets/News";
import { Brands } from "@/widgets/Brands";

const MainPage = () => {
  return (
    <div>
      <Banners />
      <Movement />
      <Events />
      <News />
      <Brands />
    </div>
  );
};

export default MainPage;
