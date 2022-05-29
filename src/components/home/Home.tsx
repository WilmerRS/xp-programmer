import HomeContent from './HomeContent'
import HomeHero from './HomeHero'

const Home = () => {
  return (
    <main className='max-w-7xl mx-auto pt-10 pb-10'>
      <section className="grid grid-cols-2 gap-4 place-items-center">
        <HomeContent />
        <HomeHero />
      </section>
    </main>
  )
}

export default Home
