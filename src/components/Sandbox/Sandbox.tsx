// PriceCard.tsx

import React from "react";
import styles from "./Sandbox.module.scss";

interface PriceCardProps {
	title: string;
	price: string;
	features: string[];
	selected: boolean;
	onSelect: () => void;
}

const Sandbox: React.FC<PriceCardProps> = ({ title, price, features, selected, onSelect }) => {
	return (
		<div className={`${styles["price-card"]} ${selected ? styles.selected : ""}`} onClick={onSelect}>
			<h2 className={styles["price-title"]}>{title}</h2>
			<p className={styles["price-amount"]}>{price}</p>
			<ul className={styles["price-features"]}>
				{features.map((feature, index) => (
					<li key={index}>{feature}</li>
				))}
			</ul>
			<button className={styles["price-button"]}>Choose Plan</button>
		</div>
	);
};

export default Sandbox;
