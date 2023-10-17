import { useRouter } from 'next/router'
import { useState } from 'react'
import Page from '@/components/Page'
import Field from '@/components/Field'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { fetchJson } from '@/lib/api'
import { useMutation } from 'react-query'

function SignInPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const mutation = useMutation(() =>
    fetchJson('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
  )

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const user = await mutation.mutateAsync()
      console.log('signed in:', user)
      router.push('/')
    } catch (err) {
      //mutation.isError will be true
    }
  }

  return (
    <Page title="Sign In">
      <form onSubmit={handleSubmit}>
        <Field label="Email">
          <Input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Field>
        <Field label="Password">
          <Input
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Field>
        {mutation.isError && (
          <p className="text-red-700">Invalid credentials. Please try again.</p>
        )}
        {mutation.isLoading ? (
          <p>Loading...</p>
        ) : (
          <Button type="submit">Sign In</Button>
        )}
      </form>
    </Page>
  )
}

export default SignInPage
