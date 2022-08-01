import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faClose } from "@fortawesome/free-solid-svg-icons";
import Modals from "@/Components/Modals";
import { useEffect, useMemo, useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function ModalDetailPengajuan({ isOpen, onClose, data }) {

    const [checkPoint, setCheckPoint] = useState(1);
    const [value, setValue] = useState({
        nik: "",
        nama: "",
        status: "Nonaktif",
        id_prisoner: "",
    });

    useMemo(() => {
        setValue({
            id: data?.id,
            nama: data?.nama,
            resi: data?.resi,
            status: data?.status,
            id_document: data?.id_document,
        });
    }, [data]);

    console.log("value", value);

    const handleSubmit = () => {

        try {
            Inertia.post("/pengajuan/update", value);
        } catch (error) {
            console.log(error);
        } finally {
            onClose();
            setValue({
                nik: "",
                nama: "",
                status: "Nonaktif",
                id_prisoner: "",
            });
        }
    }

    return (
        <Modals
            isOpen={isOpen}
            onClose={() => onClose()}
        >
            <div className='w-full h-full flex flex-col gap-6 items-start justify-center'>
                <div className="w-full flex items-center justify-between">
                    <span className='font-bold'>Detail Pengajuan</span>
                    <FontAwesomeIcon
                        icon={faClose}
                        onClick={() => {
                            onClose()
                            setCheckPoint(1)
                        }}
                        className='cursor-pointer'
                    />
                </div>
                <div className='w-full p-0 flex flex-col items-start justify-center'>
                    <div className="w-full bg-gray-200 p-2 rounded-md">
                        <div className="w-10/12 flex flex-col gap-2">
                            <div className="w-full flex items-start justify-start gap-20">
                                <label htmlFor="">
                                    Nama
                                </label>
                                <label htmlFor="" className="text-md font-bold">
                                    {value.nama}
                                </label>
                            </div>
                            <div className="w-full flex items-start justify-start gap-10">
                                <label htmlFor="">
                                    Nomor Resi
                                </label>
                                <label htmlFor="" className="text-md font-bold">
                                    {value.resi}
                                </label>
                            </div>
                        </div>
                    </div>
                    <label className='text-md font-bold mt-2'>Status Paket</label>
                    <div className="w-full h-56 flex flex-col gap-2 overflow-auto pr-3">
                        <div className="w-full flex items-center justify-end">
                            <button className='flex gap-2 items-center bg-cyan-700 hover:bg-cyan-600 text-white px-4 py-2 rounded-md mt-2 disabled:bg-slate-300 disabled:text-gray-600'
                                onClick={() => setCheckPoint((prev) => prev + 1)}
                                disabled={checkPoint === 9}
                            >
                                <FontAwesomeIcon icon={faAdd} />
                                <span className='border-l-2 px-2 text-xs'>Checkpoint</span>
                            </button>
                        </div>
                        <div className="w-full flex items-center justify-between border-b-2 pb-2">
                            <label htmlFor="cp1">Checkpoint 1</label>
                            <input type="text" className="w-6/12 p-1 m-0 focus:outline-none focus:ring-0 rounded-sm mt-2 disabled:bg-slate-300" disabled />
                        </div>
                        {
                            Array.from({ length: checkPoint }, (_, i) => (
                                <div className="w-full flex items-center justify-between border-b-2 pb-2" key={i}>
                                    <label htmlFor="cp1">Checkpoint {i + 2}</label>
                                    <input type="text" className="w-6/12 p-1 m-0 focus:outline-none focus:ring-0 rounded-sm mt-2" />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='w-full flex items-center justify-end'>
                    <button className='bg-blue-600 hover:bg-blue-500 text-white rounded-md px-4 py-2'
                    // onClick={() => handleSubmit()}
                    >
                        Update
                    </button>
                </div>
            </div>
        </Modals>
    )
}