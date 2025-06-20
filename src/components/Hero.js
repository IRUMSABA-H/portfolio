import Image from "next/image";
import {ProfilePic} from '@/images'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiRedux, SiMysql } from 'react-icons/si';
const skills = [
  { icon: <FaReact /> , name: 'React JS',},
  { icon: <SiNextdotjs /> , name: 'Next JS',},
  { icon: <FaNodeJs />, name: 'Node JS', },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS',},
  { icon: <SiTypescript />, name: 'TypeScript', },
  { icon: <FaHtml5 />, name: 'HTML 5',},
  { icon: <FaCss3Alt />, name: 'CSS 3'},
  { icon: <SiRedux />, name: 'Redux Saga' },
  { icon: <FaGithub />, name: 'GitHub' },
  { icon: <SiMysql />, name: 'MySQL' },
  // SiMysql
];

export default function Hero() {
  return (
    <section className="min-h-screen bg-black flex flex-col md:flex-row items-center justify-center text-white px-6 py-12 text-center md:text-left">
      {/* Profile Image */}
      <div className="mb-8 md:mb-0 md:mr-12 flex-shrink-0">
        <Image
          src={ProfilePic}// make sure this is in /public
          alt="Talha Mobeen"
          width={250}
          height={250}
          className="rounded-xl shadow-lg"
        />
      </div>

      {/* Text + Logos */}
      <div className="flex flex-col items-center md:items-start max-w-xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Hi, I’m Talha Mobeen
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          Full Stack Developer | Frontend Developer
        </p>

        {/* Tech Logos */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-6">
          {skills.map((skill, ind) => (
            <div className="relative group text-4xl mb-2 text-[#fff]" key={ind}>
              {skill.icon}
              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-sm bg-black text-white rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-10">
                {skill.name}
              </div>
            </div>
          ))}
        </div>


        {/* Download Button */}
        <a
          href="/Talha_Mobeen.pdf"
          download
          className="mt-6 inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
