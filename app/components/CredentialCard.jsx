'use client'
import React, { useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaCertificate, FaAward } from 'react-icons/fa'
import { IoEyeSharp } from 'react-icons/io5'

const CredentialCard = ({ period, institution, title, certificatedLink, certificatedImage, index }) => {
    const uniqueId = `modal_${index}_${institution.replace(/\s+/g, '_')}`;

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            data-glow
            className="group relative flex flex-col md:flex-row items-stretch overflow-hidden rounded-2xl border border-gray-100 dark:border-white/10 bg-white/50 dark:bg-gray-900/40 shadow-2xl backdrop-blur-md transition-all hover:border-indigo-500/50 dark:hover:border-indigo-400/50"
        >
            {/* Proximity Glow Background (Global Mouse Tracking) */}
            <div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at var(--x) var(--y), rgba(99,102,241,0.06), transparent 40%)`
                }}
            />

            {/* Border Reveal (Global Mouse Tracking) */}
            <div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at var(--x) var(--y), rgba(99,102,241,0.4), transparent 40%)`,
                    maskImage: `radial-gradient(200px at var(--x) var(--y), white, transparent)`,
                    WebkitMaskImage: `radial-gradient(200px at var(--x) var(--y), white, transparent)`
                }}
            />

            {/* CONTENT SECTION (Left) */}
            <div className="relative z-10 flex-1 p-6 md:p-8 flex flex-col justify-center">
                <div className="mb-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 backdrop-blur-sm border border-indigo-500/20">
                        <FaCertificate className="text-[10px]" />
                        {period}
                    </span>
                    {certificatedLink && (
                        <span className="flex h-2 w-2 md:hidden">
                            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                    )}
                </div>

                <h3 className="mb-2 text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 group-hover:from-indigo-500 group-hover:to-cyan-400 transition-all duration-300">
                    {title}
                </h3>

                <div className="flex items-start gap-3 mb-4 md:mb-0">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                        <FaGraduationCap />
                    </div>
                    <p className="text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                        {institution}
                    </p>
                </div>
            </div>

            {/* THUMBNAIL/ACTION SECTION (Right) */}
            {certificatedImage ? (
                <div className="relative z-10 w-full md:w-48 lg:w-64 bg-gray-100 dark:bg-black/20 border-t md:border-t-0 md:border-l border-gray-200 dark:border-white/10 flex flex-col items-center justify-center p-4 gap-3 group/img cursor-pointer transition-colors hover:bg-indigo-500/5" onClick={() => document.getElementById(uniqueId).showModal()}>

                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/10 shadow-sm group-hover/img:shadow-md transition-all group-hover/img:scale-105">
                        <img
                            src={certificatedImage}
                            alt="Certificate thumbnail"
                            className="w-full h-full object-cover blur-[1px] group-hover/img:blur-0 transition-all duration-500"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover/img:bg-transparent transition-colors">
                            <IoEyeSharp className="text-white text-2xl drop-shadow-md opacity-80 group-hover/img:opacity-0 transition-opacity" />
                        </div>
                    </div>
                    <span className="text-xs font-semibold text-indigo-500 group-hover/img:text-indigo-400 flex items-center gap-1">
                        Ver certificado <IoEyeSharp />
                    </span>

                </div>
            ) : (
                <div className="hidden md:flex relative z-10 w-32 border-l border-gray-200 dark:border-white/10 items-center justify-center bg-gray-50/50 dark:bg-white/5">
                    <FaAward className="text-4xl text-gray-300 dark:text-gray-600" />
                </div>
            )}

            {/* MODAL IMPL (Hidden) */}
            {certificatedLink && (
                <dialog id={uniqueId} className="modal backdrop-blur-sm">
                    <div className="modal-box max-w-4xl w-full glass-effect p-0 overflow-hidden relative shadow-2xl border border-white/20">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-50 bg-black/20 text-white hover:bg-black/40 border-none backdrop-blur-md">✕</button>
                        </form>
                        <Link target='_blank' href={certificatedLink} className="block relative group/modal-img cursor-external-link">
                            <div className="absolute inset-0 bg-black/0 group-hover/modal-img:bg-black/10 transition-colors z-10 flex items-center justify-center opacity-0 group-hover/modal-img:opacity-100">
                                <span className="bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md transform translate-y-4 group-hover/modal-img:translate-y-0 transition-transform">Abrir original ↗</span>
                            </div>
                            <img
                                className="w-full h-auto object-contain max-h-[80vh]"
                                src={certificatedImage}
                                alt={`${institution} certificate`}
                                loading="lazy"
                            />
                        </Link>
                        <div className="p-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-t border-white/10 flex justify-between items-center">
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white">{title}</h4>
                                <p className="text-xs text-gray-500">{institution}</p>
                            </div>
                            <Link
                                href={certificatedLink}
                                target="_blank"
                                className="btn btn-sm btn-primary bg-indigo-600 hover:bg-indigo-700 border-none text-white shadow-lg shadow-indigo-500/20"
                            >
                                Descargar / Ver PDF
                            </Link>
                        </div>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            )}

        </motion.article>
    )
}

export default CredentialCard
