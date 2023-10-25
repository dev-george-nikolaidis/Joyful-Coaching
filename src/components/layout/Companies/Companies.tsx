import Catalog from "../../../assets/img/companies/catalog.svg";
import Circooles from "../../../assets/img/companies/circooles.svg";
import Layers from "../../../assets/img/companies/layers.svg";
import Quotient from "../../../assets/img/companies/quotient.svg";
import Paragraph500 from "../../Paragraph500/Paragraph500";
import s from "./Companies.module.scss";
type Props = {};

export default function Companies({}: Props) {
	return (
		<section className={s.companiesContainer}>
			<Paragraph500 className={s.title}>Our client base ranges from startups to established enterprises.</Paragraph500>
			<div className={s.companiesWrapper}>
				<img src={Layers} alt="" className={s.companyIcon} />
				<img src={Catalog} alt="" className={s.companyIcon} />
				<img src={Circooles} alt="" className={s.companyIcon} />
				<img src={Quotient} alt="" className={s.companyIcon} />
			</div>
		</section>
	);
}
