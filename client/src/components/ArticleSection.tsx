import { ReactNode } from "react";

interface ArticleSectionProps {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
}

export default function ArticleSection({ id, number, title, children }: ArticleSectionProps) {
  return (
    <section id={id} className="relative pt-20 pb-8">
      {/* Section number watermark */}
      <div className="absolute -left-4 top-12 font-[Oswald] text-[8rem] sm:text-[10rem] font-bold text-primary/[0.05] leading-none select-none pointer-events-none">
        {number}
      </div>

      {/* Section header */}
      <div className="relative mb-8">
        <span className="font-mono text-xs text-primary uppercase tracking-[0.2em] block mb-2">
          Sección {number}
        </span>
        <h2 className="font-[Oswald] text-2xl sm:text-3xl font-bold uppercase tracking-tight leading-tight text-foreground">
          {title}
        </h2>
        <div className="w-16 h-1 bg-primary mt-4" />
      </div>

      {/* Article prose */}
      <div className="space-y-5 text-[1.1rem] leading-[1.85] text-foreground/85
        [&>p]:mb-5
        [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-6 [&>blockquote]:py-3 [&>blockquote]:my-8
        [&>blockquote]:text-foreground/75 [&>blockquote]:italic [&>blockquote]:text-lg [&>blockquote]:leading-relaxed
        [&>blockquote]:bg-primary/[0.04] [&>blockquote]:pr-4 [&>blockquote]:rounded-r-sm
        [&>blockquote_cite]:block [&>blockquote_cite]:text-sm [&>blockquote_cite]:text-primary [&>blockquote_cite]:mt-2 [&>blockquote_cite]:not-italic [&>blockquote_cite]:font-mono
        [&_strong]:text-foreground [&_strong]:font-semibold
        [&_em]:text-foreground/80
        [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 [&_a]:decoration-primary/40 [&_a:hover]:decoration-primary
      ">
        {children}
      </div>
    </section>
  );
}
