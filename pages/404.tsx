import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/router"

export default function NotFound() {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      console.log()
      router.push('/')
    }, 3000)
  }, [])
  return (
    <div className="not-found">
      <h2>Ooops... Something Went wrong</h2>
      <p>Go back to the <Link href="/"><a>Home page</a></Link> or wait 3 seconds to be redirected.</p>
    </div>
  )
}