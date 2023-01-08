import { createContext, useState } from "react";

const NavContext = createContext();

export const NavProvider = ({ children }) => {
    const [selected, setSelected] = useState(0);

    return (
        <NavContext.Provider
            value={{
                selected,
                setSelected
            }}>
            {children}
        </ NavContext.Provider>
    );
};

export default NavContext;