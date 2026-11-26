

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-end justify-between gap-4 px-24 py-6 text-sm">
      <section aria-labelledby="contact-heading" className="flex flex-col gap-4">
        <h2 id="contact-heading" className="text-lg">
          Contact
        </h2>
        <a
          href="https://www.linkedin.com/in/gareth-mcclellan/"
          className="underline underline-offset-4 hover:text-accent"
        >
          LinkedIn ↗
        </a>
        <a
          href="mailto:mcclellangareth@gmail.com"
          className="underline underline-offset-4 hover:text-accent"
        >
          Email me
        </a>
      </section>
      <p>© 2026 Gareth McClellan</p>
    </footer>
  );
}
