import './SectionStyles.css'

function Conferences() {
  const presentations = []

  // No conferences or presentations to display at this time

  return (
    <div className="section">
      <h2>Conferences & Presentations</h2>
      <div className="presentations-list">
        {presentations.length === 0 ? (
          <p>No conferences or presentations to display at this time.</p>
        ) : (
          presentations.map((presentation) => (
            <div key={presentation.id} className="presentation-item">
              <div className="presentation-header">
                <div>
                  <h3>{presentation.title}</h3>
                  <span className="type-badge">{presentation.type}</span>
                </div>
                <span className="date">{presentation.date}</span>
              </div>
              <p className="event"><strong>{presentation.event}</strong> • {presentation.location}</p>
              <p className="description">{presentation.description}</p>
              <a href={presentation.link} target="_blank" rel="noopener noreferrer" className="presentation-link">
                View Details →
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Conferences
