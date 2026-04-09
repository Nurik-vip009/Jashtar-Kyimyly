import "./App.scss";
import { Footer } from "../widgets/Footer/ui/Footer";
import { Routing } from "./router";
import Header from "@/widgets/Header/Header";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isProfilePage = location.pathname === "/profile";

  return (
    <div>
      {!isProfilePage && <Header />}
      <main className="routing">
        <Routing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
