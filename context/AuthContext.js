import { createContext, useState } from "react";

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState({});
    const [auth, setAuth] = useState(false);

    return (
        <AuthContext.Provider
            value={{
                auth,
                authData,
                setAuth,
                setAuthData
            }}>
            {children}
        </ AuthContext.Provider>
    );
};

export default AuthContext;