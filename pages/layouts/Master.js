import Head from 'next/head'
import NavbarMenu from './NavbarMenu';
import Footer from './Footer';

const Master = ({children}) => (
    <div>
        <Head>
            <meta charSet="utf-8" />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <title>123code.net</title>
            <link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"/>
        </Head>
        <header>
            <NavbarMenu/>
        </header>
        {/*<div className="bg-over">*/}
        <div className="bg-not-over">
            <div className="bg-overlay"></div>
        </div>
        <main>
            {children}
        </main>
        <Footer />
    </div>
)
export default Master
