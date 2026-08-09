import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowRight, Award, BarChart3, BriefcaseBusiness, CheckCircle2,
  ChevronDown, ExternalLink, FileText, GraduationCap, Mail,
  Menu, Phone, ServerCog, ShieldCheck, Sparkles, Target, Users, X
} from 'lucide-react'
import './styles.css'

const linkedin = 'https://www.linkedin.com/in/gaurav-alfred-gamre-06a42451'
const email = 'mailto:gaurav.gamre77@gmail.com'
const phone = 'tel:+919637194277'

const experience = [
  {
    company: 'TIAA Global Business Services',
    role: 'Associate PMO – IT Asset Management',
    dates: 'April 10, 2023 – Present',
    icon: ServerCog,
    bullets: [
      'Lead a team of 4 and act as the single point of contact for stakeholders, vendors, technology/product owners and data center teams.',
      'Manage RITMs, IMAC tickets and change tasks while maintaining accurate asset and model data.',
      'Normalize manually created and ServiceNow-discovered models using HAM Pro content library standards.',
      'Conduct monthly reconciliation between the Finance Book of Records and ServiceNow HAM Pro, resolving discrepancies across CMDB, AMDB, SACM and discovery sources.',
      'Perform physical asset verification and annual book-to-floor and floor-to-book audits; manage end-of-life disposal with Certificates of Destruction.',
      'Generate ServiceNow Reports and Power BI dashboards covering asset lifecycle, chargebacks, inventory flow, network assets and maintenance.',
      'Support technology-risk remediation and establish governance over CMDB and Asset Management for audit compliance and data integrity.',
      'Coordinate data migration and cleansing across CMDB, asset records and workflow histories using reconciliation techniques and automation scripts.'
    ]
  },
  {
    company: 'Wipro Technologies LTD',
    role: 'IT Asset Manager – ITAM & CMDB',
    dates: 'January 19, 2023 – April 6, 2023',
    icon: BriefcaseBusiness,
    bullets: []
  },
  {
    company: 'IBM / Kyndryl LTD',
    role: 'Product Owner – IT Asset Management',
    dates: 'July 30, 2018 – January 18, 2023',
    icon: Target,
    bullets: [
      'Served as primary point of contact for customer and vendor management, ensuring communication and timely issue resolution.',
      'Conducted IBM license audits, identified unused and underutilized entitlements, and implemented reclaim strategies.',
      'Maintained oversight of software entitlements for compliance and contractual alignment.',
      'Presented dashboards and reports covering chargebacks, network assets, inventory flow, maintenance schedules and SLOs.',
      'Designed and streamlined ServiceNow workflows integrating change, problem, release and finance functions.',
      'Drove CMDB reconciliation across AMDB, SACM and customer platforms, including model normalization and CI governance.',
      'Leveraged ServiceNow Discovery to enrich CMDB data and improve dependency mapping, impact analysis and audit readiness.',
      'Supported reconciliation between Finance Book of Records and ServiceNow HAM/SAM, refined SOPs and automated reconciliation scripts.'
    ]
  },
  {
    company: 'Wipro Technologies LTD',
    role: 'Administrator – IT Asset Management',
    dates: 'June 18, 2014 – July 28, 2018',
    icon: Users,
    bullets: [
      'Spearheaded pan-India IT operations and coordinated end-to-end asset management across multiple locations.',
      'Oversaw material receipt, inspection, tagging, database updates and distribution.',
      'Implemented asset lifecycle management through Sapphire, including IMAC tracking and Physical Asset Verification.',
      'Championed IT governance and SLA adherence for incident resolution and operational efficiency.',
      'Developed monthly MIS reports covering SLA dashboards, productivity metrics, incident trends, project progress and vendor performance.',
      'Established and optimized service desk operations, supported team performance and worked with vendors to mitigate risks and prevent escalations.'
    ]
  }
]

