import { companies } from "../../../data/data";
import Paragraph500 from "../../Paragraph500/Paragraph500";
import s from "./Companies.module.scss";

type Props = {};

export default function Companies({}: Props) {
	const displayCompanies = companies.map((c, i) => {
		return <img src={c.urlImg} alt={c.name} key={i} />;
	});
	return (
		<section className={s.companiesContainer}>
			<Paragraph500 className={s.title}>Our client base ranges from startups to established enterprises.</Paragraph500>
			<div className={s.companiesWrapper}>{displayCompanies}</div>
		</section>
	);
}
