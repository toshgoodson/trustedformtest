import type { NextPage } from 'next'
import Link from 'next/link'
import styled from 'styled-components'

const BlueLink = styled.a`
	background: skyblue;
`

const PageTwo: NextPage = () => {
	return (
		<div>
			<h1>Page 2</h1>
			<Link href="/" passHref><BlueLink>Blue Link to Home</BlueLink></Link>
		</div>
	)
}

export default PageTwo
