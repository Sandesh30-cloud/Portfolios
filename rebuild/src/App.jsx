import SplashCursor from './components/SplashCursor.tsx';
import Folder from './components/Folder.jsx';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
];

const projects = [
  {
    title: 'Mentor Mind',
    summary: 'AI-powered Learning Management System for personalized course creation and delivery.',
    points: [
      'Built a scalable full-stack architecture for course delivery and management.',
      'Integrated Gemini API to generate course content, assessments, and concise summaries dynamically.'
    ],
    stack: ['Next.js', 'React', 'Tailwind', 'Inngest', 'Clerk', 'Neon', 'Gemini', 'SaaS LMS'],
    link: 'https://github.com/Sandesh30-cloud/mentor-mind'
  },
  {
    title: 'Matsyavan - Research & Development',
    summary: 'Offline-first aquaculture monitoring platform with IoT and edge ML.',
    points: [
      'Developed real-time monitoring with IoT sensors, local storage, and dashboard visualization.',
      'Prototyped stereo vision-based fish-length estimation using OpenCV with calibrated dual cameras; transitioned to AprilTag-based measurement to reduce calibration overhead and improve edge inference efficiency.',
      'Integrated RNN-based temporal analysis and prediction pipeline.',
      'Deployed Raspberry Pi Zero 2W + ESP32 for edge processing and Raspberry Pi 4 for aggregation.'
    ],
    stack: ['Python', 'TypeScript', 'Tailwind CSS', 'OpenCV', 'ML', 'IoT'],
    link: ''
  }
];

const getStackPapers = (stack) => {
  const bucketSize = Math.ceil(stack.length / 3);
  const papers = [];
  for (let i = 0; i < 3; i += 1) {
    const slice = stack.slice(i * bucketSize, (i + 1) * bucketSize);
    papers.push(
      <div className="folder-paper-content" key={`stack-paper-${i}`}>
        <span>{slice.join(' • ') || 'Tech Stack'}</span>
      </div>
    );
  }
  return papers;
};

const experience = {
  role: 'Web Development Intern',
  org: 'Prodigy Infotech',
  period: '2024',
  points: [
    'Developed and deployed interactive web pages using HTML, CSS, and JavaScript.',
    'Implemented responsive front-end designs with cross-browser compatibility and performance optimization.',
    'Integrated APIs for dynamic content rendering and better user experience.'
  ]
};

const aboutPoints = [
  'Computer Engineering student at the University of Mumbai (CGPA 7.32).',
  'Focused on product-oriented web apps, ML pipelines, and IoT edge systems.',
  'Enjoys building practical systems from architecture to deployment.'
];

const missionStats = [
  { label: 'Base', value: 'Mumbai, India' },
  { label: 'Track', value: 'B.E. Computer Engineering' },
  { label: 'Graduation', value: 'May 2026' },
  { label: 'Current Role', value: 'Available for Opportunities' }
];

const skills = {
  Languages: ['Python', 'SQL', 'JavaScript', 'TypeScript', 'C', 'R', 'Go (Learning)'],
  'ML / Data': [
    'NumPy',
    'Pandas',
    'Scikit-learn',
    'TensorFlow',
    'Keras',
    'EDA',
    'Feature Engineering',
    'Model Evaluation'
  ],
  Tools: ['Git', 'Docker', 'Linux', 'VS Code', 'Cursor', 'Postman', 'Jupyter Notebook', 'Jupyter Lab', 'Streamlit', 'Power BI'],
  Backend: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Docker', 'Git'],
  IoT: ['Raspberry Pi', 'ESP32', 'Sensor Integration', 'Edge Processing']
};

const certifications = [
  {
    title: 'IBM Data Fundamentals Certification',
    url: 'https://www.credly.com/badges/f7e75bd6-6637-47cd-aa5e-5e5d69e95a7f/public_url'
  },
  {
    title: 'Udemy: Data Science, Machine Learning & NLP Certification',
    url: 'https://drive.google.com/file/d/1gtZpcRn3dU-GtpBEXPmBgyDhLbpURIQx/view?usp=sharing'
  }
];

const profiles = [
  {
    label: 'GitHub',
    url: 'https://github.com/Sandesh30-cloud',
    handle: '@Sandesh30-cloud',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.4.7-4.1-1.5-4.1-1.5-.5-1.3-1.3-1.6-1.3-1.6-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6A4.7 4.7 0 0 1 6.5 8a4.3 4.3 0 0 1 .1-3.2s1-.3 3.4 1.2a11.7 11.7 0 0 1 6.2 0c2.4-1.5 3.4-1.2 3.4-1.2a4.3 4.3 0 0 1 .1 3.2 4.7 4.7 0 0 1 1.2 3.3c0 4.7-2.9 5.7-5.6 6 .4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
      </svg>
    )
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/sandesh-yesane-644396259/',
    handle: 'sandesh-yesane-644396259',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3V9Zm7 0h3.8v1.6h.1c.5-1 1.8-2 3.7-2C21 8.6 21 10.9 21 14v7h-4v-6.2c0-1.5 0-3.3-2-3.3s-2.3 1.6-2.3 3.2V21H10V9Z" />
      </svg>
    )
  },
  {
    label: 'LeetCode',
    url: 'https://leetcode.com/u/Lazy_Coder04/',
    handle: 'Lazy_Coder04',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.8 3.4a1 1 0 1 1 1.4 1.4L8.9 12l7.3 7.2a1 1 0 0 1-1.4 1.4L6.8 12l8-8.6ZM11 12a1 1 0 0 1 1-1h6.5a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1Z" />
      </svg>
    )
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/sandesh._04',
    handle: '@sandesh._04',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm11.2 1.5a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      </svg>
    )
  }
];

