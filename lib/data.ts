export const personalInfo = {
  name: "Chandan K T",
  role: "Medical Electronics Engineer · Full Stack Developer · Embedded Systems",
  email: "chandankt.ml23@bmsce.ac.in",
  phone: "+91 6361239446",
  location: "Bengaluru, Karnataka",
  github: "https://github.com/Chandangowdakt",
  linkedin: "https://linkedin.com/in/chandan-k-t-b2443a353",
  college: "BMS College of Engineering, Bengaluru",
  degree: "B.E. Medical Electronics Engineering",
  year: "2023–2027 (Expected)",
};

export const aboutText = [
  "I'm a Medical Electronics Engineering student and Full Stack Development Intern at Autoyos, with hands-on experience building production web platforms and biomedical systems.",
  "I build real-time patient monitoring systems using ESP32 and ECG/PPG sensors, design signal processing pipelines in MATLAB, and develop production-grade web platforms using Node.js and MongoDB. Previously completed a Full Stack Web Developer internship at Growteq Agri Tech Pvt Ltd.",
  "I'm driven by problems that sit at the crossroads of hardware and software — where clinical precision meets scalable engineering.",
];

export const whatIBuild = [
  {
    title: "Biomedical Systems",
    description:
      "Real-time patient monitoring, ECG/PPG acquisition, and signal-processing pipelines for clinical insight.",
  },
  {
    title: "Embedded Systems",
    description:
      "ESP32 and Arduino-based sensing, acquisition, and hardware–software integration for IoT devices.",
  },
  {
    title: "Full-Stack Platforms",
    description:
      "Production web applications with Node.js, MongoDB, JWT auth, RBAC, and cloud deployment.",
  },
  {
    title: "AI-Enabled Applications",
    description:
      "Computer vision and deep learning tools for healthcare imaging, explainability, and research workflows.",
  },
];

export const skills = {
  "Medical Electronics": [
    "ECG/PPG Signal Acquisition",
    "MATLAB Signal Processing",
    "QRS Detection",
    "HRV Analysis",
    "Biomedical Instrumentation",
    "Patient Monitoring Systems",
  ],
  "Embedded Systems": [
    "ESP32",
    "Arduino",
    "Embedded C",
    "SPI/I2C/UART",
    "RTOS Basics",
    "Real-Time Data Acquisition",
    "VLSI Design",
  ],
  "Full Stack": [
    "Next.js 14",
    "React",
    "TypeScript",
    "Node.js",
    "Express.js",
    "REST API Design",
    "JWT Authentication",
    "MongoDB Atlas",
    "TailwindCSS",
    "Render",
    "Vercel",
  ],
  Programming: [
    "Python",
    "JavaScript",
    "TypeScript",
    "C / Embedded C",
    "MATLAB",
    "OpenCV",
    "TensorFlow",
    "Git / GitHub",
  ],
};

export const experience = [
  {
    role: "Intern – Full Stack Development",
    company: "Autoyos Private Limited",
    location: "Bengaluru, India",
    period: "Aug 2026 – Present",
    current: true,
    bullets: [
      "Contributing to robust software architecture and full-stack application development.",
      "Working with advanced image-processing model integration for real-time applications.",
      "Bridging backend deployment with intuitive frontend interfaces.",
      "Developing web applications, websites, and web integrations.",
      "Contributing to day-to-day technical activities and real-world software development.",
    ],
    highlights: [] as string[],
  },
  {
    role: "Full Stack Web Developer Intern",
    company: "Growteq Agri Tech Pvt Ltd",
    location: "Bengaluru, India",
    period: "Jan 2026 – Aug 2026",
    current: false,
    bullets: [
      "Engineered a production-grade full stack platform using Node.js, Express.js & MongoDB, improving data validation efficiency by 35% through structured API design.",
      "Designed secure REST APIs with JWT Authentication and Role-Based Access Control (RBAC), covering 100+ API endpoints.",
      "Optimized database queries using indexing and data modeling, reducing average API response time by 28%.",
      "Integrated GIS modules (OpenStreetMap & Leaflet) for real-time land evaluation across 500+ agricultural plots.",
      "Deployed cloud architecture on Render with MongoDB Atlas ensuring 99.9% uptime.",
    ],
    highlights: [
      "35% validation gain",
      "100+ APIs",
      "28% faster responses",
      "500+ plots",
      "99.9% uptime",
    ],
  },
];

export type ProjectFilter = "all" | "medical" | "fullstack" | "embedded-ai";

