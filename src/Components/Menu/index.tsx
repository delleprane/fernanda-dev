import React, { useEffect, useState } from "react";
import "./Menu.css";
import { menu } from "../../utils/information";

export function Menu() {
    const [activeItem, setActiveItem] = useState<string>("");
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [lastScrollY, setLastScrollY] = useState<number>(0);
    const [isAtTop, setIsAtTop] = useState<boolean>(true);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    // Função para rolar até a seção correspondente ao item do menu
    const handleItemClick = (item: string) => {
        const section = document.getElementById(item.toLowerCase());
        if (section) {
            if (item === 'Sobre') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                section.scrollIntoView({ behavior: "smooth" });
                setActiveItem(item);
            }
        }
        setIsMenuOpen(false);
    };

    // Função para detectar a seção visível durante o scroll manual do usuário
    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        // Lógica para ocultar/mostrar o menu
        if (currentScrollY > lastScrollY && !isAtTop) {
            setIsVisible(false); // Scroll para baixo, oculta o menu
        } else {
            setIsVisible(true);  // Scroll para cima ou está no topo, mostra o menu
        }

        // Verifica se está no topo da página
        setIsAtTop(currentScrollY <= 60);

        // Atualiza o último valor de scroll
        setLastScrollY(currentScrollY);

        // Lógica para atualizar o item ativo no menu com base na seção visível
        const sections = menu.map((item) => document.getElementById(item.toLowerCase()));
        let currentActive = "";

        sections.forEach((section) => {
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
                    currentActive = section.id;
                }
            }
        });

        // Atualiza o item ativo no menu com base na seção visível
        setActiveItem(menu.find((item) => item.toLowerCase() === currentActive) || "");
    };

    // Adiciona um ouvinte para o scroll
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div className={`menu ${isVisible ? "visible" : "hidden"} ${isAtTop ? "isTop" : ""} ${isMenuOpen ? "open" : ""}`}>
            <div className="menu-container">
                <div className="itens-menu">
                    <img className="logo" src="images/logo-icon.png" alt="logo" onClick={() => handleItemClick('sobre')} />
                    <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span className="hamburger-bar">1</span>
                        <span className="hamburger-bar">2</span>
                        <span className="hamburger-bar">3</span>
                    </div>
                    <ul className="menu-items">
                        {menu.map((item) => (
                            <li
                                key={item}
                                className={`text-menu ${activeItem === item ? "active" : ""}`}
                                onClick={() => handleItemClick(item)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
