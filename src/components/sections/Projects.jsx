import './SectionStyles.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Predicting Household Poverty in China',
      description:
        'Geospatial & machine learning project using ArcGIS and Python to predict poverty levels across 260 counties.',
      technologies: ['ArcGIS', 'Python', 'Logistic Regression', 'Random Forest', 'MLP'],
      impact:
        'Increased model accuracy from 0.794 to 0.874 through cross-validation and feature selection.',
      link: '#',
    },
    {
      id: 2,
      title: 'Affirmative Action Ban Analysis',
      description:
        'Investigated impact of bans on minority enrollment and graduation rates using Difference-in-Differences methodology.',
      technologies: ['R', 'Stata'],
      impact:
        'Cleaned and analyzed panel data from 763 institutions to inform policy discussions.',
      link: '#',
    },
    {
      id: 3,
      title: 'Apprenticeship Report Competition',
      description:
        'Produced a 30-page report on registered apprenticeship development to support strategic decision-making.',
      technologies: ['Research', 'Data Analysis'],
      impact:
        'Identified key insights through secondary research for policy stakeholders.',
      link: '#',
    },
  ]

  return (
    <div className="section">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>
            <p className="impact"><strong>Impact:</strong> {project.impact}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
