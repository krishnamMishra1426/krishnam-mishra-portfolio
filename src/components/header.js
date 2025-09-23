'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa6";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/resume', label: 'Resume' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="header d-flex align-items-center light-background sticky-top">
      <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
        <Link href="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1 className="sitename">Krishnam</h1>
        </Link>

        <nav className="navmenu">
          <ul>
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={pathname === href ? "active" : ""}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <button className="mobile-nav-toggle d-xl-none">
            <FaBars />
          </button>
        </nav>

        <div className="header-social-links">
          <Link href="https://x.com/KrishnamMishr15?t=QZaWun-bOCvzUh9K7M9BdQ&s=09" target="_blank" className="twitter">
            <FaXTwitter />
          </Link>
          <Link href="https://github.com/krishnammishra123" target="_blank" className="social-icon">
            <FaGithub />
          </Link>
          <Link href="https://www.instagram.com/mishrakrishnam/?igsh=OTRlejI4d2lxeHF3" target="_blank" className="instagram">
            <FaInstagram />
          </Link>
          <Link href="https://www.linkedin.com/in/krishnam-mishra-5618b5199/" target="_blank" className="linkedin">
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
    </header>
  );
}
