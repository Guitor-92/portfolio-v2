export default function SectionWrapper({ id, children }) {
  return (
    <section
      id={id}
      className="max-w-7xl mx-auto px-6 py-20"
    >
      {children}
    </section>
  );
}