const skillGroups = [
  ['IT Asset Management', ['IT Asset Management', 'Asset Lifecycle Management', 'Hardware Asset Management', 'Software Asset Management', 'Asset Governance', 'Asset Reconciliation', 'Physical Asset Verification', 'Asset Disposal']],
  ['ServiceNow', ['ServiceNow', 'HAM Pro', 'SAM', 'ServiceNow Discovery', 'ServiceNow Reports', 'System Administration', 'RITMs', 'IMAC', 'Change Management']],
  ['CMDB', ['CMDB Governance', 'CMDB Reconciliation', 'AMDB', 'SACM', 'Configuration Item Governance', 'Data Normalization', 'Discovery Data', 'Dependency Mapping', 'Impact Analysis']],
  ['Project & Leadership', ['Project Management', 'Product Ownership', 'PMO', 'Stakeholder Management', 'Vendor Management', 'Team Leadership', 'IT Governance', 'SLA Management']],
  ['Reporting & Analytics', ['Power BI', 'Excel Dashboards', 'MIS Reporting', 'Asset Analytics', 'Data Quality Management', 'KPI Reporting']]
]

const certifications = [
  ['Project Management Professional (PMP®)', 'PMI Certified', '2025'],
  ['HAM Implementation Certified', 'ServiceNow', '2025'],
  ['SAM Implementation Certified', 'ServiceNow', '2025'],
  ['Discovery Implementation Certified', 'ServiceNow', '2025'],
  ['Certified System Administrator', 'ServiceNow', '2025'],
  ['ITIL V3 Foundation Certified', 'AXELOS', '2017'],
  ['Certification in Multimedia – Graphic Design & Animation', 'Explora Design Skool', '2013']
]

const awards = [
  ['TIAA', 'Silver Award & Appreciation', 'Recognition for Data Quality Management and Monitoring & Control Phase of Project.'],
  ['TIAA', 'IT Asset Reporting Standard Implementation Award', 'Implementation of a new IT standard for assets reported missing for more than 90 days – August 2025.'],
  ['IBM', 'Blue Thanks Points', 'Managing KPIs for a team of 22 people for over 108+ clients – March 2022.'],
  ['IBM', 'Blue Thanks Points', 'Developing and implementing an Agile D3 Board for the team – July 2022.'],
  ['Wipro', 'Daily Work FLM Dashboard', 'Awarded for designing the dashboard – January 2018.'],
  ['Wipro', 'SLA Management', 'Awarded for managing SLA – December 2017.']
]

