import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getProject } from '../../core/services/projects/getProject'
import { Project } from '../../core/services/projects/getProjects'
import Sections from './BacklogSection'

type BacklogLeftPaneProps = {
  currentSection: Sections;
  setCurrentSection: any;
};

const BacklogLeftPane = ({
  currentSection,
  setCurrentSection
}: BacklogLeftPaneProps) => {
  const router = useRouter()
  const [project, setProject] = useState<Project>({ name: '', id: '', description: '' })
  useEffect(() => {
    const { id } = router.query
    if (id) {
      getProject(id?.toString() || '').then(
        (data) => {
          setProject(data!.data() as Project)
        }
      )
    }
  }, [router.query])
  if (!project) {
    return <>Loading...</>
  }
  return (
    <header className="flex flex-col w-full gap-8">
      <div className="flex flex-col justify-start">
        <p className="text-xl font-bold text-black-500">{project.name}</p>
        <p className="text-sm text-black-200">{project.description}</p>
      </div>
      <div className="flex flex-row lg:flex-col gap-2 pr-12">
        <span
          className={`select-none px-6 text-gray-600 py-2 rounded-lg text-center transition  
                    ${
                      currentSection === Sections.Backlog ? 'bg-[#E9EEF4]' : ''
                    } border-gray-300 rounded-lg 
                    hover:bg-[#E9EEF4] active:bg-[#E9EEF4] font-semibold`}
          onClick={() => setCurrentSection(Sections.Backlog)}
        >
          Backlog
        </span>
        <span
          className={`select-none px-6 text-gray-600 py-2 rounded-lg text-center transition  
                    ${
                      currentSection === Sections.Report ? 'bg-[#E9EEF4]' : ''
                    } border-gray-300 rounded-lg 
                    hover:bg-[#E9EEF4] active:bg-[#E9EEF4] font-semibold`}
          onClick={() => setCurrentSection(Sections.Report)}
        >
          Informes
        </span>
        <span
          className={`select-none px-6 text-gray-600 py-2 rounded-lg text-center transition  
                    ${
                      currentSection === Sections.Persons ? 'bg-[#E9EEF4]' : ''
                    } border-gray-300 rounded-lg 
                    hover:bg-[#E9EEF4] active:bg-[#E9EEF4] font-semibold`}
          onClick={() => setCurrentSection(Sections.Persons)}
        >
          Personas
        </span>
      </div>
    </header>
  )
}

export default BacklogLeftPane
