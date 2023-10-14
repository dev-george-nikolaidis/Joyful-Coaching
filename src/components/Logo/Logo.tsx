import L from "../../assets/img/logo.svg";
import s from "./Logo.module.scss";
type Props = {
	className?: string;
};

export default function Logo({ className }: Props) {
	return <img src={L} alt="" className={`${className} ${s.logo}`} />;
}
