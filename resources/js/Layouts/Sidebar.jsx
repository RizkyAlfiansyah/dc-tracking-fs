import React, { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import LogoPNG from "@/assets/kumham-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faChartColumn, faArrowRightFromBracket, faStairs } from "@fortawesome/free-solid-svg-icons";
import ModalConfirmation from "@/Components/ModalConfirmation";

export default function Sidebar({ path }) {
    const [openModal, setOpenModal] = useState(false);

    console.log("path", path);

    return (
        <>
            <div className="w-full h-full bg-white flex flex-col justify-between">
                <div className="w-full flex flex-col gap-10">
                    <div className="w-full justify-center items-center">
                        <img src={LogoPNG} alt="logo" className="w-10 h-10 m-auto" />
                    </div>
                    <div className="w-full flex flex-col gap-2 items-center">
                        <div className={`w-full flex gap-4 items-center justify-start cursor-pointer rounded-full hover:bg-slate-100  p-2 ${path == "dashboard" && ("bg-slate-100")}`}>
                            <Link href={route('dashboard')}>
                                <FontAwesomeIcon icon={faChartColumn} />
                                <span className="text-gray-600 sm:text-sm"> Dashboard </span>
                            </Link>
                        </div>
                        <div className={`w-full flex gap-4 items-center justify-start cursor-pointer rounded-full hover:bg-slate-100  p-2 ${path == "data" && ("bg-slate-100")}`}>
                            <Link href={route('data')}>
                                <FontAwesomeIcon icon={faDatabase} />
                                <span className="text-gray-600 sm:text-sm"> Data Pengajuan </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center">
                    <div className="w-full flex gap-4 items-center justify-start cursor-pointer rounded-full hover:bg-slate-100 p-2">
                        <button onClick={() => setOpenModal(true)}>
                            <FontAwesomeIcon icon={faArrowRightFromBracket} />
                            <span className="text-gray-600"> Logout </span>
                        </button>
                    </div>
                </div>
            </div>
            <ModalConfirmation
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
            />
        </>
    )
}