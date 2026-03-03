"use client";

import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation() {
    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoSquare}></div> ADDA_LABS.OS
                </Link>
                <div className={styles.links}>
                    <Link href="/about" className={styles.link}>
                        [ Manifesto ]
                    </Link>
                    <Link href="/framework" className={styles.link}>
                        [ Protocol ]
                    </Link>
                    <Link href="/intern" className={styles.link}>
                        [ Intern ]
                    </Link>
                </div>
                <a href="mailto:founder@theaddalabs.com" className={styles.contactBtn}>
                    CONTACT
                </a>
            </div>
        </nav>
    );
}
