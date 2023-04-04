import Head from 'next/head';
import Link from 'next/link';
import { getPosts } from '../lib/posts';

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: { posts },
  }
}

function HomePage({ posts }) {
  console.log('[HomePage] render', posts);
  return (
    <>
    <Head>
      <title>My blog</title>
      <meta name="description" value="This is my blog" />
    </Head>
      <main>
        <h1>My blog</h1>
        <ul>
          {posts.map(({ slug, title }) => (
            <li key={slug}>
              <Link href={`/posts/${slug}`}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default HomePage;
