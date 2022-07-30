import { faPencil, faTrash, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from '@inertiajs/inertia-react'
import ModalEditTahanan from './ModalEditTahanan'
import Pagination from './Pagination'

export default function Table({ data }) {
    const [openModalEdit, setOpenModalEdit] = useState(false)
    const [dataEditId, setDataEditId] = useState("")
    const [dataEdit, setDataEdit] = useState("")

    const path = data?.pathname

    console.log("path", data.documents)

    useEffect(() => {
        if (dataEditId) {
            setDataEdit(data?.documents?.data?.find(item => item.id === dataEditId))
        }
    }, [dataEditId])


    let Pages = []

    switch (path) {
        case 'dashboard':
            Pages = (
                <div className='w-full h-auto'>
                    <table className="w-full table-auto bg-white overflow-auto">
                        <thead className='bg-slate-400 text-sm text-white'>
                            <tr className='text-start'>
                                <th>NO</th>
                                <th>NIK</th>
                                <th className='text-start'>Nama</th>
                                <th>Status Pengajuan</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className='text-xs'>
                            {
                                data.documents.data?.map((document, i) => {
                                    return (
                                        <tr key={i} className='text-center'>
                                            <td className='px-2'>{data.documents.from + i}</td>
                                            <td>{document.nik}</td>
                                            <td className='text-start'>{document.nama}</td>
                                            <td>
                                                <div className={`w-6/12 p-1 text-xs ${document.status === 'Aktif' ? 'bg-orange-400' : 'bg-zinc-400'} m-auto text-white rounded-lg`}>
                                                    {document.status}
                                                </div>
                                            </td>
                                            <td className='w-auto flex gap-2 justify-end py-1 px-1'>
                                                <button className='flex items-center gap-1 bg-amber-400 hover:bg-amber-500 px-4 py-1 text-white text-xs rounded-lg'
                                                    onClick={() => {
                                                        setOpenModalEdit(true)
                                                        setDataEditId(document.id)
                                                    }}>
                                                    <FontAwesomeIcon icon={faPencil} />
                                                    edit
                                                </button>
                                                <button className='flex items-center gap-1 bg-red-600 hover:bg-red-700 px-4 py-1 text-white text-xs rounded-lg'>
                                                    <Link href={route('data.delete')} method='post' as='button' data={{ id: document.id }}>
                                                        <div className='flex gap-1'>
                                                            <FontAwesomeIcon icon={faTrash} />
                                                            <p>
                                                                hapus
                                                            </p>
                                                        </div>
                                                    </Link>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <Pagination data={data.documents} />
                </div>
            )
            break;
        case 'data':
            Pages = (
                <div className='w-full h-auto flex flex-col gap-4'>
                    <table className="w-full table-auto bg-white overflow-auto">
                        <thead className='bg-slate-400 text-sm text-white'>
                            <tr className='text-center'>
                                <th>NO</th>
                                <th>Resi</th>
                                <th>Nama</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className='text-sm'>
                            {
                                data.documents.data.map((document, index) => {
                                    return (
                                        <tr key={index} className='text-center'>
                                            <td className='px-2'>{index + 1}</td>
                                            <td>{document.resi}</td>
                                            <td>{document.name}</td>
                                            <td>{document.status}</td>
                                            <td className='w-auto flex gap-2 justify-center py-1 px-1'>
                                                <button className='flex items-center gap-1 bg-blue-400 hover:bg-blue-300 px-4 py-1 text-white text-xs rounded-lg'>
                                                    <FontAwesomeIcon icon={faCircleExclamation} />
                                                    Detail
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <Pagination data={data.documents} />
                </div>
            )
            break;
        default:
            Pages = (
                <div className='w-full h-auto bg-slate-300'>
                    <p className='text-xl font-bold'>
                        Tidak Ada Data !
                    </p>
                </div>
            )
    }

    return (
        <>
            {data.documents?.data.length > 0 ? Pages :
                <div className='w-full h-auto bg-slate-300 text-center text-2xl font-bold'>
                    Tidak Ada Data
                </div>
            }

            <ModalEditTahanan
                isOpen={openModalEdit}
                onClose={() => setOpenModalEdit(false)}
                data={data.documents?.data.find(item => item.id === dataEditId)}
            />
        </>
    )
}
