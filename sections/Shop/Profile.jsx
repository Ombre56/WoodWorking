import { useSession, signIn, signOut } from "next-auth/react"

export default function Profile() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Zalogowany jako: {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
