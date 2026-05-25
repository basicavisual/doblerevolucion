interface ConceptTagProps {
  term: string;
  glossaryId: string;
}

export default function ConceptTag({ term, glossaryId }: ConceptTagProps) {
  const handleClick = () => {
    const element = document.getElementById(`glosario-${glossaryId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      // Trigger a visual flash
      element.classList.add("ring-2", "ring-primary");
      setTimeout(() => {
        element.classList.remove("ring-2", "ring-primary");
      }, 2000);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center px-2 py-0.5 border border-primary/30 rounded-full text-[0.82em] font-mono text-primary bg-primary/5 hover:bg-primary/10 transition-colors whitespace-nowrap"
      title={`Ver definición de "${term}"`}
    >
      {term}
    </button>
  );
}
