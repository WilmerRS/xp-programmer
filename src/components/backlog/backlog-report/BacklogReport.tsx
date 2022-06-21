import { useState } from 'react'
import PrimaryButton from '../../shared/button/PrimaryButton'
import { NewReportModal } from './NewReportModal'
import { Report } from './Report'

const BacklogReport = () => {
  const [isOpen, setIsOpen] = useState(false)

  function closeModal () {
    setIsOpen(false)
  }

  function openModal () {
    setIsOpen(true)
  }

  return (
    <div className="flex flex-col flex-end gap-4">
      <div className="flex justify-end">
        <div onClick={openModal}>
          <PrimaryButton>Agregar informe</PrimaryButton>
        </div>
      </div>

      <div className="w-full pt-4 flex flex-col gap-4">
        <Report
          name={'Reunion de recolección de requerimientos'}
          id={'1'}
          description={
            'Se generó un informe de requerimientos del día 29 de mayo.'
          }
          reportType={'Reunión inicial 29-may-2022'}
        />
        <Report
          name={'Reunion de recolección de requerimientos'}
          id={'1'}
          description={
            'Se generó un informe de requerimientos del día 29 de mayo.'
          }
          reportType={'Reunión inicial 29-may-2022'}
        />
        <Report
          name={'Reunion de recolección de requerimientos'}
          id={'1'}
          description={
            'Se generó un informe de requerimientos del día 29 de mayo.'
          }
          reportType={'Reunión inicial 29-may-2022'}
        />
      </div>
      <NewReportModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  )
}

export default BacklogReport
