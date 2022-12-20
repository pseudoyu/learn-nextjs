import Layout from '../components/Layout'
import Link from 'next/link'

const HomePage = () => {
	return (
		<Layout>
			<h1>HomePage</h1>
			<Link href='/about'>About</Link>
		</Layout>
	)
}

export default HomePage
