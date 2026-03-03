import styles from "../page.module.css";

export default function About() {
    return (
        <div className={styles.wrapper}>
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.statusLabel}>
                        LAB_POSITIONING
                    </div>
                    <h1 className={styles.heroHeadline}>The Shortest Path to Truth.</h1>
                    <p className={styles.heroDescription}>
                        The Adda Labs is a controlled environment for venture experimentation. We value intellectual honesty over ego.
                    </p>
                </div>
            </section>

            <section className="section-border">
                <div className="container">
                    <div className={styles.splitGrid}>
                        <div>
                            <span data-mono className="accent-text bracketed">Theory_of_Failure</span>
                            <h2 className={styles.sectionTitle}>Why We Exist.</h2>
                        </div>
                        <div className={styles.contentBlock}>
                            <p className={styles.largeText} style={{ marginBottom: '2rem' }}>
                                Most ventures fail because they scale assumptions instead of validating them.
                            </p>
                            <p className={styles.sharpBody}>
                                We exist to de-risk ideas before they consume significant capital, time, or reputation. Adda Labs acts as a filters—stripping away hype to reveal the core unit economics and market behavior that determine long-term survival.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-border" style={{ backgroundColor: 'var(--bg-elevated)' }}>
                <div className="container">
                    <div className={styles.splitGrid}>
                        <div>
                            <span data-mono className="accent-text bracketed">Operator_Mindset</span>
                            <h2 className={styles.sectionTitle}>Not an Agency.</h2>
                        </div>
                        <div className={styles.contentBlock}>
                            <p className={styles.sharpBody} style={{ marginBottom: '1.5rem' }}>
                                We are not a digital agency, an incubator, or a startup factory. We are a truth-seeking laboratory led by operators who have built, scaled, and occasionally killed ventures.
                            </p>
                            <p className={styles.sharpBody}>
                                Our output is not just code or design; it is a validated decision gate. Every engagement ends with a binary outcome: Proof of Viability or Documented Termination. Both are successes in a world of wasted resources.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-border">
                <div className="container" style={{ textAlign: 'center', padding: '120px 0' }}>
                    <span data-mono className="accent-text bracketed">Core_Axiom</span>
                    <h2 className={styles.heroHeadline} style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', marginBottom: '0', marginTop: '2rem' }}>Validation Before Scale.</h2>
                </div>
            </section>
        </div>
    );
}
