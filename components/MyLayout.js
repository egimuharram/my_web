import Header from './header';
import Header2 from './header2';

import '../sass/main.scss';
import Head from 'next/head';


const Layout = ({children,title}) => (
    <div className="box-header">
        <Head>
            <title>Faikar | {title}</title>
            {/* Google Analytics */}
            <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXX');`}} />
            {/* Google Analytics */}
        </Head>
            <noscript dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`}} />
        <Header2 />
            {/* <Header />   */}
            {children}
    </div>
)

export default Layout