'use client';
import { motion } from 'framer-motion';

const List = () => {
  return (
    <ul className="flex flex-col justify-start items-start gap-6 text-lg font-medium">
      <motion.li
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <a
          href="#about"
          className="font-medium duration-75 ease-in hover:text-primary"
        >
          About
        </a>
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        <a
          href="#services"
          className="font-medium duration-75 ease-in hover:text-primary"
        >
          Services
        </a>
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <a
          href="#skills"
          className="font-medium duration-75 ease-in hover:text-primary"
        >
          Skills
        </a>
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <a
          href="#projects"
          className="font-medium duration-75 ease-in hover:text-primary"
        >
          Projects
        </a>
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <a
          href="#contact"
          className="font-medium duration-75 ease-in hover:text-primary"
        >
          Contact
        </a>
      </motion.li>
      <li>
        <a
          href="./Sayed Mohamed Sayed.pdf"
          className="btn font-medium px-2 py-1 rounded-lg bg-primary"
        >
          Resume
        </a>
      </li>
    </ul>
  );
};

export default List;
