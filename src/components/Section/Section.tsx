import type { ReactNode } from "react";
import styles from "./Section.module.scss";

interface SectionProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

function Section({ title, subtitle, children }: SectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {children}
    </section>
  );
}

export default Section;
