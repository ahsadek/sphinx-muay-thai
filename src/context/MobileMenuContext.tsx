import React, { FC, ReactNode, useContext, useState } from "react";

// Interface for MobileMenuProvider props
interface IMobileMenuProviderProps {
    children: ReactNode;
}

// Interface for MobileMenuContext props
interface IMobileMenuContextProps {
    isMobileMenuOpen: boolean;
    toggleMobileMenu: () => void;
}

// Create MobileMenuContext
const MobileMenuContext = React.createContext<IMobileMenuContextProps>(
    {} as IMobileMenuContextProps
);

// Custom hook to use MobileMenuContext
// returns context value : { isMobileMenuOpen, toggleMobileMenu }
export const useMobileMenu = () => {
    return useContext(MobileMenuContext);
};

// MobileMenuProvider component
const MobileMenuProvider: FC<IMobileMenuProviderProps> = ({ children }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const contextValue: IMobileMenuContextProps = {
        isMobileMenuOpen,
        toggleMobileMenu,
    };

    return <MobileMenuContext.Provider value={contextValue}>{children}</MobileMenuContext.Provider>;
};

export default MobileMenuProvider;
