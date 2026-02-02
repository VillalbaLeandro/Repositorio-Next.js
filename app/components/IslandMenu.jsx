'use client'
import React, { useEffect } from 'react';
import { FaHome } from "react-icons/fa";
import { MdOutlineWorkHistory } from "react-icons/md";
import { RiToolsFill } from "react-icons/ri";
import { GrDeploy } from "react-icons/gr";
import { BiSolidContact } from "react-icons/bi";
import { IoSchoolOutline } from "react-icons/io5";
import { Link, Element, animateScroll as scroll } from 'react-scroll';

const IslandMenu = () => {
    const indicatorRef = React.useRef(null);

    const handleSetActive = (index) => {
        if (indicatorRef.current) {
            indicatorRef.current.style.left = `${index * 52 + 26}px`;
        }
    };

    return (
        <div className="menuNavbarMobile md:hidden">
            <nav className="nav">
                <ul className="nav-content">
                    <li className="nav-list">
                        <Link
                            to='home'
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            onSetActive={() => handleSetActive(0)}
                            className="link-item ">
                            <i className='link-icon'> <FaHome /></i>
                            <span className="link-text">Home</span>
                        </Link>
                    </li>
                    <li className="nav-list">
                        <Link
                            to='experience'
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            onSetActive={() => handleSetActive(1)}
                            className="link-item">
                            <i className='link-icon'> <MdOutlineWorkHistory /></i>
                            <span className="link-text">Experiencia</span>
                        </Link>
                    </li>
                    <li className="nav-list">
                        <Link
                            to='projects'
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            onSetActive={() => handleSetActive(2)}
                            className="link-item">
                            <i className=' link-icon'><GrDeploy /></i>
                            <span className="link-text">Proyectos</span>
                        </Link>
                    </li>
                    <li className="nav-list">
                        <Link
                            to='skills'
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            onSetActive={() => handleSetActive(3)}
                            className="link-item">
                            <i className='link-icon'><RiToolsFill /></i>
                            <span className="link-text">Skills</span>
                        </Link>
                    </li>
                    <li className="nav-list">
                        <Link
                            to='education'
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            onSetActive={() => handleSetActive(4)}
                            className="link-item">
                            <i className='link-icon'><IoSchoolOutline /></i>
                            <span className="link-text">Formacion</span>
                        </Link>
                    </li>
                    <li className="nav-list">
                        <Link
                            to='contact'
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            onSetActive={() => handleSetActive(5)}
                            className="link-item">
                            <i className='link-icon'><BiSolidContact /></i>
                            <span className="link-text">Contacto</span>
                        </Link>
                    </li>
                    <span ref={indicatorRef} className="indicator"></span>
                </ul>
            </nav>
        </div>
    )
}

export default IslandMenu;


