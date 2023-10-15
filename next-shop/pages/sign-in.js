import { useState } from 'react'
import Page from '@/components/Page'
import Field from '@/components/Field'
import Input from '@/components/Input'
import Button from '@/components/Button'

function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(`Email: ${email}, Password: ${password}`)
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
        <Button type="submit">Sign In</Button>
      </form>
    </Page>
  )
}

export default SignInPage
