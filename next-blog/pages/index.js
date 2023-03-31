import Head from 'next/head';
import Link from 'next/link';

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
        <ul>
          <Link href="/posts/first-post">
            First post
          </Link>
        </ul>
      </main>
    </>
  );
}

export default HomePage;
