import ticImage from "/assets/unnamed.jpg"; // Ensure the path is correct

export const ProjectsPage = () => {
  const projects = [
    {
      title: "Tic Tac Toe Game",
      description: "This is a simple Tic Tac Toe game built with HTML, CSS, and JavaScript.",
      tech: ["JavaScript", "CSS", "HTML"],
      image: ticImage, // Update with the correct path to your image in the public directory
      link: "https://rakesh-04.github.io/Tic-tae-toe/"
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
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" /> {/* Render project image */}
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
                target="_blank" // Open link in a new tab
                rel="noopener noreferrer" // Security measure
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