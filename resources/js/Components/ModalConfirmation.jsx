import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import Modals from './Modals'

const ModalConfirmation = ({ isOpen, onClose }) => {
    return (
        <Modals
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className='flex flex-col gap-4 items-center justify-center'>
                <h1 className='text-lg font-bold'>Anda Yakin Untuk Mengakhiri Sesi Anda ?</h1>
                <div className='w-full flex gap-4 justify-end items-center'>
                    <Link href={route('logout')} method='post' as='button'>
                        <button className='p-1 bg-red-800 hover:bg-red-700 text-white rounded-md'>
                            Logout
                        </button>
                    </Link>
                    <button onClick={onClose} className='p-1 rounded-md hover:bg-slate-200'>
                        Batal
                    </button>
                </div>
            </div>
        </Modals>
    )
}

export default ModalConfirmation