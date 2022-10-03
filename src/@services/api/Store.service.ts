import { apiIns } from "@config/api.config";

export interface ICheckStorePayload {
    shop_path?: string;
    name?: string;
}

export interface ICheckUsernamePayload {
    user_name: string;
}
export interface ICreateStorePayload {
    user_name: string;
}
export interface IStoreCreate {
    name: string;
    path: string;
    businessName: string;
}

export const StoreService = {
    checkStoreAvailability: async (data: ICheckStorePayload) =>
        await apiIns.post("auth-service/merchant/is-store-available", data),

    checkUsernameAvailability: async (data: ICheckUsernamePayload) =>
        await apiIns.post("auth-service/merchant/is-valid-username", data),

    getStoreList: async () =>
        await apiIns.get("auth-service/merchant/get-user-store-list"),

    createStore: async (storeData: IStoreCreate) =>
        await apiIns.post("setting-service/store/create", storeData)
};
