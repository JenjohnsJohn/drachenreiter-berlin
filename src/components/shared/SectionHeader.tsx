interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeader = ({ label, title, description, centered = false }: SectionHeaderProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {label && (
        <span className="inline-block font-ui font-semibold text-sm tracking-wider text-dragon-green uppercase mb-4">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-berlin-charcoal mb-4">
        {title}
      </h2>
      {description && (
        <p className="font-body text-lg text-berlin-light leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
