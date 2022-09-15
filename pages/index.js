import { useSession, signIn, signOut } from 'next-auth/react'

const Home = () => {
  const { data } = useSession()
  console.log(data)
  return (
    <div>
      <button onClick={() => signIn()}>Sign In</button>
    </div>
  )
}

export default Home
