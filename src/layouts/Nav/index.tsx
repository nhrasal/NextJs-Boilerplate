import Switch from "@components/Switch";
import { AuthContext } from "context/Auth";
import { useLocalization } from "context/Localization";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

const Nav = () => {
	const [accessToken, setAccessToken] = useState<boolean>(false);
	const { localize } = useLocalization();
	const { isAuthenticated } = useContext(AuthContext);
	const [navShow, setNavShow] = useState(true);
	const router = useRouter();
	const [pathName] = useState(router.pathname);

	useEffect(() => {
		setAccessToken(isAuthenticated);
	}, []);

	const navMenuList = [
		{
			route: "/",
			label: localize?.menu?.home,
		},
		{
			route: "/about-us",
			label: localize?.menu?.aboutUs,
		},
		{
			route: "/contact-us",
			label: localize?.menu?.contactUs,
		},
	];

	const onClickToggleNav = () => {
		const navSec = document.getElementById("navbarSupportedContent");
		if (navShow) navSec?.classList.add("show_menu");
		else navSec?.classList.remove("show_menu");
		setNavShow(!navShow);
	};

	const changeLanguage = (e: any) => {
		const language = e.target.checked ? "bn" : "en";
		router.push("", "", { locale: language });
	};

	return (
		<section
			className="navbar-section bg-white p-0 sticky-md-top"
			id={navShow ? "" : "mobile-nav-show"}
		>
			<nav className="main-menu navbar navbar-expand-lg navbar-light">
				<div className="container">
					<Link href="/">
						<a className="navbar-brand me-5">Brand Logo</a>
					</Link>
					<div onClick={() => onClickToggleNav()} className="navbar-toggler">
						<span
							id="nav-icon"
							className={navShow ? "nav-icon-menu" : "nav-icon-close"}
						></span>
					</div>
					<div
						className="collapse navbar-collapse wx__d-flex wx__justify-content-between w-100"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav">
							{navMenuList.map((item, index) => {
								return (
									<li className="nav-item" key={index}>
										<Link href={item.route}>
											<a
												className={
													pathName === item.route
														? "nav-link active"
														: "nav-link"
												}
											>
												{item.label}
											</a>
										</Link>
									</li>
								);
							})}
						</ul>
						<div
							className="nav-wrapper"
							onClick={() => onClickToggleNav()}
						></div>
					</div>
					<div className="select-language wx__ps-3">
						<Switch
							checkedTitle="ENG"
							unCheckedTitle="বাংলা"
							defaultChecked={router.locale === "bn"}
							onChange={(e: any) => changeLanguage(e)}
						/>
					</div>
				</div>
			</nav>
		</section>
	);
};

export default Nav;
