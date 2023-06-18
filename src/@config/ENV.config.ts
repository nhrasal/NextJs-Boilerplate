interface IENV {
	env: string | null;
	ApiEndpoint: string | null;
}

export const ENV: IENV = {
	env: process.env.NEXT_PUBLIC_ENV || null,
	ApiEndpoint: process.env.NEXT_PUBLIC_BASE_URL || null,
};
