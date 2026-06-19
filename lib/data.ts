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
  "I'm a 4th-year Medical Electronics Engineering student at BMSCE Bengaluru, working at the intersection of biomedical instrumentation, embedded systems, and full-stack software development.",
  "I build real-time patient monitoring systems using ESP32 and ECG/PPG sensors, design signal processing pipelines in MATLAB, and develop production-grade web platforms using Node.js and MongoDB. Currently interning as a Full Stack Developer at Growteq Agri Tech.",
  "I'm driven by problems that sit at the crossroads of hardware and software — where clinical precision meets scalable engineering.",
];

export const skills = {
  "Biomedical": ["ECG/PPG Signal Acquisition", "MATLAB Signal Processing", "QRS Detection", "HRV Analysis", "Biomedical Instrumentation", "Patient Monitoring Systems"],
  "Embedded & IoT": ["ESP32", "Arduino", "Embedded C", "SPI/I2C/UART", "RTOS Basics", "Real-Time Data Acquisition"],
  "Backend & Cloud": ["Node.js", "Express.js", "REST API Design", "JWT Authentication", "MongoDB Atlas", "Render", "Vercel"],
  "Frontend": ["Next.js 14", "React", "TypeScript", "TailwindCSS", "HTML5/CSS3"],
  "AI & Computer Vision": ["Python", "OpenCV", "TensorFlow", "EfficientNetB0", "GradCAM", "TFLite"],
  "Tools": ["MATLAB Simulink", "Git", "GitHub", "Postman", "VS Code", "Cursor AI"],
};

export const experience = [
  {
    role: "Full Stack Web Developer Intern",
    company: "Growteq Agri Tech Pvt Ltd",
    location: "Bengaluru",
    period: "Jan 2026 – Present",
    bullets: [
      "Engineered a production-grade full stack platform using Node.js, Express.js & MongoDB, improving data validation efficiency by 35% through structured API design.",
      "Designed secure REST APIs with JWT Authentication and Role-Based Access Control (RBAC), covering 100+ API endpoints.",
      "Optimized database queries using indexing and data modeling, reducing average API response time by 28%.",
      "Integrated GIS modules (OpenStreetMap & Leaflet) for real-time land evaluation across 500+ agricultural plots.",
      "Deployed cloud architecture on Render with MongoDB Atlas ensuring 99.9% uptime.",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Growteq Forge",
    category: "Full Stack · Internship",
    description: "A production-grade GIS-based farm infrastructure management platform with farms, sites, evaluations, proposals, RBAC, audit logs, and GeoJSON boundary mapping.",
    stack: ["Next.js 14", "TypeScript", "Node.js", "MongoDB Atlas", "Leaflet", "Turf.js", "JWT Auth"],
    github: "https://github.com/Chandangowdakt/growteq-forge",
    featured: true,
  },
  {
    id: 2,
    title: "Smart Cardio Web Monitoring System",
    category: "Biomedical IoT · Embedded",
    description: "Real-time cardiac monitoring system using ESP32, ECG (AD8232) and PPG (MAX30102) sensors, with a full-stack web dashboard for live visualization. Achieved <2s sensor-to-cloud latency, 30% ECG noise reduction via MATLAB filtering, and 95%+ abnormality detection accuracy.",
    stack: ["ESP32", "Embedded C", "MATLAB", "Node.js", "MongoDB", "WebSockets", "HTML5/CSS3"],
    github: "https://github.com/Chandangowdakt/smartcardio",
    featured: true,
  },
  {
    id: 3,
    title: "AI-Based Anemia Detection",
    category: "AI · Healthcare",
    description: "Web application for non-invasive anemia detection from medical images using EfficientNetB0 deep learning model, with GradCAM-based explainability and TFLite deployment on a Flask backend. Deployed on Render.",
    stack: ["Python", "TensorFlow", "EfficientNetB0", "GradCAM", "TFLite", "Flask"],
    github: "https://github.com/Chandangowdakt",
    featured: true,
  },
  {
    id: 4,
    title: "Growteq HarvestFlow",
    category: "Full Stack · Internship",
    description: "Mobile-first internal workflow management application built during internship at Growteq Agri Tech for managing agricultural operations and team workflows.",
    stack: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB"],
    github: "https://github.com/Chandangowdakt",
    featured: false,
  },
  {
    id: 5,
    title: "ECG Signal Processing & CAD Risk Analysis",
    category: "Biomedical · MATLAB",
    description: "MATLAB-based signal processing pipeline using Pan-Tompkins QRS detection algorithm and bandpass filtering to extract HRV features and identify Coronary Artery Disease risk indicators from raw ECG datasets.",
    stack: ["MATLAB", "Biomedical Signal Processing", "QRS Detection", "HRV Analysis", "Pan-Tompkins"],
    github: "https://github.com/Chandangowdakt",
    featured: false,
  },
  {
    id: 6,
    title: "Medication Adherence Dashboard",
    category: "Full Stack · Web App",
    description: "Fully deployed MERN stack web application with REST APIs for tracking and monitoring patient medication schedules and adherence trends.",
    stack: ["Node.js", "Express.js", "MongoDB", "React", "JWT Auth", "REST API"],
    github: "https://github.com/Chandangowdakt",
    featured: false,
  },
  {
    id: 7,
    title: "Real-Time Pupil Tracking & Eye Gaze Estimation",
    category: "Computer Vision · Research",
    description: "Real-time ocular diagnostic tool using OpenCV with 2D/3D eye modeling for pupil detection, gaze estimation, and behavioral analysis — developed in collaboration with research organizations.",
    stack: ["Python", "OpenCV", "Computer Vision", "2D/3D Eye Modeling"],
    github: "https://github.com/Chandangowdakt",
    featured: false,
  },
  {
    id: 8,
    title: "Bone Density Measurement Prototype",
    category: "Biomedical · Ongoing",
    description: "Non-invasive bone density estimation device using piezoelectric ultrasonic sensing with optimized analog signal conditioning, targeting 90%+ measurement stability. (Ongoing)",
    stack: ["Embedded C", "Piezoelectric Sensor", "Analog Signal Conditioning", "ADC"],
    github: "https://github.com/Chandangowdakt",
    featured: false,
  },
];

export const collaborations = [
  {
    org: "Pupil Labs",
    context: "Eye tracking research using Pupil Labs hardware for pupil detection and gaze estimation",
  },
  {
    org: "NIMHANS",
    context: "Ocular diagnostic and behavioral research collaboration",
  },
  {
    org: "Maastricht University",
    context: "International academic research collaboration on eye gaze and cognitive studies",
  },
  {
    org: "Netherlands Institute for Neuroscience",
    context: "Research partnership on pupil tracking and neuroscience applications",
  },
];

export const education = {
  degree: "Bachelor of Engineering — Medical Electronics Engineering",
  college: "BMS College of Engineering, Bengaluru",
  period: "Aug 2023 – 2027 (Expected)",
  puc: "88.5%",
  sslc: "97.44%",
  certifications: ["MATLAB & Simulink for Computational Engineering — MathWorks (2024)"],
};
