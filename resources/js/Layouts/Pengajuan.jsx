import React, { useState } from 'react'
import Table from '@/Components/Table'
import Header from './Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faUser, faEnvelope, faPencil, faTrash, faAdd } from '@fortawesome/free-solid-svg-icons'
import ModalAddPengajuan from '@/Components/ModalAddPengajuan'
import Search from '@/Components/Search'

export default function Pengajuan({ documents }) {

    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Header
                title="Data Pengajuan"
            />
            <div className='flex flex-col gap-2'>
                <div className='w-full flex justify-between gap-4'>
                    <Search />
                    <button className='flex gap-2 items-center bg-cyan-700 hover:bg-cyan-600 text-white px-4 py-2 rounded-md' onClick={() => setOpenModal(true)}>
                        <FontAwesomeIcon icon={faAdd} />
                        <span className='border-l-2 px-2 text-xs'>Buat Pengajuan</span>
                    </button>
                </div>
                <Table
                    data={documents}
                />
            </div>
            <ModalAddPengajuan
                isOpen={openModal}
                onClose={setOpenModal}
            />
        </>
    )
}
