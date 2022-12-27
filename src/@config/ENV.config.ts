interface IENV {
  env: string | null;
  ApiEndpoint: string | null;
  AdminURL?: string | null;
  HostName?: string | null;
  LandingPageURL?: string | null;
  IMAGE_BASE_URL?: string | null;
  GOOGLE_RECAPTCHA?: string | null;
}

export const ENV: IENV = {
  env: process.env.NEXT_PUBLIC_ENV || null,
  ApiEndpoint: process.env.NEXT_PUBLIC_BASE_URL || null,
  HostName: process.env.NEXT_PUBLIC_HOST_NAME || null,
  AdminURL: process.env.NEXT_PUBLIC_ADMIN_URL || null,
  LandingPageURL: process.env.NEXT_PUBLIC_LANDING_PAGE || null,
  IMAGE_BASE_URL: process.env.NEXT_PUBLIC_IMAGE_BASE_URL || null,
  GOOGLE_RECAPTCHA: process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA || null,
};
