import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md py-4 px-8 flex justify-between items-center transition-colors duration-300">
      <h1 className="font-bold text-xl text-[#000] dark:text-white">Talha Mobeen</h1>
      <div className="space-x-4 text-sm">
        <Link href="#about" className="hover:underline">About</Link>
        <Link href="#skills" className="hover:underline">Skills</Link>
        <Link href="#experience" className="hover:underline">Experience</Link>
        <Link href="#education" className="hover:underline">Education</Link>
        <Link href="#contact" className="hover:underline">Contact</Link>
      </div>
    </nav>
  );
}