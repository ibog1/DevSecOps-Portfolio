import React from "react";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";


export default function LegalPage() {
    return (
        <Layout
            title="Legal Notice"
            description="Imprint and Privacy Policy"
        >
            <main className={styles.legalPage}>
                <div className={styles.container}>
                    <header className={styles.hero}>
                        <div className={styles.topAction}>
                            <Link to="/" className={styles.backButton}>
                                ← Back to portfolio
                            </Link>
                        </div>
                        <h1 className={styles.title}>Legal Notice</h1>
                        <p className={styles.subtitle}>
                            Imprint and Privacy Policy
                        </p>
                    </header>

                    <section className={styles.card}>
                        <h2 className={styles.sectionTitle}>Imprint</h2>
                        <p>
                            <strong>Information pursuant to § 5 DDG</strong>
                        </p>

                        <div className={styles.infoBlock}>
                            <p><strong>Address:</strong> beispielstrasse 10, 0000 berlin, Germany</p>
                            
                            <p>
                                <strong>Email:</strong>{" "}
                                <a href="ibrahim.g94@icloud.com" className={styles.link}>
                                    ibrahim.g94@icloud.com
                                </a>
                            </p>
                            <p><strong>Managing Director:</strong> Ibrahim Güllü</p>
                        </div>

                        <p>
                            <strong>Disclaimer:</strong> All information provided on this website is for
                            general informational purposes only. Our website contains links to
                            external third-party websites over whose content we have no influence.
                            Therefore, we cannot accept any liability for this external content.
                            The respective provider or operator of the linked pages is always
                            responsible for their content. The linked pages were checked for
                            possible legal violations at the time of linking. No illegal content
                            was found at the time of linking. However, permanent monitoring of
                            the content of the linked pages is not reasonable without concrete
                            evidence of a violation of the law. If we become aware of any
                            violations of the law, we will remove such links immediately.
                        </p>
                    </section>

                    <section className={styles.card}>
                        <h2 className={styles.sectionTitle}>Privacy Policy</h2>

                        <div className={styles.policySection}>
                            <h3>1. General Information</h3>
                            <p>
                                The protection of your personal data is important to me. This
                                website can generally be used without providing personal data. If
                                personal data is collected, this is done in accordance with the
                                applicable data protection regulations, in particular the General
                                Data Protection Regulation (GDPR).
                            </p>
                        </div>

                        <div className={styles.policySection}>
                            <h3>2. Responsible Party</h3>
                            <p>Responsible for data processing on this website:</p>
                            <p>Name einfügen</p>
                            <p>
                                Email:{" "}
                                <a href="mailto:aaaa" className={styles.link}>
                                    emaileinfügen.com
                                </a>
                            </p>
                        </div>

                        <div className={styles.policySection}>
                            <h3>3. Hosting</h3>
                            <p>
                                This website is hosted externally. The personal data collected on
                                this website is stored on the servers of the hosting provider. This
                                may include IP addresses, access times and technical log data.
                            </p>
                            <p>
                                The hosting provider processes this data only to ensure stable and
                                secure operation of the website.
                            </p>
                        </div>

                        <div className={styles.policySection}>
                            <h3>4. Access Data and Server Log Files</h3>
                            <p>
                                When visiting this website, the hosting provider automatically
                                collects and stores information in so-called server log files. This
                                includes:
                            </p>
                            <ul className={styles.list}>
                                <li>IP address</li>
                                <li>Date and time of the request</li>
                                <li>Browser type and version</li>
                                <li>Operating system</li>
                                <li>Referrer URL</li>
                            </ul>
                            <p>
                                This data is not merged with other data sources and is used solely
                                for technical monitoring and security purposes.
                            </p>
                        </div>

                        <div className={styles.policySection}>
                            <h3>5. Contact via Email</h3>
                            <p>
                                If you contact me via email, the transmitted data (e.g. email
                                address and message content) will be stored in order to process
                                your request. This data will not be passed on to third parties
                                without your consent.
                            </p>
                        </div>

                        <div className={styles.policySection}>
                            <h3>6. External Links</h3>
                            <p>
                                This website contains links to external websites (e.g. GitHub or
                                LinkedIn). When clicking on such links, you leave this website. I
                                have no influence over the data processing on external websites and
                                assume no responsibility for their content or privacy practices.
                            </p>
                        </div>

                        <div className={styles.policySection}>
                            <h3>7. Your Rights</h3>
                            <p>You have the right to:</p>
                            <ul className={styles.list}>
                                <li>Request information about your stored personal data</li>
                                <li>Request correction or deletion of your data</li>
                                <li>Restrict processing of your data</li>
                                <li>Object to data processing</li>
                                <li>Data portability</li>
                            </ul>
                        </div>

                        <div className={styles.policySection}>
                            <h3>8. Right to Lodge a Complaint</h3>
                            <p>
                                You have the right to lodge a complaint with a supervisory
                                authority if you believe that the processing of your personal data
                                violates data protection law.
                            </p>
                        </div>

                        <div className={styles.policySection}>
                            <h3>9. Changes to this Privacy Policy</h3>
                            <p>
                                I reserve the right to update this privacy policy to reflect
                                changes in legal requirements or website functionality.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </Layout>
    );
}
