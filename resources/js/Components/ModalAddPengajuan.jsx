import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Modals from "./Modals";
import { useEffect, useMemo, useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import Select from "react-select";

export default function ModalAddPengajuan({ isOpen, onClose, data, setSelectedRows, secondData }) {

    const [value, setValue] = useState({
        nik: "",
        nama: "",
        status: "Aktif",
        checkpoint: 'checkpoint 1',
    });

    const [error, setError] = useState(false);

    const [options, setOptions] = useState([]);

    useEffect(() => {
        if (data.length > 0) {
            let tempData = [];
            data?.map(item => {
                tempData.push({
                    value: item.nama,
                    label: item.nama
                })
            })
            setOptions(tempData);
        }
        console.log("data", data);
    }, [data]);

    useEffect(() => {
        if (data.length > 0) {
            let tempData = [];
            data.find(item => {
                item.nama === value.nama ? tempData.push(item.nik) : null;
            })
            setValue({
                ...value,
                nik: tempData
            })
        }
    }, [error]);

    const handleSubmit = () => {
        try {
            // secondData.find(item => {
            //     item.nama === value.nama ?
            //         setError(true) :
            //     })
            Inertia.post("/pengajuan", value);
        } catch (error) {
            setError(true);
            // console.log(error);
        } finally {
            error ? setError(true) : onClose();
            setValue({
                ...value,
                nik: "",
                nama: "",
            });
            setSelectedRows([]);
        }
    }

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
                        onClick={() => {
                            onClose()
                            setValue({
                                ...value,
                                nik: "",
                            })
                            setError(false)
                        }}
                        className='cursor-pointer'
                    />
                </div>
                <div className='w-full flex flex-col gap-2 items-start justify-center'>
                    {
                        error && <div className="w-full p-1 bg-red-200 rounded-sm">
                            <p className="text-md text-red-600">
                                Pengajuan Telah Aktif untuk {value.nama}
                            </p>
                        </div>
                    }
                    <label htmlFor="name" className='text-sm'>Nama</label>
                    {/* <input type="text" name='name' className='w-full rounded-md' defaultValue={value.nama} onChange={
                        (e) => setValue({ ...value, nama: e.target.value })
                    } /> */}
                    <div className="w-full rounded-md bg-white">
                        <Select
                            className="w-full rounded-md"
                            options={options}
                            onChange={(e) => {
                                data.find(item => {
                                    item.nama === e.value ? setValue({
                                        ...value,
                                        nama: item.nama,
                                        nik: item.nik
                                    }) : null;
                                })
                            }}
                            defaultValue={value.nama}
                            placeholder="Pilih Nama"
                        />
                    </div>
                    <label htmlFor="nik" className='text-sm'>NIK</label>
                    <input type="tel" pattern="[0-9]*" name='nik' value={value.nik} className='w-full rounded-md disabled:bg-slate-300 border-1 border-gray-400' disabled />
                </div>
                <div className='w-full flex items-center justify-end mt-20'>
                    <button className='bg-blue-600 hover:bg-blue-500 text-white rounded-md px-4 py-2' onClick={() => handleSubmit()}>
                        Submit Pengajuan
                    </button>
                </div>
            </div>
        </Modals>
    )
}