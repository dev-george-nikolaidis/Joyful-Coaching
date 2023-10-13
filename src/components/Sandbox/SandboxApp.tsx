// Your main App.tsx or any other component where you want to display the centered price cards

import React, { useState } from "react";
import Sandbox from "./Sandbox";
import styles from "./Sandbox.module.scss";

const App: React.FC = () => {
	const [selectedPlan, setSelectedPlan] = useState(1);

	const plans = [
		{
			title: "Basic Plan",
			price: "$19/month",
			features: ["Feature 1", "Feature 2", "Feature 3"],
		},
		{
			title: "Pro Plan",
			price: "$49/month",
			features: ["All Basic Plan features", "Additional Feature", "Priority Support"],
		},
		{
			title: "Enterprise Plan",
			price: "$99/month",
			features: ["All Pro Plan features", "Advanced Analytics", "24/7 Support"],
		},
	];

	let display = plans.map((plan, index) => {
		return <Sandbox key={index} title={plan.title} price={plan.price} features={plan.features} selected={selectedPlan === index} onSelect={() => setSelectedPlan(index)} />;
	});

	return <div className={styles["price-cards-container"]}>{display}</div>;
};

export default App;
