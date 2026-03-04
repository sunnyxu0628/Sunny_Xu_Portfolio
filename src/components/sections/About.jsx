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
          I am a data‑driven professional specializing in workforce and Career Technical Education (CTE) analytics, with 5 years of experience in data analysis. I hold a Master of Public Policy from UC San Diego and earned a B.S. in Applied Mathematics and a B.A. in Economics–Public Policy, which provide a strong quantitative and policy foundation.
        </p>

        <p>
          I integrate education and labor market datasets to build analytical tools that inform strategy, improve reporting systems, and support evidence‑based decision‑making. My work focuses on transforming complex data into clear, actionable insights tailored to diverse audiences.
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
