import SecondaryButton from '../../shared/button/SecondaryButton'
import { ReportProps } from './ReportProps'

export const Report = ({ name, id, description, reportType }: ReportProps) => {
  return (
    <div className="rounded-lg p-4 border">
      <div className="flex flex-row justify-between items-start">
        <div>
          <span className="font-bold">{name}</span>
          <p className="text-gray-600">Reunión inicial 29-may-2022</p>
        </div>
        <SecondaryButton className="text-gray-600">Eliminar</SecondaryButton>
      </div>
      <p className="pt-3">{description}</p>
    </div>
  )
}
