import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Modals from "@/Components/Modals";
import { useEffect, useMemo, useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function ModalEditTahanan({ isOpen, onClose, data }) {

    const [value, setValue] = useState({
        nik: "",
        nama: "",
        status: "Nonaktif",
        id_prisoner: "",
    });

    useMemo(() => {
        setValue({
            id: data?.id,
            nik: data?.nik,
            nama: data?.nama,
            status: data?.status,
            id_prisoner: data?.id_prisoner,
        });
    }, [data]);

    console.log("value", value);

    const handleSubmit = () => {
        // const data = {
        //     id: data?.id,
        //     nik: value.nik,
        //     nama: value.nama,
        //     status: value.status,
        //     id_prisoner: value?.id_prisoner,
        // }

        // console.log("data", data);

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
            <div className='w-full h-full flex flex-col gap-4 items-start justify-center'>
                <div className="w-full flex items-center justify-between">
                    <span className='font-bold'>Edit Data Warga Binaan</span>
                    <FontAwesomeIcon
                        icon={faClose}
                        onClick={() => onClose()}
                        className='cursor-pointer'
                    />
                </div>
                <div className='w-full px-4 flex flex-col gap-2 items-start justify-center'>
                    <label htmlFor="nik" className='text-sm'>NIK</label>
                    <input type="tel" pattern="[0-9]*" name='nik' defaultValue={value.nik} className='w-full rounded-md' onChange={
                        (e) => setValue({ ...value, nik: e.target.value })
                    } />
                    <label htmlFor="name" className='text-sm'>Nama</label>
                    <input type="text" name='name' className='w-full rounded-md' defaultValue={value.nama} onChange={
                        (e) => setValue({ ...value, nama: e.target.value })
                    } />
                    <label className='text-sm'>Status</label>
                    <div className="flex gap-2">
                        <label htmlFor="status" className='text-sm'>Aktif</label>
                        <input type="radio" name='status' id="status" onChange={
                            (e) => setValue({ ...value, status: "Aktif" })
                        }
                            {...(value.status === "Aktif" ? { checked: true } : {})}
                        />
                        <label htmlFor="status" className='text-sm'>Nonaktif</label>
                        <input type="radio" name='status' id="status" onChange={
                            (e) => setValue({ ...value, status: "Nonaktif" })
                        }
                            {...(value.status === "Nonaktif" ? { checked: true } : {})}
                        />
                    </div>
                </div>
                <div className='w-full flex items-center justify-end'>
                    <button className='bg-blue-600 hover:bg-blue-500 text-white rounded-md px-4 py-2'
                        onClick={() => handleSubmit()}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </Modals>
    )
}