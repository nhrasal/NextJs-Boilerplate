import axios from "axios";
import { LocalStorageService } from "../@services/utils/localStorage.service";

import { ENV } from "./ENV.config";

const instance = axios.create({
	baseURL: ENV.ApiEndpoint,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
});

instance.interceptors.request.use(
	(config: any) => {
		const accessToken = LocalStorageService.get("accessToken") || null;
		const uid = LocalStorageService.get("uid") || null;
		const resetToken = LocalStorageService.get("token") || null;
		if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
		if (uid) config.headers.uid = uid;
		if (resetToken) config.headers.token = resetToken;
		return config;
	},
	(error) => {
		if (error.response) {
			return Promise.reject({
				...error.response.data,
				...{ status: error.response.data.status || error.status },
			});
		}

		return Promise.reject({
			body: false,
			status: 404,
			message: "server not responding",
		});
	}
);

instance.interceptors.response.use(
	(res: any) => {
		if (res.data.status === 200) return { ...res.data };

		if (res.data.status === 401) {
			LocalStorageService.clear();
		}

		return Promise.reject({
			body: res.data.body,
			status: res.data.status,
			message: res.data.message,
		});
	},
	(error) => {
		if (error.response) {
			if (error.response.data.status === 401) {
				LocalStorageService.clear();
				// window.location.reload();
			}

			if (error?.response?.data?.error) {
				return Promise.reject({
					status: error?.response?.data?.status,
					message: error?.response?.data?.error,
					body: {},
				});
			}

			return Promise.reject({
				...error.response.data,
				...{ status: error.response.data.status || error.status },
			});
		}
		return Promise.reject({
			status: 404,
			message: "server not responding",
			body: {},
		});
	}
);
export const apiIns = instance;
