import { createContext, useState } from "react";

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [authorized, setAuthorized] = useState(false);
    const [user, setUser] = useState();

    return (
        <AuthContext.Provider
            value={{
                authorized,
                user,
                setAuthorized,
                setUser
            }}>
            {children}
        </ AuthContext.Provider>
    );
};

export default AuthContext;