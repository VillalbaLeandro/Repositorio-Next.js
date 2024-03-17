import React from 'react'

const AboutMe = () => {
    return (
        <div className=' text-center xs:max-w-80 xl:max-w-96 flex flex-col gap-1 mt-28 mb-64'>

            <h1 id="about-me" className='text-gray-100 font-bold text-base'>Hi!  👋🏻   I'm Leandro Villalba a</h1>
            <h2 className='font-bold text-5xl  '>
                FRONTEND  </h2>
            <h2 className='font-bold text-5xl '>
            DEVELOPER </h2>
            <h5 className='text-gray-100 text-sm lg:text-sm '>and in an advanced learning phase of</h5>
            <h2 className='font-bold text-3xl'> Systems Analyst</h2>
            <p className='text-gray-100 text-sm  '>I specialize in <strong>responsive web development</strong> and robust <strong>backend systems</strong>.
                With each project,
                I continuously expand my expertise and knowledge. Committed to delivering top-notch solutions,
                I am dedicated to further honing my skills and making a meaningful impact.</p>
                
            <div id='experience' className='icon-scroll'></div>              
        </div>
    )
}

export default AboutMe
