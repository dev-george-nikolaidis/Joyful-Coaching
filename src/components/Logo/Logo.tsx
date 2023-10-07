import L from "../../assets/img/logo.svg";
type Props = {
	className?: string;
};

export default function Logo({ className }: Props) {
	return <img src={L} alt="" className={`${className}`} />;
}
