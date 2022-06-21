import Sections from './BacklogSection'

type BacklogLeftPaneProps = {
  currentSection: Sections;
  setCurrentSection: any;
};

const BacklogLeftPane = ({
  currentSection,
  setCurrentSection
}: BacklogLeftPaneProps) => {
  return (
    <header className="flex flex-col w-full gap-8">
      <div className="flex flex-col justify-start">
        <p className="text-xl font-bold text-black-500">Proyecto 1</p>
        <p className="text-sm text-black-200">Proyecto de software</p>
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
