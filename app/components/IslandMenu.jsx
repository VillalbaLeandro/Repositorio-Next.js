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
    useEffect(() => {
        const linkItems = document.querySelectorAll(".link-item");
        const indicator = document.querySelector(".indicator");

        const handleClick = (index) => {
            const activeElement = document.querySelector(".link-item.active");
            if (activeElement) {
                activeElement.classList.remove("active");
            }
            linkItems[index].classList.add("active");

            indicator.style.left = `${index * 52 + 26}px`;

            const targetId = linkItems[index].getAttribute("to");
            if (targetId) {
                const targetSection = document.getElementById(targetId.substring(1));
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop,
                        behavior: "smooth"
                    });
                }
            }
        };


        linkItems.forEach((linkItem, index) => {
            linkItem.addEventListener("click", () => handleClick(index));
        });

        return () => {
            linkItems.forEach((linkItem, index) => {
                linkItem.removeEventListener("click", () => handleClick(index));
            });
        };
    }, []);

    return (
        <div className="menuNavbarMobile md:hidden">
            <nav className="nav">
                <ul className="nav-content">
                    <li className="nav-list">
                        <Link
                            to='home'
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
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
                            offset={-50}
                            duration={500}
                            className="link-item">
                            <i className='link-icon'> <MdOutlineWorkHistory /></i>
                            <span className="link-text">Experiencia</span>
                        </Link>
                    </li>
                    <li className="nav-list">
                        <Link
                            to='skills'
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className="link-item">
                            <i className='link-icon'><RiToolsFill /></i>
                            <span className="link-text">Skills</span>
                        </Link>
                    </li>
                    <li className="nav-list">
                        <Link
                            to='projects'
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className="link-item">
                            <i className=' link-icon'><GrDeploy /></i>
                            <span className="link-text">Proyectos</span>
                        </Link>
                    </li>
                    <li className="nav-list">
                        <Link
                            to='education'
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
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
                            offset={-50}
                            duration={500}
                            className="link-item">
                            <i className='link-icon'><BiSolidContact /></i>
                            <span className="link-text">Contacto</span>
                        </Link>
                    </li>
                    <span className="indicator"></span>
                </ul>
            </nav>
        </div>
    )
}

export default IslandMenu;


