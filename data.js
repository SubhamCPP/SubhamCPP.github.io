// Update this single file to customize your site content.
// Icons use Iconify (Simple Icons and other sets). Example: "simple-icons:python", "mdi:github".

window.PORTFOLIO_DATA = {
  profile: {
    name: "Subham Panda",
    title: "Data Scientist at Amgen",
    eyebrow: "GenAI · ML · Data Science",
    summary:
      "Data Scientist focusing on enterprise AI in biotech—building scalable agentic systems, ML pipelines, and analytics that accelerate R&D, clinical, and platform engineering outcomes.",
    email: "subhampanda958@gmail.com",
    location: "Los Angeles, CA",
    resumeHref: "./ResumeSubham4.pdf",
  },

  socials: [
    { label: "Email", icon: "mdi:email-outline", href: "mailto:subhampanda958@gmail.com" },
    { label: "LinkedIn", icon: "mdi:linkedin", href: "https://www.linkedin.com/in/subham-panda-2668aa186/" },
  ],

  experience: [
    {
      company: "Amgen",
      role: "Data Scientist",
      roleShort: "Data Scientist",
      location: "Thousand Oaks, CA",
      period: "Jan 2025 – Present",
      summary:
        "Partnered with Amgen's Enterprise Agentic Ecosystem platform to enable reusable AI agents across R&D, clinical, and commercial programs. Built an MCP client and deployed modular MCP servers on EKS and Databricks, cutting agent acceleration by ~18%. Integrated LLM agents with Databricks for secure, observable workflows using OpenAI, LangChain, Mosaic AI, and MLflow. Co-led platform pipelines for cost monitoring and compliance automation.",
      tools: ["Agents", "MCP", "LLM Eval","PySpark", "Databricks", "AWS", "FastAPI", "OpenAI", "MLflow", "Kubernetes"],
    },
    {
      company: "Amgen",
      role: "Data Scientist Grad Intern",
      roleShort: "Data Scientist Intern",
      location: "Thousand Oaks, CA",
      period: "May 2024 – Aug 2024",
      summary:
        "Built an end-to-end anomaly detection pipeline on Databricks with PySpark, BERT embeddings, and MLflow. Delivered clustering and 15‑day forecasting for device metrics with GraphQL integration and a KPI dashboard. Prototyped a causal inference approach for clinical trial eligibility using LangChain, OpenAI, and Pinecone with an analytics dashboard for scientists.",
      tools: ["PySpark", "Spark-ML", "Databricks", "MLflow", "Power BI", "OpenAI", "LangChain"],
    },
    {
      company: "Cal Poly Pomona",
      role: "Research Assistant – Machine Learning",
      roleShort: "Research Assistant - ML",
      location: "Pomona, CA",
      period: "Sep 2023 – Dec 2024",
      summary:
        "Researched precision agriculture using satellite raster data, CUDA kernels, and HPC acceleration (cuBLAS/cuFFT, JAX, OpenCL). Trained crop suitability DNNs with cuDNN/MXNet/TensorRT and integrated spatial modeling in ESRI ArcGIS.",
      tools: ["CUDA", "JAX", "MXNet", "TensorRT", "OpenCL", "ArcGIS"],
    },
    {
      company: "ValueLabs",
      role: "Senior Software Engineer – Machine Learning",
      roleShort: "Senior Software Engineer - ML",
      location: "Hyderabad, India",
      period: "Mar 2023 – Jul 2023",
      summary:
        "Led image analytics for a Digital Assets Management Platform using FastAPI with InceptionV3 classification, OCR, and geo‑tagging—boosting efficiency by ~20%. Optimized storage on Azure Blob/Data Lake (retrieval time −40%) and shipped an NLP pipeline that reduced user query resolution by ~15%.",
      tools: ["FastAPI", "Azure ML", "OCR", "Computer Vision"],
    },
    {
      company: "ValueLabs",
      role: "Software Engineer – Machine Learning",
      roleShort: "Software Engineer - ML",
      location: "Hyderabad, India",
      period: "Jun 2022 – Mar 2023",
      summary:
        "Built predictive models for churn, forecasting, and inventory optimization with ~10% accuracy gains using RAPIDS cuML and statistical methods. Automated NLP/CV tasks with Azure Cognitive Services, cutting manual analysis by ~30% and improving accuracy by ~20%. Delivered Qlik dashboards that sped up decisions by ~20%.",
      tools: ["Databricks", "Azure ML", "Qlik", "Predictive Analytics"],
    },
    {
      company: "ValueLabs",
      role: "Software Development Intern",
      roleShort: "Software Development Intern",
      location: "Hyderabad, India",
      period: "Mar 2022 – May 2022",
      summary:
        "Developed a spam classifier (~90% accuracy) and a regression model for sales forecasting, reducing manual intervention and improving planning.",
      tools: ["Python", "scikit-learn", "Azure ML", "Qlik"],
    },
  ],



  skills: [
    { label: "Python", icon: "simple-icons:python" },
    { label: "PySpark", icon: "simple-icons:apachespark" },
    { label: "R", icon: "simple-icons:r" },
    { label: "C/C++", icon: "simple-icons:cplusplus" },
    { label: "Java", icon: "simple-icons:openjdk" },
    { label: "SQL", icon: "simple-icons:mysql" },
    { label: "Pandas", icon: "simple-icons:pandas" },
    { label: "NumPy", icon: "simple-icons:numpy" },
    { label: "scikit-learn", icon: "simple-icons:scikitlearn" },
    { label: "TensorFlow", icon: "simple-icons:tensorflow" },
    { label: "PyTorch", icon: "simple-icons:pytorch" },
    { label: "OpenCV", icon: "simple-icons:opencv" },
    { label: "Plotly", icon: "simple-icons:plotly" },
    { label: "Power BI", icon: "simple-icons:powerbi" },
    { label: "Tableau", icon: "simple-icons:tableau" },
    
    { label: "Agents", icon: "mdi:robot-outline" },
    { label: "MCP", icon: "mdi:source-branch" },
    { label: "Docker", icon: "simple-icons:docker" },
    { label: "FastAPI", icon: "simple-icons:fastapi" },
    { label: "MLflow", icon: "simple-icons:mlflow" },
    { label: "Snowflake", icon: "simple-icons:snowflake" },
    { label: "LangChain", icon: "simple-icons:langchain" },
    { label: "AWS", icon: "simple-icons:amazonaws" },
    { label: "AKS", icon: "simple-icons:kubernetes" },
    { label: "Databricks", icon: "simple-icons:databricks" },
  ],

  education: [
    {
      school: "California State Polytechnic University – Pomona",
      degree: "M.S. in Computer Science",
      period: "Aug 2023 – Dec 2024",
      location: "Pomona, CA",
    },
    {
      school: "National Institute of Science and Technology",
      degree: "B.Tech. in Computer Science Engineering",
      period: "Aug 2018 – Jul 2022",
      location: "Odisha, India",
    },
  ],
};

