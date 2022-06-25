import { List } from "phosphor-react";
import { Logo } from "./Logo";

export function Header() {
    return (
        <header className="w-full py-5 flex justify-around items-center md:justify-center bg-gray-700 border-b border-gray-600 ">
            <Logo />
            <button className="flex justify-between md:hidden"><span className="pt-1">Aulas</span><List size={32} color="#81d8f7"/></button>
        </header>
    );
}