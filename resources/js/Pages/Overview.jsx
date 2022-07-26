import Dashboard from '@/Layouts/Dashboard'
import React from 'react'
import HomePage from './Homepage'

const Overview = (props) => {
    return <HomePage docs={props.pathname}>
        <Dashboard documents={props} />
    </HomePage>
}

export default Overview