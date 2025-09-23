'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const skills = [
    { name: 'HTML', value: 100 },
    { name: 'CSS', value: 100 },
    { name: 'Tailwind CSS', value: 100 },
    { name: 'JavaScript', value: 100 },
    { name: 'React Js', value: 100 },
    { name: 'Next Js', value: 90 },
    { name: 'React Native', value: 85 },
    { name: 'SvelteKit', value:80 },
    { name: 'Express js', value:100 },
    { name: 'Nest JS', value: 75 },
    { name: 'Node JS', value: 80 },
    { name: 'MongoDB No-SQL Based', value:100 },
  ];

export default function About() {
    const skillsRef = useRef(null);
    const [animated, setAnimated] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setAnimated(true);
          }
        },
        { threshold: 0.3 }
      );  
      if (skillsRef.current) {
        observer.observe(skillsRef.current);
      }
      return () => {
        if (skillsRef.current) {
          observer.unobserve(skillsRef.current);
        }
      };
  }, []);

    return (
    <main className="main">
      <section id="about" className="about section">
        <div className="container section-title" data-aos="fade-up">
          <h2>About</h2>
          <p>Passionate and skilled Full Stack Developer with experience in designing, developing, and deploying scalable web applications.</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <Image 
                src="/assets/img/krishnamImage.jpg" 
                alt="Profile Image" 
                width={400} 
                height={400} 
                className="img-fluid" 
              />
            </div>
            <div className="col-lg-8 content">
              <h2>Full Stack Developer</h2>
              <p className="fst-italic py-3">
                I am a passionate Full Stack Developer specializing in the MERN stack. With a strong background in building scalable and high-performance applications, I focus on delivering seamless user experiences. My expertise includes front-end and back-end development, API integrations, authentication, and cloud deployment. Always eager to learn and adapt to new technologies, I strive to create innovative and efficient solutions.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>03 Sep 1998</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>9522403723</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>India</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>27</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Graduation</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>krishnammishra1426@gmail.com</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                  </ul>
                </div>
              </div>
              <p className="py-3">
              I specialize in building responsive, user-friendly web applications with a strong focus on performance and security. My expertise includes front-end and back-end development, database management, and cloud deployment. 
              Dedicated to continuous learning and staying updated with industry trends to deliver high-quality solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills section" ref={skillsRef}>
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>Skilled full-stack developer specializing in the MERN stack, with expertise in building scalable, high-performance applications. Passionate about crafting seamless user experiences and optimizing performance.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content skills-animation">
          {skills.map((skill, index) => (
            <div key={index} className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  <span>{skill.name}</span> <i className="val">{skill.value}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={skill.value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{
                      width: animated ? `${skill.value}%` : "0%",
                      transition: "width 1s ease-in-out",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
     </section>
    
    </main>
    );
  }
  