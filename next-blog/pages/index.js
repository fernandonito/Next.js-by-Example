import NavBar from '../components/NavBar';

function HomePage() {
  console.log('[HomePage] render');
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>My blog</h1>
      </main>
    </>
  );
}

export default HomePage;