const capabilities = [
  'ITAM Leadership', 'CMDB Governance', 'Asset Lifecycle Management',
  'ServiceNow HAM/SAM', 'ServiceNow Discovery', 'Data Reconciliation',
  'IT Governance', 'Audit Readiness', 'Vendor Management',
  'Stakeholder Management', 'Project Management', 'Reporting & Analytics',
  'Risk Remediation', 'Data Quality Management'
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site">
      <header className="nav">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">GG</span>
          <span>Gaurav Gamre</span>
        </a>
        <button className="menu-btn" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {['Home', 'About', 'Experience', 'Skills', 'Certifications', 'Awards', 'Education', 'Contact'].map(item =>
            <a key={item} href={'#' + item.toLowerCase()} onClick={closeMenu}>{item}</a>
          )}
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="pulse" /> ITAM • CMDB • Vendor Management • Cost Optimization </div>
              <h1>Gaurav Alfred<br /><span>Gamre</span></h1>
              <p className="hero-title">ITAM & CMDB Specialist <b>|</b> PMP®</p>
              <p className="hero-lead">12+ Years of Experience in IT Asset & Configuration Management, Operations & Governance, Cost Optimization, Vendor Governance.</p>
              <p className="hero-text">Experienced IT Asset Management professional focused on Asset and CI lifecycle Governance, CMDB & ALM data quality, Asset/CI & Finance Reconciliation, Data Analytics/Reporting, Stakeholder management and project leadership.</p>
              <div className="actions">
                  <a className="btn primary" href="#experience">
    View Experience <ArrowRight size={17} />
  </a>

  <a
    href="/Gaurav-Gamre-Resume.pdf"
    download="Gaurav-Gamre-Resume.pdf"
    className="btn secondary"
  >
    Download Resume
  </a>
</div>
              <div className="hero-contact">
                <a href={email}><Mail size={16} /> gaurav.gamre77@gmail.com</a>
                <a href={phone}><Phone size={16} /> +91 963 719 4277</a>
                <a href={linkedin} target="_blank" rel="noreferrer"><ExternalLink size={16} /> LinkedIn Profile</a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="orb orb-one" />
              <div className="orb orb-two" />
              <div className="dashboard-card">
                <div className="dash-top"><span>PROFESSIONAL PROFILE</span><span className="status">ACTIVE</span></div>
                <div className="dash-title">IT Asset Management<br /><strong>Command Center</strong></div>
                <div className="dash-lines">
                  <div><span>ITAM HAM/SAM </span><i style={{width:'92%'}} /></div>
                  <div><span>Lifecycle Mgm </span><i style={{width:'88%'}} /></div>
                  <div><span>CMDB Mgm </span><i style={{width:'90%'}} /></div>
                  <div><span>FAR Recon </span><i style={{width:'84%'}} /></div>
                </div>
                <div className="dash-foot"><ShieldCheck size={18} /> Data integrity • Governance • Audit readiness</div>
              </div>
            </div>
          </div>
          <a href="#about" className="scroll-cue"><ChevronDown size={18} /> Explore profile</a>
        </section>

        <section id="about" className="section">
          <div className="section-head">
            <span className="section-kicker">01 / PROFILE</span>
            <h2>Enterprise ITAM expertise,<br /><em>built for operational control.</em></h2>
          </div>
          <div className="about-grid">
            <div className="profile-card">
              <div className="icon-box"><ServerCog /></div>
              <h3>IT Asset Management Specialist</h3>
              <p>Experienced across IT Asset Management, CMDB, ServiceNow, HAM/SAM, asset lifecycle management, reconciliation, data quality, reporting, governance, stakeholder management and team leadership.</p>
              <div className="mini-tags"><span>ITAM</span><span>CMDB</span><span>HAM</span><span>SAM</span><span>ServiceNow</span><span>PMP®</span></div>
            </div>
            <div className="about-text">
              <p className="large">Gaurav combines hands-on IT asset operations with governance, analytics and product ownership to improve data accuracy, operational visibility and compliance.</p>
              <div className="feature-list">
                {[
                  ['Asset lifecycle', 'From receipt, tagging and reconciliation through verification and end-of-life disposal.'],
                  ['CMDB governance', 'Reconciliation, normalization, discovery data quality and CI governance.'],
                  ['ServiceNow', 'HAM Pro, SAM, Discovery, reports and workflow integration.'],
                  ['Leadership', 'Stakeholder, vendor and team coordination with PMO and Product Owner experience.']
                ].map(([title, text]) => <div className="feature" key={title}><CheckCircle2 size={19}/><div><strong>{title}</strong><p>{text}</p></div></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="stats-strip">
          <div><strong>11+</strong><span>Years in IT Asset Management</span></div>
          <div><strong>4</strong><span>Team members led at TIAA</span></div>
          <div><strong>108+</strong><span>Clients supported in IBM/Kyndryl experience</span></div>
          <div><strong>22</strong><span>Team members whose KPIs were managed</span></div>
        </section>

        <section id="experience" className="section dark-section">
          <div className="section-head">
            <span className="section-kicker">02 / EXPERIENCE</span>
            <h2>A career shaped by<br /><em>ownership & governance.</em></h2>
          </div>
          <div className="timeline">
            {experience.map((job, idx) => {
              const Icon = job.icon
              return <article className="timeline-item" key={job.company + job.role}>
                <div className="timeline-dot"><Icon size={18}/></div>
                <div className="timeline-meta"><span>0{idx + 1}</span><b>{job.dates}</b></div>
                <div className="timeline-card">
                  <div className="company">{job.company}</div>
                  <h3>{job.role}</h3>
                  {job.bullets.length > 0 && <ul>{job.bullets.map(b => <li key={b}>{b}</li>)}</ul>}
                </div>
              </article>
            })}
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-head">
            <span className="section-kicker">03 / EXPERTISE</span>
            <h2>Capabilities that connect<br /><em>people, process & platform.</em></h2>
          </div>
          <div className="skill-grid">
            {skillGroups.map(([name, skills], i) => <div className="skill-card" key={name}>
              <div className="skill-number">0{i+1}</div>
              <h3>{name}</h3>
              <div className="chips">{skills.map(skill => <span key={skill}>{skill}</span>)}</div>
            </div>)}
          </div>
          <div className="capability-panel">
            <div><span className="section-kicker">CORE CAPABILITIES</span><h3>Professional toolkit</h3></div>
            <div className="capability-cloud">{capabilities.map(c => <span key={c}>{c}</span>)}</div>
          </div>
        </section>

        <section id="certifications" className="section alt">
          <div className="section-head">
            <span className="section-kicker">04 / CREDENTIALS</span>
            <h2>Certifications that reinforce<br /><em>professional practice.</em></h2>
          </div>
          <div className="cert-grid">
            {certifications.map(([name, org, year]) => <div className="cert-card" key={name}>
              <div className="cert-icon"><Award /></div>
              <div><span className="year">{year}</span><h3>{name}</h3><p>{org}</p></div>
            </div>)}
          </div>
        </section>

        <section id="awards" className="section">
          <div className="section-head">
            <span className="section-kicker">05 / RECOGNITION</span>
            <h2>Recognition for<br /><em>measurable contribution.</em></h2>
          </div>
          <div className="awards-grid">
            {awards.map(([org, title, desc]) => <div className="award-card" key={org + title}>
              <span className="award-org">{org}</span><Award size={22}/><h3>{title}</h3><p>{desc}</p>
            </div>)}
          </div>
        </section>

        <section id="education" className="section dark-section education">
          <div className="section-head">
            <span className="section-kicker">06 / EDUCATION</span>
            <h2>Academic foundation.</h2>
          </div>
          <div className="education-list">
            <div><GraduationCap /><div><span>2020</span><h3>Master of Computer Application</h3><p>Faculty – Management · Pune University</p></div></div>
            <div><GraduationCap /><div><span>2013</span><h3>Bachelor in Computer Application</h3><p>Pune University</p></div></div>
            <div><GraduationCap /><div><span>2007</span><h3>S.S.C</h3><p>Sacred Heart Convent · MH State Board</p></div></div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-card">
            <div className="contact-copy">
              <span className="section-kicker">07 / CONTACT</span>
              <h2>Let's <em>connect.</em></h2>
              <p>For professional opportunities, IT Asset Management initiatives, ServiceNow projects, consulting discussions or collaboration, get in touch.</p>
              <div className="contact-links">
                <a href={email}><Mail /> <span><small>Email</small>gaurav.gamre77@gmail.com</span></a>
                <a href={phone}><Phone /> <span><small>Phone</small>+91 963 719 4277</span></a>
                <a href={linkedin} target="_blank" rel="noreferrer"><ExternalLink /> <span><small>LinkedIn</small>View professional profile</span></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div><span className="brand-mark">GG</span><div><strong>Gaurav Alfred Gamre</strong><p>ITAM & CMDB Specialist – PMP®</p></div></div>
        <div className="footer-links"><a href={email}>Email</a><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div>
        <span>© {new Date().getFullYear()} Gaurav Gamre</span>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
