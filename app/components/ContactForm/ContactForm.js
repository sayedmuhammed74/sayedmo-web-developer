'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const serviceID = 'service_vws30oj';
const templateID = 'template_ckblx7u';
const userID = '_Rz7rINg07A9kFJyv';

const ContactForm = () => {
  const [emailData, setEmailData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });

  const handleChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (
      emailData.name &&
      emailData.email &&
      emailData.number &&
      emailData.message
    ) {
      emailjs
        .send(serviceID, templateID, emailData, userID)
        .then(() => {
          toast.success('Email is Sent Successfully');
          setEmailData({ name: '', email: '', number: '', message: '' });
        })
        .catch(() => toast.fail('Email is Sent Successfully'));
    }
  };
  return (
    <form className="w-[80%] mx-auto flex justify-center items-center">
      <div className="grid py-5  grid-cols-2 gap-5">
        <input
          type="text"
          name="name"
          placeholder="name"
          className="input col-span-2"
          value={emailData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          className="input col-span-2 md:col-span-1"
          value={emailData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="number"
          placeholder="number"
          className="input col-span-2 md:col-span-1"
          value={emailData.number}
          onChange={handleChange}
        />
        <textarea
          type="text"
          name="message"
          placeholder="message"
          className="input col-span-2 h-32"
          value={emailData.message}
          onChange={handleChange}
        />
        <button onClick={sendMessage} className="btn w-28 col-span-2 mx-auto">
          Send
        </button>
        <ToastContainer
          position="top-center"
          autoClose={1500}
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
