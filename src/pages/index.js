import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Kuromaru.world</h1>
        <p className="hero__subtitle">どのMinecraftからでも入れる <b>クロ</b>ス<b>マル</b>チサバイバルサーバー</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/join">
            サーバーに参加する
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={``}
      description="Minecraft Java Edition / Bedrock Edition でのクロスマルチプレイに対応したMinecraftサーバー、くろまるの公式ホームページです。">
      　<HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
