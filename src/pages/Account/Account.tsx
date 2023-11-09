import Seo from "../../components/Seo/Seo";
import Navigation from "../../components/layout/Navigation/Navigation";
import s from "./Account.module.scss";
import AccountInfo from "./components/AccountInfo/AccountInfo";

type Props = {};

export default function Account({}: Props) {
	return (
		<section className={` ${s.account} col-12`}>
			<Seo pageTitle="Account " pagePath="/account-settings" />
			<Navigation />
			<AccountInfo />
		</section>
	);
}
