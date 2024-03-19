import React from 'react'

const Footer = () => {
    return (
        <div className=" w-full border-t border-gray-800 p-2 pt-8 text-center mb-28">
            <a className="text-indigo-400">villalbaleandroesteban@gmail.com</a>
            <p className="my-5 leading-normal text-gray-500">Argentina <br /> Posadas, Misiones.</p>
            <span className="inline-flex">

                <a target='_blank' className="ml-4 text-gray-500" href='https://www.linkedin.com/in/leandro-villalba/'>
                   <img className='w-10' src="./img/redes-sociales/logos/linkedin.png" alt='logo linkedin con link a linkedin personal'/>
                </a>
                <a target='_blank'  className="ml-4 text-gray-500"  href='https://www.instagram.com/leanvillalba/'>
                   <img className='w-10' src="./img/redes-sociales/logos/insta.webp" alt='logo instagram con link a instagram personal'/>
                </a>
                <a target='_blank'  className="ml-4 text-gray-500"  href='https://github.com/VillalbaLeandro'>
                
                   <img className='w-10' src="./img/redes-sociales/logos/github.png" alt='logo github con link a repositorio github personal'/>
                </a>
              
            </span>
        </div>

    )
}

export default Footer
