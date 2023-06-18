import { toast as rt } from "react-toastify";

export const toast = {
	success: (message: string): any => rt.success(message || "Success"),
	error: (message: string): any => rt.error(message || "Something went wrong!"),
	info: (message: string): any => rt.success(message || "Information!"),
	warning: (message: string): any => rt.warning(message || "Warning!"),
};
