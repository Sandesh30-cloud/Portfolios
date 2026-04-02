import { useEffect, useRef, useState } from 'react';
const DesktopGlyph = ({ children }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    {children}
  </svg>
);

const APP_ORDER = ['overview', 'projects', 'terminal', 'skills', 'contact'];

const desktopApps = [
  {
    id: 'overview',
    label: 'about you',
    title: 'About You',
    icon: (
      <DesktopGlyph>
        <path
          fill="currentColor"
          d="M12 12.2a4.1 4.1 0 1 0 0-8.2 4.1 4.1 0 0 0 0 8.2Zm0 2.1c-4.1 0-7.5 2.1-7.5 4.7 0 .6.4 1 1 1h13c.6 0 1-.4 1-1 0-2.6-3.4-4.7-7.5-4.7Z"
        />
      </DesktopGlyph>
    )
  },
  {
    id: 'projects',
    label: 'my projects',
    title: 'My Projects',
    icon: (
      <DesktopGlyph>
        <path
          fill="currentColor"
          d="M3.5 6.5A2.5 2.5 0 0 1 6 4h4l2 2h6a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 18 18H6a2.5 2.5 0 0 1-2.5-2.5v-9Z"
        />
      </DesktopGlyph>
    )
  },
  {
    id: 'terminal',
    label: 'experience',
    title: 'Experience',
    icon: (
      <DesktopGlyph>
        <path
          fill="currentColor"
          d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-13Zm3 3.1 2.7 2.2L7 13h2.1l2.2-2.2a1 1 0 0 0 0-1.5L9.1 7H7Zm5.3 5.4h4.2v-1.6h-4.2V14Z"
        />
      </DesktopGlyph>
    )
  },
  {
    id: 'skills',
    label: 'skills',
    title: 'Skills',
    icon: (
      <DesktopGlyph>
        <path
          fill="currentColor"
          d="m20 13.1-1.4-.8c.1-.4.1-.8 0-1.2l1.4-.8a1 1 0 0 0 .4-1.3l-1.1-1.9a1 1 0 0 0-1.3-.4l-1.4.8a6 6 0 0 0-1-.6l-.2-1.6a1 1 0 0 0-1-.9h-2.2a1 1 0 0 0-1 .9L11 6.7c-.3.2-.7.4-1 .6l-1.4-.8a1 1 0 0 0-1.3.4L6.2 8.8a1 1 0 0 0 .4 1.3l1.4.8a4 4 0 0 0 0 1.2l-1.4.8a1 1 0 0 0-.4 1.3l1.1 1.9a1 1 0 0 0 1.3.4l1.4-.8c.3.2.7.4 1 .6l.2 1.6a1 1 0 0 0 1 .9h2.2a1 1 0 0 0 1-.9l.2-1.6c.3-.2.7-.4 1-.6l1.4.8a1 1 0 0 0 1.3-.4l1.1-1.9a1 1 0 0 0-.4-1.3ZM12 14.7A2.7 2.7 0 1 1 12 9a2.7 2.7 0 0 1 0 5.7Z"
        />
      </DesktopGlyph>
    )
  },
  {
    id: 'contact',
    label: 'connect',
    title: 'Connect',
    icon: (
      <DesktopGlyph>
        <path
          fill="currentColor"
          d="M6.2 5.5A2.2 2.2 0 0 1 8.4 4h7.2a2.2 2.2 0 0 1 2.2 1.5l1.8 6a2.2 2.2 0 0 1-.4 2l-4.6 5.7a2.2 2.2 0 0 1-3.4 0l-4.6-5.7a2.2 2.2 0 0 1-.4-2l1.8-6Zm5.8 1.8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
        />
      </DesktopGlyph>
    )
  }
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
    title: 'StockAnalyzer',
    summary:
      'Full-stack stock comparison and analysis platform for evaluating financial data and generating investment insights.',
    points: [
      'Developed a unified platform to compare multiple stocks using real-time pricing, financial statements, and key performance metrics.',
      'Designed interactive dashboards with charts, comparison tables, and investor holding analysis to simplify data-driven decisions.',
      'Implemented a rule-based recommendation engine for short-term and long-term investment insights based on financial indicators.'
    ],
    stack: ['React (TypeScript)', 'Tailwind CSS', 'Flask', 'Python', 'Chart.js', 'Recharts', 'yfinance', 'REST APIs'],
    link: 'https://github.com/Sandesh30-cloud/StockAnalyzer',
    live: 'https://stock-analyzer-snowy-five.vercel.app/'
  },
  {
    title: 'Matsyavan - Industry Sponsored Final Year Project',
    summary: 'Offline-first aquaculture monitoring platform with IoT and edge ML.',
    points: [
      'Developed real-time monitoring with IoT sensors, local storage, and dashboard visualization.',
      'Prototyped stereo vision-based fish-length estimation using OpenCV with calibrated dual cameras; transitioned to AprilTag-based measurement to reduce calibration overhead and improve edge inference efficiency.',
      'Integrated RNN-based temporal analysis and prediction pipeline.',
      'Deployed Raspberry Pi Zero 2W + ESP32 for edge processing and Raspberry Pi 4 for aggregation.'
    ],
    stack: ['Python', 'TypeScript', 'Tailwind CSS', 'OpenCV', 'ML', 'IoT'],
    link: ''
  },
  {
    title: 'Data Analytics & BI Dashboards',
    summary: 'Performed end-to-end data analysis and built interactive dashboards to extract actionable insights.',
    points: [
      'Conducted exploratory data analysis (EDA) and data cleaning using Python (Pandas, NumPy).',
      'Designed interactive Power BI dashboards for KPI monitoring and business reporting.',
      'Transformed raw datasets into structured visual reports to support data-driven decision making.'
    ],
    stack: ['Python', 'Pandas', 'SQL', 'Power BI', 'Data Visualization'],
    link: 'https://github.com/Sandesh30-cloud/Data-Science'
  }
];

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
  { label: 'Host', value: 'kali@portfolio' },
  { label: 'Kernel', value: 'Computer Engineering' },
  { label: 'Location', value: 'Mumbai, India' },
  { label: 'Status', value: 'Available for Opportunities' }
];

