import './SectionStyles.css'

function Education() {
  const education = [
    {
      id: 1,
      degree: 'Master of Public Policy',
      school: 'UC San Diego, School of Global Policy and Strategy',
      year: '2023',
      location: 'San Diego, CA',
      highlights: [
        "Dean's Fellow",
        'Coursework: Big Data Analytics, Applied Data Analysis and Statistical Decision Making, Data Science Approaches to Spatial Analysis, Education Policy Around the World',
      ],
    },
    {
      id: 2,
      degree: 'Bachelor of Science in Applied Mathematics & Bachelor of Arts in Economics - Public Policy',
      school: 'UC San Diego',
      year: '2022',
      location: 'San Diego, CA',
      highlights: [
        'Honors: Magna Cum Laude (GPA: 3.94/4.0)',
        'Coursework: Introduction to Mathematical Statistics I - II, Applied Data Analysis and Statistical Decision Making',
      ],
    },
  ]

  return (
    <div className="section">
      <h2>Education</h2>
      <div className="education-list">
        {education.map((edu) => (
          <div key={edu.id} className="education-item">
            <div className="education-header">
              <h3>{edu.degree}</h3>
              <span className="year">{edu.year}</span>
            </div>
            <p className="school">{edu.school}</p>
            <p className="location">{edu.location}</p>
            <ul className="highlights">
              {edu.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
