import Link from 'next/link'
import { fetchJson } from '@/lib/api'
import { useQuery } from 'react-query'

function NavBar() {
  const query = useQuery(
    'user',
    async () => {
      try {
        return await fetchJson('/api/user')
      } catch (err) {
        return undefined
      }
    },
    {
      cacheTime: Infinity,
      staleTime: 30_000,
    }
  )
  const user = query.data

  const handleSignOut = async () => {
    await fetchJson('/api/logout')
    //setUser(null)
  }

  console.log('user:', user)

  return (
    <nav className="px-2 py-1 text-sm">
      <ul className="flex gap-2">
        <li className="text-lg font-extrabold">
          <Link href="/">Next Shop</Link>
        </li>
        <li role="separator" className="flex-1" />
        {user ? (
          <>
            <li>{user.name}</li>
            <li>
              <button onClick={handleSignOut}>Sign Out</button>
            </li>
          </>
        ) : (
          <li>
            <Link href="/sign-in">Sign In</Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default NavBar
