import { Link } from "react-router-dom";
import Logo from "../../../assets/img/logo.svg";
import FacebookIcon from "../../../assets/img/socials/facebook.svg";
import InstagramIcon from "../../../assets/img/socials/instagram.svg";
import LinkedinIcon from "../../../assets/img/socials/linkedin.svg";
import XIcon from "../../../assets/img/socials/x.svg";
import Paragraph500 from "../../Paragraph500/Paragraph500";
import s from "./Footer.module.scss";

import ExpressIcon from "../../../assets/img/payment/american-express.svg";
import MastercardIcon from "../../../assets/img/payment/master-card.svg";
import StripeIcon from "../../../assets/img/payment/stripe.svg";
import VisaIcon from "../../../assets/img/payment/visa.svg";
import { blogs } from "../../../data/data";
import HeaderH4 from "../../HeaderH4/HeaderH4.";
type Props = {};

export default function Footer({}: Props) {
	const displayPopularArticles = blogs.map((a, i) => {
		return (
			<Link to={`/blog/post/${a.id}`} key={i}>
				<li>{a.title}</li>
			</Link>
		);
	});

	return (
		<footer className={`${s.footer} col-12 `}>
			<div className={s.footerWrapper}>
				<div className={s.subFooterContainer}>
					<div className={s.logoContainer}>
						<div className={s.navLogoWrapper}>
							<img src={Logo} alt="" />
							<span className={s.logoText}>Joyful Coaching</span>
						</div>
						<Paragraph500 className={s.telephoneText}>Telephone: +43 660 096 9080</Paragraph500>
						<Paragraph500>Address: 18, Süßenbrunner Straße, Vienna 1220</Paragraph500>
						<div className={s.socialsContainer}>
							<img src={FacebookIcon} alt="facebook icon" className={s.socialIcon} />
							<img src={InstagramIcon} alt="facebook icon" className={s.socialIcon} />
							<img src={XIcon} alt="facebook icon" className={s.socialIcon} />
							<img src={LinkedinIcon} alt="facebook icon" className={s.socialIcon} />
						</div>
					</div>
					<div className={s.linksContainer}>
						<div>
							<HeaderH4>Popular articles</HeaderH4>
							<ul className={s.pages}>{displayPopularArticles}</ul>
						</div>
						<div>
							<HeaderH4>Pages</HeaderH4>
							<ul className={s.pages}>
								<li>
									<Link to="/services">Service</Link>
								</li>
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/blog">Blog</Link>
								</li>
								<li>
									<Link to="/about">About</Link>
								</li>
								<li>
									<Link to="/contact">Contact</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className={s.line} />

				<div className={s.subFooter}>
					<div className={s.copyrightContainer}>
						<span className={s.copyRightsText}>
							<span className={s.copySymbol}>&copy;</span>
							{new Date().getFullYear()} Joyful Coaching .All rights reserved.{" "}
						</span>
					</div>

					<div className={s.paymentContainer}>
						<img src={VisaIcon} alt="visa icon" className={s.paymentIcon} />
						<img src={ExpressIcon} alt="express" className={s.paymentIcon} />
						<img src={MastercardIcon} alt="mastercard" className={s.paymentIcon} />
						<img src={StripeIcon} alt="payment by stripe" className={s.paymentIcon} />
					</div>
				</div>
			</div>
		</footer>
	);
}
