import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/meedGhoufrane/Gestion_de_Biblioth-que" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>BookJar - Digital Library Management Platform</h3>
              <p>Developed a comprehensive digital library management system using React, NestJS, and AWS microservices architecture, enabling users to manage book borrowing, perform advanced searches, and receive automated notifications. The platform leverages AWS Cognito for authentication, DynamoDB/MongoDB for data storage, and implements a complete CI/CD pipeline, resulting in an 80% reduction in loan processing time and supporting 1000+ concurrent users.</p>
            </div>
            <footer>
              <ul className="tech-list">
                {[
                  'React.js',
                  'NestJS',
                  'Cognito',
                  'ECS',
                  'S3',
                  'CI/CD'
                ].map((tech) => (
                  <li
                    key={tech}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                  >
                    {tech}
                  </li>
                ))}              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/CodeVinayak/AI-Chatbot-Assistant" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://ai-chatbot-t8fn.onrender.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>MediaPharm - Application Mobile de Recherche de Pharmacies de Garde</h3>
              <p>
                Developed a comprehensive mobile pharmacy locator using React Native, Expo, and Google Maps API, enabling users to find on-duty pharmacies, access real-time navigation, and view detailed pharmacy information. The platform leverages MongoDB for data storage, implements geolocation services, and features an intuitive UI with advanced search capabilities, supporting thousands of users across multiple hospitals and clinics.              </p>
            </div>
            <footer>
              <ul className="tech-list">
                {[
                  'React Native',
                  'Expo',
                  'Google Maps',
                  'Firebase',
                  'JavaScript',
                ].map((tech) => (
                  <li
                    key={tech}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/meedGhoufrane/EventEase" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://github.com/meedGhoufrane/EventEase" target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SportEvents Manager - Plateforme de Gestion d'Événements Sportifs</h3>
              <p>
                Developed a comprehensive event management system using React.js and Node.js, enabling sports organizations to streamline event registrations and participant management. The solution features Docker containerization, JWT authentication, and MongoDB integration, implementing a secure and scalable architecture for handling multiple sporting events and participants.              </p>
            </div>
            <footer>
              <ul className="tech-list">
                {[
                  'React',
                  'Express/NestJS',
                  'MongoDB',
                  'JWT',
                  'Jest'
                ].map((tech) => (
                  <li
                    key={tech}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/meedGhoufrane/AllomediaDelivery" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://github.com/meedGhoufrane/AllomediaDelivery" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>AlloMedia - Full-Stack Food Delivery Management System</h3>
              <p>Developed a scalable food delivery management system using React and Node.js, featuring:
                Real-time order tracking and notifications using Socket.IO
                Secure multi-role authentication system with JWT
                Advanced restaurant search with geolocation integration
                Restaurant management portal with menu CRUD operations
                Live delivery tracking and status updates
                Comprehensive admin dashboard for platform management
                The platform successfully handles multiple concurrent users while maintaining real-time communication between customers, restaurants, and delivery personnel.</p>            </div>
            <footer>
              <ul className="tech-list">
                <li>ExpressJS</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Mongodb</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/meedGhoufrane/CHRIH" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://github.com/meedGhoufrane/CHRIH" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Chrih Daba</h3>
              <p>
                A comprehensive e-commerce web application built with Laravel Voyager, featuring advanced product management,
                secure payment processing, and an optimized user experience. The platform includes a robust admin dashboard
                for managing products, orders, and users, along with sophisticated customer features like personalized product
                suggestions and streamlined checkout process.   </p>
            </div>
            <footer>
              <ul className="tech-list">
                {['Laravel Voyager', 'PHP', 'HTML', 'CSS', 'JavaScript', 'Blade'].map((tech) => (
                  <li
                    key={tech}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/meedGhoufrane/StaduimStream" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://github.com/meedGhoufrane/StaduimStream" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>StadiumStream</h3>
              <p> A comprehensive online booking system for AFCON 2023™ e-tickets. Features include stadium management,
                match scheduling, real-time ticket availability tracking, and user authentication. Administrators can
                manage national teams, stadiums, and monitor bookings, while spectators can view weekly match schedules
                and book tickets with capacity constraints and time-based restrictions.</p>
            </div>
            <footer>
              <ul className="tech-list">
                {[
                  'HTML5',
                  'CSS3',
                  'JavaScript',
                  'jQuery',
                  'PHP',
                  'MVC',
                  'PDO',
                  'Figma'
                ].map((tech) => (
                  <li
                    key={tech}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


      </div>
    </Container>
  );
}