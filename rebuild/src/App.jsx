import { useState, useEffect, useRef } from 'react';
import SplashCursor from './components/SplashCursor.tsx';

// Desktop icon data
const desktopIcons = [
  { id: 'about', name: 'About_Me.txt', icon: 'file', x: 20, y: 20 },
  { id: 'projects', name: 'Projects', icon: 'folder', x: 20, y: 120 },
  { id: 'skills', name: 'Skills.sh', icon: 'script', x: 20, y: 220 },
  { id: 'experience', name: 'Experience.log', icon: 'log', x: 20, y: 320 },
  { id: 'contact', name: 'Contact.cfg', icon: 'config', x: 20, y: 420 },
  { id: 'terminal', name: 'Terminal', icon: 'terminal', x: 120, y: 20 },
  { id: 'resume', name: 'Resume.pdf', icon: 'pdf', x: 120, y: 120 },
];

// Window content components
const AboutContent = () => (
  <div className="window-content-inner">
    <pre className="ascii-header">{`
┌─────────────────────────────────────────────────────────────┐
│  ███████╗ █████╗ ███╗   ██╗██████╗ ███████╗███████╗██╗  ██╗ │
│  ██╔════╝██╔══██╗████╗  ██║██╔══██╗██╔════╝██╔════╝██║  ██║ │
│  ███████╗███████║██╔██╗ ██║██║  ██║█████╗  ███████╗███████║ │
│  ╚════██║██╔══██║██║╚██╗██║██║  ██║██╔══╝  ╚════██║██╔══██║ │
│  ███████║██║  ██║██║ ╚████║██████╔╝███████╗███████║██║  ██║ │
│  ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝ │
└─────────────────────────────────────────────────────────────┘
`}</pre>
    <div className="info-section">
      <p className="prompt-line"><span className="prompt">$</span> cat /etc/profile</p>
      <div className="info-block">
        <p><span className="label">NAME:</span> Sandesh Yesane</p>
        <p><span className="label">ROLE:</span> Full Stack Developer &amp; ML Enthusiast</p>
        <p><span className="label">LOCATION:</span> Mumbai, India</p>
        <p><span className="label">EDUCATION:</span> B.E. Computer Engineering @ University of Mumbai</p>
        <p><span className="label">CGPA:</span> 7.32</p>
        <p><span className="label">GRADUATION:</span> May 2026</p>
        <p><span className="label">STATUS:</span> <span className="status-available">Available for Hire</span></p>
      </div>
    </div>
    <div className="info-section">
      <p className="prompt-line"><span className="prompt">$</span> cat /var/log/mission.log</p>
      <ul className="mission-list">
        <li>Computer Engineering student at the University of Mumbai.</li>
        <li>Focused on product-oriented web apps, ML, and edge systems.</li>
        <li>Enjoys building practical systems from architecture to deployment.</li>
        <li>Building intelligent products with web, data, and edge systems.</li>
      </ul>
    </div>
  </div>
);

