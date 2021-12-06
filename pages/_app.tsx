import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter()

	return <>
		{router.query.tf === '1' && <>
			<Script id="trusted-form" strategy="afterInteractive">
				{`(function() {
					var field = 'xxTrustedFormCertUrl';
					var provideReferrer = false;
					var tf = document.createElement('script');
					tf.type = 'text/javascript'; tf.async = true; 
					tf.src = 'http' + ('https:' == document.location.protocol ? 's' : '') +
					'://api.trustedform.com/trustedform.js?provide_referrer=' + escape(provideReferrer) + '&field=' + escape(field) + '&l='+new Date().getTime()+Math.random();
					var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(tf, s); }
				)();`}
			</Script>
			<noscript>
				<img src="http://api.trustedform.com/ns.gif" />
			</noscript>
		</>}
		<Component {...pageProps} />
	</>
}

MyApp.getInitialProps = async () => {
	return {}
}

export default MyApp
