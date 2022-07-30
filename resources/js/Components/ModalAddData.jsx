import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Modals from "./Modals";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function ModalAddData({ isOpen, onClose }) {

    // console.log("props", props)

    const [value, setValue] = useState({
        nik: "",
        nama: "",
        satus: "Nonaktif",
    });

    const handleSubmit = () => {

        const data = {
            nik: value.nik,
            nama: value.nama,
            status: value.satus,
        }

        try {
            Inertia.post("/pengajuan", data);
        } catch (error) {
            console.log(error);
        } finally {
            onClose();
            setValue({
                nik: "",
                nama: "",
                satus: "Nonaktif",
            });
        }
    }

    return (
        <Modals
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className='w-full h-full flex flex-col gap-4 items-start justify-center'>
                <div className="w-full flex items-center justify-between">
                    <span className='font-bold'>Tambah Data Warga Binaan</span>
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
                </div>
                <div className='w-full flex items-center justify-end'>
                    <button className='bg-blue-600 hover:bg-blue-500 text-white rounded-md px-4 py-2' onClick={() => handleSubmit()}>
                        Submit
                    </button>
                </div>
            </div>
        </Modals>
    )
}