const skills = {
  Languages: ['Python', 'SQL', 'JavaScript', 'TypeScript', 'C', 'Go (Learning)'],
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
  Tools: ['Git', 'Docker', 'Linux', 'VS Code', 'Cursor', 'Postman', 'Jupyter Notebook', 'Jupyter Lab', 'Streamlit'],
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
  { label: 'GitHub', url: 'https://github.com/Sandesh30-cloud', handle: '@Sandesh30-cloud' },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/sandesh-yesane-644396259/',
    handle: 'sandesh-yesane-644396259'
  },
  { label: 'LeetCode', url: 'https://leetcode.com/u/Lazy_Coder04/', handle: 'Lazy_Coder04' },
  { label: 'Instagram', url: 'https://www.instagram.com/sandesh._04', handle: '@sandesh._04' }
];

const terminalLines = [
  '$ whoami',
  'sandesh-yesane',
  '$ cat /etc/role',
  'Full Stack Developer and ML Enthusiast',
  '$ ls projects/',
  'mentor-mind  matsyavan',
  '$ grep status /var/profile/state',
  'available_for_opportunities=true',
  '$ cat /usr/share/education.txt',
  'B.E. Computer Engineering · University of Mumbai · Graduation May 2026'
];

const quickFiles = [
  {
    name: 'resume.pdf',
    type: 'PDF document',
    href: 'https://drive.google.com/file/d/1d4Ha8u9K_NHsi8ky5KCvCAEUcIQB-_1R/view?usp=drive_link'
  },
  {
    name: 'linkedin.desktop',
    type: 'Launcher',
    href: 'https://linkedin.com/in/sandesh-yesane-644396259/'
  },
  {
    name: 'github.desktop',
    type: 'Launcher',
    href: 'https://github.com/Sandesh30-cloud'
  }
];

const homeSections = ['Profile', 'Documents', 'Education', 'Links'];

const appMeta = {
  overview: { title: 'about-you.desktop', subtitle: '~/Desktop' },
  projects: { title: 'my-projects.desktop', subtitle: '~/Desktop' },
  terminal: { title: 'experience.desktop', subtitle: '~/Desktop' },
  skills: { title: 'skills.desktop', subtitle: '~/Desktop' },
  contact: { title: 'connect.desktop', subtitle: '~/Desktop' }
};

