// Icons
import { MdOutlineWebAsset } from 'react-icons/md';

const Service = ({ service }) => {
  return (
    <div className="col-span-2 md:col-span-1 border-l-8 px-5 py-4 relative border-primary bg-black">
      <div className="w-9 h-9 absolute top-4 -left-5 flex justify-center items-center rounded-md bg-primary">
        <MdOutlineWebAsset className="text-xl" />
      </div>
      <h3 className="text-xl mb-3 text-white">{service.title}</h3>
      <p className="text-gray-400">{service.description}</p>
    </div>
  );
};

export default Service;
