import { toast } from "react-toastify";

export const ToastService = {
    success: (message: string): any => toast.success(message || "Success"),
    error: (message: string): any =>
        toast.error(message || "Something went wrong!"),
    info: (message: string): any => toast.success(message || "Information!"),
    warning: (message: string): any => toast.warning(message || "Warning!")
};
