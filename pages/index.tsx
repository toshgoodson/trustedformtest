import type { NextPage } from 'next'
import Link from 'next/link'
import styled from 'styled-components'

const OrangeLink = styled.a`
	background: orange;
`

const Home: NextPage = () => {
	return (
		<div>
			<h1>Home</h1>
			<Link href="/page-two" passHref><OrangeLink>Orange Link to Page 2</OrangeLink></Link>
		</div>
	)
}

export default Home
