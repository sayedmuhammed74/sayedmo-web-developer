'use client';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div
      initial={{ y: '10vh', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <h1 className="text-center text-2xl font-semibold">
        Sayed<span className="ml-1.5 text-primary">Mo</span>
      </h1>
      <p className="text-xl font-medium">web developer</p>
    </motion.div>
  );
};

export default Logo;
