import 'bootswatch/dist/lux/bootstrap.min.css';
import Head from 'next/head';
import '../global.css';
export default function MyApp({
	Component,
	pageProps,
}) {
	return (
		<>
			<Head>
				<title>
					Pablo Lopera - Portafolio
				</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
