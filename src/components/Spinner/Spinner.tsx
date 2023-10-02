import React from "react";
import SpinnerGif from "../assets/img/spinner.gif";
import styles from "./Spinner.module.scss";

const Spinner: React.FC = () => {
	return (
		<>
			<div className={styles.spinnerModal}> </div>
			<img src={SpinnerGif} alt=" indicating loading image" className={styles.spinnerImage} />
		</>
	);
};

export default Spinner;
