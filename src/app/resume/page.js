"use client";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const resumeData = {
  summary: {
    name: "Krishnam Mishra",
    title:
      "Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js) with additional expertise in Nest.js.",
    description:
      "I am a dedicated Full Stack Developer (MERN Stack) with hands-on experience building scalable web applications using modern technologies. Passionate about creating efficient, secure, and user-friendly solutions while collaborating with cross-functional teams to solve complex challenges.",
    contact: [
      "Indore, Madhya Pradesh, India",
      "+91 7470727352",
      "krishnammishra1426@gmail.com",
    ],
    linkedin:
      "https://www.linkedin.com/in/krishnam-mishra-5618b5199",
  },

  education: [
    {
      degree: "Bachelor of Engineering (IP)",
      year: "2017 - 2020",
      institute: "Jabalpur Engineering College (JEC)",
      score: "7.65 CGPA",
    },
    {
      degree: "Diploma in Manufacturing Engineering",
      year: "2013 - 2017",
      institute: "Dhar Polytechnic College, Dhar",
      score: "83.5%",
    },
    {
      degree: "High School",
      year: "2012 - 2013",
      institute: "Govt. Pushparaj Boys H.S.School, Govindgarh Rewa",
      score: "77.6%",
    },
  ],

  experience: [
    {
      role: "Full Stack Developer (MERN Stack)",
      year: "May 2024 - Present",
      company: "Steve’s AI Lab Pvt Ltd, Indore",
      tasks: [
        "Utilizing modern JavaScript libraries and frameworks like Node.js, React.js, and Next.js for both front-end and back-end development.",
        "Developing scalable AI-powered applications.",
        "Integrating secure APIs and optimizing application performance.",
      ],
    },
    {
      role: "Full Stack Developer (MERN Stack)",
      year: "Jan 2023 - Feb 2024",
      company: "DreamWorks Software’s, Indore",
      tasks: [
        "Designed and developed web applications using React.js, Nest.js, and MongoDB.",
        "Identified bottlenecks and implemented optimized solutions.",
        "Delivered complex features for consultant service and AI-driven platforms.",
      ],
    },
  ],

  projects: [
    {
      name: "ChatWithBooks | Conversational Book Assistant App",
      description:
        "ChatWithBooks is a React Native mobile application that allows users to interact and chat with books. Using AI-powered conversational interfaces, users can ask questions, explore summaries, and engage with the content of books in an intuitive chat format. The app provides an immersive and personalized reading experience, combining technology with literature to make knowledge discovery simple and engaging.",
         link:"https://play.google.com/store/apps/details?id=com.chatwithbooks&hl=en_IN"
    },
    {
      name: "Digital Growth & Marketing Consultant Optiminder | AI-Driven Strategies",
      description:
        "I specialize in helping businesses scale smarter and faster by combining data-driven insights, creative problem-solving, and commercial strategy. My expertise includes optimizing digital marketing performance, improving conversion rates, and driving measurable growth through AI-enhanced marketing solutions. I focus on simplifying complex challenges, removing operational barriers, and delivering results that matter for sustainable business success.",
      link: "https://app.optiminder.com/",
    },
     {
      name: "Ayurveda Home Health | E-commerce Website",
      description:
        "An online Ayurvedic products e-commerce store built using SvelteKit for fast and scalable front-end experience.",
      link: "https://ayurvedahomehealth.vercel.app/",
    },
    {
      name: "Yoga Waikiki Beach | E-commerce Website",
      description:
        "Yoga Waikiki Beach Online & in-person classes for all levels, blending relaxation, fitness, and mindfulness by the beach or at home",
      link: "https://yogawaikikibeach-development.vercel.app/",
    },
    {
      name: "Fusion Finance",
      description:
        "Collaborated on the design and deployment of the Fusion Finance website, a financial services platform offering mortgage protection, life insurance, income protection, serious illness cover, lump sum investment, and retirement planning. The website emphasizes user-friendly navigation and responsive design to enhance client engagement.",
        link:"fusion-finance.com"
    },
    {
      name: "NewThinking | AI Solutions",
      description:
        "Generative Chatbots, Conversational AI, Phone Assistants, Audio Visualizers. Built with React.js & Nest.js.",
        link:"https://newthinking.ai/"
    },
    {
      name: "Mirar AI | Chatbot & Admin Panel",
      description:
        "Mirar AI is an advanced conversational AI application tailored to significantly enhance user engagement and interaction for influencers and content creators. Leveraging cutting-edge AI technologies, Mirar AI provides personalized and dynamic conversational experiences, allowing influencers to connect with their audience in a more meaningful and interactive manner.",
         link:"https://www.mirar.ai/"
    }, 
    {
      name: "TalaThrive | Consultant Services",
      description:
        "A therapist-consultant platform with paid video call sessions. Built using React.js, Nest.js, MongoDB.",
         link:"https://www.talathrive.com/"
    },
    
  {
      name: "Hack-a-thons Games",
      description:
        "A gamified hackathon quiz platform where teams log in, get random questions, and must give correct prompts/answers to progress. Built using Next.js,  deployed on Vercel.",
      link: "https://hack-a-thons-game.vercel.app/"
    },

    
  ],
};

export default function Resume() {

      useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

  return (
    <main className="main">
      <section id="resume" className="resume section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Resume</h2>
          <p>{resumeData.summary.description}</p>
        </div>

        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <h4>{resumeData.summary.name}</h4>
                <p>
                  <em>{resumeData.summary.title}</em>
                </p>
                <ul>
                  {resumeData.summary.contact.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                  <li>
                    <a
                      href={resumeData.summary.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn Profile
                    </a>
                  </li>
                </ul>
              </div>

              <h3 className="resume-title">Education</h3>
              {resumeData.education.map((edu, i) => (
                <div className="resume-item" key={i}>
                  <h4>{edu.degree}</h4>
                  <h5>{edu.year}</h5>
                  <p>
                    <em>{edu.institute}</em>
                  </p>
                  <p>{edu.score}</p>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="resume-title">Professional Experience</h3>
              {resumeData.experience.map((exp, i) => (
                <div className="resume-item" key={i}>
                  <h4>{exp.role}</h4>
                  <h5>{exp.year}</h5>
                  <p>
                    <em>{exp.company}</em>
                  </p>
                  <ul>
                    {exp.tasks.map((task, j) => (
                      <li key={j}>{task}</li>
                    ))}
                  </ul>
                </div>
              ))}

              <h3 className="resume-title">Projects</h3>
             
{resumeData.projects.map((proj, i) => (
  <div className="resume-item" key={i}>
    <h4>{proj.name}  {proj.link && (
      <span>
        <a href={proj.link} target="_blank" style={{fontSize:"12px"}} rel="noopener noreferrer">
          Visit
        </a>
      </span>
    )}</h4>
    <p>{proj.description}</p>
   
  </div>
))}

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
