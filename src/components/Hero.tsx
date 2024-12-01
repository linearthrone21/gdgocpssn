import { motion } from 'framer-motion';

const generateRandomShape = (index: number) => {
  const shapes = [
    'rounded-full',
    'rounded-lg',
    'rounded-3xl',
    'rounded-[30%_70%_70%_30%/30%_30%_70%_70%]',
    'rounded-[60%_40%_30%_70%/60%_30%_70%_40%]',
    'rounded-[40%_60%_70%_30%/40%_50%_60%_50%]'
  ];
  return shapes[index % shapes.length];
};

const Hero = () => {
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full">
          {Array.from({ length: 24 }).map((_, i) => (
            <motion.div
              key={i}
              className={`absolute ${generateRandomShape(i)} opacity-20`}
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: i % 4 === 0 ? '#4285F4' : // Google Blue
                               i % 4 === 1 ? '#DB4437' : // Google Red
                               i % 4 === 2 ? '#F4B400' : // Google Yellow
                                           '#0F9D58'    // Google Green
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 0.2,
                scale: 1,
                rotate: Math.random() * 360
              }}
              transition={{ 
                duration: 0.8,
                delay: i * 0.1,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: Math.random() * 5
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 bg-white/80 backdrop-blur-sm py-12 rounded-2xl shadow-xl">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to
        </motion.h1>
        <motion.h2 
          className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#4285F4] via-[#DB4437] to-[#F4B400] text-transparent bg-clip-text"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          GDGoC Poltek SSN Web Study Jam
        </motion.h2>
        <motion.p 
          className="text-xl md:text-2xl text-gray-600"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Learning by doing
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;