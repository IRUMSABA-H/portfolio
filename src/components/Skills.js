import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiRedux } from 'react-icons/si';

const skills = [
  { icon: <FaReact />, name: 'React JS', level: 95 },
  { icon: <SiNextdotjs />, name: 'Next JS', level: 90 },
  { icon: <FaNodeJs />, name: 'Node JS', level: 85 },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS', level: 90 },
  { icon: <SiTypescript />, name: 'TypeScript', level: 80 },
  { icon: <FaHtml5 />, name: 'HTML5', level: 95 },
  { icon: <FaCss3Alt />, name: 'CSS3', level: 90 },
  { icon: <SiRedux />, name: 'Redux Saga', level: 85 },
  { icon: <FaGithub />, name: 'GitHub', level: 90 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white animate-slideIn">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="group p-6 border border-gray-300 dark:border-gray-700 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
              <div className="text-4xl mb-2 text-[#000] dark:text-[#000]">{skill.icon}</div>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-2">
                <div className="bg-[#000] h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
              </div>
              <p className="text-sm mt-1">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}