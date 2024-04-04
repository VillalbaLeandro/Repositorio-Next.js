'use client'
import React from 'react'
import Link from 'next/link'
import { IoEyeSharp } from 'react-icons/io5'


const EducationItem = ({ period, institution, title, certificatedLink, certificatedImage }) => {
    
    return (
        <li className="mb-6 ms-4">
            <span className="absolute bg-gray-900 flex items-center justify-center w-3 h-3 rounded-full -start-2 ring-2  dark:ring-indigo-900">
            </span>
            <time className="mb-1 ml-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-800">{period}</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white ">{institution}</h3>
             <p className='text-gray-300 text-sm mb-2 dark:text-gray-800'>{title}</p>
             {certificatedLink
                 &&
                 <div className=''>
                     <button className="btn btn-xs text-sm  glass text-gray-300 dark:btn-active dark:btn-neutral " onClick={() => document.getElementById('my_modal_3').showModal()}><IoEyeSharp /> Ver certificado</button>
                     <dialog id="my_modal_3" className="modal">
                         <div className="glass-effect modal-box">
                             <form method="dialog">
                                 {/* if there is a button in form, it will close the modal */}
                                 <button className="btn text-gray-50 bg-slate-600 btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                             </form>
                             <Link target='_blank' href={certificatedLink}>
                                 <img
                                     className="w-full md:max-w-md "
                                     src={certificatedImage} alt={`${institution} certificated`}
                                     loading="lazy"
                                 />
                             </Link>
                         </div>
                     </dialog>
                 </div>
             }
        </li>
    )
}

export default EducationItem
