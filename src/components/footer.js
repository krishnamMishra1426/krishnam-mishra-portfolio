"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa6";

export default function Footer() {
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false); 

  useEffect(() => {
    setIsMounted(true);  
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isMounted) return null;  

  return (
    <footer id="footer" className="footer light-background">
      <div className="container">
        <div className="copyright text-center">
          <p>
            © <span>Copyright</span> <strong className="px-1 sitename">Krishnam</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
        </div>

        <div className="social-links d-flex justify-content-center">
          <Link href="https://x.com/KrishnamMishr15?t=QZaWun-bOCvzUh9K7M9BdQ&s=09" target="_blank" className="social-icon">
            <FaXTwitter />
          </Link>
          <Link href="https://github.com/krishnammishra123" target="_blank" className="social-icon">
            <FaGithub  />
          </Link>
          <Link href="https://www.instagram.com/mishrakrishnam/?igsh=OTRlejI4d2lxeHF3" target="_blank" className="social-icon">
            <FaInstagram />
          </Link>
          <Link href="https://www.linkedin.com/in/krishnam-mishra-5618b5199/" target="_blank" className="social-icon">
            <FaLinkedinIn />
          </Link>
        </div>

        <div className="credits text-center">
          Designed and Developed by <Link href="">Krishnam Mishra</Link>
        </div>
      </div>

 <Link
  href="https://wa.me/9522403723?text=Hello%20I%20want%20to%20know%20more"
  className="whatsapp-float"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    alt="WhatsApp"
    className="whatsapp-icon"
  />
</Link>


      {/* Preloader (If needed, uncomment) */}
      {/* <div id="preloader"></div> */}
    </footer>
  );
}
