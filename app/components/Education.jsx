import Link from 'next/link'
import React from 'react'

const Education = () => {
  return (
    <>
      <div className='p-10  text-left  glass-effect rounded'>

        <h2 className='font-bold text-xl '>Education</h2>
        <ol className="relative border-s border-sky-900 my-4 ">
          <li className="mb-10 ms-4">
            <span className="absolute bg-gray-900 flex items-center justify-center w-3 h-3 rounded-full -start-2 ring-2  dark:ring-indigo-900">
            </span>
            <time className="mb-1 ml-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">nov. 2022 - Actualidad </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Analista en Sistemas</h3>
            <p className='text-gray-300 text-sm  '>Normal Superior N°10</p>
          </li>
          <li className="mb-10 ms-4">
            <span className="absolute bg-gray-900 flex items-center justify-center w-3 h-3 rounded-full -start-2 ring-2  dark:ring-indigo-900">
            </span>
            <time className="mb-1 ml-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Abril 2023 - julio 2023</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Alura - Oracle</h3>
            <p className='text-gray-300 text-sm '>Desarrollo Frontend</p>
            <br/>
            <Link  target='_blank' href='https://drive.google.com/file/d/1EnonN3AqnsezJDnnQdernh5g_2btuse5/view?usp=sharing'><img className="max-w-60 md:max-w-md  mt-23" src='./img/certificated/oracle-alura-certificated.png'  alt='Oracle - Arula Latam certificated' sizes={30}/></Link>
          </li>
          <li className="mb-10 ms-4">
            <span className="absolute bg-gray-900 flex items-center justify-center w-3 h-3 rounded-full -start-2 ring-2  dark:ring-indigo-900">
              
            </span>
            <time className="mb-1 ml-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Sept 2022 - Octubre 2022 </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Huawei Technologies</h3>
            <p className='text-gray-300 text-sm '>Seed for the future - TIC</p>
            <br/>
            <Link  target='_blank' href='https://drive.google.com/file/d/173dMSsQkhM3jD-MuiGXmW6bFk3Uc0prD/view'>
            <img  className="max-w-60 md:max-w-md" src='./img/certificated/huawei-certificated.jpg'  alt='huawei certificated' sizes={30}/></Link>
            <br/>
          </li>
          <li className="mb-10 ms-4">
            <span className="absolute bg-gray-900 flex items-center justify-center w-3 h-3 rounded-full -start-2 ring-2  dark:ring-indigo-900">
              
            </span>
            <time className="mb-1 ml-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Marzo 2022 - Noviembre 2022 </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Digital House</h3>
            <p className='text-gray-300 text-sm '>Fullstack developer</p>
            <br/>
            <Link  target='_blank' href='https://drive.google.com/file/d/1TqLLxQIuLySwQ8lQwgIFNK_PoB0XlqzV/view'>
            <img  className="max-w-60 md:max-w-md" src='./img/certificated/dg-certificated.png'  alt='Digital house certificated' sizes={30}/></Link>
            <br/>
          </li>
        </ol>
      </div>
    </>
  )
}

export default Education
