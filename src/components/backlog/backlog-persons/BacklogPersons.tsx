import { useState } from "react";
import PrimaryButton from "../../shared/button/PrimaryButton"
import { NewPersonModal } from "./NewPersonModal";
import { Person } from "./Person";

const BacklogPersons = () => {
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
                        Agregar persona
                    </PrimaryButton>
                </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Person
                    name={"Luis Alfredo Acosta"} username={"Luis"}
                    imgUri={"/hero.png"} personId={"12342"} position={"Desarrollador"} /><Person
                    name={"Luis Alfredo Acosta"} username={"Luis"}
                    imgUri={"/hero.png"} personId={"12342"} position={"Desarrollador"} /><Person
                    name={"Luis Alfredo Acosta"} username={"Luis"}
                    imgUri={"/hero.png"} personId={"12342"} position={"Desarrollador"} /><Person
                    name={"Luis Alfredo Acosta"} username={"Luis"}
                    imgUri={"/hero.png"} personId={"12342"} position={"Desarrollador"} /><Person
                    name={"Luis Alfredo Acosta"} username={"Luis"}
                    imgUri={"/hero.png"} personId={"12342"} position={"Desarrollador"} />
            </div>
            <NewPersonModal isOpen={isOpen} closeModal={closeModal} />
        </div>
    )
}

export default BacklogPersons;