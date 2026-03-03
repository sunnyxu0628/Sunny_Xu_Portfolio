import { useState } from 'react'
import './SectionStyles.css'
import wblCover from '../../assets/Projects/Cover-WorkBasedLearningDashboard.png'
import perkinsCover from '../../assets/Projects/Cover-PerkinsCoreIndicatorsDashboard.png'
import scraperCover from '../../assets/Projects/Cover-PerkinsWebscraper.png'
import clnaCover from '../../assets/Projects/Cover-CLNAWebsite.png'
import chinaCover from '../../assets/Projects/Cover-Predicting Household Poverty in China.png'
import affirmativeCover from '../../assets/Projects/Cover-Affirmative Action Ban Analysis.png'
import chinaPaper from '../../assets/Projects/Predicting Household Poverty in China.pdf'
import affirmativePaper from '../../assets/Projects/Affirmative Action Ban Analysis.pdf'

function Projects() {
  const [expandedIds, setExpandedIds] = useState([])

  const toggleExpand = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  const getSummary = (text) => {
    if (!text) return ''
    const firstSentence = text.split('. ')[0]
    return firstSentence.endsWith('.') ? firstSentence : `${firstSentence}.`
  }

  const projects = [
    {
      id: 1,
      title: 'Work Based Learning Dashboard',
      description:
        'Interactive dashboard visualizing student WBL experiences and comparing outcomes between WBL and non-WBL participants to demonstrate program effectiveness.',
      technologies: ['Power BI', 'Data Analysis', 'Data Visualization'],
      impact:
        'Enabled colleges to measure and communicate WBL program effectiveness and make evidence-based decisions on expanding WBL components.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiYWE0Y2ZjNDAtNDg2Mi00NDFmLTk1YTItOWZhODZmZGQwMzg5IiwidCI6IjA0MGM2MDMxLTNhYmItNDgzNS1iMzBjLTlkODg5NTViNGM2OSIsImMiOjZ9',
      linkLabel: 'Open dashboard',
      insightsLink: 'https://www.sdccd.edu/docs/ISPT/workforce/docs/MiramarCollege2024%E2%80%9325WBLHighlights.pdf',
      insightsLabel: 'Sample insights',
      image: wblCover,
    },
    {
      id: 2,
      title: 'Perkins Core Indicators Dashboard',
      description:
        'Interactive dashboard tracking Perkins V performance metrics disaggregated by demographic groups and program area.',
      technologies: ['Power BI', 'Python', 'Data Visualization'],
      impact:
        'Enabled colleges to easily track and report on Perkins V performance metrics to inform program improvement efforts.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiMWI3N2Q4ZjMtNzJmZi00MDZhLTg5YTAtNWY4NThhOWRlOGZiIiwidCI6IjA0MGM2MDMxLTNhYmItNDgzNS1iMzBjLTlkODg5NTViNGM2OSIsImMiOjZ9',
      linkLabel: 'Open dashboard',
      image: perkinsCover,
    },
    {
      id: 3,
      title: 'Perkins Core Indicators Web Scraper',
      description:
        'Python automation tool that processes 700+ Perkins report files, reducing manual workflow time by 98%.',
      technologies: ['Python', 'Web Scraping', 'GitHub'],
      impact:
        'Reduced a 7+ hour manual workflow to a background process, cutting hands-on reporting time by ~98%.',
      link: 'https://github.com/sunnyxu0628/PerkinsReportScraper',
      linkLabel: 'GitHub repo',
      image: scraperCover,
    },
    {
      id: 4,
      title: 'Perkins V Comprehensive Local Needs Assessment Website',
      description:
        'Web-based platform streamlining the CLNA process by gathering and analyzing data to evaluate CTE effectiveness.',
      technologies: ['Web Development', 'Data Visualization', 'User Experience Design'],
      impact:
        'Streamlined the CLNA process for colleges to make data-informed decisions on CTE programs and resource allocation.',
      link: 'https://gamma.app/docs/San-Diego-Community-College-District--np3iflrv5yt918m',
      linkLabel: 'Open site',
      image: clnaCover,
    },
    {
      id: 5,
      title: 'Predicting Household Poverty in China',
      description:
        'Machine learning project predicting poverty levels across 260 counties using geospatial analysis and Python, achieving 87.4% model accuracy.',
      technologies: ['ArcGIS', 'Python', 'Machine Learning'],
      impact:
        'Increased model accuracy from 0.794 to 0.874 through cross-validation and feature selection.',
      link: chinaPaper,
      linkLabel: 'View presentation',
      image: chinaCover,
    },
    {
      id: 6,
      title: 'Affirmative Action Ban Analysis',
      description:
        'Econometric analysis examining the impact of affirmative action bans on enrollment and graduation rates across 763 institutions.',
      technologies: ['R', 'Stata','Econometrics'],
      impact:
        'Cleaned and analyzed panel data from 763 institutions to inform policy discussions.',
      link: affirmativePaper,
      linkLabel: 'View paper',
      image: affirmativeCover,
    },
  ]

  return (
    <div className="section">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => {
          const isExpanded = expandedIds.includes(project.id)

          return (
            <div key={project.id} className="project-card">
              {project.image && (
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
              )}
              <div className="project-content">
                <h3>{project.title}</h3>
                {!isExpanded && <p className="project-summary">{getSummary(project.description)}</p>}
                <div className="technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>

                <button
                  type="button"
                  className={isExpanded ? 'project-toggle expanded' : 'project-toggle'}
                  onClick={() => toggleExpand(project.id)}
                >
                  {isExpanded ? 'Hide details' : 'View details'}
                </button>

                {isExpanded && (
                  <div className="project-details">
                    <p className="project-description">{project.description}</p>
                    <p className="impact"><strong>Impact:</strong> {project.impact}</p>
                    <div className="project-links">
                      {project.link && project.link !== '#' && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                          {project.linkLabel || 'Open resource'} →
                        </a>
                      )}
                      {project.insightsLink && (
                        <a
                          href={project.insightsLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link secondary"
                        >
                          {project.insightsLabel || 'Insights'} →
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