const ProjectsContent = () => {
  const projects = [
    {
      name: 'mentor-mind/',
      type: 'dir',
      desc: 'AI-powered Learning Management System',
      stack: ['Next.js', 'React', 'Tailwind', 'Gemini', 'Clerk', 'Neon'],
      link: 'https://github.com/Sandesh30-cloud/mentor-mind'
    },
    {
      name: 'stock-analyzer/',
      type: 'dir',
      desc: 'Full-stack stock comparison and analysis platform',
      stack: ['React', 'TypeScript', 'Flask', 'Python', 'Chart.js'],
      link: 'https://github.com/Sandesh30-cloud/StockAnalyzer'
    },
    {
      name: 'matsyavan/',
      type: 'dir',
      desc: 'Offline-first aquaculture monitoring platform with IoT and edge ML',
      stack: ['Python', 'TypeScript', 'OpenCV', 'ML', 'IoT', 'Raspberry Pi'],
      link: ''
    },
    {
      name: 'data-analytics/',
      type: 'dir',
      desc: 'Data Analytics & BI Dashboards',
      stack: ['Python', 'Pandas', 'SQL', 'Power BI'],
      link: 'https://github.com/Sandesh30-cloud/Data-Science'
    }
  ];

  return (
    <div className="window-content-inner terminal-style">
      <p className="prompt-line"><span className="prompt">sandesh@kali</span>:<span className="path">~/projects</span>$ ls -la</p>
      <div className="ls-output">
        <p className="ls-header">total {projects.length}</p>
        {projects.map((proj, i) => (
          <div key={i} className="project-entry">
            <div className="project-row">
              <span className="perms">drwxr-xr-x</span>
              <span className="user">sandesh</span>
              <span className="date">Apr 2026</span>
              <span className="dir-name">{proj.name}</span>
            </div>
            <div className="project-details">
              <p className="desc"># {proj.desc}</p>
              <div className="stack-tags">
                {proj.stack.map((s, j) => <span key={j} className="tag">{s}</span>)}
              </div>
              {proj.link && (
                <a href={proj.link} target="_blank" rel="noreferrer" className="git-link">
                  $ git clone {proj.link}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsContent = () => {
  const skills = {
    'Languages': ['Python', 'SQL', 'JavaScript', 'TypeScript', 'C', 'R', 'Go (Learning)'],
    'ML / Data': ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Keras', 'EDA'],
    'Data & BI': ['Power BI', 'Dashboard Development', 'Data Cleaning', 'Reporting'],
    'Backend': ['Node.js', 'Express.js', 'REST APIs', 'MongoDB'],
    'Tools': ['Git', 'Docker', 'Linux', 'VS Code', 'Postman', 'Jupyter']
  };

  return (
    <div className="window-content-inner terminal-style">
      <p className="prompt-line"><span className="prompt">$</span> apt list --installed | grep skills</p>
      <div className="skills-output">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-category">
            <p className="category-name">[{category}]</p>
            <div className="skill-items">
              {items.map((skill, i) => (
                <span key={i} className="skill-tag">
                  <span className="bullet">▸</span> {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ExperienceContent = () => (
  <div className="window-content-inner terminal-style">
    <p className="prompt-line"><span className="prompt">$</span> cat /var/log/experience.log</p>
    <div className="log-output">
      <div className="log-entry">
        <p className="timestamp">[2024-01-01 00:00:00]</p>
        <p className="log-title">Web Development Intern @ Prodigy Infotech</p>
        <ul className="log-details">
          <li>Developed and deployed interactive web pages using HTML, CSS, and JavaScript.</li>
          <li>Implemented responsive front-end designs with cross-browser compatibility.</li>
          <li>Integrated APIs for dynamic content rendering and better user experience.</li>
        </ul>
      </div>
      <div className="log-entry">
        <p className="timestamp">[CERTIFICATIONS]</p>
        <ul className="log-details">
          <li>
            <a href="https://www.credly.com/badges/f7e75bd6-6637-47cd-aa5e-5e5d69e95a7f/public_url" target="_blank" rel="noreferrer">
              IBM Data Fundamentals Certification
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1gtZpcRn3dU-GtpBEXPmBgyDhLbpURIQx/view" target="_blank" rel="noreferrer">
              Udemy: Data Science, Machine Learning &amp; NLP
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const ContactContent = () => (
  <div className="window-content-inner terminal-style">
    <p className="prompt-line"><span className="prompt">$</span> cat ~/.config/contact.cfg</p>
    <div className="config-output">
      <p className="config-section">[network]</p>
      <p className="config-line">email = <a href="mailto:sandeshyesane996@gmail.com">sandeshyesane996@gmail.com</a></p>
      <p className="config-line">phone = <a href="tel:+919321451240">+91 9321451240</a></p>
      
      <p className="config-section">[social]</p>
      <p className="config-line">github = <a href="https://github.com/Sandesh30-cloud" target="_blank" rel="noreferrer">github.com/Sandesh30-cloud</a></p>
      <p className="config-line">linkedin = <a href="https://linkedin.com/in/sandesh-yesane-644396259/" target="_blank" rel="noreferrer">linkedin.com/in/sandesh-yesane</a></p>
      <p className="config-line">leetcode = <a href="https://leetcode.com/u/Lazy_Coder04/" target="_blank" rel="noreferrer">leetcode.com/Lazy_Coder04</a></p>
      
      <p className="config-section">[actions]</p>
      <div className="action-buttons">
        <a href="mailto:sandeshyesane996@gmail.com" className="action-btn">$ mail --compose</a>
        <a href="https://github.com/Sandesh30-cloud" target="_blank" rel="noreferrer" className="action-btn">$ git follow</a>
      </div>
    </div>
  </div>
);

const TerminalContent = () => {
  const [lines, setLines] = useState([
    { type: 'output', text: 'Kali GNU/Linux Rolling \\n \\l' },
    { type: 'output', text: '' },
    { type: 'prompt', text: 'sandesh@kali:~$ neofetch' },
    { type: 'neofetch', text: '' },
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  const neofetch = `
        .--.                sandesh@kali
       |o_o |               ─────────────
       |:_/ |               OS: Kali Linux Rolling
      //   \\ \\              Host: Portfolio v2.0
     (|     | )             Kernel: React 18.x
    /'\\_   _/\`\\            Uptime: ${Math.floor(Math.random() * 100)} days
    \\___)=(___/             Shell: zsh 5.9
                            Terminal: xfce4-terminal
                            CPU: Brain @ 3.0GHz
                            Memory: Coffee / Unlimited
`;

  const handleCommand = (cmd) => {
    const newLines = [...lines, { type: 'prompt', text: `sandesh@kali:~$ ${cmd}` }];
    
    const lowerCmd = cmd.toLowerCase().trim();
    
    if (lowerCmd === 'help') {
      newLines.push({ type: 'output', text: 'Available commands: help, whoami, ls, pwd, date, clear, neofetch, skills, contact' });
    } else if (lowerCmd === 'whoami') {
      newLines.push({ type: 'output', text: 'sandesh - Full Stack Developer & ML Enthusiast' });
    } else if (lowerCmd === 'ls') {
      newLines.push({ type: 'output', text: 'About_Me.txt  Projects/  Skills.sh  Experience.log  Contact.cfg  Resume.pdf' });
    } else if (lowerCmd === 'pwd') {
      newLines.push({ type: 'output', text: '/home/sandesh/portfolio' });
    } else if (lowerCmd === 'date') {
      newLines.push({ type: 'output', text: new Date().toString() });
    } else if (lowerCmd === 'clear') {
      setLines([]);
      setInput('');
      return;
    } else if (lowerCmd === 'neofetch') {
      newLines.push({ type: 'neofetch', text: '' });
    } else if (lowerCmd === 'skills') {
      newLines.push({ type: 'output', text: 'Python | JavaScript | TypeScript | React | Node.js | SQL | Docker | Git | ML | Power BI' });
    } else if (lowerCmd === 'contact') {
      newLines.push({ type: 'output', text: 'Email: sandeshyesane996@gmail.com | GitHub: @Sandesh30-cloud' });
    } else if (cmd.trim() !== '') {
      newLines.push({ type: 'output', text: `bash: ${cmd}: command not found. Type 'help' for available commands.` });
    }
    
    setLines(newLines);
    setInput('');
  };

  return (
    <div className="terminal-window" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-output">
        {lines.map((line, i) => (
          <div key={i} className={`terminal-line ${line.type}`}>
            {line.type === 'neofetch' ? (
              <pre className="neofetch-output">{neofetch}</pre>
            ) : (
              line.text
            )}
          </div>
        ))}
        <div className="terminal-input-line">
          <span className="terminal-prompt">sandesh@kali:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleCommand(input)}
            className="terminal-input"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

// Desktop Icon Component
const DesktopIcon = ({ icon, onClick }) => {
  const iconSvgs = {
    file: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    folder: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    script: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    log: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    config: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
    ),
    terminal: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="4 17 10 11 4 5"/>
        <line x1="12" y1="19" x2="20" y2="19"/>
      </svg>
    ),
    pdf: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <path d="M9 15v-2h2a1 1 0 1 1 0 2H9z"/>
      </svg>
    )
  };

  return (
    <div className="desktop-icon" onDoubleClick={onClick}>
      <div className="icon-image">{iconSvgs[icon.icon]}</div>
      <span className="icon-name">{icon.name}</span>
    </div>
  );
};

// Window Component
const Window = ({ id, title, children, position, size, isActive, onClose, onFocus, onDragStart, isMinimized }) => {
  const headerRef = useRef(null);

  if (isMinimized) return null;

  return (
    <div 
      className={`window ${isActive ? 'active' : ''}`}
      style={{ 
        left: position.x, 
        top: position.y, 
        width: size.width, 
        height: size.height,
        zIndex: isActive ? 100 : 10
      }}
      onClick={onFocus}
    >
      <div 
        ref={headerRef}
        className="window-header"
        onMouseDown={(e) => onDragStart(e, id)}
      >
        <div className="window-controls">
          <button className="win-btn close" onClick={(e) => { e.stopPropagation(); onClose(id); }}></button>
          <button className="win-btn minimize"></button>
          <button className="win-btn maximize"></button>
        </div>
        <span className="window-title">{title}</span>
      </div>
      <div className="window-content">
        {children}
      </div>
    </div>
  );
};

// Start Menu Component
const StartMenu = ({ isOpen, onClose, onOpenApp }) => {
  if (!isOpen) return null;

  const menuItems = [
    { id: 'terminal', name: 'Terminal', icon: 'terminal' },
    { id: 'about', name: 'About Me', icon: 'file' },
    { id: 'projects', name: 'Projects', icon: 'folder' },
    { id: 'skills', name: 'Skills', icon: 'script' },
    { id: 'experience', name: 'Experience', icon: 'log' },
    { id: 'contact', name: 'Contact', icon: 'config' },
  ];

  return (
    <div className="start-menu" onClick={(e) => e.stopPropagation()}>
      <div className="start-menu-header">
        <div className="kali-logo">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        <span>Kali Linux</span>
      </div>
      <div className="start-menu-items">
        {menuItems.map(item => (
          <button 
            key={item.id} 
            className="start-menu-item"
            onClick={() => { onOpenApp(item.id); onClose(); }}
          >
            <span className="menu-icon">▸</span>
            {item.name}
          </button>
        ))}
      </div>
      <div className="start-menu-footer">
        <a href="https://drive.google.com/file/d/1WdgHD-jzEwCxg0V36_B05LZqkMORRrmU/view" target="_blank" rel="noreferrer">
          Download Resume
        </a>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [windows, setWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState(null);
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [dragging, setDragging] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getWindowContent = (id) => {
    switch(id) {
      case 'about': return <AboutContent />;
      case 'projects': return <ProjectsContent />;
      case 'skills': return <SkillsContent />;
      case 'experience': return <ExperienceContent />;
      case 'contact': return <ContactContent />;
      case 'terminal': return <TerminalContent />;
      default: return <div>Content not found</div>;
    }
  };

  const getWindowTitle = (id) => {
    const titles = {
      about: 'About_Me.txt - Text Editor',
      projects: 'Projects - File Manager',
      skills: 'Skills.sh - Terminal',
      experience: 'Experience.log - Log Viewer',
      contact: 'Contact.cfg - Config Editor',
      terminal: 'Terminal - sandesh@kali',
      resume: 'Resume.pdf - Document Viewer'
    };
    return titles[id] || id;
  };

  const openWindow = (id) => {
    if (id === 'resume') {
      window.open('https://drive.google.com/file/d/1WdgHD-jzEwCxg0V36_B05LZqkMORRrmU/view', '_blank');
      return;
    }

    const existingWindow = windows.find(w => w.id === id);
    if (existingWindow) {
      setActiveWindow(id);
      setWindows(windows.map(w => w.id === id ? { ...w, isMinimized: false } : w));
      return;
    }

    const offset = windows.length * 30;
    const newWindow = {
      id,
      position: { x: 150 + offset, y: 80 + offset },
      size: { width: 700, height: 500 },
      isMinimized: false
    };

    setWindows([...windows, newWindow]);
    setActiveWindow(id);
  };

  const closeWindow = (id) => {
    setWindows(windows.filter(w => w.id !== id));
    if (activeWindow === id) {
      setActiveWindow(windows.length > 1 ? windows[windows.length - 2].id : null);
    }
  };

  const handleDragStart = (e, id) => {
    const win = windows.find(w => w.id === id);
    setDragging(id);
    setDragOffset({
      x: e.clientX - win.position.x,
      y: e.clientY - win.position.y
    });
    setActiveWindow(id);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    setWindows(windows.map(w => {
      if (w.id === dragging) {
        return {
          ...w,
          position: {
            x: Math.max(0, e.clientX - dragOffset.x),
            y: Math.max(0, e.clientY - dragOffset.y)
          }
        };
      }
      return w;
    }));
  };

  const handleMouseUp = () => {
    setDragging(null);
  };

  return (
    <div 
      className="desktop"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onClick={() => setStartMenuOpen(false)}
    >
      <SplashCursor 
        BACK_COLOR={{ r: 0.02, g: 0.08, b: 0.02 }}
        SPLAT_RADIUS={0.12}
        SPLAT_FORCE={4000}
      />

      {/* Desktop Icons */}
      <div className="desktop-icons">
        {desktopIcons.map(icon => (
          <DesktopIcon 
            key={icon.id} 
            icon={icon} 
            onClick={() => openWindow(icon.id)}
          />
        ))}
      </div>

      {/* Windows */}
      {windows.map(win => (
        <Window
          key={win.id}
          id={win.id}
          title={getWindowTitle(win.id)}
          position={win.position}
          size={win.size}
          isActive={activeWindow === win.id}
          isMinimized={win.isMinimized}
          onClose={closeWindow}
          onFocus={() => setActiveWindow(win.id)}
          onDragStart={handleDragStart}
        >
          {getWindowContent(win.id)}
        </Window>
      ))}

      {/* Start Menu */}
      <StartMenu 
        isOpen={startMenuOpen} 
        onClose={() => setStartMenuOpen(false)}
        onOpenApp={openWindow}
      />

      {/* Taskbar */}
      <div className="taskbar">
        <button 
          className={`start-button ${startMenuOpen ? 'active' : ''}`}
          onClick={(e) => { e.stopPropagation(); setStartMenuOpen(!startMenuOpen); }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <path d="M12 6l-4 4h3v4h2v-4h3z"/>
          </svg>
        </button>

        <div className="taskbar-apps">
          {windows.map(win => (
            <button 
              key={win.id}
              className={`taskbar-app ${activeWindow === win.id ? 'active' : ''}`}
              onClick={() => {
                if (win.isMinimized) {
                  setWindows(windows.map(w => w.id === win.id ? { ...w, isMinimized: false } : w));
                }
                setActiveWindow(win.id);
              }}
            >
              {getWindowTitle(win.id).split(' - ')[0]}
            </button>
          ))}
        </div>

        <div className="taskbar-tray">
          <span className="tray-item">
            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
              <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
            </svg>
          </span>
          <span className="tray-time">
            {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
          </span>
          <span className="tray-date">
            {currentTime.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
