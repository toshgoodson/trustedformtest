import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

type CustomProps = {
	withTf: boolean
}

export default class MyDocument extends Document<CustomProps> {
	static async getInitialProps(ctx: DocumentContext): Promise<CustomProps & DocumentInitialProps> {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				})

			const initialProps = await Document.getInitialProps(ctx)
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
				withTf: ctx.query.tf === '1'
			}
		} finally {
			sheet.seal()
		}
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					{this.props.withTf && <>
						<script key="trustedForm"
							dangerouslySetInnerHTML={{
								__html: `
								(function() {
									var field = 'xxTrustedFormCertUrl';
									var provideReferrer = false;
									var tf = document.createElement('script');
									tf.type = 'text/javascript'; tf.async = true; 
									tf.src = 'http' + ('https:' == document.location.protocol ? 's' : '') +
									'://api.trustedform.com/trustedform.js?provide_referrer=' + escape(provideReferrer) + '&field=' + escape(field) + '&l='+new Date().getTime()+Math.random();
									var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(tf, s); }
								)();
								`
							}}/>
						<noscript key="trustedFormNoScript">
							<img src="http://api.trustedform.com/ns.gif" />
						</noscript>
					</>}
				</Head>
				<body>
					TrustedForm included: {this.props.withTf ? 'true': 'false'}
					<Main/>
					<NextScript />
				</body>
			</Html>
		)
	}
}