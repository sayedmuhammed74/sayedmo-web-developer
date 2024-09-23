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
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({ email: '', phone: '' });

  // const validatePhone = (phone) => {
  //   const regex = /^[0-9]{11}$/; // Adjust regex for your phone format
  //   return regex.test(phone);
  // };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
    // Email Validation
    if (e.target.name === 'email' && !validateEmail(e.target.value)) {
      setErrors({ ...errors, email: 'Not Valid Email' });
    } else if (e.target.name === 'email' && validateEmail(e.target.value)) {
      setErrors({ ...errors, email: '' });
    }
    // Phone Validation
    // if (e.target.name === 'phone' && !validatePhone(e.target.value)) {
    //   setErrors({ ...errors, phone: 'Not Valid Phone Number' });
    // } else if (e.target.name === 'phone' && validatePhone(e.target.value)) {
    //   setErrors({ ...errors, phone: '' });
    // }
  };

  const sendMail = (e) => {
    e.preventDefault();
    if (
      emailData.name &&
      emailData.email &&
      emailData.phone &&
      emailData.message &&
      validateEmail(emailData.email)
    ) {
      emailjs
        .send(serviceID, templateID, emailData, userID)
        .then(() => {
          toast.success('Email is Sent Successfully');
          setEmailData({ name: '', email: '', phone: '', message: '' });
        })
        .catch(() => toast.fail('Email Rejected'));
    }
  };

  return (
    <form className="w-[80%] mx-auto flex justify-center items-center">
      <div className="grid py-5 grid-cols-2 gap-5">
        <input
          type="text"
          name="name"
          placeholder="name"
          className="input col-span-2"
          value={emailData.name}
          onChange={handleChange}
        />
        <div className="flex flex-col col-span-2 md:col-span-1">
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input"
            value={emailData.email}
            onChange={handleChange}
          />
          <span className="text-center text-red-500">{errors.email}</span>
        </div>
        <div className="flex flex-col col-span-2 md:col-span-1">
          <input
            type="text"
            name="phone"
            placeholder="phone"
            className="input "
            value={emailData.phone}
            onChange={handleChange}
          />
          <span className="text-center text-red-500">{errors.phone}</span>
        </div>
        <textarea
          type="text"
          name="message"
          placeholder="message"
          className="input col-span-2 h-32"
          value={emailData.message}
          onChange={handleChange}
        />
        <button onClick={sendMail} className="btn w-28 col-span-2 mx-auto">
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
