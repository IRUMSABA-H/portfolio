"use client";
import { motion } from "framer-motion";
import { ProfilePic } from "@/images";
import Image from "next/image";
export default function About() {
  return (
   <section
  id="about"
  className="py-20 px-4 md:px-16 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
  style={{
    backgroundColor: 'black',
    color: 'white'
  }}
>


      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        
        {/* Left Side - Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 10}}
          viewport={{ once: false }}
        >
          <Image
  src={ProfilePic}
  alt="About Image"
  width={315}   
  height={350}   
  style={{ objectFit: "contain" }}
  className="rounded-2xl shadow-lg"
/>

        </motion.div>

        {/* Right Side - About Text */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 10, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed">
            I’m an accomplished Front-end Developer with over 6 years of
            experience building exceptional web and mobile applications using
            React JS, React Native, and Node JS. I specialize in delivering
            robust, scalable solutions with a strong focus on user experience
            and performance.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            From leading teams to crafting UI components and managing full-stack
            systems, I have consistently delivered high-quality code in
            fast-paced environments. I'm passionate about building
            user-friendly interfaces and continuously learning the latest in
            frontend tech.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
