import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Search = () => {
    return (
        <div className='relative flex rounded-md'>
            <FontAwesomeIcon
                icon={faSearch}
                className='absolute top-2 left-2 text-gray-500'
            />
            <input type="text" placeholder='cari nama' className='w-48 border-none rounded-md pl-7 px-0 py-0' />
        </div>
    )
}

export default Search