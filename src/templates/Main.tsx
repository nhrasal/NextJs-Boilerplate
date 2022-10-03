import Footer from "layouts/Footer";
import { Meta } from "layouts/Meta";
import Nav from "layouts/Nav";
import type { ReactNode } from "react";
import { useEffect } from "react";

type IMainProps = {
	meta?: ReactNode;
	children: ReactNode;
	className?: string;
};

const Main = (props: IMainProps) => {
	const goToTop = () => {
		window.scroll(0, 0);
	};

	useEffect(() => {
		const goTop = document.getElementById("go-to-top");
		const handleScroll = () => {
			if (window.scrollY > 300) goTop?.classList.add("go__top");
			else goTop?.classList.remove("go__top");
		};
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div>
			{props?.meta || <Meta title="Webx ltd." description="" />}
			<Nav />
			<div className="mx-auto max-w-screen-md bg-white">
				<div className={`page-content ${props?.className}`}>
					{props.children}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export { Main };
