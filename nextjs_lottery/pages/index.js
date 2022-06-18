import ManualHeader from "../components/ManualHeader"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import Meta from "../components/Meta"

export default function Home() {
    return (
        <div className={styles.container}>
            <Meta />
            <ManualHeader />
        </div>
    )
}