const App = () => {
  return (
    <div className="app-shell">
      <SplashCursor />

      <div className="container">
        <header className="topbar card">
          <div className="brand">SANDESH YESANE</div>
          <nav className="topnav">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="top-cta" href="mailto:sandeshyesane996@gmail.com">
            Reach Out
          </a>
        </header>

        <section className="hero-block" id="about">
          <article className="hero-main card">
            <p className="eyebrow">Full Stack Developer and ML Enthusiast</p>
            <h1>Building intelligent products with web, data, and edge systems.</h1>
            <p>
              I design and ship practical software, from AI-powered learning workflows to real-time IoT monitoring
              platforms.
            </p>
            <div className="hero-actions">
              <a
                href="https://drive.google.com/file/d/1ugyEXA9YyzVMnekpA3vHjv9vAb6E49jq/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Download Resume
              </a>
              <a href="mailto:sandeshyesane996@gmail.com" className="btn">
                Email Me
              </a>
              <a href="tel:+919321451240" className="btn">
                +91 9321451240
              </a>
            </div>
          </article>

          <aside className="mission-panel card">
            <h2>Mission Snapshot</h2>
            <div className="stat-grid">
              {missionStats.map((item) => (
                <div key={item.label} className="stat-cell">
                  <p>{item.label}</p>
                  <h3>{item.value}</h3>
                </div>
              ))}
            </div>
            <div className="about-lines">
              {aboutPoints.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </aside>
        </section>

        <section className="card section" id="projects">
          <div className="section-head">
            <h2>Featured Projects</h2>
            <span>Core systems with measurable impact</span>
          </div>
          <div className="project-folder-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-folder-card">
                <div className="project-folder-visual">
                  <Folder
                    color="#7b9dff"
                    size={1.15}
                    items={getStackPapers(project.stack)}
                  />
                </div>
                <div className="project-folder-body">
                  <div className="project-top">
                    <h3>{project.title}</h3>
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noreferrer">
                        Source
                      </a>
                    ) : (
                      <span>Private</span>
                    )}
                  </div>
                  <p>{project.summary}</p>
                  <ul>
                    {project.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <div className="chip-row">
                    {project.stack.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="split-row" id="experience">
          <article className="card section">
            <div className="section-head">
              <h2>Experience</h2>
              <span>{experience.period}</span>
            </div>
            <h3>
              {experience.role} · {experience.org}
            </h3>
            <ul>
              {experience.points.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card section">
            <div className="section-head">
              <h2>Certifications</h2>
            </div>
            <div className="link-list">
              {certifications.map((item) => (
                <a key={item.title} href={item.url} target="_blank" rel="noreferrer" className="link-pill">
                  {item.title}
                </a>
              ))}
            </div>
          </article>
        </section>

        <section className="card section" id="skills">
          <div className="section-head">
            <h2>Technical Skills</h2>
            <span>Production stack and tools</span>
          </div>
          <div className="skills-grid">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="skill-group">
                <h3>{group}</h3>
                <div className="chip-row">
                  {items.map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="card section" id="contact">
          <div className="section-head">
            <h2>Connect</h2>
            <span>Profiles and direct contact</span>
          </div>
          <div className="connect-grid">
            {profiles.map((item) => (
              <a key={item.label} href={item.url} target="_blank" rel="noreferrer" className="connect-card">
                <span className="connect-icon">{item.icon}</span>
                <span className="connect-text">
                  <strong>{item.label}</strong>
                  <small>{item.handle}</small>
                </span>
              </a>
            ))}
            <a href="mailto:sandeshyesane996@gmail.com" className="connect-card">
              <span className="connect-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11Zm2 .3v.2l7 4.6 7-4.6v-.2a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5Zm14 2.6-6.4 4.2a1 1 0 0 1-1.2 0L5 9.4v8.1c0 .3.2.5.5.5h13c.3 0 .5-.2.5-.5V9.4Z" />
                </svg>
              </span>
              <span className="connect-text">
                <strong>Email</strong>
                <small>sandeshyesane996@gmail.com</small>
              </span>
            </a>
            <a href="tel:+919321451240" className="connect-card">
              <span className="connect-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.6 2.5a1 1 0 0 1 1 .7l1.2 4.1a1 1 0 0 1-.3 1l-2 1.6a14.8 14.8 0 0 0 7.6 7.6l1.6-2a1 1 0 0 1 1-.3l4.1 1.2a1 1 0 0 1 .7 1v3a1 1 0 0 1-.9 1 18.2 18.2 0 0 1-8.1-2 19.4 19.4 0 0 1-6-4.8 19.4 19.4 0 0 1-4.8-6 18.2 18.2 0 0 1-2-8.1 1 1 0 0 1 1-.9h3Z" />
                </svg>
              </span>
              <span className="connect-text">
                <strong>Phone</strong>
                <small>+91 9321451240</small>
              </span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
