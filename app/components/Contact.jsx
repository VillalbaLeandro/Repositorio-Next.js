'use client'
import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

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
  };

  const handleResendMail = (e) => {
    setSent(false)
    e.target.reset
  }
  return (
    <form
      id='contact'
      action="https://formspree.io/f/xdoqlzdd"
      method="POST"
      onSubmit={handleSubmit}
      className="body-font relative bg-gray-900 text-gray-400 glass-effect"
    >
      <div className="container mx-auto px-5 py-10">
        <div className="mb-12 flex w-full flex-col text-center">
          <h2 className="title-font mb-4 text-2xl font-medium text-white sm:text-3xl">Contactame</h2>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3 dark:text-gray-800 dark:font-semibold">Feel free to reach out to us! Whether you have a question,
            feedback, or a collaboration proposal, we'd love to hear from you.
          </p>
        </div>
        <div className="mx-auto md:w-2/3 lg:w-1/2">
          <div className="-m-2 flex flex-wrap">
            <div className="w-1/2 p-2">
              <div className="relative">
                <input type="text" id="name" name="name" className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 dark:focus:bg-gray-200 dark:bg-opacity-10 dark:text-gray-700" placeholder="Name" />
                <label htmlFor="name" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500 dark:font-bold">Name</label>
              </div>
            </div>
            <div className="w-1/2 p-2">
              <div className="relative">
                <input type="email" id="email" name="email" className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 dark:focus:bg-gray-200 dark:bg-opacity-10 dark:text-gray-700" placeholder="Email" />
                <label htmlFor="email" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500 dark:font-bold">Email</label>
              </div>
            </div>
            <div className="mt-4 w-full p-2">
              <div className="relative">
                <textarea id="message" name="message" className="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 d dark:focus:bg-gray-200 dark:bg-opacity-10 dark:text-gray-700" placeholder="Message"></textarea>
                <label htmlFor="message" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500 dark:font-bold">Message</label>
              </div>
            </div>
            <div className="w-full p-2">
              {sent ?
                <>
                  <button className='mx-auto flex items-center rounded border-0 bg-green-700 py-2 px-8 pr-4 text-lg text-white hover:bg-green-900 focus:outline-none' disabled={sent}>
                    Enviado
                    <img src='./img/check.gif' alt='check' className='w-10' />
                    {/* toast mensage */}
                    {/* <div className="toast">
                      <div className="alert alert-info">
                        <span>New message arrived.</span>
                      </div>
                    </div> */}
                  </button>
                  <p onClick={handleResendMail}> Enviar otro Mensaje? Clikeame </p>
                </>
                : <button className='mx-auto flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none' >
                  Enviar
                </button>}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Contact;
