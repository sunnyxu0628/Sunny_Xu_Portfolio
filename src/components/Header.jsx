import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="profile-section">
          <div className="profile-image-container">
            {/*
              Replace the src with your actual profile photo. You can put an image
              in `src/assets/profile.jpg` or use an external URL. */}
            <img 
              src="/src/assets/profile.jpg" 
              alt="Profile" 
              className="profile-image"
            />
          </div>
          <div className="profile-info">
            <h1 className="name">Qingai (Sunny) Xu</h1>
            <p className="title">Workforce Systems Manager & Career Education Research Expert</p>
            <p className="bio">
              Data Storyteller • Data Analysis & Research • Education
            </p>
            <div className="social-links">
              <a href="mailto:sunnyxu0628@outlook.com" title="Email">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/sunnyxu2001/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.637h3.554v1.364c.429-.661 1.196-1.6 2.905-1.6 2.122 0 3.714 1.388 3.714 4.373v5.5zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.955.77-1.715 1.964-1.715 1.193 0 1.924.76 1.944 1.715 0 .953-.75 1.715-1.993 1.715zm1.582 11.597H3.635V9.21h3.284v11.242zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>
              <a href="https://github.com/sunnyxu0628" target="_blank" rel="noopener noreferrer" title="GitHub">
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
