import Head from 'next/head'
import Title from '@/components/Title'

function Page({ title, children }) {
  const pageTitle = `${title} - Next Shop`

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main className="px-6 py-4">
        <Title>{title}</Title>
        {children}
      </main>
    </>
  )
}

export default Page
