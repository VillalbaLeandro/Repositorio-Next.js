import React from 'react'

const Carrusel = () => {
    return (
            <div className="block block3 w-full" id="block3">
                <h2 id="skills">SKILLS</h2>

                <div className="carousel">
                    <div className="carousel-item">
                        <div className="carousel-box">
                            <div className="title">
                                <h3>Html</h3>
                            </div>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/250px-HTML5_logo_and_wordmark.svg.png" />
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="carousel-box">
                            <div className="title">
                                <h3>Css</h3>
                            </div>
                            <img src="https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png" />
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="carousel-box">
                            <div className="title">
                                <h3>JavaScript</h3>
                            </div>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Carrusel
