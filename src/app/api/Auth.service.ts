import { apiIns } from "../../@config/api.config";

export interface ILoginPayload {
	user_name: string;
	password: string;
}
export const AuthService = {
	login: async (loginPayload: ILoginPayload): Promise<any> =>
		apiIns.post("auth-service/merchant/sign-in", loginPayload),
};
