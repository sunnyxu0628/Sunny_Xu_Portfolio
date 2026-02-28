import './SectionStyles.css'

function About() {
  return (
    <div className="section">
      <h2>About Me</h2>
      <div className="section-content">
        <p>
          I am a data-driven professional specializing in workforce and career education analytics. I develop
          dashboards, automate reporting workflows, and collaborate with stakeholders across colleges to
          improve student outcomes and support CTE initiatives.
        </p>
        <p>
          My background includes extensive use of Python for data wrangling, Power BI for visualization, and
          Stata/R for statistical analysis. I also train researchers and institutional partners on data
          tools and interpretation.
        </p>
        <h3>Key Skills</h3>
        <ul className="skills-list">
          <li>Data Visualization (Power BI)</li>
          <li>Statistical Analysis (Stata, R, Python, SQL)</li>
          <li>GIS & Spatial Data (QGIS, ArcGIS)</li>
          <li>Python Automation & Scripting</li>
          <li>Workforce / CTE Data Integration</li>
        </ul>
        <p>
          Outside of work I enjoy tackling data challenges, learning new tools, and contributing to research
          projects that have real-world impact.
        </p>
      </div>
    </div>
  )
}

export default About
