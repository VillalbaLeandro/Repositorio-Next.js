import React from 'react'

const Background = () => {
    return (
        <div className="background" >
        {Array.from({ length: 25 }).map((_, index) => (
            <span key={index}></span>
        ))}
    </div>
    )
}

export default Background
