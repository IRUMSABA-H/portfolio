import { motion } from 'framer-motion';
const educationData = [
  {
    degree: "Masters in Project Management",
    institution: "SZABIST Islamabad",
    duration: "Sep 2022 – Feb 2024",
  },
  {
    degree: "BS Software Engineering",
    institution: "Comsats University, Wah Campus",
    duration: "Sep 2014 – Jul 2018",
  },
];

export default function Education() {
  const titleVariant = {
    hidden: { opacity: 0, y: -50 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 6,
        ease: "easeOut" 
      } 
    },
  };

  const leftCardVariant = {
    hidden: { opacity: 0, x: -100 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 6,
        ease: "easeOut",
        delay: 0.5
      } 
    },
  };

  const rightCardVariant = {
    hidden: { opacity: 0, x: 100 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 6,
        ease: "easeOut",
        delay: 0.5
      } 
    },
  };

  return (
    <section id="education" className="py-20 px-4 md:px-16 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-16 text-center"
          variants={titleVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3, margin: "-100px 0px" }}
        >
          Education
        </motion.h2>
        
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {educationData.map((edu, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-800 shadow-xl rounded-lg p-6 w-full md:w-1/2 text-left hover:shadow-2xl hover:bg-gray-700 transition duration-300 border border-gray-600"
              variants={index === 0 ? leftCardVariant : rightCardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3, margin: "-50px 0px" }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-2 text-white">{edu.degree}</h3>
              <p className="text-md mb-1 text-gray-300">{edu.institution}</p>
              <p className="text-sm text-gray-400">{edu.duration}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}