export const projects = [
  {
    id: 1,
    title: "Growteq Forge",
    category: "Full Stack · Internship",
    description:
      "Production GIS platform for farm infrastructure — sites, evaluations, proposals, RBAC, audit logs, and GeoJSON boundary mapping.",
    stack: [
      "Next.js 14",
      "TypeScript",
      "Node.js",
      "MongoDB Atlas",
      "Leaflet",
      "Turf.js",
      "JWT Auth",
    ],
    github: "https://github.com/Chandangowdakt/growteq-forge",
    live: null as string | null,
    featured: true,
    filters: ["fullstack"] as ProjectFilter[],
  },
  {
    id: 2,
    title: "Smart Cardio Web Monitoring System",
    category: "Biomedical IoT · Embedded",
    description:
      "Real-time cardiac monitoring with ESP32, ECG (AD8232) and PPG (MAX30102), plus a live web dashboard for visualization.",
    stack: ["ESP32", "Embedded C", "MATLAB", "Node.js", "MongoDB", "WebSockets"],
    github: "https://github.com/Chandangowdakt/smartcardio",
    live: null as string | null,
    featured: true,
    filters: ["medical", "embedded-ai"] as ProjectFilter[],
  },
  {
    id: 3,
    title: "AI-Based Anemia Detection",
    category: "AI · Healthcare",
    description:
      "Non-invasive anemia screening from medical images using EfficientNetB0, GradCAM explainability, and TFLite deployment.",
    stack: ["Python", "TensorFlow", "EfficientNetB0", "GradCAM", "TFLite", "Flask"],
    github: "https://github.com/Chandangowdakt",
    live: null as string | null,
    featured: true,
    filters: ["medical", "embedded-ai"] as ProjectFilter[],
  },
  {
    id: 4,
    title: "Real-Time Pupil Tracking & Eye Gaze Estimation",
    category: "Computer Vision · Research",
    description:
      "Ocular diagnostic tool with OpenCV 2D/3D eye modeling for pupil detection, gaze estimation, and behavioral analysis.",
    stack: ["Python", "OpenCV", "Computer Vision", "2D/3D Eye Modeling"],
    github: "https://github.com/Chandangowdakt",
    live: null as string | null,
    featured: true,
    filters: ["medical", "embedded-ai"] as ProjectFilter[],
  },
  {
    id: 5,
    title: "Growteq HarvestFlow",
    category: "Full Stack · Internship",
    description:
      "Mobile-first internal workflow app built at Growteq Agri Tech for agricultural operations and team coordination.",
    stack: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB"],
    github: "https://github.com/Chandangowdakt",
    live: null as string | null,
    featured: false,
    filters: ["fullstack"] as ProjectFilter[],
  },
  {
    id: 6,
    title: "ECG Signal Processing & CAD Risk Analysis",
    category: "Biomedical · MATLAB",
    description:
      "Pan-Tompkins QRS detection and bandpass filtering pipeline to extract HRV features and CAD risk indicators from ECG data.",
    stack: ["MATLAB", "QRS Detection", "HRV Analysis", "Pan-Tompkins"],
    github: "https://github.com/Chandangowdakt",
    live: null as string | null,
    featured: false,
    filters: ["medical"] as ProjectFilter[],
  },
  {
    id: 7,
    title: "Medication Adherence Dashboard",
    category: "Full Stack · Web App",
    description:
      "MERN stack app with REST APIs for tracking patient medication schedules and adherence trends.",
    stack: ["Node.js", "Express.js", "MongoDB", "React", "JWT Auth"],
    github: "https://github.com/Chandangowdakt",
    live: null as string | null,
    featured: false,
    filters: ["fullstack", "medical"] as ProjectFilter[],
  },
  {
    id: 8,
    title: "Bone Density Measurement Prototype",
    category: "Biomedical · Ongoing",
    description:
      "Non-invasive bone density estimation using piezoelectric ultrasonic sensing and optimized analog signal conditioning.",
    stack: ["Embedded C", "Piezoelectric Sensor", "Analog Signal Conditioning", "ADC"],
    github: "https://github.com/Chandangowdakt",
    live: null as string | null,
    featured: false,
    filters: ["medical", "embedded-ai"] as ProjectFilter[],
  },
];

export const collaborations = [
  {
    org: "Pupil Labs",
    context:
      "Eye tracking research using Pupil Labs hardware for pupil detection and gaze estimation",
  },
  {
    org: "NIMHANS",
    context: "Ocular diagnostic and behavioral research collaboration",
  },
  {
    org: "Maastricht University",
    context:
      "International academic research collaboration on eye gaze and cognitive studies",
  },
  {
    org: "Netherlands Institute for Neuroscience",
    context:
      "Research partnership on pupil tracking and neuroscience applications",
  },
];

export const education = {
  degree: "Bachelor of Engineering — Medical Electronics Engineering",
  college: "BMS College of Engineering, Bengaluru",
  period: "Aug 2023 – 2027 (Expected)",
  puc: "88.5%",
  sslc: "97.44%",
  certifications: [
    "MATLAB & Simulink for Computational Engineering — MathWorks (2024)",
  ],
};
