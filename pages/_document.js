import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="es">
                <Head>
                    <meta name='application-name' content='BUTANTEM' />
                    <meta name='apple-mobile-web-app-capable' content='yes' />
                    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                    <meta name='apple-mobile-web-app-title' content='BUTANTEM' />
                    <meta name='description' content='Best PWA App in the world' />
                    <meta name='format-detection' content='telephone=no' />
                    <meta name='mobile-web-app-capable' content='yes' />
                    <meta name='msapplication-TileColor' content='#af694e' />
                    <meta name='msapplication-tap-highlight' content='no' />
                    <meta name='theme-color' content='#000000' />

                    <link rel='apple-touch-icon' sizes='180x180' href='/static/icons/icon-192x192.png' />
                    <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
                    <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
                    <link rel='manifest' href='/manifest.json' />
                    <link rel='shortcut icon' href='/favicon.ico' />
                    <meta property='og:type' content='website' />
                    <meta property='og:title' content='BUTANTEM' />
                    <meta property='og:description' content='Butantem é uma plataforma para apoiar os diferentes negócios do Butantã que foram afetados pela pandemia do COVID-19.' />
                    <meta property='og:site_name' content='BUTANTEM' />
                    <meta property='og:url' content='https://butantem.online' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument