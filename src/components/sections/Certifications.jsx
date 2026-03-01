import './SectionStyles.css'

function Certifications() {
  const certifications = [
    { 
      id: 7, 
      title: 'The IRPE Summer-to-Summer Institute', 
      issuer: 'Research & Planning Group (RP Group)', 
      date: '2024',
      attachment: '/src/assets/Certifications/Summer-to-Summer Institute_Qingai Xu.pdf',
      link: 'https://www.rpgroup.org/summer-to-summer-institute'
    },
    { 
      id: 3, 
      title: 'Policy Design and Evaluation Lab (PDEL) Certificate', 
      issuer: 'UC San Diego, School of Global Policy and Strategy', 
      date: '2023',
      attachment: '/src/assets/Certifications/POLICY DESIGN & EVALUATION LAB.pdf',
      link: 'https://pdel.ucsd.edu/about/index.html'
    },
    { 
      id: 4, 
      title: 'Quantitative Certificate', 
      issuer: 'UC San Diego, School of Global Policy and Strategy', 
      date: '2023',
      attachment: '/src/assets/Certifications/QUANTITATIVE CERTIFICATE.pdf',
      link: 'https://gps.ucsd.edu/students/academic-opportunities/quantitative-certificate.html#curriculum'
    },
    { 
      id: 5, 
      title: 'Spatial Analysis Certificate', 
      issuer: 'UC San Diego, School of Global Policy and Strategy', 
      date: '2023',
      attachment: '/src/assets/Certifications/SPATIAL ANALYSIS CERTIFICATE.pdf',
      link: 'https://gps.ucsd.edu/students/academic-opportunities/spatial-analysis-certificate.html'
    },
    { 
      id: 6, 
      title: 'Data Management 101 Certificate', 
      issuer: 'UC San Diego, School of Global Policy and Strategy', 
      date: '2023',
      attachment: '/src/assets/Certifications/DATA MANGEMENT 101.pdf'
    },
    { 
      id: 2, 
      title: 'Introduction to Python Certificate', 
      issuer: 'UC San Diego', 
      date: '2023',
      attachment: '/src/assets/Certifications/INTRODUCTION TO PYTHON.pdf'
    },
    { 
      id: 1, 
      title: 'Introduction to R Certificate', 
      issuer: 'UC San Diego', 
      date: '2023',
      attachment: '/src/assets/Certifications/INTRODUCTION TO R.pdf'
    },
  ]

  return (
    <div className="section">
      <h2>Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert) => (
          <div key={cert.id} className="cert-card">
            <div className="cert-info">
              <h3>
                {cert.link ? (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cert-title-link"
                  >
                    {cert.title}
                  </a>
                ) : (
                  cert.title
                )}
              </h3>
              <p className="issuer">{cert.issuer}</p>
              <p className="date">{cert.date}</p>
            </div>
            <div className="cert-actions">
              {cert.attachment && (
                <a 
                  href={cert.attachment} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cert-link"
                >
                  View Certificate
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certifications
