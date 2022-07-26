import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

const Header = ({ title }) => {

    const date = new Date()

    return (
        <div className='relative w-full py-1 border-b-2 border-gray-300'>
            <div className='absolute top-2 right-4 bg-secondary rounded-xl px-3 py-1 flex items-center gap-3'>
                <FontAwesomeIcon
                    icon={faCalendar}
                />
                <span>{date.toDateString()}</span>
            </div>
            <span className='text-3xl'>{title}</span>
        </div>
    )
}

export default Header