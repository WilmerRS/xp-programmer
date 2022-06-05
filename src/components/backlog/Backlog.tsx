import { useState } from 'react'
import BacklogLeftPane from './BacklogLeftPane'
import BacklogPersons from './backlog-persons/BacklogPersons';
import BacklogReport from './backlog-report/BacklogReport';
import Sections from './BacklogSection';
import BacklogTable from './backlog-table/BacklogTable';

const Backlog = () => {

    const [currentSection, setCurrentSection] = useState(Sections.Backlog)
    let section: any;
    switch (currentSection) {
        case Sections.Backlog:
            section = <BacklogTable />
            break;
        case Sections.Report:
            section = <BacklogReport/>
            break;
        case Sections.Persons:
            section = <BacklogPersons/>
            break;
        default:
            section = <BacklogTable />
            break;
    }

    return (
        <main className='max-w-7xl mx-auto py-10'>
            <section className="w-full grid grid-cols-5 gap-4">
                <BacklogLeftPane currentSection={currentSection} setCurrentSection={setCurrentSection}/>
                <div className="lg:pl-4 col-span-4">
                    {section}
                </div>
            </section>
        </main>
    )
}

export default Backlog
