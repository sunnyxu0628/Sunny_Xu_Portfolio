import './SectionStyles.css'

function About() {
  return (
    <div className="section">
      <h2>About Me</h2>
      <div className="section-content">
        <p>
          I am a <span className="highlight">data‑driven</span> professional specializing in workforce and Career Technical Education (CTE) analytics, with <span className="highlight">5 years</span> of experience in data analysis. I hold a <span className="highlight">Master of Public Policy</span> from UC San Diego and earned a <span className="highlight">B.S. in Applied Mathematics</span> and a <span className="highlight">B.A. in Economics–Public Policy</span>, which provide a strong quantitative and policy foundation.
        </p>

        <p>
          I integrate education and labor market datasets to build analytical tools that inform strategy, improve reporting systems, and support evidence‑based decision‑making. My work focuses on transforming complex data into clear, actionable insights tailored to diverse audiences.
        </p>
        <h3>Key Skills</h3>
        <ul className="skills-list">
          <li>Data Visualization (Power BI)</li>
          <li>Programming Tools (Stata, R, Python, SQL)</li>
          <li>GIS &amp; Spatial Data Analysis (QGIS, ArcGIS)</li>
          <li>Labor Market &amp; Career Technical Education (CTE) Research</li>
        </ul>
      </div>
    </div>
  )
}

export default About
