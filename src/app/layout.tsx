import "bootstrap/dist/css/bootstrap.min.css";
import "material-icons/iconfont/material-icons.css";
import "../assets/scss/common.scss";
import Navbar from "../@components/Navbar/Navbar";
import Footer from "../@components/Footer/Footer";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<body>
				<Navbar />
				<div className="main-content">{children}</div>
				<Footer />
			</body>
		</html>
	);
}
