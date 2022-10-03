import "bootstrap/scss/bootstrap.scss";
import "react-toastify/dist/ReactToastify.css";
import "../styles/global.scss";

import AuthProvider from "context/Auth";
import { LocalizationProvider } from "context/Localization";
import type { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import { ToastContainer } from "react-toastify";

Router.events.on("routeChangeStart", (e) => {
	NProgress.configure({ showSpinner: false });
	if (
		e !== (Router.pathname !== "/" ? `${Router.pathname}/` : Router.pathname)
	) {
		NProgress.start();
	}
});
Router.events.on("routeChangeComplete", () => {
	NProgress.done();
});
const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<LocalizationProvider>
			<AuthProvider>
				<ToastContainer
					position="bottom-right"
					autoClose={2000}
					hideProgressBar={true}
					newestOnTop={false}
					closeOnClick
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="colored"
				/>
				<Component {...pageProps} />
			</AuthProvider>
		</LocalizationProvider>
	);
};

export default MyApp;
