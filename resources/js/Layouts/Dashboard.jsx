import { useCallback, useEffect, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPencil, faAdd, faEnvelopeCircleCheck, faDna, faDownload, faUpload, faTrash } from '@fortawesome/free-solid-svg-icons'
import Header from '@/Layouts/Header';
import Search from '@/Components/Search';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalAddData from '@/Components/ModalAddData';
import DataTable from 'react-data-table-component';
import ModalEditTahanan from '@/Components/ModalEditTahanan';
import ModalDeleteConfirmation from '@/Components/ModalDeleteConfirmation';
import { CSVLink } from 'react-csv';




export default function Dashboard(props) {
    console.log("props", props)
    const { documents } = props;
    const [openModal, setOpenModal] = useState(false);
    const [pending, setPending] = useState(true);
    const [selectedRows, setSelectedRows] = useState([]);
    const [toggleCleared, setToggleCleared] = useState(false);
    const [data, setData] = useState(documents?.documents);
    const [openModalEdit, setOpenModalEdit] = useState(false)
    const [dataEditId, setDataEditId] = useState("")
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const filteredItems = documents?.documents.filter(
        item => item.nama && item.nama.toLowerCase().includes(filterText.toLowerCase()),
    );

    const columns = [
        {
            name: 'NO',
            selector: (row, index) => index + 1,
            center: true,
            grow: 0,

        },
        {
            name: 'NIK',
            selector: row => <div className='text-xs'>
                {row.nik}
            </div>,
            center: true,
            grow: 0.5,
        },
        {
            name: 'Nama',
            selector: row => <div className='text-xs'>
                {row.nama}
            </div>,
        },
        {
            name: 'Status',
            selector: row => <div className={`w-14 p-1 text-xs text-center ${row.status === 'Aktif' ? 'bg-orange-400' : 'bg-zinc-400'} m-auto text-white rounded-lg`}>
                {row.status}
            </div>,
            center: true,
        },
        {
            cell: row => <button className='flex items-center gap-1 bg-amber-400 hover:bg-amber-500 px-4 py-1 text-white text-xs rounded-lg'
                onClick={() => {
                    setOpenModalEdit(true)
                    setDataEditId(row.id)
                }}
            >
                <FontAwesomeIcon icon={faPencil} />
                edit
            </button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        }

    ]

    const handleRowSelected = useCallback(state => {
        setSelectedRows(state.selectedRows);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setPending(false);
        }, 500);
    }, []);

    const contextActions = useMemo(() => {
        return (
            <>
                <button key="delete" onClick={() => setToggleCleared(true)} className='flex items-center gap-1 bg-red-600 hover:bg-red-700 px-4 py-1 text-white text-xs rounded-lg'>
                    <FontAwesomeIcon icon={faTrash} className='text-white' />
                    Delete
                </button>
                <ModalDeleteConfirmation
                    isOpen={toggleCleared}
                    onClose={() => setToggleCleared(false)}
                    data={{ id: selectedRows.map(r => r.id) }}
                />
            </>
        );
    }, [selectedRows, toggleCleared]);

    const notify = () => toast.success(selectedRows.length > 0 ? selectedRows.length + documents?.flash?.success : documents?.flash?.success, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
    });

    useEffect(() => {
        if (documents?.flash?.success) {
            notify();
            setSelectedRows([]);
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        }
    }, [documents]);

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
                    <Search
                        onChange={e => setFilterText(e.target.value)}
                        value={filterText}
                        onClear={() => {
                            setFilterText('')
                            setResetPaginationToggle(!resetPaginationToggle);
                        }}
                        placeholder='Cari Nama'
                    />
                    <div className='flex w-full items-center justify-end gap-2'>
                        <div className='flex gap-2 items-center bg-cyan-700 hover:bg-cyan-600 text-white px-4 py-2 rounded-md'>
                            <FontAwesomeIcon icon={faDownload} />
                            <CSVLink
                                data={documents?.documents}
                                className='border-l-2 px-2 text-xs'
                            >
                                Export Data
                            </CSVLink>
                        </div>
                        <div className='flex gap-2 items-center bg-cyan-700 hover:bg-cyan-600 text-white px-4 py-2 rounded-md'>
                            <FontAwesomeIcon icon={faUpload} />
                            <CSVLink
                                data={documents?.documents}
                                className='border-l-2 px-2 text-xs'
                            >
                                Import Data
                            </CSVLink>
                        </div>
                        <button className='flex gap-2 items-center bg-cyan-700 hover:bg-cyan-600 text-white px-4 py-2 rounded-md' onClick={() => setOpenModal(true)}>
                            <FontAwesomeIcon icon={faAdd} />
                            <span className='border-l-2 px-2 text-xs'>Tambah Data</span>
                        </button>
                    </div>
                </div>
                {/* <Table data={documents} /> */}
                <DataTable
                    title="Data Warga Binaan"
                    columns={columns}
                    data={filteredItems}
                    pagination={true}
                    selectableRows
                    contextActions={contextActions}
                    onSelectedRowsChange={handleRowSelected}
                    clearSelectedRows={toggleCleared}
                    progressPending={pending}
                    paginationResetDefaultPage={resetPaginationToggle}
                />
            </div>
            <ModalAddData
                isOpen={openModal}
                onClose={setOpenModal}
                setSelectedRows={setSelectedRows}
            />
            <ModalEditTahanan
                isOpen={openModalEdit}
                onClose={() => setOpenModalEdit(false)}
                data={filteredItems?.find(item => item.id === dataEditId)}
            />
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    )
}