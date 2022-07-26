import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Modals from "./Modals";

export default function ModalAddPengajuan({ isOpen, onClose }) {
    return (
        <Modals
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className='w-full h-full flex flex-col gap-4 items-start justify-center'>
                <div className="w-full flex items-center justify-between">
                    <span className='font-bold'>Buat Pengajuan</span>
                    <FontAwesomeIcon
                        icon={faClose}
                        onClick={() => onClose()}
                        className='cursor-pointer'
                    />
                </div>
                <div className='w-full px-4 flex flex-col gap-2 items-start justify-center'>
                    <label htmlFor="nik" className='text-sm'>NIK</label>
                    <input type="number" name='nik' className='w-full rounded-md' />
                    <label htmlFor="name" className='text-sm'>Nama</label>
                    <input type="text" name='name' className='w-full rounded-md' />
                    <label htmlFor="letter_number" className='text-sm'>Nomor Surat</label>
                    <input type="text" name='letter_number' className='w-full rounded-md' />
                    <label htmlFor="status" className='text-sm'>Status</label>
                    <input type="text" name='status' className='w-full rounded-md' />
                </div>
                <div className='w-full flex items-center justify-end'>
                    <button className='bg-blue-600 hover:bg-blue-500 text-white rounded-md px-4 py-2' onClick={() => onClose()}>
                        Submit
                    </button>
                </div>
            </div>
        </Modals>
    )
}