import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}

MyApp.getInitialProps = async () => {
	return {}
}

export default MyApp
