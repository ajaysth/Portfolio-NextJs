import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A fully responsive e-commerce site with shopping cart functionality, product filtering, and user authentication.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Stripe"],
    },
    {
      id: 2,
      title: "Task Management App",
      description: "An intuitive task management application with drag-and-drop functionality, categories, and progress tracking.",
      technologies: ["React", "Firebase", "Material UI", "Redux"],
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather information with 5-day forecast, location search, and interactive maps.",
      technologies: ["JavaScript", "API Integration", "CSS", "Chart.js"],
    },
    {
      id: 4,
      title: "Social Media Platform",
      description: "A social networking platform with user profiles, posts, comments, and real-time notifications.",
      technologies: ["Next.js", "MongoDB", "Socket.io", "NextAuth"],
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">My Projects</h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each one represents different skills and technologies I've mastered.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}