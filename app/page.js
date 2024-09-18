// icons
import {
  AiFillGithub,
  AiOutlineWhatsApp,
  AiFillLinkedin,
  AiOutlineInstagram,
} from 'react-icons/ai';
import {
  FaHackerrank,
  FaFacebookSquare,
  FaTwitterSquare,
} from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { TiContacts } from 'react-icons/ti';

// components
import Service from './components/Service';
import Skill from './components//Skill';
import Project from './components/Project';
import Nav from './components/Nav';
import Logo from '@/app/components/logo/Logo';
import List from '@/app/components/List/List';
import ContactForm from './components/ContactForm/ContactForm';
import TypingEffect from '././components/TypingEffect';

export default function Home() {
  // data
  const services = [
    {
      title: 'Front-End Development',
      description:
        'Proficient in HTML, CSS, Taillwind, Framer Motion, JavaScript, ReactJS, React Hooks, Redux Toolkit, NextJS 13, integration with API and',
    },
    {
      title: 'Back-End Development',
      description:
        'NodeJS ,ExpressJS, MongoDB , MySQL and Bakend Concepts ( Authentication, Authorization, ... )',
    },
    {
      title: 'Web Design',
      description: 'Basics of Website Designing',
    },
  ];

  const skills = [
    { name: 'HTML', percentage: 'w-[90%]' },
    { name: 'CSS', percentage: 'w-[90%]' },
    { name: 'JavaScript', percentage: 'w-[90%]' },
    { name: 'Tailwind.CSS', percentage: 'w-[90%]' },
    { name: 'Framer Motion', percentage: 'w-[80%]' },
    { name: 'React.JS', percentage: 'w-[85%]' },
    { name: 'Next.JS', percentage: 'w-[90%]' },
    { name: 'Node.JS', percentage: 'w-[80%]' },
    { name: 'Express.JS', percentage: 'w-[80%]' },
    { name: 'MongoDB', percentage: 'w-[80%]' },
    { name: 'MySQL', percentage: 'w-[75%]' },
  ];

  const projects = [
    {
      name: 'E-Commerce',
      description:
        'Full Stack E-Commerce Website in MERN Stack Technologies Full Stack E-Commerce Website in MERN Stack Technologies',
      link: 'https://mashro3.vercel.app/',
      image: './projects/e-commerce.png',
    },
    {
      name: 'Social App',
      description:
        'Responsive Front End Social with pure technologies (HTML, CSS, JavaScript)',
      link: 'https://sayedmuhammed74.github.io/social',
      image: './projects/social.png',
    },
    {
      name: 'INT',
      description:
        'Startup Programming Company Website with Technologies (Next.js, Tailwind.css, Framer Motion, React Query)',
      link: 'https://int-firm.com/',
      image: './projects/int.png',
    },
    {
      name: 'TEDx',
      description:
        'TEDx Banisuef Event Website 2022 with pure technologies (HTML, CSS, JavaScript) ',
      link: 'https://sayedmuhammed74.github.io/TEDx/',
      image: './projects/tedx.png',
    },
    {
      name: 'Portfolio',
      description:
        'old Portfolio to show the difference and progress with Technologies (React.js, Pure CSS)',
      link: 'https://sayedmuhammed74.github.io/Portfolio/',
      image: './projects/portfolio.png',
    },
  ];

  return (
    <>
      {/* header */}
      <Nav />
      <header className="bg-dark" id="home">
        <div className=" grid grid-cols-9 h-[100vh]">
          <nav className="md:col-span-2 hidden md:flex flex-col justify-between items-center py-10 h-full text-white">
            {/* logo */}
            <Logo />
            <List />
            {/* follow */}
            <div>
              <h3 className="text-center mb-3 font-medium text-lg">
                Follow Me
              </h3>
              <div className="flex justify-between gap-1 items-center text-xl text-primary">
                <a href="https://www.linkedin.com/in/sayed-mohamed-680b491b8/">
                  <AiFillLinkedin className="bg-white rounded-xl" />
                </a>
                <a href="https://github.com/sayedmuhammed74">
                  <AiFillGithub className="bg-white rounded-xl" />
                </a>
                <a href="https://www.hackerrank.com/profile/sayedmohamed1231">
                  <FaHackerrank className="bg-white rounded-xl" />
                </a>
                <a href="https://wa.link/y3fr66">
                  <AiOutlineWhatsApp className="bg-white rounded-xl" />
                </a>
                <a href="https://www.facebook.com/sayed.muhammed.54922/">
                  <FaFacebookSquare className="bg-white rounded-xl" />
                </a>
                <a href="https://www.instagram.com/_sayedmuhammed/">
                  <AiOutlineInstagram className="bg-white rounded-xl" />
                </a>
              </div>
            </div>
          </nav>

          {/* header */}
          <section className="col-span-9 md:col-span-7 h-full flex justify-center items-center rounded-tl-3xl rounded-bl-3xl relative bg-gray-400">
            <img
              src="./cover.jpg"
              className="absolute top-0 w-full h-full z-0 rounded-tl-3xl rounded-bl-3xl"
              alt=""
            />
            <div className="relative z-10 text-center text-white">
              <p className="text-2xl font-light">Hello</p>
              <h1 className="text-5xl mb-3">
                I'm Sayed Mohamed
                {/* <TypingEffect text="I'm Sayed Mohamed" speed={200} /> */}
              </h1>
              <p className="text-2xl mb-2">
                A <span className="text-primary">Front End Developer</span>
              </p>
              <button className="btn">
                <a href="#contact">Hire Me</a>
              </button>
            </div>
          </section>
        </div>
      </header>

      {/* About */}
      <section id="about">
        <div className="container mx-auto px-8 py-5 grid grid-cols-3 gap-28 lg:gap-5 lg:h-[100vh] items-center">
          <div className="col-span-3 lg:col-span-2 h-[80%] py-5 px-5 text-white">
            <h2 className="text-4xl font-medium border-l-8 px-3 mb-8 border-primary">
              About
            </h2>
            <p className="text-2xl mb-5">
              I am a <span className="text-primary">Front End Developer</span>
            </p>
            <p className="leading-8">
              Recent Computer Science graduate with focus on Front-End Web
              Development & Backend (NodeJS) I'm in the way to be Full Stack
              (MERN). Proficient in HTML5, CSS3, Taillwind, JavaScript, React,
              NextJS, Restful API and responsive web design. And not a little
              knowledge in backend side ( Nodejs , Express , mongodb, mysql )
              and its concepts ( Authentication, Authorisation , MVC
              architecture, Modelling, RestFul API , …) Strong collaboration
              skills, attention to detail, and problem-solving skills. Seeking
              to leverage these skills as a front-end developer.
            </p>
            <button className="btn m-5">
              <a href="./resume.pdf">Download CV</a>
            </button>
            <div className="flex flex-col gap-3 md:flex-row justify-between items-center">
              <div className="flex flex-col gap-3 items-center w-[320px] shadow-md p-5 rounded-md bg-dark">
                <BsFillTelephoneFill className="text-xl text-primary" />
                <h3>Phone</h3>
                <p>+20 - 0110 212 8186</p>
              </div>
              <div className="flex flex-col gap-3 items-center w-[320px] shadow-md p-5 rounded-md bg-dark">
                <BiLogoGmail className="text-2xl text-primary" />
                <h3>Gmail</h3>
                <p>sayedmo.web.developer@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-span-3 lg:col-span-1">
            <img src="./about.jpg" alt="" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="lg:h-[100vh] flex items-center py-5">
        <div className="bg-dark h-[80%] w-4/5 rounded-tr-3xl rounded-br-3xl">
          <div className="container mx-auto px-14 py-8 text-white h-full">
            <h1 className="text-4xl font-medium border-l-8 px-3 mb-8 border-primary">
              Services
            </h1>
            <div className="grid grid-cols-2 mt-5 gap-14">
              {services.map((service) => (
                <Service service={service} key={service.title} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <div className="container mx-auto px-8 py-20 grid grid-cols-2 gap-12 lg:h-[100vh] items-center">
          {/* Skills Images */}
          <div className="col-span-2 lg:col-span-1">
            <h2 className="text-4xl font-medium border-l-8 px-3 mb-8 border-primary text-white">
              Skills
            </h2>
            <div className="flex flex-wrap justify-around gap-10 px-5 py-5">
              <img src="./skills/html.svg" className="md:w-1/5" alt="html" />
              <img
                src="./skills/tailwind.svg"
                className="md:w-1/5"
                alt="tailwind css"
              />
              <img
                src="./skills/js.svg"
                className="md:w-1/5"
                alt="javascript"
              />
              <img
                src="./skills/react.svg"
                className="md:w-1/5"
                alt="reactjs"
              />
              <img
                src="./skills/nodejs.svg"
                className="md:w-1/5"
                alt="nodejs"
              />
              <img
                src="./skills/mongodb.svg"
                className="md:w-1/5"
                alt="mongodb"
              />
              <img
                src="./skills/mysql.svg"
                className="md:w-1/5"
                alt="mysqldb"
              />
            </div>
          </div>

          {/* Skills Progress */}
          <div className="col-span-2 lg:col-span-1 grid grid-cols-2 gap-x-8 gap-y-3 text-lg text-white">
            {skills.map((skill) => (
              <Skill skill={skill} key={skill.name} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <div className="container mx-auto px-5 py-20 lg:h-[100vh]">
          <h2 className="text-4xl font-medium border-l-8 px-3 mb-5 border-primary text-white">
            Projects
          </h2>
          <div className="flex justify-around gap-x-1 gap-y-6 flex-wrap px-5 py-5">
            {projects.map((project, index) => (
              <Project project={project} key={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="container flex md:block justify-center items-center mx-auto px-5 py-5 lg:h-[100vh]">
          <div className="hidden justify-evenly lg:flex">
            <div className="flex flex-col items-center justify-around px-3 py-3 rounded-lg rounded-tl-3xl rounded-tr-3xl h-[150px] w-[240px] bg-primary text-white">
              <BiLogoGmail className="text-xl" />
              <h3 className="font-bold">Gmail</h3>
              <p className="font-bold text-xs text-center">
                sayedmo.web.developer
                <br />
                @gmail.com
              </p>
            </div>

            <div className="flex flex-col items-center justify-around px-3 py-3 rounded-lg rounded-tl-3xl rounded-tr-3xl h-[150px] w-[240px] bg-primary text-white">
              <BsFillTelephoneFill />
              <h3 className="font-bold">Phone</h3>
              <p>+20 - 0110 212 8186</p>
            </div>

            <div className="flex flex-col items-center justify-around px-3 py-3 rounded-lg rounded-tl-3xl rounded-tr-3xl h-[150px] w-[240px] bg-primary text-white">
              <TiContacts />
              <h3 className="font-bold">Contact Us</h3>
              <div className="flex justify-center items-center gap-1.5 text-lg text-white">
                <a href="https://www.linkedin.com/in/sayed-mohamed-680b491b8/">
                  <AiFillLinkedin className="bg-primary" />
                </a>
                <a href="https://github.com/sayedmuhammed74">
                  <AiFillGithub className="bg-primary" />
                </a>
                <a href="https://www.hackerrank.com/profile/sayedmohamed1231">
                  <FaHackerrank className="bg-primary" />
                </a>
                <a href="https://wa.link/y3fr66">
                  <AiOutlineWhatsApp className="bg-primary" />
                </a>
                <a href="https://www.facebook.com/sayed.muhammed.54922/">
                  <FaFacebookSquare className="bg-primary" />
                </a>
                <a href="https://www.instagram.com/_sayedmuhammed/">
                  <AiOutlineInstagram className="bg-primary" />
                </a>
              </div>
            </div>
          </div>

          <div className="-mt-7 px-5 py-5 rounded-3xl w-[85%] mx-auto bg-dark">
            <h2 className="text-4xl mt-7  w-60 mx-auto font-medium border-l-8 px-3 mb-8 border-primary text-white">
              Contact Us
            </h2>
            <ContactForm id="contact" />
          </div>
        </div>
      </section>
    </>
  );
}
