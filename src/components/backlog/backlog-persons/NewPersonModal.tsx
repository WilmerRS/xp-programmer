import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import PrimaryButton from '../../shared/button/PrimaryButton'
import SecondaryButton from '../../shared/button/SecondaryButton'
import {
  GradientTextDefault
} from '../../shared/text/GradientText'

export const NewPersonModal = ({ isOpen, closeModal }: any) => {
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle border transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Añadir{' '}
                  <GradientTextDefault>Persona al proyecto</GradientTextDefault>
                </Dialog.Title>
                <div className="mt-8 flex flex-col gap-3">
                  <div>
                    <label
                      className="text-sm text-gray-600"
                      htmlFor="duty_manager"
                    >
                      Encargado
                    </label>
                    <select
                      id="duty_manager"
                      className="block p-2 bg-white w-full text-sm rounded-lg border focus:border-gray-300 border-gray-300"
                    >
                      <option selected>Lucero M</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600" htmlFor="rol">
                      Rol
                    </label>
                    <select
                      id="rol"
                      className="block p-2 bg-white w-full text-sm rounded-lg border focus:border-gray-300 border-gray-300"
                    >
                      <option selected>Desarrollador</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label
                      className="text-sm text-gray-600"
                      htmlFor="description"
                    >
                      Descripción
                    </label>
                    <textarea
                      id="description"
                      className="rounded-lg border p-4 active:border"
                    ></textarea>
                  </div>
                </div>

                <div className="mt-48 flex flex-row flex-end justify-end gap-3">
                  <div onClick={closeModal}>
                    <SecondaryButton>Descartar</SecondaryButton>
                  </div>
                  <PrimaryButton>Guardar</PrimaryButton>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
