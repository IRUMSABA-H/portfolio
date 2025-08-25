'use client';
import { motion } from 'framer-motion';

const experienceData = [
  {
    role: "Senior Full Stack Developer",
    company: "Softoo",
    duration: "Sept 2024 – Present",
    description: "Developing Cratus Project using Next JS, Node JS, Micro-services, MUI, PostgreSQL, Tailwind CSS."
  },
  {
    role: "Software Developer",
    company: "Xad Technologies LLC - UAE",
    duration: "Mar 2024 – Sept 2024",
    description: "Developed XAD official website and project management tools using React JS, Next JS, TypeScript, Tailwind CSS, and AntD."
  },
  {
    role: "Software Developer - II",
    company: "Shifa International Hospital",
    duration: "Nov 2021 – Sept 2024",
    description: "Led a team of five. Built portals and medical systems using React JS, Redux Saga, and Node JS."
  },
  {
    role: "Software Developer",
    company: "Rockville Technologies",
    duration: "Mar 2020 – Nov 2021",
    description: "Built gaming panels, smart TV apps, and mobile apps using React JS and React Native."
  },
  {
    role: "Front End Developer",
    company: "Care Pvt Ltd",
    duration: "Jul 2019 – Feb 2020",
    description: "Developed ERP solutions and integrated APIs using React JS and Kendo."
  },
  {
    role: "Jr Software Developer",
    company: "Kong Hamsta Geek",
    duration: "Nov 2018 – Jun 2019",
    description: "Built mobile applications and front-end interfaces using React JS and Axios."
  },
  {
    role: "Intern",
    company: "Telenor",
    duration: "Aug 2018 – Nov 2018",
    description: "Revamped internal HSE website using Bootstrap."
  },
];

export default function Experience() {

  const lineVariant = {
    hidden: { height: 0 },
    show: { 
      height: '100%', 
      transition: { duration: 2, ease: "easeInOut" } 
    },
  };

  return (
    <section id="experience" className="py-20 px-4 md:px-16 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.h2 
          className="text-3xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          Experience
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Animated timeline line */}
          <motion.div 
            className="absolute left-4 top-0 w-0.5 bg-white origin-top"
            variants={lineVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          />

          {/* Experience items */}
          <div className="relative">
            {experienceData.map((exp, index) => (
              <motion.div 
                key={index} 
                className="mb-12 flex items-start"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                {/* Dot */}
                <motion.div 
                  className="flex-shrink-0 w-4 h-4 bg-white rounded-full mt-2 mr-8 relative z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <motion.h3 
                    className="text-xl font-semibold text-white mb-1"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  >
                    {exp.role} 
                    <span className="text-gray-300"> @ {exp.company}</span>
                  </motion.h3>
                  <motion.p 
                    className="text-sm text-gray-400 mb-3"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
                  >
                    {exp.duration}
                  </motion.p>
                  <motion.p 
                    className="text-gray-200 leading-relaxed"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                  >
                    {exp.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
