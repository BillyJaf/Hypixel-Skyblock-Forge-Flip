import React from "react";
import styles from "./ItemDisplay.module.css"
import ItemCard from "./ItemCard";

const ItemDisplay: React.FC = () => {
  return (
    <div className={styles.background}>
      <ItemCard />
    </div>
  );
};

export default ItemDisplay;