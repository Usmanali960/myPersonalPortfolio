import React from 'react';

const Skills: React.FC = () => {
  // Skill proficiency data
  const skills = [
    { name: 'HTML', proficiency: 95, iconColor: "text-orange-500", color: 'bg-orange-500', icon: 'bxl-html5' },
    { name: 'CSS', proficiency: 90, iconColor: "text-blue-500", color: 'bg-blue-500', icon: 'bxl-css3' },
    { name: 'JavaScript', proficiency: 85, iconColor: "text-yellow-500", color: 'bg-yellow-500', icon: 'bxl-javascript' },
    { name: 'TypeScript', proficiency: 80, iconColor: "text-purple-500", color: 'bg-purple-500', icon: 'bxl-typescript' },
    { name: 'Tailwind CSS', proficiency: 80, iconColor: "text-teal-500", color: 'bg-teal-500', icon: 'bxl-tailwind-css' },
    { name: 'Next.js', proficiency: 60, color: 'bg-black', icon: 'bxl-react' },
  ];

  return (
    <section id="skills" className="py-16 bg-gradient-to-r mt-[-3vw] lg:mt-20">
      <div className="container mx-auto px-6">
        <h1 className="text-center text-4xl font-bold lg:text-[3vw] mb-10">
          My<span className="text-mainColor"> Skills</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill) => (
            <div className="relative group" key={skill.name}>
              <div className="flex items-center gap-4 mb-2">
                <span className={`text-2xl flex items-center `}>
                  <i className={`bx ${skill.icon} ${skill.iconColor}`} />
                  <h1 className={`${skill.iconColor}`}>{skill.name}</h1>
                </span>
                <span className="tooltip text-sm bg-black text-white p-2 rounded hidden group-hover:block absolute left-10 top-12">
                  {skill.proficiency}% Proficiency
                </span>
              </div>

              <div className="w-full bg-gray-300 h-6 rounded-full overflow-hidden">
                <div
                  className={`${skill.color} h-full`}
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
