import './Style.css';
import { Container } from "./styles";

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      logo: "./Images/wimtech.jpg",
      degree: "Intern Web Developer",
      school: "Wimtech",
      period: "05-2024 (2 months)",
      description: "Développement d'une application web éducative permettant aux professeurs de gérer des cours, des examens et des résultats. Création et gestion des cours, modules et leçons, incluant la possibilité pour les professeurs de modifier, supprimer, et gérer les contenus éducatifs, ainsi que la vue des étudiants pour consulter et suivre les cours.",
      technologies: "Technologies utilisées: Angular.js"
    },
    {
        id: 2,
        logo: "./Images/el_hamami.jpg", 
        degree: "Intern Full Stack Developer",
        school: "Entreprise EL Hamami",
        period: "06-2021 (2 months)",
        description: "Conception et réalisation des projets 'rentalcars'. Création d'une application de bureau de location de voitures avec toutes les fonctionnalités.",
        technologies: "Technologies utilisées: C#, .NET, Entity Framework."
      }
  ];

  return (
    <Container id="Experience">
      <div className="experience-container">
        <h1 className="experience-title">
          Expériences Professionnelles
        </h1>
        <div className="experience-section">
          <h2>Experience</h2>
          <div className="experience-cards">
            {experienceData.map(item => (
              <div key={item.id} className="experience-card">
                <div className="card-header">
                  <div className="logo-container">
                    <img src={item.logo} alt={item.school} className="school-logo" />
                  </div>
                  <div className="header-content">
                    <h3>{item.degree}</h3>
                    <span className="period">{item.period}</span>
                  </div>
                </div>
                <p className="description">{item.description}</p>
                {item.technologies && <p className="description">{item.technologies}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Experience; 