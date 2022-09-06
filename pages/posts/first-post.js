import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <Script
                src="https://code.jquery.com/jquery-3.6.1.min.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log( 'Script loaded correctly.' )
                }
            />
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    );
}