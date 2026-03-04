import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <h3 data-mono>The Adda Labs</h3>
                        <p>Founder-Led Experiment Venture Lab.</p>
                    </div>
                    <div className={styles.status}>
                        <span data-mono className="accent-text">[ SYSTEM_STATUS: OPERATIONAL ]</span>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p className={styles.copyright}>&copy; {new Date().getFullYear()} The Adda Labs. All rights reserved.</p>
                    <div className={styles.meta}>
                        <a href="https://tal-vi.vercel.app" target="_blank" rel="noopener noreferrer" className={styles.viLink}>
                            Venture Infrastructure ↗
                        </a>
                        <span data-mono>Validation before scale.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
