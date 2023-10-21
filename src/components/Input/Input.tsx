import { ChangeEvent, ReactNode, useState } from "react";
import { MdRemoveRedEye } from "react-icons/md";
import s from "./Input.module.scss";

type Props = {
	type: "text" | "number" | "email" | "password";
	label?: string;
	value?: string | number;
	name?: string;
	placeholder?: string;
	disabled?: boolean;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	children?: ReactNode;
	withShow?: boolean;
	propFunc: any[];
	className?: string;
};

export default function Input({ type, label, value, name, className, placeholder, withShow, disabled, onChange, children, propFunc }: Props) {
	const [showPassword, setShowPassword] = useState(false);

	function handlerShowHidePassword() {
		setShowPassword(!showPassword);
	}

	const inputPassword = showPassword ? "text" : "password";
	return (
		<div className={s.formControl}>
			<label htmlFor={label} className={s.label}>
				{label}
			</label>
			<div className={s.inputPasswordContainer}>
				<input
					type={withShow ? inputPassword : type}
					id={label}
					value={value}
					name={name}
					placeholder={placeholder}
					onChange={onChange}
					disabled={disabled}
					{...propFunc}
					className={`${s.input} ${className}`}
				/>
				{withShow && (
					<>
						{showPassword ? (
							<MdRemoveRedEye className={`${s.eyeIcon} ${s.eyeHide}`} onClick={handlerShowHidePassword} />
						) : (
							<MdRemoveRedEye className={`${s.eyeIcon} ${s.eyeShow}`} onClick={handlerShowHidePassword} />
						)}
					</>
				)}
			</div>
		</div>
	);
}
