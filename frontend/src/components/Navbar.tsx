import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center px-8 py-4">
      <Link href="/" className="font-bold">
        Gareth McClellan
      </Link>

      <div className="ml-auto flex items-center gap-6">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link
          href="https://github.com/mwxg"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/gareth-mcclellan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
      </div>
    </nav>
  );
}