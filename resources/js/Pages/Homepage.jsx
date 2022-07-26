import React from 'react'
import Sidebar from '@/Layouts/Sidebar'
import { Head } from '@inertiajs/inertia-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faUser, faEnvelope, faPencil, faTrash, faAdd } from '@fortawesome/free-solid-svg-icons'
import Dashboard from '@/Layouts/Dashboard'

const HomePage = ({ children, docs }) => {

    console.log("HomePage", docs)

    return (
        <>
            <Head
                title={docs}
            />
            <div className='w-full h-screen bg-primary flex flex-row xl:gap-10'>
                <div className='lg:w-60 w-4/12 min-h-screen bg-white px-6 py-6'>
                    <Sidebar path={docs} />
                </div>
                <div className='w-full flex flex-col xl:px-6 xl:py-4 px-2 py-4 gap-4'>
                    {children}
                </div>
            </div>
        </>
    )
}

export default HomePage