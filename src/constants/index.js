import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    java,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    smart,
    docker,
    wipro,
    sql,
    scifi,
    culogo,
    tesla,
    carrent,
    jobit,
    tripguide,
    cpp,
    hirenest,
    portfolio,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Software Engineer",
      icon: mobile,
    },
    {
      title: "Java Developer",
      icon: backend,
    },
    {
      title: "UI/UX Enthusiast",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "C++",
      icon: cpp
    },
     {
      name: "SQL",
      icon: sql
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Wipro TalentNext Training",
      company_name: "Wipro",
      icon: wipro,
      iconBg: "#E6DEDD",
      date: "Jul 2025 - Aug 2025",
      points: [
      "Completed industry-oriented training in .NET Full Stack Development through the Wipro TalentNext Program.",
      "Developed practical understanding of C#, ASP.NET, SQL Server, frontend technologies, and web application architecture.",
      "Worked on project-based learning modules to strengthen software engineering and problem-solving skills.",
      ],
    },
    {
      title: "In-House Training Program",
      company_name: "Chandigarh University",
      icon: culogo,
      iconBg: "#E6DEDD",
      date: " May 2024 - Jul 2024",
      points: [
      "Successfully completed training focused on Data Structures & Algorithms and modern Web Development.",
      "Enhanced coding, debugging, and problem-solving skills through practical learning.",
      "Gained hands-on experience with frontend technologies, backend concepts, and responsive application development.",
      "Developed strong understanding of software engineering fundamentals and real-world development practices.",
      ],
    },
    {
      title: "Technical Core Member",
      company_name: "Sci-Fi Innovation Club | Chandigarh University",
      icon: scifi,
      iconBg: "#E6DEDD",
      date: " Jun 2023 - May 2024",
      points: [
      "Worked collaboratively on innovative technology projects and technical initiatives.",
      "Assisted in organizing workshops, technical sessions, and innovation-driven activities.",
      "Contributed to software development, problem-solving, and creative idea implementation.",
      "Developed leadership, collaboration, and technical communication skills through active participation.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Rajan transformed our ideas into a stunning digital experience. Highly recommend!",
      name: "Aabha Singh",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "One of the most dedicated developers we've worked with. Excellent delivery and collaboration.",
      name: "Raj",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Rajan's skill in building scalable systems is remarkable. A true asset to any project.",
      name: "Ranjana",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "HireNest",
      description:
        "HireNest is a modern and responsive smart hiring platform that connects recruiters with talented candidates through a clean and user-friendly interface. The platform allows users to explore jobs, upload opportunities, and manage hiring workflows efficiently. Built using React, TypeScript, Tailwind CSS, Mantine UI, and deployed on Netlify..",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Typescript",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "Mantine",
          color: "pink-text-gradient",
        },
        {
          name: "Tabler-icons",
          color: "blue-text-gradient",
        },

      ],
      image: hirenest,
      source_code_link: "https://github.com/Rahul12886/JOB-PORTAL",
    },
    {
      name: "3D Portfolio",
      description:
        "A modern and responsive 3D portfolio website designed to showcase my projects, technical skills, certifications, and development journey through immersive visuals, interactive animations, and a clean futuristic user experience. Built using React.js, Tailwind CSS, Three.js, and modern frontend technologies.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "Packages",
          color: "pink-text-gradient",
        },
         {
          name: "Javascript XML",
          color: "pink-text-gradient",
        },
         {
          name: "HTML",
          color: "blue-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/Rahul12886/Portfolio",
    },
    {
      name: "Smart Agriculture",
      description:
        "Smart Agriculture is an IoT-based sustainable farming system developed using Arduino and advanced sensors to monitor environmental conditions in real time. The system tracks temperature, humidity, soil moisture, pH, CO2 levels, and light intensity to support efficient crop management, optimize resource utilization.",
      tags: [
        {
          name: "IoT Sensors",
          color: "blue-text-gradient",
        },
        {
          name: "Environmental Monitoring",
          color: "green-text-gradient",
        },
        {
          name: "Embedded Systems",
          color: "pink-text-gradient",
        },
        {
          name: "Data Analysis",
          color: "blue-text-gradient",
        },
      ],
      image: smart,
      source_code_link: "https://github.com/Rahul12886/Smart-Agriculture-Sustainable-Farming",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };