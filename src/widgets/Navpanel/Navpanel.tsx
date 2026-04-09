import React from "react";
import "./style.scss";
import img from "../../shared/assets/images/slider.svg";
import { useNavigate } from "react-router-dom";

// Интерфейс пропсов
interface NavpanelProps {
  text?: string;
  text2?: string;
  text3?: string;
  link?: string;
  link2?: string;
}

const Navpanel: React.FC<NavpanelProps> = ({
  text,
  text2,
  text3,
  link,
  link2,
}) => {
  const navigate = useNavigate();

  return (
    <div className="navpanel container">
      {text && <p onClick={() => link && navigate(link)}>{text}</p>}
      <img src={img} alt="arrow" />
      {text2 && <p onClick={() => link2 && navigate(link2)}>{text2}</p>}
      {text3 && <img src={img} alt="arrow" />}
      {text3 && <p>{text3}</p>}
    </div>
  );
};

export default Navpanel;
