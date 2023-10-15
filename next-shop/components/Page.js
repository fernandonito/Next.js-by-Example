import Head from 'next/head'
import Title from '@/components/Title'
import NavBar from './NavBar'

function Page({ title, children }) {
  const pageTitle = `${title} - Next Shop`

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="px-6 py-4">
        <Title>{title}</Title>
        {children}
      </main>
    </>
  )
}

export default Page
