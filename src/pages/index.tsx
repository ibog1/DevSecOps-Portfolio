import React from 'react';
import Layout from '@theme/Layout';
import Header from '@site/src/components/header';
import Hero from '@site/src/components/hero';
import MySkills from '@site/src/components/my-skills';
import ProjectHighlights from '@site/src/components/project-highlights';
import Contact from '@site/src/components/contact';
import Footer from '@site/src/components/footer';

export default function Home(): React.JSX.Element {
  return (
    <Layout wrapperClassName="homepage" noFooter navbar={null}>
      <Header />
      <main>
        <Hero />
        <MySkills />
        <ProjectHighlights />
        <Contact />
      </main>
      <Footer />
    </Layout>
  );
}
