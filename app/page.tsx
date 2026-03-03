import styles from "./page.module.css";
import { ArrowRight } from "lucide-react";

export default function Home() {
    return (
        <div className={styles.wrapper}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.statusLabel}>
                        SYSTEM_STATUS: VALIDATING REALITY
                    </div>
                    <h1 className={styles.heroHeadline}>
                        IDEAS ARE CHEAP.<br />VALIDATION IS HARD.
                    </h1>
                    <div className={styles.heroDescription}>
                        <p>
                            Adda Labs is a venture experimentation lab.<br />
                            We don&apos;t do decks. We do damage testing.<span className={styles.blinkingCursor}>_</span>
                        </p>
                    </div>
                    <div className={styles.ctaGroup}>
                        <button className={styles.ctaPrimary}>
                            READ THE MANIFESTO <ArrowRight size={16} />
                        </button>
                        <button className={styles.ctaSecondary}>
                            SEE THE PROTOCOL
                        </button>
                    </div>
                </div>
            </section>

            {/* Why We Exist */}
            <section className="section-border">
                <div className="container">
                    <div className={styles.splitGrid}>
                        <div>
                            <span data-mono className="accent-text">Logic_Axiom</span>
                            <h2 className={styles.sectionTitle}>Why We Exist</h2>
                        </div>
                        <div className={styles.contentBlock}>
                            <p className={styles.largeText}>
                                Most ventures fail because they scale assumptions instead of validating them.
                            </p>
                            <p className={styles.sharpBody}>
                                The Adda Labs replaces impulsive entrepreneurship with disciplined experimentation.
                            </p>
                            <p className={styles.sharpBody}>
                                Ideas are not protected. They are tested.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Model Visual Flow */}
            <section className="section-border">
                <div className="container">
                    <div style={{ marginBottom: '4rem' }}>
                        <span data-mono className="accent-text">System_Architecture</span>
                        <h2 className={styles.sectionTitle}>Our Model</h2>
                    </div>
                    <div className={styles.systemGrid}>
                        {[
                            { id: '01', title: 'Ideate' },
                            { id: '02', title: 'Validate' },
                            { id: '03', title: 'Pilot' },
                            { id: '04', title: 'Decide' },
                            { id: '05', title: 'Scale or Kill' }
                        ].map((step) => (
                            <div key={step.id} className={styles.systemBlock}>
                                <div className={styles.blockId} data-mono>{step.id}</div>
                                <h3 className={styles.blockTitle}>{step.title}</h3>
                            </div>
                        ))}
                    </div>
                    <p className={styles.systemMetadata} data-mono>
                        Every stage operates under predefined validation metrics and decision thresholds.
                    </p>
                </div>
            </section>

            {/* What We Do */}
            <section className="section-border">
                <div className="container">
                    <div className={styles.splitGrid}>
                        <div>
                            <span data-mono className="accent-text">Capabilities</span>
                            <h2 className={styles.sectionTitle}>What We Do</h2>
                        </div>
                        <div className={styles.servicesGrid}>
                            <div className={styles.serviceItem}>
                                <h3 data-mono>Research & Validation</h3>
                                <ul>
                                    <li>Problem framing</li>
                                    <li>Assumption mapping</li>
                                    <li>Market research</li>
                                    <li>Business model structuring</li>
                                    <li>Economic viability testing</li>
                                </ul>
                            </div>
                            <div className={styles.serviceItem}>
                                <h3 data-mono>Venture Experimentation</h3>
                                <ul>
                                    <li>MVP design</li>
                                    <li>Frugal pilot execution</li>
                                    <li>Defined success metrics</li>
                                    <li>Decision gates</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p className={styles.disciplineNote} data-mono>
                        All engagements follow the same experimentation discipline.
                    </p>
                </div>
            </section>

            {/* Core Principles */}
            <section className="section-border">
                <div className="container">
                    <span data-mono className="accent-text">Protocol_Axioms</span>
                    <h2 className={styles.sectionTitle}>Core Principles</h2>
                    <div className={styles.principlesGrid}>
                        {[
                            'Intellectual honesty over ego',
                            'Small experiments before large commitments',
                            'Revenue as sustainability, not vanity',
                            'Clarity before solution',
                            'Documented learning',
                            'Data-driven decision gates'
                        ].map((principle) => (
                            <div key={principle} className={styles.principleCard}>
                                <p className={styles.principleText}>{principle}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Current Focus */}
            <section className="section-border">
                <div className="container">
                    <span data-mono className="accent-text">Active_Queue</span>
                    <h2 className={styles.sectionTitle}>Current Focus</h2>
                    <div className={styles.focusList}>
                        <div className={styles.focusItem}>
                            <span data-mono className="accent-text">—</span>
                            <p>Internal venture experimentation</p>
                        </div>
                        <div className={styles.focusItem}>
                            <span data-mono className="accent-text">—</span>
                            <p>Structured validation engagements</p>
                        </div>
                        <div className={styles.focusItem}>
                            <span data-mono className="accent-text">—</span>
                            <p>Selective founder partnerships</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className={styles.finalCta}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2 className={styles.sectionTitle}>Have an Idea Worth Testing?</h2>
                        <p>Partner with Adda Labs to validate, structure, and pilot your idea with discipline.</p>
                        <a href="mailto:founder@theaddalabs.com" className={styles.ctaPrimary} style={{ display: 'inline-block', textDecoration: 'none' }}>
                            Start a Conversation
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
