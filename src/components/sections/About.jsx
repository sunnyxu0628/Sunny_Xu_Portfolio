import './SectionStyles.css'

function About() {
  return (
    <div className="section">
      <h2>About Me</h2>
      <div className="section-content">
        <p>
          I am a data-driven professional specializing in workforce and Career Technical Education (CTE) analytics, with 5 years of experience in data analysis. I hold a Master of Public Policy from UC San Diego and earned a B.S. in Applied Mathematics and a B.A. in Economics–Public Policy, which provide a strong quantitative and policy foundation.
        </p>

        <p>
          I integrate education and labor market datasets to build analytical tools that inform strategy, improve reporting systems, and support evidence-based decision-making. My work centers on transforming complex data into clear, actionable insights tailored to diverse audiences. My research interests focus on education-to-workforce transitions and reducing inequality in postsecondary outcomes.
        </p>
        <h3>Key Skills</h3>
        <ul className="skills-list">
          <li>Data Visualization (Power BI)</li>
          <li>Programming Tools (Stata, R, Python, SQL)</li>
          <li>GIS & Spatial Data Analysis(QGIS, ArcGIS)</li>
          <li>Labor Market & Career Technical Education (CTE) Research</li>
        </ul>
      </div>
    </div>
  )
}

export default About
