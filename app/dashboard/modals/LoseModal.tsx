'use client'
import { useRouter } from "next/navigation";

import Modal from "~/components/Modal";
import Button from "~/components/Buttons/Button";


const LoseModal = () => {
    const router = useRouter()
    return (
        <Modal title="Better luck next time" dismissible>
            <div className="flex justify-center">
                <Button
                    color="blue"
                    onClick={router.back}
                >
                    Ok
                </Button>
            </div>
        </Modal>
    )
}


export default LoseModal