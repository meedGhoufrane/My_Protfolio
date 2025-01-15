import './Style.css';
import { Container } from "./styles";



const Education = () => {
  const educationData = [
    {
      id: 1,
      logo: "./Images/kachkat.jpg",
      degree: "Bachelor's in Mathematics & Computer Science",
      school: "Ibn Zohr University",
      period: "2018 - 2019 ",
      description: "Ibn Zohr is a public university located in Agadir, Morocco. It was established in 1989 and is named after the Andalusian scholar Ibn Zohr. The university is actively involved in international collaborations and student exchange programs, preparing its graduates for success in a globalized world."
    },
    {
      id: 2,
      logo: "./Images/OFPPT.webp",
      degree: "Full Stack Developer at OFPPT",
      school: "OFPPT",
      period: "2019 - 2021",
      description: "YouCode is an innovative school specializing in tech professions, created through a partnership between OCP and Simplon. It emphasizes practical, concrete learning and applies agile methods tailored to the IT industry, meeting high standards in pedagogy and training."
    },
    {
      id: 3,
      logo: "./Images/images.jpg",
      degree: "Full Stack Developer at Youcode",
      school: "YouCode",
      period: "2023 - Present",
      description: "YouCode is an innovative school specializing in tech professions, created through a partnership between OCP and Simplon. It emphasizes practical, concrete learning and applies agile methods tailored to the IT industry, meeting high standards in pedagogy and training."
    },
  ];

  return (

    <Container id="Education">
      <div className="education-container">
        <h1 className="education-title">
          Education <span className="title-amp">&</span> Experience
        </h1>

        <div className="education-section">
          <h2>Education</h2>
          <div className="education-cards">
            {educationData.map(item => (
              <div key={item.id} className="education-card">
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

export default Education;