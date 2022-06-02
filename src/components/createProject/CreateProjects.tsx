import CreateProjectsTitle from "./CreateProjectsTitle"
import CreateProjectsButtons from "./CreateProjectsButtons"
import CreateProjectsForm from "./CreateProjectsForm"
const CreateProjects = () => {
  return (
    <main className='max-w-7xl mx-auto pt-10 pb-10'>
      <section className="grid grid-cols-2 gap-4 place-items-center">
        <CreateProjectsTitle/>
        <CreateProjectsForm/>
        <CreateProjectsButtons/>
      </section>
    </main>
  )
}

export default CreateProjects
