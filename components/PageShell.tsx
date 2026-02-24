export function PageShell({ children }: { children: React.ReactNode }) {
  return <div className="space-y-10">{children}</div>;
}

export function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`space-y-3 ${className}`}>
      {children}
    </section>
  );
}
