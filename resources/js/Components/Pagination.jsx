import { Link } from '@inertiajs/inertia-react';
import React from 'react'

export default function Pagination({ data }) {
    console.log("data meta", data);

    const prev = data?.prev_page_url;
    const next = data?.next_page_url;

    return (
        <div className='flex w-full justify-between items-center py-2'>
            {prev && (
                <Link href={prev} className="inline-flex items-center py-1 px-4 mr-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                    Previous
                </Link>
            )}
            {
                next && (
                    <Link href={next} className="inline-flex items-center py-1 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
                        Next
                    </Link>
                )
            }
        </div>
    )
}
