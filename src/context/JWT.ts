import jwt_decode from "jwt-decode";

const isExpiredToken = (token: string) => {
	const tokenDecode: any = jwt_decode(token);
	if (!tokenDecode?.exp) return true;

	const tokenDateTime = new Date(tokenDecode?.exp * 1000).toISOString();
	const currentDateTime = new Date().toISOString();

	if (currentDateTime > tokenDateTime) return true;
	return false;
};

export default isExpiredToken;
