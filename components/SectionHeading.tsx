interface SectionHeadingProps {
  eyebrow: string;
  title: string;
}

export default function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div>
      <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[#2dd4bf]">
        {eyebrow}
      </p>
      <h2 className="mb-4 text-3xl font-bold text-[#e2e8f0]">{title}</h2>
      <div className="mb-12 h-px w-24 bg-[#2dd4bf]" />
    </div>
  );
}
