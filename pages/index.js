import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from './components/Layout'
export default function Home() {
	return (
		<div>
			<Head>
				<title>Dashboard</title>
				<meta
					name="Dashboard"
					content="a nextjs job site "
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

            <Layout>
            <h1>Welcome to the Dashboard</h1>
            </Layout>

		</div>
	)
}





  