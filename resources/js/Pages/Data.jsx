import React from 'react'
import HomePage from './Homepage'
import Pengajuan from '@/Layouts/Pengajuan'

export default function Data(props) {
    return (
        <>
            <HomePage
                docs={props.pathname}
            >
                <Pengajuan documents={props} />
            </HomePage>
        </>
    )
}
