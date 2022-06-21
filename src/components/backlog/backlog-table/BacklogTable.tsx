import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getBacklog } from '../../../core/services/projects/getBacklog'
import { Backlog } from '../../../core/services/projects/getProjects'
import PrimaryButton from '../../shared/button/PrimaryButton'
import { NewUserHistoryModal } from './NewUserHistoryModal'

const BacklogTable = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [backlog, setBacklog] = useState<Backlog[]>([])

  const router = useRouter()

  const getBacklogData = (id: string) => {
    getBacklog(id).then(
      (data) => {
        const bck: Backlog[] = []
        data.forEach((result) => {
          bck.push(result.data() as Backlog)
        })
        setBacklog(bck)
      }
    )
  }

  useEffect(() => {
    const { id } = router.query
    if (id) {
      getBacklogData(id.toString() || '')
    }
  }, [router.query])

  // const project = getProject(id?.toString() || '')

  function closeModal () {
    setIsOpen(false)
    const { id } = router.query
    if (id) {
      getBacklogData(id.toString() || '')
    }
  }

  function openModal () {
    setIsOpen(true)
  }

  if (!backlog) {
    return <>Loading</>
  }

  return (
    <div className="flex flex-col flex-end gap-4">
      <div className="flex justify-end">
        <div onClick={openModal}>
          <PrimaryButton>Agregar historia</PrimaryButton>
        </div>
      </div>

      <div className="w-full">
        <div className="mt-3 lg:mt-0 overflow-x-auto">
          <table className="table-auto w-full whitespace-nowrap">
            <thead className="border-b border-gray-300">
              <tr>
                <th className="text-left py-3 text-gray-600">Icon</th>
                <th className="text-left py-3 text-gray-600">Código</th>
                <th className="text-left py-3 text-gray-600">Historia</th>
                <th className="text-left py-3 text-gray-600">Descripción</th>
                <th className="text-left py-3 text-gray-600">Fecha</th>
                <th className="text-left py-3 text-gray-600">Estado</th>
                <th className="text-left py-3 text-gray-600">Encargado</th>
              </tr>
            </thead>
            <tbody>
              {backlog.map((history) => (
                <tr key={history.code}>
                  <td className="py-3 text-gray-700">Icon</td>
                  <td className="py-3 text-gray-700">{history.code}</td>
                  <td className="py-3 text-gray-700">{history.history}</td>
                  <td className="py-3 text-gray-700">
                    {history.description}
                  </td>
                  <td className="py-3 text-gray-700">{history.date}</td>
                  <td className="py-3 text-gray-700 px-2">
                    <select
                      defaultValue={'1'}
                      id="small"
                      className="block p-2 pr-4 w-full text-sm rounded-lg border focus:border-gray-300 border-gray-300"
                    >
                      <option selected>Por hacer</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </td>
                  <td className="py-3 text-gray-700">
                    <select
                      id="small"
                      className="block p-2 pr-4 w-full text-sm rounded-lg border focus:border-gray-300 border-gray-300"
                    >
                      <option selected>Wilmer R.</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <NewUserHistoryModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  )
}

export default BacklogTable
