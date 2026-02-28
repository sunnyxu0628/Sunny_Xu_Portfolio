import './SectionStyles.css'

function Certifications() {
  const certifications = [
    { id: 1, title: 'Introduction to R Certificate', issuer: 'Online', date: '2023' },
    { id: 2, title: 'Introduction to Python Certificate', issuer: 'Online', date: '2023' },
    { id: 3, title: 'Policy Design and Evaluation Lab (PDEL) Certificate', issuer: 'UCSD', date: '2024' },
    { id: 4, title: 'Quantitative Certificate', issuer: 'UCSD', date: '2022' },
    { id: 5, title: 'Spatial Analysis Certificate', issuer: 'UCSD', date: '2022' },
    { id: 6, title: 'Data Management 101 Certificate', issuer: 'UCSD', date: '2022' },
  ]

  return (
    <div className="section">
      <h2>Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert) => (
          <div key={cert.id} className="cert-card">
            <h3>{cert.title}</h3>
            <p className="issuer">{cert.issuer}</p>
            <p className="date">{cert.date}</p>
            <p className="credential-id">ID: {cert.credentialId}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certifications
