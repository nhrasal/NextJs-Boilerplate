import {
	isBrowser,
	LocalStorageService,
} from "@services/utils/localStorage.service";
import { createContext, useEffect, useMemo, useState } from "react";

import isExpiredToken from "./JWT";

type AuthProps = {
	isAuthenticated: boolean;
	authenticate: Function;
	logout: Function;
};

export const AuthContext = createContext({} as AuthProps);

const isValidToken = () => {
	const accessToken = LocalStorageService.get("accessToken");
	if (!accessToken) return false;
	return !isExpiredToken(accessToken);
};

const AuthProvider = ({ children }: any) => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
		isValidToken()
	);
	// using interval for authentication
	const token = () => {
		if (!isValidToken()) setIsAuthenticated(isValidToken());
	};
	const tokenCheck = setInterval(token, 5000);

	// clearing the interval after logout
	if (!isAuthenticated) clearInterval(tokenCheck);

	useEffect(() => {
		setIsAuthenticated(isValidToken());
	}, [isValidToken()]);

	// authentication function
	const authenticate = ({ accessToken }: any, callback: () => void) => {
		if (accessToken) {
			LocalStorageService.set("accessToken", accessToken);
			setIsAuthenticated(true);
		}
		callback();
	};

	// logout function
	const logout = () => {
		setIsAuthenticated(false);
		if (isAuthenticated) LocalStorageService.clear();
		if (isBrowser) {
			window.location.replace("/login");
		}
	};

	// creating a eventlistener in window
	useEffect(() => {
		const handleInvalidToken = (e: any) => {
			if (e.key === "accessToken" && e.oldValue && !e.newValue) logout();
		};
		window.addEventListener("storage", handleInvalidToken);

		return function cleanUp() {
			window.removeEventListener("storage", handleInvalidToken);
		};
	}, [isAuthenticated]);

	// passing necessary parameters in context
	const memoedProps = useMemo(
		() => ({
			authenticate,
			isAuthenticated,
			logout,
		}),
		[authenticate, isAuthenticated, logout]
	);

	return (
		<AuthContext.Provider value={memoedProps}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
