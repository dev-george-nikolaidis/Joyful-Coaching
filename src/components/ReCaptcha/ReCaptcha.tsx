import ReCAPTCHA from "react-google-recaptcha";

type Props = {
	forwardRef: any;
};

export default function ReCaptcha({ forwardRef }: Props) {
	return <ReCAPTCHA sitekey="6Ld5E58oAAAAAF2oplor2tX0v8uzezWzXIMjbEfd" />;
}
