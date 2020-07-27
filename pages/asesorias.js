import Head from 'next/head'
import Layout from '../components/Layout';
import AdvisorsList from '../components/AdvisorsList';
import StepsToAdd from '../components/StepsToAdd';
import Footer from '../components/Footer'

import DataContext from '../components/DataContext';
import { useContext } from 'react';

function Events() {
    const { data } = useContext(DataContext);
    let asesorias = [];

    if (data && data.assistance) {
        asesorias = data.assistance;
    }
    return (
        <Layout>
            <Head>
                <title>Butantem - Especialistas para ajuda nos temas relacionados a  COVID-19</title>
                <meta
                    key="description"
                    name="description"
                    content="BUTANTEM especialistas para ajuda em diversas áreas."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-covid-100">
                <div className="container mx-auto ">
                    <div>
                        <h2 className="text-2xl lg:text-3xl text-gray-900 leading-normal p-2 lg:p-10 text-center font-serif">Consultoria especializada</h2>
                        <p className="text-md font-serif px-4 pb-4 text-gray-800 text-center">Contamos com um grupo de especialistas de diferentes áreas para falar sobre a COVID-19.</p>
                    </div>
                    <AdvisorsList advisories={asesorias} />
                </div>
                <StepsToAdd />
            </main>
            <footer>
                <Footer />
            </footer>
        </Layout>
    )
}

export default Events
