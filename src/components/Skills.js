import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiRedux } from 'react-icons/si';
import { motion } from 'framer-motion';

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
    <section id="skills" className="py-20 px-4 md:px-16 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Animated heading */}
        <motion.h2
          className="text-3xl font-bold mb-10"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: false }} 
          transition={{ duration: 5}}
        >
          My Skills
        </motion.h2>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group p-6 border border-gray-700 rounded-lg"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false}}
              transition={{ duration: 5, delay: index * 0.2 }}
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
              <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
                <div
                  className="bg-white h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-sm mt-1">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
