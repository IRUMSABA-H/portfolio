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
  return (
    <section id="experience" className="py-20 px-4 md:px-16 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white animate-slideIn">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>
        <div className="relative border-l-2 border-[#000] dark:border-blue-400 ml-4">
          {experienceData.map((exp, index) => (
            <div key={index} className="mb-10 ml-6">
              <div className="absolute w-4 h-4 bg-[#000] dark:bg-[#000] rounded-full -left-2.5 mt-1.5"></div>
              <h3 className="text-xl font-semibold">{exp.role} <span className="text-[#000]">@ {exp.company}</span></h3>
              <p className="text-sm text-[#000] dark:text-[#000] mb-2">{exp.duration}</p>
              <p className="text-md leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}