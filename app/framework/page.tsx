import styles from "../page.module.css";

export default function Framework() {
    const steps = [
        {
            id: "01",
            title: "Problem Framing",
            desc: "Identifying meaningful problems that deserve solutions through internal thesis building and market observation."
        },
        {
            id: "02",
            title: "Assumption Mapping",
            desc: "Deconstructing the idea into core existential risks. What must be true for this to succeed? What kills it?"
        },
        {
            id: "03",
            title: "Validation Research",
            desc: "Primary market research and expert interviews to validate or kill core assumptions with intellectual honesty."
        },
        {
            id: "04",
            title: "Economic Modeling",
            desc: "Defining unit economics, viability thresholds, and the structured business model required for sustainability."
        },
        {
            id: "05",
            title: "Frugal Pilot",
            desc: "Launching the minimum viable experiment to test real-world behavior. Low cost, high data, zero scale."
        },
        {
            id: "06",
            title: "Decision Gate",
            desc: "A data-driven gate to either commit resources for scale or terminate the venture with documented learnings."
        }
    ];

    return (
        <div className={styles.wrapper}>
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.statusLabel}>
                        EXECUTION_PROTOCOL
                    </div>
                    <h1 className={styles.heroHeadline}>The TAL Framework.</h1>
                    <p className={styles.heroDescription}>
                        A disciplined, 6-stage verification engine designed to filter noise and focus resources on validated opportunities.
                    </p>
                </div>
            </section>

            <section className="section-border">
                <div className="container">
                    <div className={styles.protocolGrid}>
                        {steps.map((step) => (
                            <div key={step.id} className={styles.protocolBlock}>
                                <div data-mono className={styles.blockId}>{step.id}</div>
                                <h3 className={styles.blockTitle}>{step.title}</h3>
                                <p className={styles.sharpBody} style={{ marginTop: '1.5rem' }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-border">
                <div className="container">
                    <div className={styles.splitGrid}>
                        <div>
                            <span data-mono className="accent-text bracketed">Verification_Ethos</span>
                            <h2 className={styles.sectionTitle}>Built for Certainty.</h2>
                        </div>
                        <div className={styles.largeText}>
                            We don&apos;t bet on &quot;maybe.&quot; We architect filters that ensure every venture we scale has survived a gauntlet of skepticism.
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
