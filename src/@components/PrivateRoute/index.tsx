import { LocalStorageService } from "@services/utils/localStorage.service";
import { AuthContext } from "context/Auth";
import { useContext, useEffect, useState } from "react";

const privateRoute = (Component: any) => {
    // return isAuthenticated ? children : logout();
    const Auth = (props: any) => {
        const { logout } = useContext(AuthContext);

        const [accessToken, setAccesstoken] = useState<any>("-1");
        useEffect(() => {
            setAccesstoken(LocalStorageService.get("accessToken"));
        }, []);

        // Login data added to props via redux-store (or use react context for example)

        // If user is not logged in, return login component
        if (accessToken === null || !accessToken) return logout();
        if (accessToken) {
            return <Component {...props} />;
        }
        return <h1>Loading...</h1>;

        // If user is logged in, return original component
    };

    // Copy getInitial props so it will run as well
    if (Component.getInitialProps) {
        Auth.getInitialProps = Component.getInitialProps;
    }
    return Auth;
};

export default privateRoute;
