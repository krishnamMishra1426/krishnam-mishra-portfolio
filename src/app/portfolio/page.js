"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const projects = [
  {
    name: "ChatWithBooks | Conversational Book Assistant App",
    description:
      "ChatWithBooks is a React Native mobile application that allows users to interact and chat with books. Using AI-powered conversational interfaces, users can ask questions, explore summaries, and engage with the content of books in an intuitive chat format.",
    link: "https://play.google.com/store/apps/details?id=com.chatwithbooks&hl=en_IN",
    category: "App",
    image: "/assets/img/masonry-portfolio/ChatWithBooks.png",
  },
  {
    name: "Digital Growth & Marketing Consultant Optiminder | AI-Driven Strategies",
    description:
      "I specialize in helping businesses scale smarter and faster by combining data-driven insights, creative problem-solving, and commercial strategy.",
    link: "https://app.optiminder.com/",
    category: "Web",
    image: "/assets/img/masonry-portfolio/SEO.png",
  },
  {
    name: "Ayurveda Home Health | E-commerce Website",
    description:
      "An online Ayurvedic products e-commerce store built using SvelteKit for fast and scalable front-end experience.",
    link: "https://ayurvedahomehealth.vercel.app/",
    category: "Web",
    image: "/assets/img/masonry-portfolio/AYURVEDAHOME.png",
  },
  {
    name: "Yoga Waikiki Beach | E-commerce Website",
    description:
      "Yoga Waikiki Beach Online & in-person classes for all levels, blending relaxation, fitness, and mindfulness.",
    link: "https://yogawaikikibeach-development.vercel.app/",
    category: "Web",
    image: "/assets/img/masonry-portfolio/Yoga.png",
  },
  {
    name: "Fusion Finance",
    description:
      "Collaborated on the design and deployment of the Fusion Finance website, a financial services platform.",
    link: "https://fusion-finance.com",
    category: "Web",
    image: "/assets/img/masonry-portfolio/Fusion.png",
  },
  {
    name: "NewThinking | AI Solutions",
    description:
      "Generative Chatbots, Conversational AI, Phone Assistants, Audio Visualizers. Built with React.js.",
    link: "https://newthinking.ai/",
    category: "Web",
    image: "/assets/img/masonry-portfolio/newthinking.png",
  },
  {
  name: "Dopex | Acumatica Page",
  description:
    "A responsive landing page built for Dopex, showcasing Acumatica solutions with a modern design and optimized user experience. Developed using Next.js and Tailwind CSS.",
  link: "https://www.dopex.co",
  category: "Web",
  image: "/assets/img/masonry-portfolio/Dopex-Acumatica.png", 
},

  {
    name: "Mirar AI | Chatbot & Admin Panel",
    description:
      "Mirar AI is an advanced conversational AI application tailored to significantly enhance user engagement.",
    link: "https://www.mirar.ai/",
    category: "Web",
    image: "/assets/img/masonry-portfolio/Mirar-AI.png",
  },
  // {
  //   name: "TalaThrive | Consultant Services",
  //   description:
  //     "A therapist-consultant platform with paid video call sessions. Built using React.js",
  //   link: "https://www.talathrive.com/",
  //   category: "Web",
  //   image: "/assets/img/masonry-portfolio/Tala_Thrive.png",
  // },
    {
    name: "Hack-a-thons Games | AI Solutions",
    description:
      "A gamified hackathon quiz platform where teams log in, get random questions, and must give correct prompts/answers to progress. Built using Next.js,  deployed on Vercel.",
    link: "https://hack-a-thons-game.vercel.app/",
    category: "Web",
    image: "/assets/img/masonry-portfolio/Hack-a-thon-game.png",
  },
  {
  name: "In10tional | Meditation & Mindfulness App",
  description:
    "A cross-platform meditation app built for iOS and Android, offering curated meditation music across multiple categories. Features include personalized playlists, morning push notification reminders, and a calming user interface for daily mindfulness practice.",
  link: "https://apps.apple.com/in/app/the-in10tional-life/id6747878614", 
  category: "App",
  image: "/assets/img/masonry-portfolio/in10tional.png", 
},

  
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((proj) => proj.category === filter);

  const categories = ["All", "App", "Web"];

  return (
    <main className="main">
      <section id="portfolio" className="portfolio section">
        
        <div className="container section-title" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p>
            Here are some of my featured projects showcasing my work in Web, App
            & AI solutions.
          </p>
        </div>

        <div className="container">
     
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            {categories.map((cat, i) => (
              <li
                key={i}
                className={`filter-item ${filter === cat ? "filter-active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>

       
          <div className="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">
            {filteredProjects.map((proj, i) => (
              <div
                key={i}
                className="col-lg-4 col-md-6 "
              >
                <div className="portfolio-card">
                  <div className="portfolio-image">
                    <Image 
                      src={proj.image} 
                      className="img-fluid" 
                      height={300} 
                      width={400} 
                      alt={proj.name}
                      style={{ objectFit: "cover", width: "100%", height: "200px" }}
                    />
                    <div className="portfolio-overlay">
                      <div className="portfolio-links">
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="portfolio-link"
                          title="Visit Project"
                        >
                          <i className="bi bi-box-arrow-up-right"></i>
                        </a>
                        <span className="portfolio-category">{proj.category}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="portfolio-content">
                    <h4 className="portfolio-title">{proj.name}</h4>
                    <p className="portfolio-description">{proj.description}</p>
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="portfolio-btn"
                    >
                      View Project <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .portfolio-filters {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-bottom: 40px;
            flex-wrap: wrap;
        
          }
          
          .filter-item {
            padding: 8px 20px;
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 500;
          }
          
          .filter-item:hover,
          .filter-active {
            background: #007bff;
            color: white;
            border-color: #007bff;
          }
          
          .portfolio-card {
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            height: 100%;
            display: flex;
            flex-direction: column;
          }
          
          .portfolio-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.15);
          }
          
          .portfolio-image {
            position: relative;
            overflow: hidden;
          }
          
          .portfolio-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(52, 183, 167, 0.4);
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            padding: 20px;
            opacity: 0;
            transition: all 0.3s ease;
          }
          
          .portfolio-card:hover .portfolio-overlay {
            opacity: 1;
          }
          
          .portfolio-links {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          
          .portfolio-link {
            color: white;
            font-size: 1.2rem;
            text-decoration: none;
            transition: transform 0.3s ease;
          }
          
          .portfolio-link:hover {
            transform: scale(1.2);
          }
          
          .portfolio-category {
            background: rgba(255,255,255,0.2);
            color: white;
            padding: 5px 12px;
            border-radius: 15px;
            font-size: 0.8rem;
            font-weight: 500;
          }
          
          .portfolio-content {
            padding: 25px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
          }
          
          .portfolio-title {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 10px;
            color: #333;
            line-height: 1.3;
          }
          
          .portfolio-description {
            color: #666;
            font-size: 0.9rem;
            line-height: 1.5;
            margin-bottom: 20px;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          
          .portfolio-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #34b7a7;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            margin-top: auto;
          }
          
          .portfolio-btn:hover {
            gap: 12px;
            color: #0056b3;
          }
          
          @media (max-width: 768px) {
            .portfolio-filters {
              gap: 10px;
            }
            
            .filter-item {
              padding: 6px 15px;
              font-size: 0.9rem;
            }
            
            .portfolio-content {
              padding: 10px;
            }
            
            .portfolio-title {
              font-size: 1.1rem;
            }
          }
        `}</style>
      </section>
    </main>
  );
}