import { useState } from "react"
import PrimaryButton from "../../shared/button/PrimaryButton"
import { NewUserHistoryModal } from "./NewUserHistoryModal"

const BacklogTable = () => {

    let [isOpen, setIsOpen] = useState(false)


    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <div className="flex flex-col flex-end gap-4">
            <div className="flex justify-end">
                <div onClick={openModal}>
                    <PrimaryButton>
                        Agregar historia
                    </PrimaryButton>
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
                            <tr>
                                <td className="py-3 text-gray-700">Icon</td>
                                <td className="py-3 text-gray-700">PRO1-0</td>
                                <td className="py-3 text-gray-700">Tarea 1</td>
                                <td className="py-3 text-gray-700">Descripcion de la tarea</td>
                                <td className="py-3 text-gray-700">19 Jun 2022</td>
                                <td className="py-3 text-gray-700 px-2"><select id="small" className="block p-2 pr-4 w-full text-sm rounded-lg border focus:border-gray-300 border-gray-300">
                                    <option selected>
                                        Por hacer
                                    </option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select></td>
                                <td className="py-3 text-gray-700"><select id="small" className="block p-2 pr-4 w-full text-sm rounded-lg border focus:border-gray-300 border-gray-300">
                                    <option selected>
                                        Wilmer R.
                                    </option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <NewUserHistoryModal isOpen={isOpen} closeModal={closeModal} />
        </div>
    )
}

export default BacklogTable;