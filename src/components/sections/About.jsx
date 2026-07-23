import './SectionStyles.css'

function About() {
  const skills = [
    {
      title: 'Data Visualization',
      detail: 'Power BI, Tableau',
    },
    {
      title: 'Programming & Data Tools',
      detail: 'Stata, R, Python, SQL',
    },
    {
      title: 'GIS & Spatial Analysis',
      detail: 'QGIS, ArcGIS',
    },
    {
      title: 'Career Technical Education (CTE) Research',
      detail: 'Program outcomes, labor market analysis',
    },
  ]

  return (
    <div className="section">
      <h2>About Me</h2>
      <div className="section-content">
        <p>
          Researcher and data analyst with 4+ years of experience leading quantitative and qualitative research on career and technical education (CTE) and workforce development.
        </p>

        <p>
          Skilled in designing data collection and analysis strategies, managing cross-functional research teams and projects, and translating findings into clear, actionable recommendations for institutional leadership and non-technical audiences. Proficient in Python, R, SQL, Stata, and Power BI.
        </p>
        <h3>Key Skills</h3>
        <ul className="skills-list">
          {skills.map((skill) => (
            <li key={skill.title}>
              <span className="skill-title">{skill.title}</span>
              <span className="skill-detail">{skill.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default About
