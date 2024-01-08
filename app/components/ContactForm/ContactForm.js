'use client';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();
  const messageRef = useRef();

  const sendMessage = (e) => {
    e.preventDefault();
    if (
      nameRef.current.value === '' ||
      emailRef.current.value === '' ||
      numberRef.current.value === '' ||
      messageRef.current.value === ''
    ) {
      return;
    }
    const templateParams = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      number: numberRef.current.value,
      message: messageRef.current.value,
    };
    emailjs
      .send(
        'service_vws30oj',
        'template_ckblx7u',
        templateParams,
        '_Rz7rINg07A9kFJyv'
      )
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text);
          toast.success('Email is Sent Successfully', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        },
        function (error) {
          alert('OOPs something went wrong... Try again later');
          console.log('FAILED...', error);
        }
      );
    nameRef.current.value = '';
    emailRef.current.value = '';
    numberRef.current.value = '';
    messageRef.current.value = '';
  };
  return (
    <form className="w-[80%] mx-auto flex justify-center items-center">
      <div className="grid py-5  grid-cols-2 gap-5">
        <input
          type="text"
          className="input col-span-2"
          placeholder="name"
          ref={nameRef}
        />
        <input
          type="email"
          className="input col-span-2 md:col-span-1"
          placeholder="email"
          ref={emailRef}
        />
        <input
          type="text"
          className="input col-span-2 md:col-span-1"
          placeholder="number"
          ref={numberRef}
        />
        <textarea
          ref={messageRef}
          type="text"
          className="input col-span-2 h-32"
          placeholder="message"
        />
        <button onClick={sendMessage} className="btn w-28 col-span-2 mx-auto">
          Send
        </button>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </form>
  );
};

export default ContactForm;
