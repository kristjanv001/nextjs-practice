import { GetStaticProps } from 'next'
import Link from "next/link"

export type UserT = {
  id: number
  name: string
  email: string
  address: { city: string }
}

type UsersProps = {
  users: UserT[]
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()

  return {
    props: { users: data }
  }
}

export default function Users({ users }: UsersProps) {
  return (
    <div>
      <h1>Users</h1>
      <ol>
        {users.map((user) => {
          return (
            <li key={user.id}>  <Link href={`/users/${user.id}`}><a><h3>{user.name}</h3></a></Link>  </li>
          )
        })}
      </ol>
    </div>
  )
}

