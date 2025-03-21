import type { ReactNode } from 'react';
import clsx from 'clsx';
//import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                {/*<div className={styles.buttons}>
                    <Link className="button button--secondary button--lg" to="/docs/intro">
                        Поехали!
                    </Link>
                </div>*/}
                <p>
                    У меня в{' '}
                    <a className={styles.link} href="https://obsidian.md">
                        Obsidian
                    </a>{' '}
                    накопилось более тысячи заметок из всех сфер жизни
                </p>
                <p>Я решил разделить их по "доменам". Сюда буду переносить заметки по IT</p>

                <p>Материалы находятся в свободном доступе (лицензия MIT)</p>
            </div>
        </header>
    );
}

export default function Home(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout title={siteConfig.title} description="Руководства, шпаргалки и другие материалы по веб-разработке">
            <HomepageHeader />
        </Layout>
    );
}
