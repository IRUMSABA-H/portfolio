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
  return (
    <section id="certifications" className="py-20 px-4 md:px-16 bg-white text-black animate-slideIn">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Certifications</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {certificationData.map((cert, index) => (
            <div key={index} className="bg-gray-100 shadow-md rounded-lg p-6 w-full md:w-1/2 text-left hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
              <p className="text-md mb-1">{cert.provider}</p>
              <p className="text-sm text-gray-600">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}