import styles from "../page.module.css";
import { Terminal, X, Check } from "lucide-react";

export default function Intern() {
    return (
        <div className={styles.wrapper}>
            <section className={styles.hero} style={{ minHeight: 'auto', paddingBottom: '40px' }}>
                <div className="container">
                    <div className={styles.statusLabel}>
                        OPEN_POSITION
                    </div>
                    <h1 className={styles.heroHeadline}>Intern Protocol.</h1>
                    <div className={styles.heroDescription}>
                        <p>
                            We don't do fetch-coffee internships.<br />
                            We look for high agency and extreme curiosity.<span className={styles.blinkingCursor}>_</span>
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-border" style={{ backgroundColor: 'var(--background)' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className={styles.brutalCard}>
                        <div className={styles.cardHeader}>
                            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0, fontSize: '1.125rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                <Terminal size={20} /> Intern Protocol
                            </h2>
                            <div className={styles.badge}>HIGH INTENSITY</div>
                        </div>
                        <div className={styles.cardBody}>
                            <div style={{ marginBottom: '3rem' }}>
                                <h3 style={{ fontSize: '2.25rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '1.5rem', lineHeight: '1.1' }}>Clean & Honest Work</h3>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.5', color: 'var(--foreground)' }}>
                                    This is not a typical internship. You won't be doing routine tasks. You will be thinking, questioning, and building clarity.
                                </p>
                            </div>
                            <div className={styles.cardGrid}>
                                <div>
                                    <h4 className={styles.columnHeader}>
                                        <X size={18} /> DO NOT APPLY IF:
                                    </h4>
                                    <ul className={styles.monoList}>
                                        <li>- You want step-by-step instructions.</li>
                                        <li>- You want repetitive admin work.</li>
                                        <li>- You are looking for a passive role.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className={styles.columnHeader}>
                                        <span className="accent-text" style={{ display: 'flex' }}><Check size={18} /></span> YOU WILL THRIVE IF:
                                    </h4>
                                    <ul className={styles.monoList}>
                                        <li>+ You enjoy debating ideas.</li>
                                        <li>+ You are willing to challenge the founder.</li>
                                        <li>+ You value clarity over comfort.</li>
                                    </ul>
                                </div>
                            </div>
                            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '2px solid var(--border-dashed)', textAlign: 'center' }}>
                                <a href="mailto:founder@theaddalabs.com?subject=Challenge" className={styles.ctaPrimary} style={{ display: 'inline-flex', justifyContent: 'center', fontSize: '1rem', padding: '1.25rem 2.5rem' }}>
                                    Challenge The Founder
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
