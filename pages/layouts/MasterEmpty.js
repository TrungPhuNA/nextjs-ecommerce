import Head from 'next/head'

const MasterEmpty = ({children}) => (
    <div>
        <Head>
            <meta charSet="utf-8" />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <title>123code.net</title>
            <link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"/>
        </Head>
        <main>
            {children}
        </main>
    </div>
)
export default MasterEmpty
