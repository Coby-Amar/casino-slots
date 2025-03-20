'use client'
import { useRouter } from "next/navigation";

import Modal from "~/components/Modal";
import Button from "~/components/Buttons/Button";


const WonModal = ({ worth }: WonModalProps) => {
    const router = useRouter()
    return (
        <Modal title="😀 Congratulations!!!" dismissible>
            <div className="flex flex-col justify-center items-center">
                You got {worth} credits
                <Button
                    color="green"
                    onClick={router.back}
                >
                    Ok
                </Button>
            </div>
        </Modal>
    )
}


export default WonModal