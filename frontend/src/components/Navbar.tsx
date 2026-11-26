export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="shell nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Gareth McClellan, back to top">gm<span>.</span></a>
        <div className="links">
          <a href="https://github.com/mwxg" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/gareth-mcclellan/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        </div>
      </nav>
    </header>
  );
}
