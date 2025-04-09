"use client";

import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

// First, let's define the type for a project
type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;  // optional
  demo?: string;    // optional
  isClickable: boolean;
};

const projects: Project[] = [
  {
    title: "Stock Sentiment Analyzer",
    description: "Built a real-time sentiment pipeline simulating 10,000+ financial tweets/min, filtering spam and extracting $TICKER symbols with >98% accuracy. Applied VADER sentiment analysis and aggregated results using Spark Structured Streaming with 5-min sliding windows updated every minute.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2340&auto=format&fit=crop",
    tags: ["Python", "Apache Spark", "VADER", "NLP", "Real-time Processing", "Data Streaming"],
    isClickable: false
  },
  {
    title: "Stock Screener & Valuation Tool",
    description: "Developed an interactive web app to analyze public stocks using real-time data from Yahoo Finance. Built a customizable 2-stage DCF model with sensitivity analysis for dynamic intrinsic value comparisons.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2340&auto=format&fit=crop",
    tags: ["Python", "yfinance API", "Financial Analysis", "DCF Modeling", "Data Visualization"],
    github: "https://github.com/vkiragi/stock-valuation-tool",
    isClickable: true
  },
];

const education = [
  {
    school: "Georgia Institute of Technology",
    degree: "Master of Science in Computer Science",
    duration: "2025 - present",
    description: "Specialization in Machine Learning",
    coursework: [
      "Relevant coursework: Machine Learning, Statistical Learning, Data and Visual Analytics, Reinforcement Learning",
    ],
    isClickable: false,
  },
  {
    school: "University of California, Davis",
    degree: "Bachelor of Science in Computer Science",
    duration: "2019 - 2023",
    description: "",
    coursework: [
      "Relevant coursework: Algorithms, Databases, Probability and Statistics, Computational Linear Algebra",
    ],
    isClickable: false,
  },
];

const experience = [
  {
    company: "The Honey Jar",
    position: "Software Engineer Intern",
    duration: "Sep 2024 - Nov 2024",
    achievements: [
      "Led the development of a Coin Flip game dApp on Berachain, integrating smart contract interactions with a Next.js frontend and Tailwind CSS, providing users with an interactive and pleasing experience.",
      "Optimized smart contracts for NFT projects, improving gas efficiency by 15% and increasing user interactions by 20% through enhanced dApp features and seamless blockchain integration.",
      "Worked with and debugged an indexer for tracking blockchain transactions, enhancing data retrieval and analysis capabilities for blockchain-based activites, resulting in improved user engagement and quest completion monitoring.",
    ],
    isClickable: false,
  },
  {
    company: "Teamcal AI",
    position: "Software Engineer Intern",
    duration: "May 2024 - Aug 2024",
    achievements: [
      "As the sole developer on this team, I engineered a cutting-edge voice assistant bot using React Native&apos;s Speech Recognition API and custom algorithms, enabling users to manage schedules via voice commands, resulting in overwhelmingly positive feedback on app accessibility",
      "Spearheaded bug-fixing initiatives, significantly reducing app crashes and improving overall stability",
      "Implemented robust error handling and monitoring practices, resulting in enhanced application performance and user experience",
      "Conducted regular code reviews, refactored legacy components, and introduced a comprehensive testing strategy, substantially enhancing code quality and minimizing regression bugs across multiple app releases.",
    ],
    isClickable: false,
  },
  {
    company: "MyAIChef",
    position: "Software Engineer",
    duration: "Sep 2023 - May 2024",
    achievements: [
      "Optimized web scraping algorithms in Python using pandas and Beautiful Soup, achieving a 20% reduction in execution time, leading to streamlined data acquisition processes, facilitating more efficient data updates and improving system performance.",
      "Revamped the app&apos;s interface, done in TypeScript and React Native, enabling smooth navigation, and incorporating user friendly input features, resulting in an increase in user satisfaction.",
      "Successfully implemented data handling improvements, leading to a reduction in execution time, which significantly boosted system performance and overall user engagement.",
    ],
    isClickable: false,
  },
];

export default function Home() {
  // const [visibleSection, setVisibleSection] = useState("hero");
  const aboutRef = useRef<HTMLDivElement>(null); // Create a ref

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Varun Kiragi
            <span className="text-primary/80">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Software Engineer
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <Button
              variant="outline"
              size="icon"
              className="cursor-pointer"
              onClick={() =>
                window.open("https://github.com/vkiragi", "_blank")
              }
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="cursor-pointer"
              onClick={() =>
                window.open("https://www.linkedin.com/in/vkiragi/", "_blank")
              }
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="cursor-pointer"
              onClick={() => window.open("mailto:varunkiragi@icloud.com")}
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 cursor-pointer"
          onClick={scrollToAbout} // Add onClick handler
        >
          <ChevronDown className="h-8 w-8 animate-bounce" />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4" ref={aboutRef}>
        {" "}
        {/* Add ref here */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <p className="text-lg text-muted-foreground mb-6">
              I&apos;m a software engineer with a strong foundation in
              full-stack development and data analysis, with a growing passion
              for applying these skills to solve complex problems in finance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="h-8 w-8" />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            <div className="space-y-12">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className={`p-6 ${edu.isClickable ? "cursor-pointer" : ""}`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <p className="text-primary">{edu.school}</p>
                    </div>
                    <Badge variant="secondary" className="mt-2 md:mt-0 w-fit">
                      {edu.duration}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    {edu.description}
                  </p>
                  <ul className="list-disc list-inside space-y-0.5 text-muted-foreground">
                    {edu.coursework.map((course, i) => (
                      <li key={i}>{course}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="h-8 w-8" />
              <h2 className="text-3xl font-bold">Work Experience</h2>
            </div>
            <div className="space-y-12">
              {experience.map((job, index) => (
                <Card
                  key={index}
                  className={`p-6 ${job.isClickable ? "cursor-pointer" : ""}`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{job.position}</h3>
                      <p className="text-primary">{job.company}</p>
                    </div>
                    <Badge variant="secondary" className="mt-2 md:mt-0 w-fit">
                      {job.duration}
                    </Badge>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-muted-foreground">
                    {job.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className={`overflow-hidden ${
                    project.isClickable ? "cursor-pointer" : ""
                  }`}
                >
                  <div className="aspect-video relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {/* Only show GitHub button if github link exists */}
                      {project.github && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="cursor-pointer"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      )}
                      {/* Only show Demo button if demo link exists */}
                      {project.demo && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="cursor-pointer"
                          onClick={() => window.open(project.demo, "_blank")}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I&apos;m currently open to new opportunities. Whether you have a
              question or want to connect, please feel free to email me.
            </p>
            <Button
              size="lg"
              className="cursor-pointer"
              onClick={() => window.open("mailto:example@example.com")}
            >
              <Mail className="h-5 w-5 mr-2" />
              Say Hello
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
