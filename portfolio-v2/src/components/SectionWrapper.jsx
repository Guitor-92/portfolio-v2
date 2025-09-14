export default function SectionWrapper({ id, children, className }) {
  return (
    <section
      id={id}
      className={`max-w-7xl mx-auto px-6 py-20 ${className || ""}`}
    >
      {children}
    </section>
  );
}
