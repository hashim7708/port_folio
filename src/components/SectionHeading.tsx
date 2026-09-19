type SectionHeadingProps = {
  index: string;
  title: string;
};

export default function SectionHeading({ index, title }: SectionHeadingProps) {
  return (
    <h2 className="flex items-center gap-4 text-2xl font-bold text-ink md:text-3xl">
      <span className="font-mono text-xl text-accent md:text-2xl">
        {index}.
      </span>
      <span className="whitespace-nowrap">{title}</span>
      <span
        aria-hidden="true"
        className="hidden h-px w-full max-w-56 self-center bg-line sm:block"
      />
    </h2>
  );
}