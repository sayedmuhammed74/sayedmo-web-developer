// Icons
import { DiReact } from 'react-icons/di';
import { SiExpress } from 'react-icons/si';
import { BiLogoNodejs, BiLogoTailwindCss, BiLogoMongodb } from 'react-icons/bi';
import Link from 'next/link';

const Project = ({ project }) => {
  return (
    <div className="group overflow-hidden rounded-md w-full md:w-[45%] lg:w-[32%] h-[220px] relative shadow-lg text-white">
      <img
        src={project.image}
        className="absolute top-0 left-0 h-full w-full ease-in duration-100 group-hover:scale-125"
        alt={project.name}
        loading="lazy"
      />
      <div className="opacity-80 py-5 px-7 flex flex-col justify-center h-full translate-x-full ease-in duration-150 group-hover:translate-x-0 bg-gray-600">
        <h3 className="md:mb-2 text-xl font-medium">{project.name}</h3>
        <p className="ml-2">{project.description.slice(0, 40) + '...'}</p>
        <div className="flex gap-1 font-bold my-[2px] md:my-1 text-xl ml-2">
          <DiReact />
          <SiExpress />
          <BiLogoMongodb />
          <BiLogoTailwindCss />
          <BiLogoNodejs />
        </div>
        <div className="mt-5 flex justify-around">
          {/* <button className="px-5 py-1.5 rounded-md w-24 text-center text-white bg-primary"> */}
          <a
            href={project.link}
            className="px-5 py-1.5 rounded-md w-24 text-center text-white bg-primary"
            target="_blank"
          >
            Visit
          </a>
          {/* </button> */}
          <Link
            href={`/projects/${project.slug}`}
            className="px-5 py-1.5 rounded-md w-24 text-center text-white bg-gray-400"
          >
            More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
