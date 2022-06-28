import { List, X } from "phosphor-react";
import { useContext } from "react";
import { Logo } from "./Logo";
import { NavContext } from '../context/NavContext';

export function Header() {

    const  {isVisible, mobNav} = useContext(NavContext);
    
    return (
        <header className="w-full py-5 flex justify-around items-center md:justify-center bg-gray-700 border-b border-gray-600 ">
            <Logo />
            {mobNav?(
                <button onClick={()=>isVisible(false)} className="flex justify-between md:hidden"><X size={32} color="#81d8f7"/></button>
            ):(
                <button onClick={()=>isVisible(true)} className="flex justify-between md:hidden"><span className="pt-1">Aulas</span><List size={32} color="#81d8f7"/></button>
            )}
            
         
        </header>
    );
}