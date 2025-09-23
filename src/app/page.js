'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <main className="main relative top-20">
      <section className="hero section relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/assets/img/krishnamHome.png" 
            alt="Hero Background" 
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div 
          className="container relative z-10 text-center aos-init aos-animate" 
          data-aos="zoom-out" 
          data-aos-delay="100"
        >
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2>Krishnam Mishra</h2>
              <p>
                I'm a Full Stack Developer passionate about building scalable web 
                and mobile applications, with expertise in frontend and backend.
              </p>
              <Link href="/about" className="btn-get-started" aria-label="Go to About Page">
                About Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
