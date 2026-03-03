import styles from "../page.module.css";
import Link from "next/link";

export default function Partner() {
    const formats = [
        {
            id: "01",
            title: "Internal Ventures",
            desc: "Ideas birthed and bred within the lab's own research cycles. Operated by the TAL core team with internal capital."
        },
        {
            id: "02",
            title: "Founder Co-Build",
            desc: "Working with high-conviction founders at the earliest stage to co-validate, structure, and pilot a venture."
        },
        {
            id: "03",
            title: "Validation Engagements",
            desc: "Acting as an external verification engine for high-stakes corporate or individual hypotheses before scale."
        },
        {
            id: "04",
            title: "Industry Pilots",
            desc: "Running frugal experiments with industry partners to test real-world behavior in live environments."
        }
    ];

    return (
        <div className={styles.wrapper}>
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.statusLabel}>
                        COLLABORATION_FORMATS
                    </div>
                    <h1 className={styles.heroHeadline}>Build With Us.</h1>
                    <p className={styles.heroDescription}>
                        We partner with founders, operators, and industry leaders who value validation over assumptions.
                    </p>
                </div>
            </section>

            <section className="section-border">
                <div className="container">
                    <div className={styles.focusList}>
                        {formats.map((format) => (
                            <div key={format.id} className={styles.focusItem} style={{ alignItems: 'flex-start' }}>
                                <span data-mono style={{ fontSize: '0.8rem', paddingTop: '0.5rem' }}>{format.id}</span>
                                <div>
                                    <h3 className={styles.blockTitle} style={{ marginBottom: '1rem' }}>{format.title}</h3>
                                    <p className={styles.sharpBody} style={{ maxWidth: '600px' }}>{format.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-border" style={{ backgroundColor: 'var(--bg-elevated)' }}>
                <div className="container">
                    <div className={styles.finalCta}>
                        <h2 className={styles.sectionTitle}>Ready to Validate?</h2>
                        <div className={styles.ctaContent}>
                            <p>If you have a high-conviction idea and value a disciplined, framework-driven approach, we should talk.</p>
                            <div className={styles.ctaGroup} style={{ justifyContent: 'center' }}>
                                <Link href="mailto:prakash@theaddalabs.com" className={styles.ctaPrimary}>
                                    Start a Conversation
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
