export default function Footer() {
  return (
    <footer className="pb-28 pt-10 xl:pb-10">
      <p className="text-center font-mono text-xs text-dim xl:mb-6">
        Built with Next.js &amp; Tailwind CSS · © {new Date().getFullYear()}{" "}
        Muhammad Hashim
      </p>
    </footer>
  );
}