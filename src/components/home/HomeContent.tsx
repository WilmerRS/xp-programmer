import PrimaryButton from '../shared/button/PrimaryButton'
import SecondaryButton from '../shared/button/SecondaryButton'
import GradientText from '../shared/text/GradientText'

const HomeContent = () => {
  return (
    <section>
      <header className='max-w-lg'>
        <h1 className='text-6xl font-bold text-black-500' >Crea y gestiona tus proyectos con</h1>
        <p>
          <GradientText>eXtreme</GradientText>
        </p>
        <p>
          <GradientText>Programming</GradientText>
        </p>
      </header>
      <p className='text-gray-500 text-lg pt-5 pb-10'>
        Fácil, rápido y gratis.
      </p>
      <footer className='flex gap-5'>
        <PrimaryButton>
          Crear proyecto
        </PrimaryButton>
        <SecondaryButton >
          Unirme a un proyecto
        </SecondaryButton>
      </footer>
    </section>
  )
}

export default HomeContent
