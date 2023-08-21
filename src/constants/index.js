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
    // redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    // docker,
    // meta,
    bt,
    // starbucks,
    // tesla,
    // shopify,
    crm,
    threads,
    cocktail,
    // jobit,
    // tripguide,
    threejs,
    react_native,
    fridge
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    // {
    //   title: "React.js Developer",
    //   company_name: "Starbucks",
    //   icon: starbucks,
    //   iconBg: "#383E56",
    //   date: "March 2020 - April 2021",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "Data Analyst",
      company_name: "Bravery Trust",
      icon: bt,
      iconBg: "#E6DEDD",
      date: "Oct 2018 - Present",
      points: [
        "Data Collection and Processing: Design and implement data collection processes, ensuring data accuracy, consistency, and reliability. Extract and manipulate large datasets from various sources, utilizing Excel and SharePoint.",
        "Data Analysis and Interpretation: Conduct comprehensive analyses on complex datasets to identify trends, patterns, and correlations. Apply statistical techniques to extract meaningful insights and develop actionable recommendations for business stakeholders.",
        "Data Modeling and Visualization: Develop and maintain data models, ensuring the integrity and accessibility of data. Create visually appealing and informative dashboards, reports, and presentations to communicate findings effectively to both technical and non-technical audiences.",
        "Data Quality and Governance: Establish data quality standards and protocols to ensure data integrity and consistency. Identify and resolve data quality issues,working closely with cross-functional teams to improve data accuracy and reliability.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Threads",
      description:
        "This is a threads application built with MERN stack and Next.js 13.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: threads,
      source_code_link: "https://github.com/dark40/threads",
    },
    {
      name: "Simply CRM",
      description:
        "A simple case management built with flexibility to to extend scope. Publicly known Client Relationship Management (CRM) system usually features numerous functions and components but not tailored for some businesses. ",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Ant Design",
          color: "pink-text-gradient",
        },
      ],
      image: crm,
      source_code_link: "https://github.com/dark40/crm",
    },
    {
      name: "Job Search Mobile App",
      description:
        "This is a job search app built with EXPO and React Native. It allows people to search the job based on the title or keywords. It also features in popular jobs and nearby jobs that based on location. The customAPI is used from Rapid API that allows to search the jobs in the market.  ",
      tags: [
        {
          name: "React Native",
          color: "blue-text-gradient",
        },
        {
          name: "expo",
          color: "green-text-gradient",
        },
        {
          name: "Rapid API",
          color: "pink-text-gradient",
        },
      ],
      image: react_native,
      source_code_link: "https://github.com/dark40/react_native_jobs",
    },
    {
      name: "Fridge Magician",
      description:
        "This application allows the user to determine what recipes they can make with the ingredients stored within their fridge. The application uses a mysql database to provide recipe information to the user, and allows the user to change the ingredients within their fridge from valid ingredients stored in the database.",
      tags: [
        {
          name: "mySQL",
          color: "blue-text-gradient",
        },
        {
          name: "MVC",
          color: "green-text-gradient",
        },
        {
          name: "Handlebars",
          color: "pink-text-gradient",
        },
      ],
      image: fridge,
      source_code_link: "https://github.com/dark40/fridge-magican/tree/main",
    },
    {
      name: "Cocktail Recipe Finder",
      description:
        "Cocktail Recipe Finder is a great news for cocktail lovers who want to make cocktails at home. Simply search the name, it gives you a demo picture, a list of ingredients and an instruction.",
      tags: [
        {
          name: "restapi",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: cocktail,
      source_code_link: "https://github.com/dark40/cocktail-recipe-party-activity",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };