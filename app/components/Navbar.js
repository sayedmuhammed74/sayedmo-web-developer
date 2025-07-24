'use client';
// hooks
import { useEffect, useState } from 'react';
import { useRef } from 'react';

// Icons
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { navbar_sections } from '../utlis/data';

const Nav = () => {
  const [toggleDropMenu, setToggleDropMenu] = useState(false);
  const navBar = useRef(null);

  const [navTag, setNavTag] = useState('#about');

  useEffect(() => {
    window?.addEventListener('scroll', () => {
      if (window !== 'undefined') {
        if (window.scrollY >= 620) {
          navBar.current?.classList?.remove('-translate-y-full');
        } else {
          navBar.current?.classList?.add('-translate-y-full');
        }
      }
    });
  }, []);

  const checkActive = () => {};

  return (
    <nav
      className={`fixed top-0 z-20 -translate-y-full w-full duration-150 ease-in opacity-90 bg-dark`}
      ref={navBar}
    >
      <div className="container relative mx-auto flex justify-between items-center px-5 py-1 h-full text-white">
        <div>
          <h1 className="text-center text-xl font-semibold">
            <a href="#home">
              Sayed<span className="ml-1.5 text-primary">Mo</span>
            </a>
          </h1>
          <p className="text-lg">web developer</p>
        </div>
        <ul className="hidden md:flex gap-6 text-lg">
          {navbar_sections.map((el) => (
            <li key={el.id} className={navTag === el.id ? 'active' : ''}>
              <a
                href={el.id}
                onClick={() => setNavTag(el.id)}
                className="font-medium duration-75 ease-in hover:text-primary"
              >
                {el.name}
              </a>
            </li>
          ))}

          <li>
            <a href="./Sayed Mohamed - MERN Developer.pdf" className="btn">
              Resume
            </a>
          </li>
        </ul>

        {/* icons for mobile devices */}
        <AiOutlineUnorderedList
          className="cursor-pointer text-3xl md:hidden"
          onClick={() => setToggleDropMenu((prev) => !prev)}
        />
        <ul
          className={`${
            toggleDropMenu ? 'translate-y-0' : 'opacity-0 -translate-y-full'
          } flex transition-all duration-300 absolute right-0 -z-10 top-16 w-full flex-col rounded-bl-md rounded-br-md gap-3 text-center p-5 bg-dark`}
        >
          <li className="text-lg font-bold cursor-pointer hover:text-gray-500 transition-all">
            <a href="#about" onClick={() => setToggleDropMenu(false)}>
              About
            </a>
          </li>
          <li className="text-lg font-bold cursor-pointer hover:text-gray-500 transition-all">
            <a href="#services" onClick={() => setToggleDropMenu(false)}>
              Services
            </a>
          </li>
          <li className="text-lg font-bold cursor-pointer hover:text-gray-500 transition-all">
            <a href="#projects" onClick={() => setToggleDropMenu(false)}>
              Projects
            </a>
          </li>
          <li className="text-lg font-bold cursor-pointer hover:text-gray-500 transition-all">
            <a href="#contact" onClick={() => setToggleDropMenu(false)}>
              Contact Us
            </a>
          </li>
          <li className="text-lg font-bold cursor-pointer hover:text-gray-500 transition-all">
            <button
              className="rounded-lg font-medium px-3.5 py-1.5 bg-primary text-white"
              onClick={() => setToggleDropMenu(false)}
            >
              <a href="./Sayed Mohamed Sayed.pdf">Download CV</a>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
