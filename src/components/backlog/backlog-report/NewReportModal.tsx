import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ReportType } from '../../../core/services/projects/getProjects'
import { saveReport } from '../../../core/services/projects/saveReport'
import PrimaryButton from '../../shared/button/PrimaryButton'
import SecondaryButton from '../../shared/button/SecondaryButton'
import { GradientTextDefault } from '../../shared/text/GradientText'

export const NewReportModal = ({ isOpen, closeModal }: any) => {
  const [report, setReport] = useState<ReportType>({
    title: '',
    description: '',
    date: '',
    code: '',
    id: ''
  })

  const onChangeReport = (e: any) => {
    setReport({ ...report, [e.target.name]: e.target.value })
  }

  const onSubmit = () => {
    saveReport('n4od7hfwieSj3O7ZIDUW', report).then(
      (data) => {
        closeModal()
      }
    ).catch(
      (error) => {
        console.log(error)
      }
    )
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className="w-1/2 transform overflow-hidden rounded-2xl bg-white
                                p-8 text-left align-middle border transition-all"
              >
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Crear{' '}
                  <GradientTextDefault>Informe de reunión</GradientTextDefault>
                </Dialog.Title>
                <div className="mt-8 flex flex-col gap-3 w-98">
                  <div className="flex flex-row gap-6">
                    <div className="flex flex-col  w-2/3">
                      <label className="text-sm text-gray-600" htmlFor="code">
                        Código
                      </label>
                      <input
                        id="code"
                        name="code"
                        onChange={(e) => onChangeReport(e)}
                        className="rounded-lg border px-2 py-2 active:border"
                      />
                    </div>
                    <div className="flex flex-col w-1/3">
                      <label
                        className="text-sm text-gray-600"
                        htmlFor="duty_manager"
                      >
                        Participantes
                      </label>
                      <select
                        id="duty_manager"
                        className="h-full p-2 bg-white w-full text-sm rounded-lg border focus:border-gray-300 border-gray-300"
                      >
                        <option selected>Lucero M</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-row gap-6">
                    <div className="flex flex-col w-2/3">
                      <label
                        className="text-sm text-gray-600"
                        htmlFor="title"
                      >
                        Title
                      </label>
                      <input
                        id="title"
                        name="title"
                        onChange={(e) => onChangeReport(e)}
                        className="rounded-lg border px-2 py-2 active:border"
                      />
                    </div>
                    <div className="flex flex-col w-1/3">
                      <label className="text-sm text-gray-600" htmlFor="status">
                        Tipo
                      </label>
                      <select
                        id="status"
                        className="h-full p-2 bg-white w-full text-sm rounded-lg border focus:border-gray-300 border-gray-300"
                      >
                        <option selected>Desarrollador</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6">
                    <div className="flex flex-col w-2/3 h-full">
                      <label
                        className="text-sm text-gray-600"
                        htmlFor="description"
                      >
                        Descripción
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        onChange={(e) => onChangeReport(e)}
                        className="h-full rounded-lg border p-4 active:border"
                      ></textarea>
                    </div>

                    <div className="flex flex-col w-1/3">
                      <div className="flex flex-col">
                        <label
                          className="text-sm text-gray-600"
                          htmlFor="date"
                        >
                          Fecha
                        </label>
                        <input
                          id="date"
                          name="date"
                          onChange={(e) => onChangeReport(e)}
                          className="rounded-lg border px-2 py-2 active:border"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label
                          className="text-sm text-gray-600"
                          htmlFor="artefact"
                        >
                          Pdf de informe
                        </label>
                        <input
                          id="artefact"
                          className="rounded-lg border px-2 py-2 active:border"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-32 flex flex-row flex-end justify-end gap-3">
                  <div onClick={closeModal}>
                    <SecondaryButton>Descartar</SecondaryButton>
                  </div>
                  <div
                    onClick={() =>
                      onSubmit()
                    }
                  >
                    <PrimaryButton>Guardar</PrimaryButton>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
