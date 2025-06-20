export default function Hero() {
  return (
    <section className="min-h-screen flex justify-end items-end px-4 text-center hero-bg bg-white dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="flex gap-4">
        <a
          href="/Talha_Mobeen.pdf"
          download
          className="px-6 py-2 bg-[#343434] text-white rounded-lg hover:bg-[#343434] transition mb-4"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}