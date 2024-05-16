import { createContext, ReactNode, useEffect, useState,} from 'react';

type NavProviderProps = {
    children:  ReactNode;
}

interface NavContextData{
    isVisible: (visible:Boolean) => void
    mobNav: Boolean
}

export const NavContext = createContext<NavContextData>({} as NavContextData)

export function NavProvider({ children }:NavProviderProps) {
    
    const [mobNav,setMobNav] = useState<Boolean>(false)
 
    function isVisible(visible:Boolean){
        setMobNav(visible)
    }

    return (
        <NavContext.Provider value={{ isVisible , mobNav}}>
            {children}
        </NavContext.Provider>
    );
}