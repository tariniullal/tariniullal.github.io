import './App.css'

function App() {
  return (
    <div className="page">
      {/* Gold accent bar at very top */}
      <div className="top-accent-bar" />

      <main>
        {/* ── Hero ── */}
        <header className="hero">
          <div className="hero-inner">
            <div className="hero-text">
              <h1>Tarini Ullal</h1>
              <p className="credentials-line">DVM &middot; MS &middot; DACVIM</p>
              <p className="credentials-board">
                Diplomate, American College of Veterinary Internal Medicine
                <span className="credentials-specialty">(Small Animal Internal Medicine)</span>
              </p>
              <p className="tagline">
                Assistant Professor of Small Animal Internal Medicine &middot;{' '}
                <a href="https://www.vetmed.ucdavis.edu/department-medicine-and-epidemiology">
                  UC Davis School of Veterinary Medicine
                </a>
              </p>
            </div>
          </div>
        </header>

        {/* ── About ── */}
        <section className="section about">
          <h2><span className="section-label">About</span></h2>
          <p className="body-text">
            I am a board-certified small animal internist and faculty member in the Department of
            Medicine and Epidemiology at the UC Davis School of Veterinary Medicine. My research
            focuses on gastroenterology and hepatology, with an emphasis on translational medicine
            — advancing our understanding of diseases in companion animals in ways that inform human
            medicine, and vice versa.
          </p>
          <p className="body-text">
            I am particularly interested in the diagnosis and management of immune-mediated and
            copper-associated chronic hepatitis in dogs, and esophageal and swallowing disorders.
          </p>
        </section>

        {/* ── Publications ── */}
        <section className="section publications">
          <h2><span className="section-label">Selected Publications</span></h2>

          <div className="entry">
            <p className="pub-title">Immune-Mediated Chronic Hepatitis in Dogs</p>
            <p className="pub-meta">
              Ullal T, Shropshire S. <em>Vet Clin North Am Small Anim Pract.</em> 2025 Jul;
              55(4S):e13–e24.
            </p>
          </div>

          <div className="entry">
            <p className="pub-title">
              Rational Approach and Dietary Considerations for Managing Dogs with Swallowing
              Impairment (Dysphagia)
            </p>
            <p className="pub-meta">
              Ullal TV, Marks SL. <em>Advances in Small Animal Care.</em> 2024.
            </p>
          </div>

          <div className="entry">
            <p className="pub-title">
              Evaluating Acidic Gastroesophageal Reflux with Wireless pH Monitoring in French
              Bulldogs with Sliding Hiatal Herniation
            </p>
            <p className="pub-meta">
              Ullal TV, Marks SL, Yang NT, Taylor SL. <em>J Vet Intern Med.</em> 2024 May–Jun;
              38(3):1475–1482.
            </p>
          </div>

          <div className="entry">
            <p className="pub-title">
              Association of Folate Concentrations with Clinical Signs and Laboratory Markers of
              Chronic Enteropathy in Dogs
            </p>
            <p className="pub-meta">
              Ullal TV, Marks SL, Huebner SN, et al. <em>J Vet Intern Med.</em> 2023 Mar;
              37(2):455–464.
            </p>
          </div>

          <div className="entry">
            <p className="pub-title">
              Evaluation of Gastroprotectant Administration in Hospitalized Cats in a Tertiary
              Referral Hospital
            </p>
            <p className="pub-meta">
              Ullal TV, Marks SL, et al. <em>J Feline Med Surg.</em> 2023 Oct; 25(10).
            </p>
          </div>

          <div className="entry">
            <p className="pub-title">
              A Comparative Assessment of the Diagnosis of Swallowing Impairment and
              Gastroesophageal Reflux in Canines and Humans
            </p>
            <p className="pub-meta">
              Ullal TV, Marks SL, Belafsky PC, Conklin JL, Pandolfino JE.{' '}
              <em>Front Vet Sci.</em> 2022; 9:889331.
            </p>
          </div>

          <div className="entry">
            <p className="pub-title">
              High-Resolution Manometric Evaluation of the Effects of Cisapride on the Esophagus
              During Administration of Solid and Liquid Boluses in Awake Healthy Dogs
            </p>
            <p className="pub-meta">
              Ullal TV, Kass PH, Conklin JL, Belafsky PC, Marks SL.{' '}
              <em>Am J Vet Res.</em> 2016 Aug; 77(8):818–827.
            </p>
          </div>

          <p className="pub-more">
            <a href="https://www.researchgate.net/scientific-contributions/Tarini-Ullal-2140245191">
              View all publications on ResearchGate
            </a>
            {' '}&middot;{' '}
            <a href="https://profiles.ucdavis.edu/tarini.ullal">UC Davis Profile</a>
          </p>
        </section>

        {/* ── Positions ── */}
        <section className="section experience">
          <h2><span className="section-label">Positions</span></h2>

          <div className="entry">
            <div className="entry-header">
              <span className="entry-title">UC Davis School of Veterinary Medicine</span>
              <span className="entry-date">2024 &ndash; Present</span>
            </div>
            <div className="entry-role">Assistant Professor, Department of Medicine and Epidemiology</div>
            <ul className="entry-description">
              <li>Small Animal Internal Medicine Service, William R. Pritchard VMTH</li>
              <li>Active clinical trials in megaesophagus and swallowing disorders</li>
              <li>Research in canine chronic hepatitis and GI disease</li>
            </ul>
          </div>

          <div className="entry">
            <div className="entry-header">
              <span className="entry-title">UC Davis School of Veterinary Medicine</span>
              <span className="entry-date">2022 &ndash; 2024</span>
            </div>
            <div className="entry-role">Purina Gastroenterology &amp; Hepatology Fellow</div>
            <p className="entry-description">
              Postdoctoral fellowship focused on clinical and translational research in small animal
              gastroenterology and hepatology, mentored by Dr. Stanley Marks.
            </p>
          </div>

          <div className="entry">
            <div className="entry-header">
              <span className="entry-title">Colorado State University</span>
              <span className="entry-date">2019 &ndash; 2022</span>
            </div>
            <div className="entry-role">
              Resident, Small Animal Internal Medicine — College of Veterinary Medicine &amp; Biomedical Sciences
            </div>
            <ul className="entry-description">
              <li>Three-year clinical residency at the Veterinary Teaching Hospital</li>
              <li>Training in all facets of small animal internal medicine</li>
              <li>Fulfilled requirements for board certification (DACVIM)</li>
            </ul>
          </div>
        </section>

        {/* ── Education & Credentials ── */}
        <section className="section education">
          <h2><span className="section-label">Education &amp; Credentials</span></h2>

          <div className="entry">
            <div className="entry-header">
              <span className="entry-title">
                <span className="degree-badge">DACVIM</span>
                Diplomate, American College of Veterinary Internal Medicine
              </span>
            </div>
            <p className="entry-description">
              Board-certified in Small Animal Internal Medicine
            </p>
          </div>

          <div className="entry">
            <div className="entry-header">
              <span className="entry-title">MS, Veterinary Medicine</span>
              <span className="entry-date">2022 &ndash; 2024</span>
            </div>
            <div className="entry-role">University of California, Davis</div>
            <p className="entry-description">
              Graduate research in small animal gastroenterology and hepatology
            </p>
          </div>

          <div className="entry">
            <div className="entry-header">
              <span className="entry-title">DVM — Doctor of Veterinary Medicine</span>
            </div>
            <div className="entry-role">Colorado State University, College of Veterinary Medicine &amp; Biomedical Sciences</div>
          </div>

          <div className="entry">
            <div className="entry-header">
              <span className="entry-title">BA — Bachelor of Arts</span>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="site-footer">
          <div className="footer-links">
            <a href="https://profiles.ucdavis.edu/tarini.ullal">UC Davis Profile</a>
            <span className="separator">&middot;</span>
            <a href="https://www.researchgate.net/scientific-contributions/Tarini-Ullal-2140245191">ResearchGate</a>
            <span className="separator">&middot;</span>
            <a href="https://linkedin.com/in/tariniullal">LinkedIn</a>
          </div>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Tarini Ullal, DVM, MS, DACVIM
          </p>
        </footer>
      </main>
    </div>
  )
}

export default App
