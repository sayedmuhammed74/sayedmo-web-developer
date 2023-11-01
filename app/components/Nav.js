'use client';

// hooks
import { useEffect } from 'react';
import { useRef } from 'react';

// Icons
import { AiOutlineUnorderedList } from 'react-icons/ai';

const Nav = () => {
  const navBar = useRef();
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY >= 620) {
          navBar.current.classList.remove('-translate-y-full');
        } else {
          navBar.current.classList.add('-translate-y-full');
        }
      }
    });
  }, []);
  return (
    <nav
      className="fixed -translate-y-full w-full top-0 z-10 duration-150 ease-in opacity-90 bg-dark"
      ref={navBar}
    >
      <div className="container mx-auto flex justify-between items-center px-5 py-1 h-full text-white">
        <div>
          <h1 className="text-center text-xl font-semibold">
            <a href="#home">
              Sayed<span className="ml-1.5 text-primary">Mo</span>
            </a>
          </h1>
          <p className="text-lg">web developer</p>
        </div>
        <ul className="hidden md:flex gap-6 text-lg">
          <li>
            <a
              href="#about"
              className="font-medium duration-75 ease-in hover:text-primary"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="font-medium duration-75 ease-in hover:text-primary"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="font-medium duration-75 ease-in hover:text-primary"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="font-medium duration-75 ease-in hover:text-primary"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="font-medium duration-75 ease-in hover:text-primary"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="./resume.pdf"
              className="font-medium px-2 py-1 rounded-lg bg-primary"
            >
              Resume
            </a>
          </li>
        </ul>
        {/* icons for mobile devices */}
        <AiOutlineUnorderedList className="text-3xl md:hidden" />
      </div>
    </nav>
  );
};

export default Nav;
