import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faUser, faEnvelope, faPencil, faTrash, faAdd, faEnvelopeCircleCheck, faFileUpload, faTasks, faDna } from '@fortawesome/free-solid-svg-icons'
import Table from '../Components/Table';
import Header from '@/Layouts/Header';
import ModalAddPengajuan from '../Components/ModalAddPengajuan';
import Search from '@/Components/Search';


export default function Dashboard({ documents }) {

    console.log("props", documents)

    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Header
                title="Dashboard"
            />
            <div className='w-full flex flex-col gap-2 items-center justify-center'>
                <div className='w-full p-1 flex gap-1 bg-white rounded-md items-center justify-evenly'>
                    <div className='p-2 flex gap-2 border-r-2'>
                        <div className='px-4 py-3 bg-amber-300 rounded-lg'>
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-xs'>Jumlah Tahanan</span>
                            <span className='text-lg'>300</span>
                        </div>
                    </div>
                    <div className='p-2 flex gap-2 border-r-2'>
                        <div className='px-4 py-3 bg-orange-200 rounded-lg'>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-xs'>Jumlah Pengajuan</span>
                            <span className='text-lg'>5</span>
                        </div>
                    </div>
                    <div className='p-2 flex gap-2 border-r-2'>
                        <div className='px-4 py-3 bg-orange-200 rounded-lg'>
                            <FontAwesomeIcon icon={faEnvelopeCircleCheck} />
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-xs'>Sampai</span>
                            <span className='text-lg'>5</span>
                        </div>
                    </div>
                    <div className='p-2 flex gap-2'>
                        <div className='px-4 py-3 bg-orange-200 rounded-lg'>
                            <FontAwesomeIcon icon={faDna} />
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-xs'>Belum Sampai</span>
                            <span className='text-lg'>5</span>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-between gap-4'>
                    <Search />
                    <button className='flex gap-2 items-center bg-cyan-700 hover:bg-cyan-600 text-white px-4 py-2 rounded-md' onClick={() => setOpenModal(true)}>
                        <FontAwesomeIcon icon={faAdd} />
                        <span className='border-l-2 px-2 text-xs'>Tambah Data Tahanan</span>
                    </button>
                </div>
                <Table data={documents} />
            </div>
            <ModalAddPengajuan
                isOpen={openModal}
                onClose={setOpenModal}
            />
        </>
    )
}