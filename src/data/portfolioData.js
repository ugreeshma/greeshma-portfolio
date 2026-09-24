// Labdhi Mandovara Personal Portfolio Data System
// You can easily modify this file to update your portfolio content!

import profilePhoto from '../assets/profile.jpg';

// Import project images
import dhanSaarthiImg from '../assets/projects/dhan_saarthi.png';
import emodioImg from '../assets/projects/emodio.png';
import iovSafetyImg from '../assets/projects/iov_safety.png';
import speechEmotionImg from '../assets/projects/speech_emotion.png';
import voiceChatbotImg from '../assets/projects/voice_chatbot.png';

// Import artwork images
import artwork1 from '../assets/artwork/artwork1.jpg';
import artwork2 from '../assets/artwork/artwork2.jpg';
import artwork3 from '../assets/artwork/artwork3.jpg';
import artwork4 from '../assets/artwork/artwork4.jpg';

// Import hackathon gallery images
import nomuraCake from '../assets/hackathons/nomura/cake.jpg';
import nomuraUser from '../assets/hackathons/nomura/user.jpg';
import nomuraCert from '../assets/hackathons/nomura/certificate.png';
import emodioGalleryImg from '../assets/hackathons/emodio/certificate.png';

export const portfolioData = {
  personalInfo: {
    name: "Labdhi Mandovara",
    title: "AI Engineer & Creative Designer",
    tagline: "Bridging the gap between intelligent systems and human intuition.",
    email: "mandowaralabdhi@gmail.com",
    phone: "+91 8225804777",
    github: "https://github.com/Labdhimandovara",
    linkedin: "https://linkedin.com/in/labdhi-mandovara-047561278/",
    resumeUrl: "#", // Add your actual resume file path or hosting link here (e.g. "/resume.pdf")
    profilePhoto: profilePhoto,
    bio: {
      intro: "I am a B.Tech (ENTC) student at Symbiosis Institute of Technology, Pune, specializing in building intelligent systems that have real-world impact. My work blends deep technical engineering with analytical thinking and intuitive design.",
      story: "My engineering journey is fueled by a dual passion: a deep curiosity for AI architectures and a natural pull towards creative layout design and human communication. Whether I am optimizing 5G low-latency collision warning algorithms for vehicles, training LSTMs to recognize emotion from human speech waveforms, or designing layouts as Magazine Head for my department, I strive to make technology feel accessible, structured, and profoundly human. I believe the most impactful AI solutions are those that integrate seamlessly into human workflows with clarity and empathy.",
      interests: [
        "Analytical Problem Solver",
        "Sketching and Painting",
        "AI Research Enthusiast",
        "Community Volunteer"
      ]
    }
  },
  
  skills: [
    {
      category: "Programming",
      items: [
        { name: "Python", level: "Advanced" },
        { name: "C / C++", level: "Advanced" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "Dart", level: "Intermediate" },
        { name: "HTML & CSS", level: "Advanced" }
      ]
    },
    {
      category: "AI / Machine Learning",
      items: [
        { name: "Deep Learning", level: "Advanced" },
        { name: "Computer Vision", level: "Advanced" },
        { name: "Natural Language Processing", level: "Intermediate" },
        { name: "Speech Emotion Recognition", level: "Advanced" },
        { name: "MFCC Feature Engineering", level: "Intermediate" }
      ]
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "Flask", level: "Advanced" },
        { name: "Flutter", level: "Intermediate" },
        { name: "Vite & React", level: "Intermediate" }
      ]
    },
    {
      category: "Developer Tools / Platforms",
      items: [
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Arduino IDE", level: "Intermediate" },
        { name: "Keil µVision", level: "Intermediate" },
        { name: "Google AI Studio", level: "Advanced" },
        { name: "Power BI", level: "Intermediate" }
      ]
    },
    {
      category: "Technical Skills / Concepts",
      items: [
        { name: "MATLAB", level: "Advanced" },
        { name: "Data Analysis", level: "Advanced" },
        { name: "Digital Circuits", level: "Advanced" },
        { name: "Signal Processing", level: "Advanced" },
        { name: "Data Structures", level: "Advanced" },
        { name: "API Integration", level: "Advanced" },
        { name: "Power BI", level: "Intermediate" }
      ]
    }
  ],

  projects: [
    {
      id: "speech-emotion",
      title: "Speech Emotion Recognition",
      category: "Deep Learning & DSP",
      description: "An LSTM-based machine learning model that extracts human speech emotions from raw audio files. It parses spectral features to categorize distinct vocal emotional states.",
      image: speechEmotionImg,
      tech: ["LSTM Networks", "MFCC Features", "RAVDESS Dataset", "CREMA-D Dataset", "Python"],
      achievements: [
        "Engineered MFCC and spectral contrast features for robust classification.",
        "Achieved high emotion accuracy rates across diverse datasets."
      ],
      github: "https://github.com/Labdhimandovara/Emodio",
      demo: "#"
    },
    {
      id: "iov-safety",
      title: "Collision Detection in 5G IoV",
      category: "Computer Vision & IoT",
      description: "A public safety framework built for Internet of Vehicles (IoV) networks. It implements real-time vehicle trajectory prediction and 5G-based data relaying. Uses advanced AI risk assessment models to predict collision risks with ultra-low latency.",
      image: iovSafetyImg,
      tech: ["Python", "5G Network Sim", "Trajectory Prediction", "Computer Vision"],
      achievements: [
        "Engineered real-time vehicle tracking for accident prevention.",
        "Developed automated emergency response system to alert emergency contacts and services after high-impact events."
      ],
      github: "https://github.com/Alankaar63/Collision-Warning-Service-using-5G",
      demo: "#"
    },
    {
      id: "voice-chatbot",
      title: "Multilingual Voice Chatbot",
      category: "Natural Language Processing",
      description: "A browser-based multilingual chatbot supporting voice-based conversations in Hindi and Telugu. Employs modern speech-to-text models and processes responses instantly via a light Flask backend.",
      image: voiceChatbotImg,
      tech: ["Flask", "JavaScript", "NLP Models", "Render Cloud"],
      achievements: [
        "Integrated seamless real-time response generation.",
        "Deployed backend successfully on Render for public accessibility."
      ],
      github: "https://github.com/Labdhimandovara/Voice-Bot",
      demo: "https://voice-bot-c655.onrender.com/"
    }
  ],

  hackathonProjects: [
    {
      title: "Cortex",
      event: "Nomura KakushIN 10.0 | Information Technology Division Coding Contest",
      period: "Jul 2026",
      highlights: [
        "Recognized as a finalist from 1,000+ participating teams in Nomura KakushIN 10.0 through multiple rounds.",
        "Presented Dhan-Saarthi, an AI-powered cross-platform financial life companion with personalized assistance."
      ],
      image: dhanSaarthiImg,
      tech: ["Flutter", "Google AI Studio", "Python", "API Integration"],
      role: "Lead AI Integration Developer",
      description: "Dhan-Saarthi is an AI-powered cross-platform financial life companion providing personalized assistance and predictive wealth management.",
      learned: "Engineered real-time API integrations and optimized generative AI prompts to deliver instantaneous financial guidance.",
      gallery: [nomuraCake, nomuraUser, nomuraCert]
    },
    {
      title: "Emodio",
      event: "LaserHacks 2025 | Global Hackathon by SCRS & Lasell University, USA",
      period: "Nov 2025",
      highlights: [
        "Advanced to the Day-2 Finals after a highly competitive global evaluation at LaserHacks 2025.",
        "Built Emodio, an AI-powered vocal biomarker teletherapy solution with an end-to-end ML pipeline."
      ],
      image: emodioImg,
      tech: ["Python", "Machine Learning", "Vocal Biomarkers", "Signal Processing"],
      role: "ML Pipeline Engineer",
      description: "Emodio is an AI-powered vocal biomarker teletherapy solution utilizing an end-to-end ML pipeline.",
      learned: "Deepened expertise in signal processing and translating vocal biomarkers into actionable clinical insights.",
      gallery: [emodioGalleryImg]
    }
  ],

  experience: [
    {
      role: "Junior Prompt Engineer",
      company: "Edysor AI",
      period: "Jul 2026 - Present",
      description: "Developed browser-based AI voice agents using Agora SDK, Pipecat, WebRTC, Deepgram, Groq, and Cartesia, implementing streaming speech recognition, LLM inference, and text-to-speech pipelines."
    },
    {
      role: "Magazine Head",
      company: "Department Magazine (SIT)",
      period: "Aug 2025 - Present",
      description: "Leading the layout design, content curation, and aesthetic planning of the official departmental magazine. Conceptualized structural updates and oversaw the layout team for publishing."
    },
    {
      role: "Design Head",
      company: "Department Magazine (SIT)",
      period: "Aug 2024 - Jul 2025",
      description: "Handled design direction, layout planning, and visual coordination for the departmental magazine while shaping the overall creative identity of the publication."
    },
    {
      role: "Outreach Intern",
      company: "Social House Learning",
      period: "Nov 2025 - Jan 2026",
      description: "Contributed to skill-development events, managed stakeholder communication, and coordinated community events with students."
    },
    {
      role: "Volunteer",
      company: "Akshar Bharati NGO",
      period: "Jan 2025 - Apr 2025",
      description: "Conducted 10+ educational visits with scientific toy-based learning activities. Co-organized 3+ fundraising events and fostered corporate partnerships."
    },
    {
      role: "Junior Marketing Manager",
      company: "AIESEC",
      period: "Feb 2024 - Jul 2024",
      description: "Planned and executed 3+ tech outreach campaigns. Analyzed feedback from 200+ participants to improve conversion rates and engagement."
    }
  ],

  education: [
    {
      degree: "B.Tech in Electronics & Telecommunication (ENTC)",
      institution: "Symbiosis Institute of Technology, Pune",
      period: "2023 - 2027",
      grade: "84.33% (till 6th Sem)"
    },
    {
      degree: "Class XII",
      institution: "National Public School (Gandhinagar), Indore",
      period: "2022 - 2023",
      grade: "76.80%"
    },
    {
      degree: "Class X",
      institution: "National Public School (Gandhinagar), Indore",
      period: "2020 - 2021",
      grade: "91.00%"
    }
  ],

  hackathons: [
    {
      title: "Cortex",
      host: "Nomura KakushIN 10.0 | Information Technology Division Coding Contest",
      period: "Jul 2026",
      badge: "National Finalist",
      highlights: [
        "Recognized as a finalist from 1,000+ participating teams in Nomura KakushIN 10.0 through multiple rounds.",
        "Presented Dhan-Saarthi, an AI-powered cross-platform financial life companion with personalized assistance."
      ]
    },
    {
      title: "LaserHacks 2025 Global Finalist",
      host: "SCRS & Lasell University, USA",
      period: "Nov 2025",
      badge: "Global Finalist",
      highlights: [
        "Advanced to the Day-2 Finals after a highly competitive global evaluation at LaserHacks 2025 hackathon.",
        "Built Emodio, an AI-powered vocal biomarker teletherapy solution with an end-to-end ML pipeline."
      ]
    }
  ],

  certifications: [
    { name: "Cisco Networking Essentials", issuer: "Cisco", detail: "Networking protocols, IP addressing, routing, switching, and network security." },
    { name: "Image Processing With MATLAB", issuer: "MathWorks", detail: "Image enhancement, color detection, segmentation, and advanced filtering." },
    { name: "App Building Onramp", issuer: "MathWorks", detail: "Building interactive applications in App Designer for UI testing and visualization." },
    { name: "Computer Architecture", issuer: "Skill India", detail: "Processor architecture, memory hierarchy, cache optimization, and organization." },
    { name: "McKinsey.org Forward Program", issuer: "McKinsey & Company", detail: "Structured problem-solving, digital agility, teamwork, and workplace readiness." }
  ],

  artworks: [
    {
      title: "Bhagat Singh",
      image: artwork1,
      tag: "Portrait Sketch",
      description: "A monochrome hand-drawn portrait of Bhagat Singh made with strong contrast and clean line work."
    },
    {
      title: "Elephant",
      image: artwork2,
      tag: "Graphite Drawing",
      description: "A detailed pencil drawing of an elephant and calf that focuses on texture, shading, and form."
    },
    {
      title: "Expressionist Portrait",
      image: artwork3,
      tag: "Color Composition",
      description: "A vibrant mixed-media portrait built from layered color blocks, symbolic eyes, hands, leaves, and a bird to express emotion and identity."
    },
    {
      title: "Art Exhibition Wall",
      image: artwork4,
      tag: "Collection",
      description: "A wall display of many finished drawings and paintings mounted outdoors, bringing together portraits, scenery, and expressive studies."
    }
  ]
};
