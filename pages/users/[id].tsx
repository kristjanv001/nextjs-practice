import { GetStaticPaths, GetStaticProps } from 'next'

import { UserT } from "./index"

type UserProps = {
  user: UserT
}

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()

  const paths = data.map((user: UserT) => {
    return {
      params: { id: user.id.toString() }
    }
  })

  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  console.log(context)

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${context?.params?.id}`)
  const data = await res.json()

  return {
    props: { user: data }
  }

}

export default function UserDetails({ user }: UserProps) {
  console.log(user)
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.address.city}</p>
    </div>
  )
}