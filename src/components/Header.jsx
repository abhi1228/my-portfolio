import React, { useState, useEffect } from "react";
import '../styles/Header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`${isScrolled ? "scrolled" : "unscrolled"}`}>
      <div className="container">
        <nav>
          <a href="#home" className="logo">
            <span>AG</span>
            <span>Abhishek Gupta</span>
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
          </div>

          <button
            className="menu-button"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <i className="fas fa-bars"></i>
          </button>
        </nav>

        <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
          <div className="flex-col">
            <a href="#home" onClick={closeMobileMenu}>Home</a>
            <a href="#skills" onClick={closeMobileMenu}>Skills</a>
            <a href="#experience" onClick={closeMobileMenu}>Experience</a>
            <a href="#projects" onClick={closeMobileMenu}>Projects</a>
          </div>
        </div>
      </div>
    </header>
  );
}
