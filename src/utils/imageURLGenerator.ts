import { ENV } from "../@config/ENV.config";

export const imageURLGenerate = (file?: any): string => {
	if (typeof file === "undefined") return "";
	if (Array.isArray(file) && !file.length) return "";

	if (Array.isArray(file) && file.length)
		return ENV.IMAGE_BASE_URL + file[0].previewUrl;

	if (typeof file === "string" && file) return ENV.IMAGE_BASE_URL + file;

	if (typeof file === "object" && file)
		return ENV.IMAGE_BASE_URL + file.previewUrl;

	return "";
};
