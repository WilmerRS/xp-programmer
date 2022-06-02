import PrimaryButton from '../shared/button/PrimaryButton'
import SecondaryButton from '../shared/button/SecondaryButton'
import GradientText from '../shared/text/GradientText'

const CreateProjectsButtons = () => {
  return (
    <section>
        <footer className='flex gap-5'>
        <SecondaryButton>
            Volver al incio
        </SecondaryButton>
        <PrimaryButton>
            Crear proyecto
        </PrimaryButton>  
        </footer>   
    </section>
  )
}

export default CreateProjectsButtons
