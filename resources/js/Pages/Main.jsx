import { Head } from '@inertiajs/inertia-react'
import React from 'react'
import { StepperNav } from "vertical-stepper-nav";

export default function Main() {
    return (
        <>
            <Head
                title='Track Dokumen'
            />
            <div className='w-full flex flex-col gap-4 min-h-screen bg-primary'>
                <div className='w-full p-4' style={{ background: 'linear-gradient(273deg, rgba(81,226,255,1) 23%, rgba(39,111,201,1) 100%, rgba(2,0,36,1) 100%)' }}>
                    <p className='text-3xl text-white font-bold'>
                        Document Tracker
                    </p>
                </div>
                <div className='w-full py-2 px-40 flex gap-2'>
                    <div className='w-5/12 bg-white p-4 flex flex-col gap-2'>
                        <p className='text-xl text-gray-700 font-extrabold'>Informasi Paket</p>
                        <div className='w-full flex items-start justify-between'>
                            <p className='text-md text-gray-500'>
                                Nomor Resi
                            </p>
                            <p className='text-md font-extrabold'>
                                NP0012313123MRS
                            </p>
                        </div>
                    </div>
                    <div className='w-full bg-white p-4'>
                        <p className='text-xl text-green-500 font-bold border-b-2'>Update Status Paket</p>
                        <div className='w-full p-4'>
                            <StepperNav
                                steps={[
                                    {
                                        stepContent: () => <div className='font-sm'>Step 1</div>,
                                        stepStatusCircleSize: 16,
                                        stepStateColor: "green"
                                    },
                                    {
                                        stepContent: () => <div className='font-sm text-gray-500'>Step 2</div>,
                                        stepStatusCircleSize: 16,
                                        stepStateColor: "#F6F6F6"
                                    },
                                    {
                                        stepContent: () => <div className='font-sm text-gray-500'>Nomor Resi Pengiriman telah dibuat</div>,
                                        stepStatusCircleSize: 16,
                                        stepStateColor: "#F6F6F6"
                                    }
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
