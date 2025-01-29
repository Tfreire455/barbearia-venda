import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const HeaderContainer = styled.header`
  background: #000;
  padding: 20px 50px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 15px 30px;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media (max-width: 1024px) {
    gap: 15px;
  }

  @media (max-width: 1068px) {
    flex-direction: column;
    width: 100%;
    display: ${({ isMobileNavOpen }) => (isMobileNavOpen ? "flex" : "none")};
    margin-top: 10px;
    max-height: 70vh; /* Limita a altura do menu */
    overflow-y: auto; /* Permite rolar o menu se necessário */
  }
`;

const NavItem = styled.span`
  color: #fff;
  margin: 0 20px;
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;
  position: relative;
  &:hover {
    color: #ff6347;
  }

  @media (max-width: 1024px) {
    font-size: 16px;
    margin: 10px 15px;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  background: #000;
  border: 1px solid #fff;
  border-radius: 5px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 10;
  min-width: 180px;
  @media (max-width: 1068px) {
    position: static;
    margin-top: 10px;
    width: 100%;
  }
`;

const DropdownItem = styled.div`
  color: #fff;
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    background: #ff6347;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  @media (max-width: 1024px) {
    gap: 12px;
  }

  @media (max-width: 1068px) {
    margin-top: 10px;
  }
`;

const Icon = styled.a`
  color: #fff;
  font-size: 24px;
  transition: color 0.3s ease;
  &:hover {
    color: #ff6347;
  }

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const LanguageSelector = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  img {
    width: 24px;
    height: 24px;
    cursor: pointer;
    border-radius: 50%;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: 1024px) {
    gap: 8px;
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;
  @media (max-width: 1024px) {
    font-size: 30px;
  }

  @media (max-width: 1068px) {
    display: flex;
    top: 20px;
    right: 20px;
  }
`;

function Header() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleNavClick = (id) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileNavOpen(false);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setDropdownOpen(false);
    setMobileNavOpen(false);
  };

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <HeaderContainer>
      <LanguageSelector>
        <img src="https://flagcdn.com/w40/us.png" alt="English" onClick={() => changeLanguage("en")} />
        <img src="https://flagcdn.com/w40/br.png" alt="Português" onClick={() => changeLanguage("pt")} />
        <img src="https://flagcdn.com/w40/es.png" alt="Español" onClick={() => changeLanguage("es")} />
      </LanguageSelector>
      <MobileMenuIcon onClick={toggleMobileNav}>
        {isMobileNavOpen ? <FaTimes /> : <FaBars />}
      </MobileMenuIcon>
      <Nav isMobileNavOpen={isMobileNavOpen}>
        <NavItem onClick={() => handleNavClick("hero")}>{t("hero_title")}</NavItem>
        <NavItem onClick={() => handleNavClick("services")}>{t("service_title")}</NavItem>
        <NavItem onClick={() => handleNavClick("offers")}>{t("offers_title")}</NavItem>
        <NavItem onClick={() => handleNavClick("booking")}>{t("booking_title")}</NavItem>
        <NavItem onClick={() => handleNavClick("contact")}>{t("contact_title")}</NavItem>

        {/* Dropdown "Quem Somos" */}
        <NavItem
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          {t("quem_somos")}
          <DropdownMenu isOpen={isDropdownOpen}>
            <DropdownItem onClick={() => handleNavigate("/nossa-historia")}>{t("nossa_historia")}</DropdownItem>
            <DropdownItem onClick={() => handleNavigate("/equipe")}>{t("equipe")}</DropdownItem>
            <DropdownItem onClick={() => handleNavigate("/faq")}>FAQ</DropdownItem>
          </DropdownMenu>
        </NavItem>
      </Nav>
      <SocialIcons>
        <Icon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </Icon>
        <Icon href="https://wa.me/551234567890" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </Icon>
        <Icon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </Icon>
        <Icon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </Icon>
      </SocialIcons>
    </HeaderContainer>
  );
}

export default Header;
