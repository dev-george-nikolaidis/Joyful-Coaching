import s from "./Captcha.module.scss";

type Props = {};
// This helps prevent robots (and other nefarious machines) from accessing your Stripe account.
export default function Captcha({}: Props) {
	return <div className={s.test}></div>;
}
