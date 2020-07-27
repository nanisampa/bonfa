import Head from 'next/head'
import Layout from '../components/Layout';
import IndexHero from '../components/IndexHero';
import RandomProjects from '../components/RandomProjects';
import StepsToAdd from '../components/StepsToAdd';
import Footer from '../components/Footer';

import DataContext from '../components/DataContext';
import { useContext } from 'react';

function Home() {
  const { data } = useContext(DataContext);
  let projects = [];
  let categories = [];

  if (data && data.projects) {
    console.log(data.projects)
    projects = data.projects;
    categories = data.categories;
  }

  return (
    <Layout>
      <Head>
        <title>Butantem - Apoia a empresas e comércio do Butantã afetados pelo COVID-19</title>
        <meta
          key="description"
          name="description"
          content="BUTANTEM Apoio ao comércuio do Butantã"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <IndexHero categories={categories} />
        <RandomProjects projects={projects} />
        <StepsToAdd />
      </main>
      <footer>
        <Footer />
      </footer>
    </Layout>
  )
}

export default Home
