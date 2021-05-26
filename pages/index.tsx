import Head from "next/head"
import Link from "next/link"
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Album List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div >
        <h2 >Hello</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos cumque rem at fuga, quos vero ipsum? Asperiores modi quo quasi corporis! Dicta officiis inventore praesentium iure fugit voluptas quos, quidem enim fuga provident eos blanditiis sit adipisci, accusamus magnam dolorem qui tenetur nostrum nemo asperiores. Sit quia in necessitatibus doloremque!</p>
        <p>See my Users listing below {<Link href="/ninjas"><a className={styles.btn}>Users</a></Link>}</p>

      </div>

    </>
  )
}
