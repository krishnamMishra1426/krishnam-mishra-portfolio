'use client';

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

const serviceItems = [
  {
    title: "Web Development",
    description:
      "Full-Stack solutions provider using MERN stack and modern technologies to build scalable, efficient, and secure web applications tailored to client needs.",
    iconClass: "bi bi-code-slash",
    itemClass: "item-cyan",
    delay: 100,
  },
  {
    title: "React Native App Development",
    description:
      "Develop cross-platform mobile apps with React Native, delivering smooth performance, interactive UI, and seamless user experiences for Android and iOS.",
    iconClass: "bi bi-phone",
    itemClass: "item-orange",
    delay: 200,
  },
  {
    title: "UI/UX Design",
    description:
      "Craft intuitive and visually appealing designs, ensuring responsive, interactive, and user-friendly interfaces for web and mobile applications.",
    iconClass: "bi bi-palette",
    itemClass: "item-teal",
    delay: 300,
  },
  {
    title: "Backend & API Development",
    description:
      "Implement secure and efficient server-side logic with Node.js, Express.js, and Nest.js, including robust API integrations and database management.",
    iconClass: "bi bi-server",
    itemClass: "item-red",
    delay: 400,
  },
  {
    title: "Generative AI Integration",
    description:
      "Integrate AI-powered features into applications, from chatbots to content generation, enhancing engagement, personalization, and innovative solutions.",
    iconClass: "bi bi-robot",
    itemClass: "item-indigo",
    delay: 500,
  },
  {
    title: "Application Development & Deployment",
    description:
      "Deliver tailor-made applications from concept to deployment, with agile development, rapid iteration, and continuous improvement for business growth.",
    iconClass: "bi bi-app",
    itemClass: "item-pink",
    delay: 600,
  },
];


  return (
    <main className="main">
      <section id="services" className="services section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>It meets all requirements and ensures seamless, efficient, and reliable results. </p>
        </div>

        <div className="container">
          <div className="row gy-4">
            {serviceItems.map((item, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={item.delay}
              >
                <div className={`service-item ${item.itemClass} position-relative`}>
                  <div className="icon">
                    <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                      <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
                    </svg>
                    <i className={item.iconClass}></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>{item.title}</h3>
                  </a>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