const initialWindowState = {
  overview: {
    isOpen: true,
    minimized: false,
    maximized: false,
    z: 5,
    bounds: { x: 96, y: 44, width: 860, height: 620 },
    prevBounds: null
  },
  projects: {
    isOpen: false,
    minimized: false,
    maximized: false,
    z: 2,
    bounds: { x: 220, y: 88, width: 920, height: 650 },
    prevBounds: null
  },
  terminal: {
    isOpen: false,
    minimized: false,
    maximized: false,
    z: 3,
    bounds: { x: 280, y: 112, width: 760, height: 560 },
    prevBounds: null
  },
  skills: {
    isOpen: false,
    minimized: false,
    maximized: false,
    z: 2,
    bounds: { x: 180, y: 74, width: 840, height: 600 },
    prevBounds: null
  },
  contact: {
    isOpen: false,
    minimized: false,
    maximized: false,
    z: 2,
    bounds: { x: 250, y: 124, width: 760, height: 520 },
    prevBounds: null
  }
};

const renderOverview = (activeHomeSection, onSelectHomeSection) => (
  <div className="home-layout">
    <aside className="app-sidebar">
      <div className="app-sidebar-head">
        <strong>Home</strong>
        <small>/home/sandesh</small>
      </div>
      <div className="app-nav-list">
        {homeSections.map((section) => (
          <button
            type="button"
            key={section}
            className={`app-nav-item${activeHomeSection === section ? ' active' : ''}`}
            onClick={() => onSelectHomeSection(section)}
          >
            {section}
          </button>
        ))}
      </div>
    </aside>
    <section className="app-main">
      {activeHomeSection === 'Profile' ? (
        <>
          <div className="profile-header">
            <img src="/profile-photo.jpeg" alt="Sandesh Yesane" className="profile-avatar" />
            <div className="profile-copy">
              <p className="terminal-tag">sandesh@kali:~$ neofetch</p>
              <h1>Sandesh Yesane</h1>
              <h2>Full Stack Developer and ML Enthusiast</h2>
              <p>
                Building practical systems across AI products, SaaS workflows, analytics, and IoT edge platforms with a
                strong focus on usable engineering.
              </p>
            </div>
          </div>

          <div className="system-grid">
            {missionStats.map((item) => (
              <div key={item.label} className="system-tile">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>

          <div className="info-block">
            <div className="info-block-head">
              <strong>about.txt</strong>
              <small>read-only</small>
            </div>
            <div className="plain-list">
              {aboutPoints.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </>
      ) : null}

      {activeHomeSection === 'Documents' ? (
        <div className="file-list-block">
          <div className="info-block-head">
            <strong>Documents</strong>
            <small>home directory</small>
          </div>
          <div className="file-table">
            {quickFiles.map((item) => (
              <a key={item.name} href={item.href} target="_blank" rel="noreferrer" className="file-row">
                <span className="file-name">{item.name}</span>
                <span className="file-type">{item.type}</span>
              </a>
            ))}
            <a href="mailto:sandeshyesane996@gmail.com" className="file-row">
              <span className="file-name">mail.contact</span>
              <span className="file-type">Shortcut</span>
            </a>
            <a href="tel:+919321451240" className="file-row">
              <span className="file-name">phone.link</span>
              <span className="file-type">Shortcut</span>
            </a>
          </div>
        </div>
      ) : null}

      {activeHomeSection === 'Education' ? (
        <div className="info-block">
          <div className="info-block-head">
            <strong>education.md</strong>
            <small>academic record</small>
          </div>
          <div className="plain-list">
            <p>B.E. Computer Engineering</p>
            <p>University of Mumbai</p>
            <p>CGPA: 7.32</p>
            <p>Expected graduation: May 2026</p>
          </div>
        </div>
      ) : null}

      {activeHomeSection === 'Links' ? (
        <div className="file-list-block">
          <div className="info-block-head">
            <strong>Links</strong>
            <small>network shortcuts</small>
          </div>
          <div className="file-table">
            {profiles.map((item) => (
              <a key={item.label} href={item.url} target="_blank" rel="noreferrer" className="file-row">
                <span className="file-name">{item.label}</span>
                <span className="file-type">{item.handle}</span>
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  </div>
);

const renderProjects = (selectedProjectTitle, onSelectProject) => {
  const selectedProject = projects.find((project) => project.title === selectedProjectTitle) || projects[0];

  return (
  <div className="explorer-layout">
    <aside className="app-sidebar">
      <div className="app-sidebar-head">
        <strong>Project Explorer</strong>
        <small>/workspace/projects</small>
      </div>
      <div className="app-nav-list">
        {projects.map((project) => (
          <button
            type="button"
            key={project.title}
            className={`app-nav-item${selectedProject.title === project.title ? ' active' : ''}`}
            onClick={() => onSelectProject(project.title)}
          >
            {project.title}
          </button>
        ))}
      </div>
    </aside>
    <section className="app-main">
      <div className="project-entry">
        <div className="project-entry-top">
          <div>
            <strong>{selectedProject.title}</strong>
            <small>{selectedProject.summary}</small>
          </div>
          {selectedProject.link ? (
            <div className="project-actions">
              <a href={selectedProject.link} target="_blank" rel="noreferrer" className="desktop-button compact">
                Open Repo
              </a>
              {selectedProject.live ? (
                <a href={selectedProject.live} target="_blank" rel="noreferrer" className="desktop-button compact alt">
                  Live Demo
                </a>
              ) : null}
            </div>
          ) : (
            <span className="muted-state">Private / local</span>
          )}
        </div>
        <div className="chip-row">
          {selectedProject.stack.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
        <ul className="project-point-list">
          {selectedProject.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  </div>
  );
};

const renderExperience = () => (
  <div className="window-section terminal-window">
    {terminalLines.map((line, index) => (
      <p key={`${line}-${index}`} className={line.startsWith('$') ? 'terminal-command' : 'terminal-output'}>
        {line}
      </p>
    ))}
    <div className="terminal-divider" />
    <h3>
      {experience.role} · {experience.org}
    </h3>
    <ul>
      {experience.points.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
    <div className="cert-grid">
      {certifications.map((item) => (
        <a key={item.title} href={item.url} target="_blank" rel="noreferrer" className="desktop-button">
          {item.title}
        </a>
      ))}
    </div>
  </div>
);

const renderSkills = () => (
  <div className="window-section">
    <div className="window-section-head">
      <div>
        <h3>Package Manager</h3>
        <p>Installed languages, libraries, tooling, backend services, and IoT runtime components.</p>
      </div>
    </div>
    <div className="package-table">
      {Object.entries(skills).map(([group, items]) => (
        <div key={group} className="package-row">
          <div className="package-group">
            <strong>{group}</strong>
            <small>{items.length} packages</small>
          </div>
          <div className="package-items">
            {items.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const renderContact = () => (
  <div className="network-layout">
    <div className="network-card primary">
      <div className="info-block-head">
        <strong>Network Status</strong>
        <small>connected</small>
      </div>
      <div className="plain-list">
        <p>Primary user: Sandesh Yesane</p>
        <p>Email: sandeshyesane996@gmail.com</p>
        <p>Phone: +91 9321451240</p>
        <p>Location: Mumbai, India</p>
      </div>
    </div>
    <div className="connect-grid">
      {profiles.map((item) => (
        <a key={item.label} href={item.url} target="_blank" rel="noreferrer" className="connect-card">
          <span className="connect-badge">{item.label.slice(0, 2).toUpperCase()}</span>
          <span className="connect-text">
            <strong>{item.label}</strong>
            <small>{item.handle}</small>
          </span>
        </a>
      ))}
      <a href="mailto:sandeshyesane996@gmail.com" className="connect-card">
        <span className="connect-badge">EM</span>
        <span className="connect-text">
          <strong>Email</strong>
          <small>sandeshyesane996@gmail.com</small>
        </span>
      </a>
      <a href="tel:+919321451240" className="connect-card">
        <span className="connect-badge">PH</span>
        <span className="connect-text">
          <strong>Phone</strong>
          <small>+91 9321451240</small>
        </span>
      </a>
    </div>
  </div>
);

const windowContent = {
  overview: renderOverview,
  projects: renderProjects,
  terminal: renderExperience,
  skills: renderSkills,
  contact: renderContact
};

const WindowFrame = ({
  appId,
  windowState,
  isActive,
  stageBounds,
  activeHomeSection,
  selectedProjectTitle,
  onSelectHomeSection,
  onSelectProject,
  onFocus,
  onClose,
  onMinimize,
  onMaximize,
  onDragStart
}) => {
  const meta = appMeta[appId];
  const content =
    appId === 'overview'
      ? windowContent[appId](activeHomeSection, onSelectHomeSection)
      : appId === 'projects'
        ? windowContent[appId](selectedProjectTitle, onSelectProject)
        : windowContent[appId]();
  const style = windowState.maximized
    ? { left: 0, top: 0, width: stageBounds.width, height: stageBounds.height, zIndex: windowState.z }
    : {
        left: windowState.bounds.x,
        top: windowState.bounds.y,
        width: windowState.bounds.width,
        height: windowState.bounds.height,
        zIndex: windowState.z
      };

  return (
    <section
      className={`desktop-window${isActive ? ' active' : ''}${windowState.maximized ? ' is-maximized' : ''}`}
      style={style}
      onMouseDown={() => onFocus(appId)}
    >
      <div className="window-bar" onMouseDown={(event) => onDragStart(event, appId)}>
        <div className="window-controls">
          <button
            type="button"
            className="window-control close"
            onClick={(event) => {
              event.stopPropagation();
              onClose(appId);
            }}
            aria-label="Close window"
          />
          <button
            type="button"
            className="window-control minimize"
            onClick={(event) => {
              event.stopPropagation();
              onMinimize(appId);
            }}
            aria-label="Minimize window"
          />
          <button
            type="button"
            className="window-control maximize"
            onClick={(event) => {
              event.stopPropagation();
              onMaximize(appId);
            }}
            aria-label={windowState.maximized ? 'Restore window' : 'Maximize window'}
          />
        </div>
        <div className="window-title">
          <strong>{meta.title}</strong>
          <small>{meta.subtitle}</small>
        </div>
      </div>
      <div className="window-body">{content}</div>
    </section>
  );
};

const App = () => {
  const [clock, setClock] = useState('');
  const [windows, setWindows] = useState(initialWindowState);
  const [activeApp, setActiveApp] = useState('overview');
  const [dragging, setDragging] = useState(null);
  const [activeHomeSection, setActiveHomeSection] = useState('Profile');
  const [selectedProjectTitle, setSelectedProjectTitle] = useState(projects[0].title);
  const stageRef = useRef(null);

  useEffect(() => {
    const updateClock = () => {
      setClock(
        new Intl.DateTimeFormat('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          weekday: 'short',
          day: '2-digit',
          month: 'short'
        }).format(new Date())
      );
    };

    updateClock();
    const intervalId = window.setInterval(updateClock, 30000);
    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (!dragging) return undefined;

    const handleMove = (event) => {
      setWindows((current) => {
        const next = { ...current };
        const target = next[dragging.appId];
        if (!target || target.maximized) return current;

        const stageWidth = dragging.stageRect.width;
        const stageHeight = dragging.stageRect.height;
        const nextX = event.clientX - dragging.offsetX;
        const nextY = event.clientY - dragging.offsetY;
        const clampedX = Math.max(0, Math.min(nextX, stageWidth - target.bounds.width));
        const clampedY = Math.max(0, Math.min(nextY, stageHeight - target.bounds.height));

        target.bounds = { ...target.bounds, x: clampedX, y: clampedY };
        return next;
      });
    };

    const handleUp = () => setDragging(null);

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleUp);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
    };
  }, [dragging]);

  const getTopZ = (state = windows) => Math.max(...Object.values(state).map((item) => item.z), 1);

  const focusWindow = (appId) => {
    setWindows((current) => {
      const next = { ...current };
      next[appId] = {
        ...next[appId],
        isOpen: true,
        minimized: false,
        z: getTopZ(current) + 1
      };
      return next;
    });
    setActiveApp(appId);
  };

  const openApp = (appId) => {
    const target = windows[appId];
    if (target.isOpen && !target.minimized) {
      focusWindow(appId);
      return;
    }

    setWindows((current) => {
      const next = { ...current };
      next[appId] = {
        ...next[appId],
        isOpen: true,
        minimized: false,
        z: getTopZ(current) + 1
      };
      return next;
    });
    setActiveApp(appId);
  };

  const closeApp = (appId) => {
    setWindows((current) => ({
      ...current,
      [appId]: {
        ...current[appId],
        isOpen: false,
        minimized: false,
        maximized: false
      }
    }));

    if (activeApp === appId) {
      const remaining = APP_ORDER.find((id) => id !== appId && windows[id].isOpen && !windows[id].minimized) || null;
      setActiveApp(remaining);
    }
  };

  const minimizeApp = (appId) => {
    setWindows((current) => ({
      ...current,
      [appId]: {
        ...current[appId],
        minimized: true
      }
    }));

    if (activeApp === appId) {
      const remaining = APP_ORDER.find((id) => id !== appId && windows[id].isOpen && !windows[id].minimized) || null;
      setActiveApp(remaining);
    }
  };

  const maximizeApp = (appId) => {
    setWindows((current) => {
      const next = { ...current };
      const target = next[appId];

      next[appId] = {
        ...target,
        maximized: !target.maximized,
        prevBounds: target.maximized ? null : target.bounds,
        bounds: target.maximized && target.prevBounds ? target.prevBounds : target.bounds,
        z: getTopZ(current) + 1
      };

      return next;
    });
    setActiveApp(appId);
  };

  const handleLauncherClick = (appId) => {
    const target = windows[appId];
    if (target.isOpen && !target.minimized && activeApp === appId) {
      minimizeApp(appId);
      return;
    }
    openApp(appId);
  };

  const handleDragStart = (event, appId) => {
    if (event.target.closest('.window-control')) return;
    const target = windows[appId];
    if (target.maximized || !stageRef.current) return;

    const stageRect = stageRef.current.getBoundingClientRect();
    setDragging({
      appId,
      stageRect,
      offsetX: event.clientX - stageRect.left - target.bounds.x,
      offsetY: event.clientY - stageRect.top - target.bounds.y
    });
    focusWindow(appId);
  };

  const stageBounds = stageRef.current?.getBoundingClientRect() ?? { width: 1280, height: 720 };

  return (
    <div className="desktop-shell">
      <div className="desktop-wallpaper" />

      <header className="desktop-topbar">
        <div className="topbar-left">
          <span className="topbar-brand">Applications</span>
          <span className="topbar-workspace">Places</span>
          <span className="topbar-workspace">Terminal</span>
        </div>
        <div className="topbar-center">sandesh@kali: ~/portfolio-desktop</div>
        <div className="topbar-right">
          <span>eth0 connected</span>
          <span>{clock}</span>
        </div>
      </header>

      <nav className="launcher-bar" aria-label="Application launcher">
        {desktopApps.map((app) => {
          const state = windows[app.id];
          return (
            <button
              key={app.id}
              type="button"
              className={`launcher-item${state.isOpen && !state.minimized ? ' active' : ''}`}
              onClick={() => handleLauncherClick(app.id)}
              title={app.title}
            >
              <span className="launcher-icon">{app.icon}</span>
            </button>
          );
        })}
      </nav>

      <main className="desktop-stage" ref={stageRef}>
        {APP_ORDER.map((appId) => {
          const state = windows[appId];
          if (!state.isOpen || state.minimized) return null;

          return (
            <WindowFrame
              key={appId}
              appId={appId}
              windowState={state}
              isActive={activeApp === appId}
              stageBounds={stageBounds}
              activeHomeSection={activeHomeSection}
              selectedProjectTitle={selectedProjectTitle}
              onSelectHomeSection={setActiveHomeSection}
              onSelectProject={setSelectedProjectTitle}
              onFocus={focusWindow}
              onClose={closeApp}
              onMinimize={minimizeApp}
              onMaximize={maximizeApp}
              onDragStart={handleDragStart}
            />
          );
        })}
      </main>
    </div>
  );
};

export default App;
