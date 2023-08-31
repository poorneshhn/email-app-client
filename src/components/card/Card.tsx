import Link from "next/link";
import React from "react";
import styles from "./card.module.css";

interface CardProps {
  title: string;
  description: string;
  url: string;
}
const Card: React.FC<CardProps> = (props) => {
  const { title, description, url } = props;
  return (
    <Link className={styles.link} prefetch={false} href={url}>
      <div className={styles.container}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default Card;
