import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ReportType } from '../../../core/services/projects/getProjects'
import { getReports } from '../../../core/services/projects/getReports'
import PrimaryButton from '../../shared/button/PrimaryButton'
import { NewReportModal } from './NewReportModal'
import { Report } from './Report'

const BacklogReport = () => {
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()
  const [reports, setReports] = useState<ReportType[]>([])

  const getReportsData = (id: string) => {
    getReports(id).then(
      (data) => {
        const rpts: ReportType[] = []
        data.forEach((result) => {
          rpts.push(result.data() as ReportType)
        })
        setReports(rpts)
      }
    ).catch(
      (error) => {
        console.log(error)
      }
    )
  }

  useEffect(() => {
    const { id } = router.query
    getReportsData(id?.toString() || '')
  }, [router.query])

  function closeModal () {
    setIsOpen(false)
    const { id } = router.query
    getReportsData(id?.toString() || '')
  }

  function openModal () {
    setIsOpen(true)
  }

  /* const submitCreateProject = () => {
    console.log('funciona')
    createProject({
      id: 'f2341',
      name: 'Proyecto 1',
      description: 'Proyecto de software - 20',
      backlog: [],
      reports: []
    }).then(
      (data) => {
        console.log(data.id)
      }
    )
  } */

  return (
    <div className="flex flex-col flex-end gap-4">
      <div className="flex justify-end">
        <div onClick={openModal}>
          <PrimaryButton>Agregar informe</PrimaryButton>
        </div>
      </div>

      <div className="w-full pt-4 flex flex-col gap-4">
        {reports.map((report) => (
          <Report
            key={report.id}
            name={report.title}
            id={report.id}
            description={report.description}
            reportType={'Reunión inicial ' + report.date}
          />
        ))}
      </div>
      <NewReportModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  )
}

export default BacklogReport
