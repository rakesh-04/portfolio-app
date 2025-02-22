export const ProjectsPage = () => {
    const projects = [
      {
        title: "Project 1",
        description:  "update soon...",
        tech: ["React", "Tailwind CSS", "Node.js"],
        image: "/project1.jpg",
        link: "#"
      },
      // Add more projects
    ];
  
    return (
      <div className="pt-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">My Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200">
                {/* Project image */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };