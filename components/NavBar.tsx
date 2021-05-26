import Link from "next/link"
import styles from '../styles/NavBar.module.css'
import Image from "next/image"

export default function NavBar() {

  return (
    <nav>
      <div className="content nav-container">

        <div className="logo">
          {/* <Image width={128} height={77} src="/vercel.png" /> */}
          <h1>🎉</h1>
        </div>

        <div>
          <Link href="/"><a >Home</a></Link>
          <Link href="/users"><a>Users</a></Link>
          <Link href="/about"><a>About</a></Link>

        </div>
      </div>


    </nav>
  )
}