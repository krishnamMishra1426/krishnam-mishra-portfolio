import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import editor from "../../Assets/Projects/codeEditor.png";
import newthinking from "../../Assets/Projects/newthinking.png";
import mirarAi from "../../Assets/Projects/mirar.png";
import SEO from "../../Assets/Projects/SEO.png";
import Fusion from "../../Assets/Projects/Fusion.png";
import Yoga from "../../Assets/Projects/Yoga.png";
import HackAThonGame from "../../Assets/Projects/Hack-a-thon-game.png";
import ChatWithBooks from "../../Assets/Projects/ChatWithBooks.png";
import in10tional from "../../Assets/Projects/in10tional.png";
import AYURVEDAHOME from "../../Assets/Projects/AYURVEDAHOME.png";
import DopexAcumatica from "../../Assets/Projects/Dopex-Acumatica.png";

const projectsData = [
  {
    name: "ChatWithBooks | Conversational Book Assistant App",
    description:
      "ChatWithBooks is a React Native mobile application that allows users to interact and chat with books. Using AI-powered conversational interfaces, users can ask questions, explore summaries, and engage with the content of books in an intuitive chat format.",
    link: "https://play.google.com/store/apps/details?id=com.chatwithbooks&hl=en_IN",
    category: "App",
    image: ChatWithBooks,
  },
  {
    name: "Digital Growth & Marketing Consultant Optiminder | AI-Driven Strategies",
    description:
      "I specialize in helping businesses scale smarter and faster by combining data-driven insights, creative problem-solving, and commercial strategy.",
    link: "https://app.optiminder.com/",
    category: "Web",
    image: SEO,
  },
  {
    name: "Ayurveda Home Health | E-commerce Website",
    description:
      "An online Ayurvedic products e-commerce store built using SvelteKit for fast and scalable front-end experience.",
    link: "https://ayurvedahomehealth.vercel.app/",
    category: "Web",
    image: AYURVEDAHOME,
  },
  {
    name: "Yoga Waikiki Beach | E-commerce Website",
    description:
      "Yoga Waikiki Beach Online & in-person classes for all levels, blending relaxation, fitness, and mindfulness.",
    link: "https://yogawaikikibeach-development.vercel.app/",
    category: "Web",
    image: Yoga,
  },
  {
    name: "Fusion Finance",
    description:
      "Collaborated on the design and deployment of the Fusion Finance website, a financial services platform.",
    link: "https://fusion-finance.com",
    category: "Web",
    image: Fusion,
  },
  {
    name: "NewThinking | AI Solutions",
    description:
      "Generative Chatbots, Conversational AI, Phone Assistants, Audio Visualizers. Built with React.js.",
    link: "https://newthinking.ai/",
    category: "Web",
    image: newthinking,
  },
  {
    name: "Dopex | Acumatica Page",
    description:
      "A responsive landing page built for Dopex, showcasing Acumatica solutions with a modern design and optimized user experience. Developed using Next.js and Tailwind CSS.",
    link: "https://www.dopex.co",
    category: "Web",
    image: DopexAcumatica,
  },
  {
    name: "Mirar AI | Chatbot & Admin Panel",
    description:
      "Mirar AI is an advanced conversational AI application tailored to significantly enhance user engagement.",
    link: "https://www.mirar.ai/",
    category: "Web",
    image: mirarAi,
  },
  {
    name: "Hack-a-thons Games | AI Solutions",
    description:
      "A gamified hackathon quiz platform where teams log in, get random questions, and must give correct prompts/answers to progress. Built using Next.js, deployed on Vercel.",
    link: "https://hack-a-thons-game.vercel.app/",
    category: "Web",
    image: HackAThonGame,
  },
  {
    name: "In10tional | Meditation & Mindfulness App",
    description:
      "A cross-platform meditation app built for iOS and Android, offering curated meditation music across multiple categories. Features include personalized playlists, morning push notification reminders, and a calming user interface for daily mindfulness practice.",
    link: "https://apps.apple.com/in/app/the-in10tional-life/id6747878614",
    category: "App",
    image: in10tional,
  },
];


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

         {projectsData?.map((project, index) => (
            <Col key={index} md={4} className="project-card">
              <ProjectCard
                imgPath={project.image}
                isBlog={false}
                title={project.name}
                description={project.description}
                ghLink="#"
                demoLink={project.link}
              />
            </Col>
          ))}

       
    
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
