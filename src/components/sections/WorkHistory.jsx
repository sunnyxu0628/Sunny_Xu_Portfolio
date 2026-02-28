import './SectionStyles.css'

function WorkHistory() {
  const workExperience = [
    {
      id: 1,
      title: 'Workforce Systems Manager',
      company: 'San Diego Community College District (SDCCD)',
      duration: 'July 2025 – Present',
      location: 'San Diego, CA',
      description:
        'Lead integration of workforce and career education data, research, tools, and platforms into the District Educational Services infrastructure to support CTE and Workforce Development initiatives and compliance requirements.',
      achievements: [
        'Maintain districtwide CTE data products and conduct analyses to inform leadership decision-making',
        'Train stakeholders on interpreting dashboards and research findings',
        'Manage one CTE Project Analyst and train four CTE Research Experts',
        'Serve as district point of contact for regional data requests',
      ],
    },
    {
      id: 2,
      title: 'Professional Expert 13',
      company: 'San Diego Community College District (SDCCD)',
      duration: 'September 2024 – July 2025',
      location: 'San Diego, CA',
      description:
        'Developed and maintained Power BI dashboards and automated data reporting workflows for CTE programs.',
      achievements: [
        'Built 8+ Power BI dashboards for Perkins V, Work‑Based Learning, and CTE programs',
        'Conducted SOC coding audit for 490 CTE programs and updated codes',
        'Automated regional & federal data reporting using Python',
        'Produced labor market reports using Lightcast and Handshake',
        'Participated in IRB review process as a reviewer',
      ],
    },
    {
      id: 3,
      title: 'Career and Technical Education (CTE) Research Expert',
      company: 'San Diego & Imperial Center of Excellence (COE)',
      duration: 'October 2023 – June 2025',
      location: 'San Diego, CA',
      description:
        'Led CTE research initiatives, developed dashboards, and provided training across community colleges.',
      achievements: [
        'Created dashboards highlighting CTE programs, labor market information, and workforce equity',
        'Cleaned and visualized large-scale enrollment and outcome data using Python',
        'Designed Python training sessions for 30 researchers at 10 community colleges',
      ],
    },
    {
      id: 4,
      title: 'Contract Researcher',
      company: 'San Diego & Imperial Center of Excellence (COE)',
      duration: 'April 2023 – June 2023',
      location: 'San Diego, CA',
      description: 'Conducted labor market research and prepared data for regional databases.',
      achievements: [
        'Produced local labor market information using R',
        'Compiled and cleaned data for 30,000 college programs for the Strong Workforce Program database',
      ],
    },
    {
      id: 5,
      title: 'Graduate Research Assistant / Staff Research Associate',
      company: 'UC San Diego, School of Global Policy and Strategy',
      duration: 'April 2023 – January 2024',
      location: 'San Diego, CA',
      description: 'Managed and automated data collection and transformation projects.',
      achievements: [
        'Cleaned and transformed demographics & wage data for 200,000 UC professors using Stata',
        'Automated publication & citation data collection in Python, improving efficiency by 99%',
      ],
    },
    {
      id: 6,
      title: 'Data Analysis Intern, Education Policy Team',
      company: 'American Enterprise Institute (AEI)',
      duration: 'June 2022 – August 2022',
      location: 'Washington, DC',
      description: 'Support data analysis and research for education policy projects.',
      achievements: [
        'Applied NLP algorithms to analyze Twitter follower demographics',
        'Conducted web scraping and spatial analysis with Python and QGIS',
      ],
    },
  ]

  return (
    <div className="section">
      <h2>Work History</h2>
      <div className="timeline">
        {workExperience.map((job) => (
          <div key={job.id} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>{job.title}</h3>
              <p className="company">{job.company}</p>
              <p className="meta">{job.duration} • {job.location}</p>
              <p className="description">{job.description}</p>
              <ul className="achievements">
                {job.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkHistory
