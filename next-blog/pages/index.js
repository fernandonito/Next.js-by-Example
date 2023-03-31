import Head from 'next/head';

function HomePage() {
  console.log('[HomePage] render');
  return (
    <>
    <Head>
      <title>My blog</title>
      <meta name="description" value="This is my blog" />
    </Head>
      <main>
        <h1>My blog</h1>
      </main>
    </>
  );
}

export default HomePage;
