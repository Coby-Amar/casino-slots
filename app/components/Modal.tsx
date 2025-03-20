'use client'
import { useRouter } from 'next/navigation'
import CloseIcon from './Svgs/CloseIcon';


const Modal = ({ children, title, dismissible }: ModalProps) => {
    const router = useRouter()
    return (
        <div className='fixed inset-0 overflow-y-auto h-full w-full flex items-center justify-center'>
            <div onClick={dismissible ? router.back : undefined} className="bg-gray-600/50 h-full w-full absolute" />
            <div className="p-8 border w-96 shadow-lg rounded-md bg-white z-10">
                <div className="flex justify-between items-center">
                    <h3 className="text-center text-2xl font-bold text-gray-900">{title}</h3>
                    {dismissible &&
                        <CloseIcon onClick={router.back} />
                    }
                </div>
                <div className="mt-2 px-7 py-3">
                    {children}
                </div>
            </div>
        </div>
    );
}
export default Modal