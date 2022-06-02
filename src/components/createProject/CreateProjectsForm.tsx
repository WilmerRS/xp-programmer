import PrimaryButton from '../shared/button/PrimaryButton'
import SecondaryButton from '../shared/button/SecondaryButton'
import GradientText from '../shared/text/GradientText'

const CreateProjectsForm = () => {
  return (
    <section>
     <div>
     <p className='text-gray-500 text-lg pt-5 pb-10'>
        Nombre del proyecto
      </p>
      <input class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" type="text">
     </div>
    </section>
  )
}

export default CreateProjectsForm