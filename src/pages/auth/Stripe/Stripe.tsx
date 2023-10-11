import { useEffect, useState } from "react";
import { ActionTypes } from "../../../context/Actions";
import { useGeneralContext } from "../../../context/GeneralContext";
import { fetchAxios } from "../../../utils/helpers";
// import "./Stripe.css";

export function ProductDisplay() {
	const {
		state: { backendApiDevelopmentUrl, self },
		dispatch,
	} = useGeneralContext();
	const handlerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const url = `${backendApiDevelopmentUrl}/appointments/buy`;

		const product = {
			product_id: 0,
			amount: 1,
			price: 100,
		};
		fetchAxios(url, "POST", product, self.token)
			.then((r) => {
				dispatch({ type: ActionTypes.PROCESSING_PAYMENT });
				console.log(r.data);
				localStorage.setItem("session_id", JSON.stringify(r.data.session_id));
				if (r.data.url) {
					window.location.href = r.data.url;
				}
			})
			.catch((e) => {});
	};

	return (
		<section>
			<div className="product">
				<img src="https://i.imgur.com/EHyR2nP.png" alt="The cover of Stubborn Attachments" />
				<div className="description">
					<h3>Stubborn Attachments</h3>
					<h5>$20.00</h5>
				</div>
			</div>
			<form>
				<button onClick={(e) => handlerClick(e)}>Checkout</button>
			</form>
		</section>
	);
}

const Message = ({ message }: any) => (
	<section>
		<p>{message}</p>
	</section>
);

export default function Stripe() {
	const [message, setMessage] = useState("");

	useEffect(() => {
		// Check to see if this is a redirect back from Checkout
		const query = new URLSearchParams(window.location.search);

		if (query.get("success")) {
			setMessage("Order placed! You will receive an email confirmation.");
		}

		if (query.get("canceled")) {
			setMessage("Order canceled -- continue to shop around and checkout when you're ready.");
		}
	}, []);

	return message ? <Message message={message} /> : <ProductDisplay />;
}
