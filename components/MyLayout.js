import Header from './header';
import Head from 'next/head';

import Header2 from './header2';
import Footer from './footer';
import GAWrapper from '../lib/GAWarp';

import '../sass/main.scss';


const Layout = ({children,title}) => (
    <div className="box-header">
        <Head>
            <title>Faikar | {title}</title>
        </Head>
        <Header2 />
            {children}
        <Footer />
    </div>
)

export default GAWrapper(Layout);