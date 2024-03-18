'use client'
import React, { useEffect } from 'react';
import { FaHome } from "react-icons/fa";
import { MdOutlineWorkHistory } from "react-icons/md";
import { RiToolsFill } from "react-icons/ri";
import { GrDeploy } from "react-icons/gr";
import { BiSolidContact } from "react-icons/bi";

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
        
            indicator.style.left = `${index * 65 + 11}px`;
        
            const targetId = linkItems[index].getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
        
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
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
            <div className="menuNavbarMobile">
                <nav className="nav">
                    <ul className="nav-content">
                        <li className="nav-list">
                            <a href="#navbar-top" className="link-item active">
                                <i className='link-icon'> <FaHome /></i>
                                <span className="link-text">Home</span>
                            </a>
                        </li>
                        <li className="nav-list">
                            <a href="#experience" className="link-item">
                                <i className='link-icon'> <MdOutlineWorkHistory /></i>
                                <span className="link-text">Experience</span>
                            </a>
                        </li>
                        <li className="nav-list">
                            <a href="#skills" className="link-item">
                                <i className='link-icon'><RiToolsFill /></i>
                                <span className="link-text">Skills</span>
                            </a>
                        </li>
                        <li className="nav-list">
                            <a href="#works" className="link-item">
                                <i className=' link-icon'><GrDeploy /></i>
                                <span className="link-text">Works</span>
                            </a>
                        </li>
                        <li className="nav-list">
                            <a href="#contact" className="link-item">
                                <i className='link-icon'><BiSolidContact /></i>
                                <span className="link-text">Contact</span>
                            </a>
                        </li>
                        <span className="indicator"></span>
                    </ul>
                </nav>
            </div>
    )
}

export default IslandMenu;
