
import { ResumeData } from '../types';

export const resumeData: ResumeData = {
  name: "NITHIN KUMMARI",
  title: "Cybersecurity Specialist & Aspiring AI Developer",
  contact: {
    phone: "+91 7569363011",
    email: "nithin.kummari1897@gmail.com",
    linkedin: "https://linkedin.com/in/nithin-kummari",
    linkedinDisplay: "linkedin.com/in/nithin-kummari",
  },
  careerObjective:
    "B.Tech student specializing in Cybersecurity with hands-on experience in SOC analysis, Linux systems, and web application security. Skilled in incident response, threat mitigation, and cryptography, with a strong foundation in system administration and technical support. Demonstrated ability to analyze security threats and implement effective countermeasures. Basic knowledge of AI tools, including chatbots and prompt engineering, along with experience in automation and web app development. Passionate about securing digital systems and contributing to efficient IT operations in dynamic environments.",
  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      major: "Computer Science Engineering – Cybersecurity",
      institution: "St. Mary's Engineering College",
      years: "2021 – 2025",
    },
  ],
  skills: {
    technical: [
      {
        name: "Cybersecurity",
        skills: [
          "Nmap",
          "Wireshark",
          "Metasploit",
          "Splunk",
          "SOC Analysis",
          "Web Application Security",
          "Vulnerability Assessment",
          "Penetration Testing",
        ],
      },
      {
        name: "AI & Development",
        skills: [
          "Basic AI Chatbot Development",
          "AI Prompt Engineering",
          "Web App Development",
          "Python",
          "Flask",
        ],
      },
      {
        name: "Networking",
        skills: [
          "TCP/IP",
          "Packet Analysis",
          "Firewall Configuration (UFW)",
          "Network Security",
        ],
      },
      {
        name: "OS/Tools",
        skills: ["Linux", "Logo Design"],
      },
      {
        name: "Security Concepts",
        skills: [
          "IAM",
          "Encryption",
          "Traffic Analysis",
          "Threat Mitigation",
          "Intrusion Detection",
        ],
      },
    ],
    soft: [
      "Problem-solving",
      "Communication",
      "Team Collaboration",
      "Time Management",
      "Attention to Detail",
      "Analytical Skills",
      "Critical Thinking",
    ],
  },
  experience: [
    {
      title: "Cybersecurity Analyst Virtual Internship",
      company: "Virtual Program",
      duration: "2024",
      responsibilities: [
        "Conducted SOC analysis for threat detection and incident response, identifying and mitigating 15+ potential security incidents.",
        "Documented technical findings and communicated security risks to non-technical stakeholders, resulting in a 10% improvement in security awareness among staff.",
      ],
    },
    {
      title: "Cybersecurity Management Virtual Internship",
      company: "Virtual Program",
      duration: "2024",
      responsibilities: [
        "Analyzed email threats and packet captures to identify attack patterns, preventing 20+ phishing attacks.",
        "Developed threat mitigation strategies aligned with web application security best practices, reducing vulnerabilities by 25%.",
      ],
    },
    {
      title: "Pinnacle Labs Internship",
      company: "Pinnacle Labs",
      duration: "2024",
      responsibilities: [
        "Engineered a Python-based keylogger and password strength analyzer, improving password security recommendations by 20%.",
        "Assisted in prototyping a basic AI chatbot for internal threat alerts using NLP libraries, reducing the average response time to security alerts by 15%.",
      ],
    },
    {
      title: "Brand Ambassador",
      company: "INSEC GROUP",
      duration: "2024 – 2025",
      responsibilities: [
        "Promoted INSEC GROUP across social media, events, and direct engagement, boosting brand awareness.",
        "Collaborated with the marketing team to gather feedback and enhance brand visibility, strengthening communication and networking skills.",
      ],
    },
  ],
  projects: [
    {
      name: "Web Application with Basic AI Integration",
      description: [
        "Built a Flask-based web app with experimental AI features for user interaction, increasing user engagement by 30% during testing.",
        "Utilized OpenAI APIs for basic automated responses.",
      ],
      techStack: ["Flask", "Python", "HTML", "CSS", "OpenAI API"],
    },
    {
      name: "Network Traffic Analyzer with Wireshark",
      description: [
        "Designed custom filters to detect anomalies in packet capture (PCAP) files, improving network intrusion detection accuracy by 20%.",
        "Mapped network vulnerabilities using Linux scripting.",
      ],
      techStack: ["Wireshark", "Linux Scripting", "PCAP Analysis"],
    },
    {
      name: "Logo Design for Cybersecurity Club",
      description: [
        "Created brand identity assets (logos, banners) for college cybersecurity initiatives, increasing club membership by 25%.",
      ],
      techStack: ["Graphic Design Tools"],
    },
    {
      name: "UFW Firewall Configuration in Linux",
      description: [
        "Configured UFW firewall rules to restrict unauthorized traffic on Linux servers, blocking 95% of unauthorized access attempts.",
      ],
      techStack: ["Linux", "UFW", "Network Security"],
    },
  ],
  certifications: [
    "EC-Council: Ethical Hacking Essentials, SQL Injection Attack",
    "Great Learning: Introduction to Ethical Hacking",
    "CareerX: Cyber Security Analyst",
  ],
  declaration:
    "I hereby declare that the information provided above is true and correct to the best of my knowledge and belief. I take full responsibility for the accuracy of the details mentioned.",
};
