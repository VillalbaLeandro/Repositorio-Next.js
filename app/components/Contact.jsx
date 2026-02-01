'use client'
import React, { useState, useEffect, useRef } from 'react';
import { FaCheck, FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin, FaCopy } from 'react-icons/fa';
import StaggeredTitle from './StaggeredTitle';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';


const Contact = () => {
  const containerRef = useRef(null)
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [proximity, setProximity] = useState(1);

  // Track proximity to the entire title container
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const dx = e.clientX - centerX
      const dy = e.clientY - centerY
      const distance = Math.sqrt(dx * dx + dy * dy)

      const maxDistance = 300
      const normalizedDistance = Math.min(distance / maxDistance, 1)

      setProximity(normalizedDistance)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const blurAmount = Math.round(proximity * 15)
  const separatorWidth = 256 + (1 - proximity) * 128;
  const separatorOpacity = 0.75 + (1 - proximity) * 0.25;
  const [emailCopied, setEmailCopied] = useState(false);

  // Email parts for obfuscation
  const u = 'villalbaleandroesteban';
  const d = 'gmail.com';

  const handleCopyEmail = () => {
    const email = `${u}@${d}`;
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleWhatsApp = () => {
    // Dynamic generation on click only
    const p = '543765230488';
    const message = encodeURIComponent('¡Hola Leandro! 👋 Vengo desde tu portfolio 💼✨');
    window.open(`https://wa.me/${p}?text=${message}`, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const response = await fetch(e.target.action, {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json'
      }
    });
    const result = await response.json();
    if (!response.ok) {
      setMessage(result.errors.map(error => error.message).join(', '));
      return false;
    }
    setMessage("Enviado con éxito");
    setSent(true);
    confetti()

  };

  const handleResendMail = (e) => {
    setSent(false);
    e.target.closest('form').reset();
    e.preventDefault();
  };

  return (
    <form
      id='contact'
      action="https://formspree.io/f/xdoqlzdd"
      method="POST"
      onSubmit={handleSubmit}
      className="body-font relative text-gray-400 min-h-screen pt-8 pb-24 scroll-mt-10"
    >
      <div className="w-[90vw] max-w-screen-xl mx-auto sm:p-6 md:p-10">
        <div className="mb-12 flex w-full flex-col text-center">
          <div ref={containerRef} className="flex items-center justify-center gap-3 mb-12">
            <div className="relative z-10 text-center">
              {/* Halo gigante (glow externo) */}
              <div
                className="
    pointer-events-none absolute left-1/2 top-1/2
    h-24 w-[32rem] -translate-x-1/2 -translate-y-1/2
    rounded-full
    bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400
    blur-3xl opacity-35
  "
              />

              {/* Halo secundario más "apretado" */}
              <div
                className="
    pointer-events-none absolute left-1/2 top-1/2
    h-12 w-[22rem] -translate-x-1/2 -translate-y-1/2
    rounded-full
    bg-gradient-to-r from-indigo-400 via-purple-500 to-cyan-300
    blur-2xl opacity-40
  "
              />

              <StaggeredTitle text="CONTACTO" blurAmount={blurAmount} />

              {/* Title separator */}
              <div
                className="h-[2px] mx-auto mt-6 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-[1px] transition-all duration-300"
                style={{
                  width: `${separatorWidth}px`,
                  opacity: separatorOpacity
                }}
              ></div>
            </div>
          </div>
          <p className="mx-auto text-lg leading-relaxed lg:w-2/3 text-gray-300 dark:text-gray-300 font-medium">
            ¿Tienes un proyecto en mente o buscas sumar a alguien a tu equipo? Me encanta charlar sobre nuevas ideas y ver cómo podemos hacerlas realidad. Si te gusta lo que hago, ¡Charlemos!
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 mb-12">
            {/* WhatsApp Secure Reveal */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onHoverStart={() => setShowPhone(true)}
              onHoverEnd={() => setShowPhone(false)}
              onClick={handleWhatsApp}
              className="group relative flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 hover:bg-[#25D366] text-white border border-white/10 hover:border-[#25D366]/50 transition-colors duration-300 shadow-lg hover:shadow-[#25D366]/20"
            >
              <FaWhatsapp className="text-2xl text-[#25D366] group-hover:text-white transition-colors" />
              <div className="flex flex-col items-start">
                <span className="text-xs text-gray-400 group-hover:text-white/80 font-medium tracking-wider">WHATSAPP</span>
                <div className="relative h-5 w-[140px] overflow-hidden text-left">
                  <AnimatePresence mode="wait" initial={false}>
                    {showPhone ? (
                      <motion.span
                        key="phone"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-sm font-bold tracking-widest absolute inset-0"
                      >
                        +54 3765 ******
                      </motion.span>
                    ) : (
                      <motion.span
                        key="text"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-sm font-bold tracking-widest absolute inset-0"
                      >
                        Abrir Chat
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.button>

            {/* Email Copy */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={handleCopyEmail}
              className="group relative flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-indigo-500/50 transition-colors duration-300 shadow-lg"
            >
              <div className="relative">
                <AnimatePresence mode="wait">
                  {emailCopied ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <FaCheck className="text-2xl text-green-400" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="envelope"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <FaEnvelope className="text-2xl text-indigo-400 group-hover:text-indigo-300" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xs text-gray-400 group-hover:text-indigo-200 font-medium tracking-wider">EMAIL</span>
                <span className="text-sm font-bold">
                  {emailCopied ? "¡Copiado!" : "Copiar Correo"}
                </span>
              </div>
            </motion.button>

            {/* Socials */}
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/VillalbaLeandro"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="p-4 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/30 transition-colors"
              >
                <FaGithub className="text-2xl" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/leandro-villalba"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="p-4 rounded-xl bg-white/5 hover:bg-[#0077b5] text-white border border-white/10 hover:border-[#0077b5]/50 transition-colors"
              >
                <FaLinkedin className="text-2xl" />
              </motion.a>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 focus:border-indigo-500 focus:bg-white/20 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-all duration-200 ease-in-out placeholder-transparent peer"
                  placeholder="Name"
                />
                <label htmlFor="name" className="absolute left-4 -top-6 text-sm text-indigo-400 font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-400">Tu nombre</label>
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 focus:border-indigo-500 focus:bg-white/20 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-all duration-200 ease-in-out placeholder-transparent peer"
                  placeholder="Email"
                />
                <label htmlFor="email" className="absolute left-4 -top-6 text-sm text-indigo-400 font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-400">Tu email</label>
              </div>
            </div>
            <div className="p-2 w-full mt-4">
              <div className="relative group">
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 focus:border-indigo-500 focus:bg-white/20 focus:ring-2 focus:ring-indigo-900 h-40 text-base outline-none text-gray-100 py-4 px-4 resize-none leading-relaxed transition-all duration-200 ease-in-out placeholder-transparent peer"
                  placeholder="Message"
                ></textarea>
                <label htmlFor="message" className="absolute left-4 -top-6 text-sm text-indigo-400 font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-400">Explayate aquí...</label>
              </div>
            </div>

            <div className="w-full p-2 text-center mt-6">
              {sent ?
                <div className="animate-fade-in-up">
                  <button className='mx-auto flex items-center justify-center gap-2 rounded-full border-0 bg-green-600/20 border-green-500/50 border py-3 px-8 text-lg text-green-400 cursor-default shadow-[0_0_20px_rgba(34,197,94,0.3)]' disabled={sent}>
                    <span>¡Enviado!</span>
                    <FaCheck />
                  </button>
                  <p className='text-center text-gray-400 mt-4 text-sm'>
                    ¿Quieres enviar otro? <a onClick={handleResendMail} className='text-indigo-400 hover:text-indigo-300 underline decoration-indigo-500/50 cursor-pointer transition-colors'>Haz clic aquí</a>
                  </p>
                </div>
                :
                <button className="flex mx-auto text-white font-bold bg-gradient-to-r from-indigo-600 to-purple-600 border-0 py-3 px-12 rounded-full focus:outline-none hover:from-indigo-500 hover:to-purple-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] active:scale-95 transition-all duration-300 transform text-lg tracking-wide uppercase">
                  Enviar mensaje
                </button>
              }
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Contact;


