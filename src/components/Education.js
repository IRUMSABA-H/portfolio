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
  return (
    <section id="education" className="py-20 px-4 md:px-16 bg-white text-black animate-slideIn">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-gray-100 shadow-md rounded-lg p-6 w-full md:w-1/2 text-left hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
              <p className="text-md mb-1">{edu.institution}</p>
              <p className="text-sm text-gray-600">{edu.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}