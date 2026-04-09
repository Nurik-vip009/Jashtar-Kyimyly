import React from "react";
import styles from "./style.module.scss";
import defaultImg from "../../shared/assets/images/photo.png";
import { useNavigate } from "react-router-dom";
import { Typography } from "@/shared/ui";

interface Images {
  id: number;
  event: number;
  image: string;
}

interface Events {
  id: number;
  title: string;
  description: string;
  date: string;
  event_status: string;
  images: Images[];
}
interface CardProps {
  item: Events;
  onClick?: () => void;
}

function Card({ item, onClick }: CardProps) {
  const navigate = useNavigate();
  const formattedDate = item.date
    ? new Date(item.date).toLocaleDateString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
      })
    : "";
  return (
    <div className={styles.card}>
      {item.images.slice(0, 1).map((img) => (
        <img key={img.id} onClick={onClick} src={img.image} alt={item.title} />
      ))}
      <div className={styles.Footercard}>
        <div className={styles.date}>
          <Typography variant='card_date' weight='400' color='black' >{formattedDate}</Typography>
        </div>
        <div className={styles.title}>
          <Typography variant='card_title' weight='500' color='black' >{item.title.slice(0, 22)}...</Typography>
          <Typography variant='card_desc' weight='400' color='black' >{item.description.slice(0, 50)}...</Typography>
        </div>
      </div>
    </div>
  );
}

export default Card;
