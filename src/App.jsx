import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import About from './components/sections/About'
import WorkHistory from './components/sections/WorkHistory'
import Education from './components/sections/Education'
import Certifications from './components/sections/Certifications'
import Projects from './components/sections/Projects'
import Conferences from './components/sections/Conferences'

function App() {
  const [activeTab, setActiveTab] = useState('about')

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <About />
      case 'work':
        return <WorkHistory />
      case 'education':
        return <Education />
      case 'certifications':
        return <Certifications />
      case 'projects':
        return <Projects />
      case 'conferences':
        return <Conferences />
      default:
        return <About />
    }
  }

  return (
    <div className="app">
      <Header />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="main-content">
        {renderContent()}
      </main>
      <footer className="footer">
        <p>&copy; 2026 Sunny Xu. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
