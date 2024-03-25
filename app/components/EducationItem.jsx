import React from 'react'
import Link from 'next/link'


const EducationItem = ({period, institution, title, certificatedLink, certificatedImage}) => {
    return (
        <li className="mb-6 ms-4">
            <span className="absolute bg-gray-900 flex items-center justify-center w-3 h-3 rounded-full -start-2 ring-2  dark:ring-indigo-900">
            </span>
            <time className="mb-1 ml-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{period}</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{institution}</h3>
            <p className='text-gray-300 text-sm mb-2'>{title}</p>
            {certificatedLink
                &&
                <Link target='_blank' href={certificatedLink}>
                    <img
                        className="max-w-36 md:max-w-md "
                        src={certificatedImage} alt={`${institution} certificated`} />
                </Link>
            }
        </li>
    )
}

export default EducationItem
