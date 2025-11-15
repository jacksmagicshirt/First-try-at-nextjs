import Image from "next/image";
import Head from 'next/head';
import styles from './page.module.css';
import Counter from './counter.js';
import Link from 'next/link';
import GitHub from './github.js';

export default function Home() {
    return(
        <div className={styles.container}>

        <Head>
            <title>Jack's First Next.js</title>
            <Link rel="icon" href="/favicon.ico" />
        </Head>
        
        <h1 className={styles.title}>
            Jack's First Next.js App
        </h1>
         
        <Counter name={"Increment by 1"} size={2} mult={1} color={'blue'} />
        <br></br>
        <Counter name={"Increment by 2"} size={0.5} mult={2} color={'green'} />

        <hr
            style={{
                display: 'flex',
                alignContent: 'center',
                width: "80%",
                marginTop: "1rem",
            }}
        />

        <GitHub />

        <hr
            style={{
                width: "80%",
                marginTop: "1rem",
            }}
        />

        <p>Check out my <Link href='store'>Fake Store</Link></p>


        </div>
    );
}