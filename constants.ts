import { Experience, Project, SkillCategory, Education, Certification } from "./types";

export const RESUME_DATA = {
  name: "Bhargavi Gunji",
  role: "Software Engineer",
  about: "I am a passionate Software Engineer with a strong foundation in building scalable web applications and AI-driven solutions. My expertise spans full-stack development, cloud computing, and machine learning. I enjoy solving complex problems and optimizing data pipelines.",
  location: "Rolla, MO",
  email: "contact@bhargavigunji.com",
  linkedin: "https://www.linkedin.com/in/bhargavigunji/"
};

export const EDUCATION: Education[] = [
  {
    school: "Missouri University of Science and Technology",
    degree: "Master of Science in Computer Science",
    duration: "2023 – 2025"
  },
  {
    school: "Jawaharlal Nehru Technological University (JNTU) / VNR VJIET",
    degree: "Bachelor of Technology in Computer Science",
    duration: "2018 – 2022"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Research & Development Engineer",
    company: "Missouri S&T",
    duration: "Jul 2025 – Present",
    location: "Rolla, MO",
    description: [
      "Building AI-driven data pipelines, automation scripts, and intelligent web-scraping tools using Python, ML models, BeautifulSoup, and Selenium.",
      "Designing scalable data-processing workflows for cleaning, transforming, and preparing large datasets.",
      "Improving automation and execution time of research workflows by optimizing preprocessing and pipeline performance."
    ]
  },
  {
    role: "Website Developer",
    company: "Missouri S&T",
    duration: "Sep 2024 – May 2025",
    location: "Rolla, MO",
    description: [
      "Developed and maintained research-focused websites using HTML, CSS, JavaScript, PHP, and WordPress.",
      "Improved website performance through caching, image optimization, lazy loading, and responsive layouts.",
      "Built custom templates and reusable components to streamline updates.",
      "Collaborated with faculty and students to present robotics research, publications, and project details clearly and effectively."
    ]
  },
  {
    role: "Advanced Associate Software Engineer",
    company: "Accenture",
    duration: "Jul 2022 – Jul 2023",
    location: "Hyderabad, India",
    description: [
      "Developed full-stack applications using Java, Spring Boot, React, and microservices architecture.",
      "Built and integrated RESTful APIs, enhanced database performance with optimized PostgreSQL queries, indexing, and schema tuning.",
      "Collaborated in Agile sprints, code reviews, and CI/CD pipelines using Jenkins, Docker, Git, and DevOps tools.",
      "Improved reliability through JUnit testing and Selenium automation."
    ]
  },
  {
    role: "Web Developer Intern",
    company: "Verzeo",
    duration: "Jun 2020 – Aug 2020",
    location: "Hyderabad, India",
    description: [
      "Built responsive web applications and translated UI designs into production-ready components.",
      "Improved delivery timelines by developing modular, scalable features.",
      "Led a team of 13 interns using Agile processes, coordinating tasks, debugging issues, and integrating third-party APIs."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Placement Management System",
    description: "A full-stack system for managing student profiles, job postings, and placement workflows. Implemented secure authentication and role-based access.",
    technologies: ["Java", "Spring Boot", "React", "MySQL", "REST APIs"],
  },
  {
    title: "DeepFake Detection Challenge",
    description: "Built a machine learning pipeline to classify real vs. synthetic deepfake images using CNN models with optimized hyperparameters.",
    technologies: ["Python", "ML", "CNN", "OpenCV"],
  },
  {
    title: "Professional Interior Design Website",
    description: "Developed a responsive website for an interior design brand with dynamic routes and a client inquiry system.",
    technologies: ["Node.js", "Express.js", "HTML/CSS", "JavaScript"],
  },
  {
    title: "Database Normalization Automation Tool",
    description: "Created an automated tool to normalize relational datasets, detect schema issues, and suggest normal forms.",
    technologies: ["Python", "SQL", "Data Validation"],
  },
  {
    title: "Self-Supervised Image Classification (SimCLRv2)",
    description: "Implemented a self-supervised SimCLRv2-style training pipeline for image representation learning.",
    technologies: ["Python", "PyTorch", "Computer Vision"],
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Programming Languages",
    items: ["Java", "Python", "C", "C++", "C#", "JavaScript", "TypeScript", "Go", "R"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["Spring Boot", "Spring", "React.js", "Angular", "Node.js", "Vue.js", "Next.js", "Bootstrap", "jQuery"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Oracle", "NoSQL"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "Jenkins", "Git", "GitHub"]
  },
  {
    category: "Web Technologies",
    items: ["HTML5", "CSS3", "PHP", "XML", "REST APIs", "GraphQL", "AJAX", "JSON", "SOAP"]
  },
  {
    category: "Testing Tools",
    items: ["JUnit", "Selenium", "Mockito", "Jest"]
  },
  {
    category: "Engineering Principles",
    items: ["OOP", "MVC", "Microservices", "Data Structures", "TDD", "Agile (Scrum)"]
  },
  {
    category: "AI & Data Science",
    items: ["Machine Learning", "NLP", "Data Science", "Python Automation"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Docker Foundations Professional Certificate" },
  { name: "Big Data Management and Analytics" },
  { name: "React: Creating and Hosting a Full-Stack Site" },
  { name: "Web Developer" },
  { name: "Data Science in Python" },
  { name: "Machine Learning" }
];
