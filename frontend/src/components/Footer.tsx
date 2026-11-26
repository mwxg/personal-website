

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-end justify-between gap-4 px-8 py-6 text-sm">
      <section aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="mb-1 text-lg">
          Contact
        </h2>
        <a
          href="https://www.linkedin.com/in/gareth-mcclellan/"
          className="underline underline-offset-4 hover:text-accent"
        >
          LinkedIn
        </a>
      </section>
      <p>© 2026 Gareth McClellan</p>
    </footer>
  );
}
