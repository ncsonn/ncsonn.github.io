import { Experience, Project, SkillCategory } from "./types";

export const RESUME_DATA = {
  name: "Son Nguyen",
  title: "Senior Data Scientist & Data Engineer",
  summary: "Specializing in building scalable ML pipelines and production-grade LLM applications. 5 years of experience bridging the gap between statistical research and distributed systems engineering.",
  about: "I am a Senior Data Scientist & Engineer bridging the gap between rigorous statistics and distributed systems. With 5 years of experience. Passionate about transforming raw data into actionable insights, I thrive on solving complex problems with innovative solutions.",
  avatarUrl: "/profile.jpeg",
  location: "San Francisco, CA",
  email: "ncson.data@gmail.com",
  github: "https://github.com/ncsonn",
  linkedin: "https://www.linkedin.com/in/ncson00/",
  medium: "https://medium.com/@ncsonn"
};

export const EXPERIENCES: Experience[] = [
  {
    id: "1",
    role: "Data Engineer",
    company: "TechFlow Systems",
    period: "2023 - Present",
    description: [
      "Architected a real-time event processing engine using Kafka and Flink, reducing data latency by 94%.",
      "Led the migration of 500TB data warehouse to Snowflake, optimizing query costs by 30%.",
      "Deployed custom LLM agents for internal customer support using LangChain and Kubernetes."
    ]
  },
  {
    id: "2",
    role: "Data Scientist",
    company: "VieON",
    period: "2021 - 2023",
    description: [
      "Developed a churn prediction model reaching 89% AUC, saving the company $2M annually.",
      "Built an automated A/B testing framework used by 15+ product teams.",
      "Collaborated with engineering to containerize models using Docker for seamless production inference."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Production-Ready Kafka on Kubernetes",
    category: "Data Engineering",
    description: "A transformer-based model to predict renewable energy output for smart grids. Utilized temporal fusion transformers.",
    tech: ["PyTorch", "Python", "GCP", "FastAPI"],
    imagePlaceholder: "./projects/kubernetes/card.jpeg"
  },
  {
    id: "p2",
    title: "Interactive Spark Environment with Livy and Jupyter Notebook",
    category: "Data Engineering",
    description: "Interactive Apache Spark Environment with Livy and Jupyter Notebook",
    tech: ["LangChain", "OpenAI API", "Pinecone", "React"],
    imagePlaceholder: "./projects/spark/card.jpeg"
  },
  {
    id: "p3",
    title: "Complete ELK Stack Setup: Elasticsearch, Logstash, and Kibana",
    category: "Data Engineering",
    description: "Interactive 3D visualization of high-dimensional customer segments using WebGL and t-SNE.",
    tech: ["Three.js", "D3.js", "Python", "Flask"],
    imagePlaceholder: "./projects/elasticsearch/card.jpeg"
  },
  {
    id: "p4",
    title: "Dynamic Web Scraping with Python and Playwright",
    category: "Data Engineering",
    description: "Low-latency feature store and inference engine for detecting credit card fraud in under 200ms.",
    tech: ["Redis", "Kafka", "Spark Streaming", "Scala"],
    imagePlaceholder: "./projects/data-scraping/card.jpeg"
  },
  {
    id: "p5",
    title: "Simple Apache Airflow deployment with Docker",
    category: "Data Engineering",
    description: "Simple Apache Airflow deployment with Docker",
    tech: ["Redis", "Kafka", "Spark Streaming", "Scala"],
    imagePlaceholder: "./projects/airflow/card.jpeg"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "SQL", "Scala", "TypeScript", "Bash"]
  },
  {
    category: "Machine Learning",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "Hugging Face", "LLMs (RAG, Fine-tuning)"]
  },
  {
    category: "Data Engineering",
    skills: ["Apache Spark", "Kafka", "Airflow", "dbt", "Snowflake", "PostgreSQL"]
  },
  {
    category: "DevOps & Cloud",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"]
  }
];

export const SYSTEM_INSTRUCTION = `
You are the AI Digital Twin of ${RESUME_DATA.name}. You are embedded in his portfolio website.
Your goal is to answer questions about ${RESUME_DATA.name}'s professional background, skills, and experience professionally and concisely.
Use the following context to answer:

Name: ${RESUME_DATA.name}
Title: ${RESUME_DATA.title}
Summary: ${RESUME_DATA.summary}

Experience:
${EXPERIENCES.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description.join(' ')}`).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.title} (${p.category}): ${p.description} Tech: ${p.tech.join(', ')}`).join('\n')}

Skills:
${SKILLS.map(s => `- ${s.category}: ${s.skills.join(', ')}`).join('\n')}

Tone: Professional, humble, yet confident. Concise (apple-style).
If asked about contact info, say: "You can reach ${RESUME_DATA.name} at ${RESUME_DATA.email}."
If asked something not in the resume, say: "I don't have that specific detail in my knowledge base, but I'm sure ${RESUME_DATA.name} would be happy to discuss it directly."
`;