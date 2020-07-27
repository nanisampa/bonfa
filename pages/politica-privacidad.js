import Head from 'next/head'
import Layout from '../components/Layout';
import RandomProjects from '../components/RandomProjects';
import StepsToAdd from '../components/StepsToAdd';
import Footer from '../components/Footer'


function PoliticaPrivacidad() {
    return (
        <Layout>
            <Head>
                <title>Butantem - Política de Privacidade</title>
                <meta
                    key="description"
                    name="description"
                    content="BUTANTEM é uma plataforma para apoiar o comércio do Butantã afetado pelo COVID-19."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="bg-covid-100 ">
                    <div className="container py-4 mx-auto text-gray-800 text-md">
                        <p className=" p-4">
                            BUTANTEM esclarece:</p>
                        <p className=" p-4">
                            <span className="font-semibold">Qual a finalidade dos seus dados pessoais?</span>
                        </p>
                        <p className=" p-4">
                            Usaremos os dados pessoais que coletamos de você para o serviço solicitado:
                        </p>
                        <ul className="p-4 list-disc">
                            <li>Ordenar, catalogar, classificar, dividir e armazenar os dados pessoais dentro dos  arquivos
                            do Butantem.</li>
                            <li>Realizar o envío de informações, questionários, novidades, notícias, publicidade e marketing;
                            fazendo uso do correio eletrônico, telefone ou redes sociais como meios de notificação.</li>
                            <li>Elaboraçao de propostas comerciais e segmentação de mercado.</li>
                        </ul>
                        <p className="p-4">
                            <span className="font-semibold">Que dados pessoais usaremos para este fim?</span>
                        </p>
                        <p className=" p-4">
                            Para desenvolver as atividades  descritas no presente aviso de privacidade, utilizaremos os
                            seguientes dados pessoais:
                            </p>
                        <ul className="p-4 list-disc">
                            <li>Nome</li>
                            <li>Telefone particular</li>
                            <li>Telefone celular</li>
                            <li>Email</li>
                            <li>Endereço de Trabalho</li>
                            <li>Redes Sociais</li>
                            <li>Dados de contato</li>
                            <li>Dados de trabalho</li>
                        </ul>
                        <p className="p-4">
                            <span className="font-semibold">
                                Com quem compartilhamos suas informacões pessoais e finalidades?
                                </span>
                        </p>
                        <p className=" p-4">
                            As informações são compartilhadas com clientes e pessoas interessadas nos seus serviços que  
                             acessam o site a procura dos seus produtos
                            </p>
                        <p className="p-4">
                            <span className="font-semibold">
                                Cómo posso cancelar ou corrigir os dados?
                                </span>
                        </p>
                        <p className=" p-4">
                            Você tem o direito de saber quais dados pessoais temos sobre você, para que  usamos e
                            as condições de uso que nós damos a eles. Da mesma forma, é seu direito solicitar 
                            a correção de suas informações pessoais, caso estejam desatualizadas, imprecisas ou incompletas
                            (Retificação); removê-lo de nossos registros ou bancos de dados quando considerar que o
                            não está sendo usado corretamente (cancelamento); além de se oporem ao uso de seus
                            dados pessoais para fins específicos (oposição). 
                            
                            Envie um email para:

                            Correio electrônico: butantem@gmail.com
                            </p><p className="p-4">
                            <span className="font-semibold">
                            Como você pode conhecer as alterações deste aviso de privacidade?
                            </span>
                            </p>
                            Este aviso de privacidade pode sofrer modificações, alterações ou atualizações derivadas
                            de novos requisitos legais; de nossas próprias necessidades de produtos ou serviços
                            que oferecemos; de nossas práticas de privacidade; de mudanças em nosso modelo de negócios ou
                            por outras razões.
                            Prometemos mantê-lo informado sobre as alterações que esse aviso pode sofrer.
                            privacidade, através de: meios físicos e eletrônicos.
                            O procedimento através do qual será avisado sobre as notificações sobre alterações ou
                            As atualizações deste aviso de privacidade são feitas por  envio por email..
                            <p className="p-4">
                            Última atualização: 21/05/2020
                            </p>
                </div>
                </div>
                <StepsToAdd />
            </main>
            <footer>
                <Footer />
            </footer>
        </Layout >
    )
}


export default PoliticaPrivacidad
