import React from 'react';

export const Skills = () => {
  const skills = {
    languages: ['JavaScript', 'Python', 'HTML', 'CSS', 'SQL','C'],
    technologies: ['React', 'Node.js'],
    creative: ['Photoshop'],
    devTools: ['Git', 'VSCode']
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="font-bold mb-3 capitalize">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map(skill => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-sm"
                  style={{
                    backgroundColor: `hsl(${Math.random() * 360}, 70%, 90%)`
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
