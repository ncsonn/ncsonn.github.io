import { url } from "inspector";
import { Experience, Project, SkillCategory } from "./types";

export const RESUME_DATA = {
  name: "Son Nguyen",
  title: "Hello, world!",
  summary: "Specializing in building scalable ML pipelines and production-grade LLM applications. 5 years of experience bridging the gap between statistical research and distributed systems engineering.",
  about: "“Without data, you're just another person with an opinion.” - W. Edwards Deming.",
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
    company: "Visily",
    period: "2023 - Present",
    description: [
      // "Architected a real-time event processing engine using Kafka and Flink, reducing data latency by 94%.",
      // "Led the migration of 500TB data warehouse to Snowflake, optimizing query costs by 30%.",
      // "Deployed custom LLM agents for internal customer support using LangChain and Kubernetes."
    ]
  },
  {
    id: "2",
    role: "Data Scientist",
    company: "VieON",
    period: "2021 - 2023",
    description: [
      // "Developed a churn prediction model reaching 89% AUC, saving the company $2M annually.",
      // "Built an automated A/B testing framework used by 15+ product teams.",
      // "Collaborated with engineering to containerize models using Docker for seamless production inference."
    ]
  },
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Autoscaling Kafka Consumers on Kubernetes using Confluent and KEDA",
    category: "Engineering",
    description: "Many modern data platforms rely on Kafka to move events between services in real time. As traffic grows or becomes bursty, Kafka consumers can easily fall behind, creating backlogs that impact downstream systems.",
    tech: ["Kubernetes", "Confluent", "Kafka", "KEDA", "Autoscaling"],
    imagePlaceholder: "./projects/kubernetes/card.jpeg",
    url: "https://medium.com/@ncsonn/autoscaling-kafka-consumers-on-kubernetes-using-confluent-and-keda-476b47faf736"
  },
  {
    id: "p2",
    title: "Interactive Spark Environment with Livy and Jupyter Notebook",
    category: "Engineering",
    description: "Working with large datasets often requires both distributed processing power and an interactive development environment.",
    tech: ["LangChain", "OpenAI API", "Pinecone", "React"],
    imagePlaceholder: "./projects/spark/card.jpeg",
    url: "https://medium.com/@ncsonn/interactive-apache-spark-environment-with-livy-and-jupyter-notebook-7f3f3f6f4e2"
  },
  {
    id: "p3",
    title: "Complete ELK Stack Setup: Elasticsearch, Logstash, and Kibana",
    category: "Engineering",
    description: "Monitoring logs efficiently is crucial for maintaining system reliability and performance, and the ELK stack (Elasticsearch, Logstash, and Kibana) provides a powerful solution for centralized log management.",
    tech: ["Elasticsearch", "Logstash", "Kibana", "Docker"],
    imagePlaceholder: "./projects/elasticsearch/card.jpeg",
    url: "https://medium.com/@ncsonn/elasticsearch-logstash-kibana-elk-stack-with-docker-compose-a-complete-setup-guide-db8bfeebda7a"
  },
  {
    id: "p4",
    title: "Dynamic Web Scraping with Python and Playwright",
    category: "Engineering",
    description: "Playwright is a popular browser automation toolkit that can be used in web scraping to scrape dynamic web content or web apps.",
    tech: ["Redis", "Kafka", "Spark Streaming", "Scala"],
    imagePlaceholder: "./projects/data-scraping/card.jpeg",
    url: "https://medium.com/@ncsonn/dynamic-web-scraping-with-python-and-playwright-781da227e91b"
  },
  {
    id: "p5",
    title: "Simple Apache Airflow deployment with Docker",
    category: "Engineering",
    description: "Apache Airflow is an open-source platform for developing, scheduling, and monitoring batch-oriented workflows. Airflow is deployable in many ways, varying from a single process on your laptop to a distributed setup to support even the biggest workflows. In this guide, we’ll walk through a practical approach to quickly deploying Apache Airflow using Docker.",
    tech: ["Redis", "Kafka", "Spark Streaming", "Scala"],
    imagePlaceholder: "./projects/airflow/card.jpeg",
    url: "https://medium.com/@ncsonn/deploying-apache-airflow-with-docker-bc82fffab6fe"
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