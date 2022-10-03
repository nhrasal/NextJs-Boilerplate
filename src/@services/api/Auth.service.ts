import { apiIns } from "@config/api.config";

export interface ILoginPayload {
    user_name: string;
    password: string;
}
export interface IStorePayload {
    store_id: string;
}

export interface ISignUp {
    user_name: string;
    shop_name: string;
    shop_path: string;
    password: string;
    ref?: string;
}

export interface IForgotPasswordPayload {
    user_name: string;
}
interface IOtpPayload {
    user_name: string;
    otp: number;
}
interface IOtpResendPayload {
    user_name: string;
}
interface IPasswordResetPayload {
    uuid: string;
    password: string;
    conf_password: string;
}

export const AuthService = {
    login: async (loginPayload: ILoginPayload): Promise<any> =>
        apiIns.post("auth-service/merchant/sign-in", loginPayload),
    storeLogin: async (storePayload: IStorePayload): Promise<any> =>
        apiIns.post("auth-service/merchant/store-login", storePayload),
    signUp: async (signUpData: ISignUp): Promise<any> =>
        apiIns.post("auth-service/merchant/sign-up", signUpData),

    forgotPassword: async (payload: IForgotPasswordPayload): Promise<any> =>
        apiIns.put("auth-service/merchant/forget-password-otp", payload),

    otpVerification: async (payload: IOtpPayload): Promise<any> =>
        apiIns.put("auth-service/merchant/verify-reset-otp", payload),

    resendOtp: async (payload: IOtpResendPayload): Promise<any> =>
        apiIns.put("auth-service/merchant/resend-forget-otp", payload),

    passwordReset: async (payload: IPasswordResetPayload): Promise<any> =>
        apiIns.put("auth-service/merchant/reset-password", payload),

    signOut: async (): Promise<any> =>
        apiIns.get("auth-service/merchant/sign-out")
};
