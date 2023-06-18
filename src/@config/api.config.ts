import axios from "axios";
import { LocalStorage } from "../@services/utils/localStorage.service";

import { ENV } from "./ENV.config";
import { ACCESS_TOKEN } from "../@constants/auth.constants";

const instance = axios.create({
	baseURL: ENV.ApiEndpoint as string,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
});

instance.interceptors.request.use(
	(config: any) => {
		const accessToken = LocalStorage.get(ACCESS_TOKEN) || null;
		if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
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
			body: null,
			status: 500,
			message: "Something went wrong!",
		});
	}
);

instance.interceptors.response.use(
	(res: any) => {
		if (res.data.status === 200) return { ...res.data };

		if (res.data.status === 401) {
			LocalStorage.clear();
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
				LocalStorage.clear();
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
