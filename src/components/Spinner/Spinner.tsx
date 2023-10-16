import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Spinner.module.scss";

const Spinner: React.FC = () => {
	return (
		<>
			<div className={styles.spinnerModal}> </div>
			<Logo className={styles.spinnerImage} />
			{/* <img src={SpinnerGif} alt=" indicating loading image" className={styles.spinnerImage} /> */}
		</>
	);
};

export default Spinner;
