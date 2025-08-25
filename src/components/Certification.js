import { motion } from 'framer-motion';
const certificationData = [
  {
    title: "Applying Project Management in the Real World",
    provider: "Google",
    date: "Sep 2023",
  },
  {
    title: "Agile Project Management",
    provider: "Google",
    date: "Sep 2023",
  },
];

export default function Certifications() {
  const titleVariant = {
    hidden: { opacity: 0, y: -50 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 8,
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
        duration: 8,
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
        duration: 8,
        ease: "easeOut",
        delay: 0.5
      } 
    },
  };

  return (
    <section id="certifications" className="py-20 px-4 md:px-16 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-16 text-center"
          variants={titleVariant}
          initial="hidden"
          whileInView="show"
         
           viewport={{ once: false }} 
        >
          Certifications
        </motion.h2>
        
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {certificationData.map((cert, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-800 shadow-xl rounded-lg p-6 w-full md:w-1/2 text-left hover:shadow-2xl hover:bg-gray-700 transition duration-300 border border-gray-600"
              variants={index === 0 ? leftCardVariant : rightCardVariant}
              initial="hidden"
              whileInView="show"
             viewport={{ once: false }} 
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-2 text-white">{cert.title}</h3>
              <p className="text-md mb-1 text-gray-300">{cert.provider}</p>
              <p className="text-sm text-gray-400">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
