import Head from 'next/head';

function AboutPage() {
  console.log('[AboutPage] render');
  return (
    <>
      <Head>
        <title>About - My blog</title>
      </Head>
      <main>
        <h1>About</h1>
      </main>
    </>
  );
}

export default AboutPage;
