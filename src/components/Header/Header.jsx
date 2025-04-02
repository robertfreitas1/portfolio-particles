import "bootstrap/dist/css/bootstrap.min.css";

import styled from "styled-components";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container className="container-fluid">
      <div className="row align-items-center">
        <div className="col-6">
          <Logo>Meu Portfólio</Logo>
        </div>

        {/* Botão Hamburguer para Mobile */}
        <div className="col-6 d-flex justify-content-end d-md-none">
          <MenuButton onClick={() => setIsOpen(!isOpen)}>
            ☰
          </MenuButton>
        </div>

        {/* Menu Desktop */}
        <div className={`col-md-6 d-none d-md-flex justify-content-end ${isOpen ? "d-flex" : "d-none"}`}>
          <Nav className="nav">
            <NavItem className="nav-link" href="#home">Início</NavItem>
            <NavItem className="nav-link" href="#about">Sobre</NavItem>
            <NavItem className="nav-link" href="#projects">Projetos</NavItem>
            <NavItem className="nav-link" href="#contact">Contato</NavItem>
          </Nav>
        </div>
      </div>
    </Container>
  );
};

export default Header;

// 🎨 **Estilos com Glassmorphism e responsividade**
const Container = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 15px 40px;
  z-index: 1000;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`;

const NavItem = styled.a`
  color: white !important;
  font-weight: bold;
  transition: color 0.3s;
  &:hover {
    color: #00bcd4 !important;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
`;
