import './App.css'

function App() {
  return (
    <main>
      <header className="hero">
        <div className="hero-text">
          <h1>Tarini Ullal</h1>
          <p className="tagline">TODO: Add tagline</p>
        </div>
      </header>

      <section className="experience">
        <h2>Experience</h2>
        <div className="entry">
          <div className="entry-header">
            <span className="entry-title">TODO: Company</span>
            <span className="entry-date">Start &ndash; Present</span>
          </div>
          <div className="entry-role">TODO: Role</div>
          <ul className="entry-description">
            <li>TODO: Add accomplishments</li>
          </ul>
        </div>
      </section>

      <section className="education">
        <h2>Education</h2>
        <div className="entry">
          <div className="entry-header">
            <span className="entry-title">TODO: School</span>
          </div>
          <p className="entry-description">TODO: Degree</p>
        </div>
      </section>

      <footer className="links">
        <a href="https://github.com/tariniullal">GitHub</a>
        <span className="separator">&middot;</span>
        <a href="https://linkedin.com/in/tariniullal">LinkedIn</a>
      </footer>
    </main>
  )
}

export default App
