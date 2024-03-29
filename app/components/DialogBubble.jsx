'use client'
import React, { useEffect } from 'react';

const DialogBubble = () => {
    const messages = {
        experience: "No es mucho, pero es trabajo honesto.",
        projects: "¡Echa un vistazo a mis proyectos!",
        contact: "¡No dudes en contactarme para colaboraciones!"
        // Añade más mensajes para otras secciones si es necesario
    };

    useEffect(() => {
        // Función para mostrar el mensaje en la burbuja de diálogo
        function showMessage(section) {
            const bubble = document.getElementById('dialog-bubble');
            if (bubble) {
                bubble.textContent = messages[section];
                bubble.style.display = 'block';
                // Oculta la burbuja después de un tiempo (por ejemplo, 5 segundos)
                setTimeout(() => {
                    bubble.style.display = 'none';
                }, 5000); // 5000 milisegundos = 5 segundos
            }
        }

        // Evento de desplazamiento para detectar cuando el usuario llega a una sección
        function handleScroll() {
            const experienceSection = document.getElementById('experience');
            const projectsSection = document.getElementById('projects');
            const contactSection = document.getElementById('contact');

            const scrolled = window.scrollY;

            if (scrolled >= experienceSection.offsetTop && scrolled < projectsSection.offsetTop) {
                showMessage('experience');
            } else if (scrolled >= projectsSection.offsetTop && scrolled < contactSection.offsetTop) {
                showMessage('projects');
            } else if (scrolled >= contactSection.offsetTop) {
                showMessage('contact');
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures the effect runs only once after the component mounts

    return (
        <div className="dialog-bubble" id="dialog-bubble"></div>
    );
};

export default DialogBubble;
