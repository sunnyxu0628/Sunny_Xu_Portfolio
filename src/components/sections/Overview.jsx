import About from './About'
import WorkHistory from './WorkHistory'
import Education from './Education'
import Certifications from './Certifications'
import Projects from './Projects'
import Conferences from './Conferences'

function Overview() {
  return (
    <div className="overview-page">
      <About />
      <WorkHistory />
      <Education />
      <Certifications />
      <Projects />
      <Conferences />
    </div>
  )
}

export default Overview
