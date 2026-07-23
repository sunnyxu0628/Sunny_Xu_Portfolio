import './SectionStyles.css'
import perkinsSlides from '../../assets/Conferences/Perkins Promising Practices.pdf'
import wblSlides from '../../assets/Conferences/Work-Based Learning Improves Student Outcomes- Replicating Our Methodology.pdf'
import clnaSlides from '../../assets/Conferences/CCCAOE2026_CLNA.pdf'

function Conferences() {
  const presentations = [
    {
      id: 1,
      title: 'Perkins Promising Practices',
      event: 'CCCAOE Fall Conference',
      year: '2024',
      eventLink: 'https://cccaoe.org/fall-conference-2024/',
      description:
        'Co-presented on innovative data practices for Perkins implementation and workforce reporting alongside regional Career Education leaders.',
      collaborators:
        'With Tara Sanders (Contra Costa CCD), Bill Bankhead (Los Medanos College), and Amertah Perman (San Diego CCD)',
      slides: perkinsSlides,
    },
    {
      id: 2,
      title: 'Work-Based Learning Improves Student Outcomes: Replicating Our Methodology',
      event: 'Strengthening Student Success Conference',
      year: '2025',
      eventLink: 'https://www.rpgroup.org/professional-development',
      description:
        'Presented district-level methodology for evaluating work-based learning participation and student outcome improvements using institutional data.',
      collaborators:
        'With Amertah Perman (Dean, Career Education & Workforce Development, SDCCD)',
      slides: wblSlides,
    },
    {
      id: 3,
      title: 'Comprehensive Local Needs Assessment (CLNA)',
      event: 'CCCAOE Conference',
      year: 'April 2026',
      eventLink: 'https://cccaoe.org/',
      description:
        'Presented on CLNA practices and data-informed approaches for evaluating Career Technical Education program needs and regional workforce alignment.',
      collaborators: 'Presented by Qingai (Sunny) Xu',
      slides: clnaSlides,
    },
  ]

  return (
    <div className="section">
      <h2>Conferences & Presentations</h2>
      <div className="presentations-list">
        {presentations.map((presentation) => (
          <div key={presentation.id} className="presentation-item">
            <h3>{presentation.title}</h3>
            <p className="event">
              {presentation.eventLink ? (
                <a
                  href={presentation.eventLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="event-link"
                >
                  <strong>{presentation.event}</strong>
                </a>
              ) : (
                <strong>{presentation.event}</strong>
              )}
              {' '} • {presentation.year}
            </p>
            <p className="description">{presentation.description}</p>
            <p className="collaborators">{presentation.collaborators}</p>
            {presentation.slides && (
              <a
                href={presentation.slides}
                target="_blank"
                rel="noopener noreferrer"
                className="presentation-link"
              >
                View Slides →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Conferences
