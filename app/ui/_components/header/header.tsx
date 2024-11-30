'use client';

import '@/app/ui/_components/header/header.css';
import Image from 'next/image';
import logo from '/public/assets/logo.svg';
import { useState } from 'react';
import menu from '/public/assets/menu.svg';
import close from '/public/assets/close.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathName = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const isSelected = (path: string) => {
        return path === pathName ? "selected" : ""
    }
    
    return (
        <div className="container-main">
            <header>
                <nav id='nav' className={isMenuOpen ? 'open' : ''}>
                    <div className="logo">
                        <Image src={logo} alt="Logo" />
                    </div>
                    <ul id='menu'>
                        <li><Link className={`link ${isSelected("/")}`} href={'/'}>Início</Link></li>
                        <li><Link className={`link ${isSelected("/produtos")}`} href={'/produtos'}>Produtos</Link></li>
                        <li><Link className={`link ${isSelected("/beneficios")}`} href={'/beneficios'}>Benefícios</Link></li>
                        <li><Link className={`link ${isSelected("/atendimento")}`} href={'/atendimento'}>Atendimento Especializado</Link></li>
                        <li><Link className={`link ${isSelected("/planos")}`} href={'/planos'}>Planos</Link></li>
                    </ul>
                    <div className="menu-ic" id="btn-mobile" onClick={toggleMenu}>
                        <Image 
                            src={isMenuOpen ? close : menu} 
                            alt={isMenuOpen ? "close Menu" : "Open Menu"} />
                    </div>
                </nav>
            </header>
        </div>
    );
}

