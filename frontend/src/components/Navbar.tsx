import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="glass sticky top-4 z-10 flex items-center px-8 py-4 text-ink mx-4 my-4 rounded-full">
      <Link href="/" className="font-bold hover:text-accent transition duration-200">
        Gareth McClellan
      </Link>

      <div className="ml-auto flex items-center gap-6">
        <Link
          href="https://github.com/mwxg"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition duration-200"
        >
          GitHub ↗
        </Link>
        
        <Link
          href="https://www.linkedin.com/in/gareth-mcclellan/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition duration-200"
        >
          LinkedIn ↗
        </Link>
      </div>
    </nav>
  );
}
