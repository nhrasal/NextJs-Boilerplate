interface IENV {
    env: string;
    ApiEndpoint: string;
    AdminURL?: string;
    HostName?: string;
    LandingPageURL?: string;
    IMAGE_BASE_URL?: string;
    GOOGLE_RECAPTCHA?: string;
}

export const ENV: IENV = {
    env: process.env.NEXT_PUBLIC_ENV || "",
    ApiEndpoint: process.env.NEXT_PUBLIC_BASE_URL || "",
    HostName: process.env.NEXT_PUBLIC_HOST_NAME || "",
    AdminURL: process.env.NEXT_PUBLIC_ADMIN_URL || "",
    LandingPageURL: process.env.NEXT_PUBLIC_LANDING_PAGE || "",
    IMAGE_BASE_URL: process.env.NEXT_PUBLIC_IMAGE_BASE_URL || "",
    GOOGLE_RECAPTCHA: process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA || ""
};
