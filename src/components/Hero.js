import Image from "next/image";
import { ProfilePic } from "@/images";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiMysql,
} from "react-icons/si";

const skills = [
  { icon: <FaReact />, name: "React JS" },
  { icon: <SiNextdotjs />, name: "Next JS" },
  { icon: <FaNodeJs />, name: "Node JS" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <FaHtml5 />, name: "HTML 5" },
  { icon: <FaCss3Alt />, name: "CSS 3" },
  { icon: <SiRedux />, name: "Redux Saga" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <SiMysql />, name: "MySQL" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white px-12 py-12 text-center md:text-left overflow-hidden">
      {/* ✅ Background Image */}
      <div  className="absolute inset-0 flex items-center justify-center bg-black">
    <Image
  src={ProfilePic}
  alt="Background"
  width={1920}   // original image width
  height={2000}  // original image height
  priority
  quality={100}
   objectFit="cover"
    style={{ objectFit: "contain" }} 
   className="opacity-190 blur-sm object-cover w-full h-full "
  
/>

        <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay for readability */}
      </div>

      {/* ✅ Content */}
      <div className="relative z-10 flex flex-col items-center md:items-start max-w-xl animate-fadeIn">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Hi, I’m Talha Mobeen
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          Full Stack Developer | Frontend Developer
        </p>

        {/* ✅ Tech Logos */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-6">
          {skills.map((skill, ind) => (
            <div
              className="relative group text-4xl mb-2 text-[#fff] hover:scale-110 transition"
              key={ind}
            >
              {skill.icon}
              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-sm bg-black text-white rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-10">
                {skill.name}
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Download Button */}
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
