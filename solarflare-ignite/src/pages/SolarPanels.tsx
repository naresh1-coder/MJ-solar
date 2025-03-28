import { ServiceDetails } from '@/components/ServiceDetails';

import { Battery, Sun, Home, ArrowDown, CircleDollarSign, MapPin, Trees } from 'lucide-react';
import { motion } from "framer-motion";
import SolarPumps from './SolarPumps';
const BatteryAnimation = () => (
  <div className="glass-card p-8">
    <h3 className="text-xl font-bold mb-4">How Solar Panel Works ?</h3>
    
    <div className="flex flex-col items-center space-y-8 p-8">
    {/* Solar Panel Section */}
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="text-center">
        <Sun className="h-20 w-20 text-yellow-500 animate-pulse" />
        <p className="mt-2 font-bold">Solar Energy</p>
      </div>
    </motion.div>

    {/* Arrow Down Animation */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.0 }}
    >
      <ArrowDown className="h-8 w-8 text-solar-red animate-bounce" />
    </motion.div>

    {/* Solar Panel */}
    <motion.div
            className="transform -rotate-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="w-40 h-28 bg-blue-900/80 rounded-sm border-2 border-gray-800 flex items-center justify-center">
              <div className="grid grid-cols-2 grid-rows-3 gap-1 w-32 h-20">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-blue-800 border border-blue-900"></div>
                ))}
              </div>
            </div>
            <div className="mt-1 text-center text-sm font-medium">Solar Panel</div>
          </motion.div> 

     {/* Arrow Down Animation */}
     <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      <ArrowDown className="h-8 w-8 text-solar-red animate-bounce" />
    </motion.div>
    {/* Battery Storage Section */}
    <motion.div
      className="flex flex-col items-center bg-background p-4 rounded-lg border border-border"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 2 }}
    >
      <div className="flex items-center gap-4">
        <Battery className="h-12 w-12 text-green-500" />
        <div>
          <h4 className="font-bold">Battery Storage</h4>
          <p className="text-sm">Stores energy for later use</p>
        </div>
      </div>

      {/* Animated Battery Fill */}
      <div className="mt-2 h-24 w-12 bg-gray-200 rounded-lg overflow-hidden relative">
        <motion.div
          className="absolute bottom-0 w-full bg-green-500 rounded-lg"
          initial={{ height: '0%' }}
          animate={{ height: ['0%', '70%', '30%', '70%'] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: 2.5,
          }}
        />
      </div>
    </motion.div>

    {/* Arrow Down Animation */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2.5 }}
    >
      <ArrowDown className="h-8 w-8 text-solar-red animate-bounce" />
    </motion.div>

    {/* Home Section */}
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 4 }}
    >
      <div className="text-center">
        <Home className="h-16 w-16 text-foreground" /> {/* Increased size */}
        <p className="text-sm font-medium">Your Home</p>
      </div>
    </motion.div>
  </div>
    
    <div className="mt-4 grid grid-cols-2 gap-4">
      <div className="p-4 bg-secondary rounded-lg">
        <h4 className="font-bold">Daytime Cycle</h4>
        <p className="text-sm text-muted-foreground">
          Solar panels power your home and charge the batteries with excess energy.
        </p>
      </div>
      
      <div className="p-4 bg-secondary rounded-lg">
        <h4 className="font-bold">Nighttime Cycle</h4>
        <p className="text-sm text-muted-foreground">
          Batteries discharge stored energy to power your home when solar is unavailable.
        </p>
      </div>
    </div>
  </div>
);

const SolarPanels = () => {
  // Interactive PV Cell Component
  const PVCellAnimation = () => {
    
    return (
      <div className="glass-card overflow-hidden p-6 relative">
        <h3 className="text-xl font-bold mb-4">Photovoltaic Effect Demonstration</h3>
        <div className="relative h-102 bg-gradient-to-b from-blue-100/20 to-transparent rounded-lg overflow-hidden">
          
          {/* Sun Animation */}
          {/* <div className="absolute top-4 left-4">
            <div className="w-12 h-12 rounded-full bg-yellow-500/80 animate-pulse"></div>
            <div className="absolute top-0 right-0 w-12 h-12 rounded-full bg-yellow-500/40 animate-ping"></div>
          </div> */}

          {/* Animated Solar Panel */}
          {/* <motion.div
            className="absolute top-[20%] left-[30%] transform -rotate-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="w-40 h-28 bg-blue-900/80 rounded-sm border-2 border-gray-800 flex items-center justify-center">
              <div className="grid grid-cols-2 grid-rows-3 gap-1 w-32 h-20">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-blue-800 border border-blue-900"></div>
                ))}
              </div>
            </div>
            <div className="mt-1 text-center text-sm font-medium">Solar Panel</div>
          </motion.div> */}

        

          <BatteryAnimation />
          
        </div>
      </div>
    );
  };

  // Variants for the panel card animation using Framer Motion

  const cardVariants = {
    rest: {
      scale: 1,
      rotate: 0,
      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
      background: "#ffffff",
      borderColor: "#000000",
      color: "#000000",
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.07,
      rotate: 3,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.4)",
      background: "linear-gradient(135deg, #e11d48, #000000)",
      borderColor: "#e11d48",
      color: "#ffffff",
      transition: { duration: 0.3 },
    },
  };
  
  const PanelTypesSection = () => {
    const panelTypes = [
      { type: "Monocrystalline", description: "Made from a single silicon crystal, offering high efficiency (18–23%) and excellent low-light performance." },
      { type: "Polycrystalline", description: "Constructed from multiple silicon crystals, generally less expensive with slightly lower efficiency (15–17%)." },
      { type: "Thin-Film", description: "Utilizes a layered approach on a substrate; these panels are flexible and lightweight, though typically less efficient." },
      { type: "Mono PERC", description: "Enhanced monocrystalline panels with Passivated Emitter Rear Cell technology to improve light capture and efficiency." },
      { type: "Half-Cut Cells", description: "Panels with cells that are cut in half to reduce power loss, particularly beneficial in shaded conditions." },
      { type: "Bifacial", description: "Capable of capturing sunlight from both sides, ideal for reflective surfaces and increasing overall energy yield." },
      { type: "TOPCon", description: "Uses Tunnel Oxide Passivated Contact technology to further enhance efficiency and minimize losses." },
      { type: "HJT (Heterojunction)", description: "Combines crystalline silicon with thin-film technology, requiring less area for high performance." },
    ];
  
    return (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900 text-center">Types of Solar Panels</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {panelTypes.map((panel, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="p-6 rounded-xl border-2 border-gray-300 shadow-lg transition-all cursor-pointer"
            >
              <h4 className="text-lg text-[#ff3d4d] font-semibold mb-2">{panel.type}</h4>
              <p className="text-sm">{panel.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };
  
 
  

  const FeaturesComparisonSection = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">Features & Comparison</h3>
      <p>Solar panels are composed of several key elements:</p>
      <ul className="list-disc ml-5">
        <li>
          <strong>Photovoltaic Cells:</strong> The primary components converting sunlight to DC electricity.
        </li>
        <li>
          <strong>Glass Layer:</strong> Protects cells while allowing maximum light penetration.
        </li>
        <li>
          <strong>Backsheet & Encapsulant:</strong> Provides insulation and environmental protection.
        </li>
        <li>
          <strong>Frame:</strong> Offers structural support for easy installation.
        </li>
        <li>
          <strong>Junction Box:</strong> Manages electrical connections and output cables.
        </li>
        <li>
          <strong>Battery Storage:</strong> Provides options for storing excess energy.{" "}
          <Battery className="inline h-5 w-5 text-gray-700" />
        </li>
      </ul>
      <p className="mt-4">
        The panels can also be classified based on their manufacturing:
      </p>
      <ul className="list-disc ml-5">
        <li>
          <strong>DCR Panels:</strong> Made with domestically produced cells/modules, often used in government-subsidized projects. These panels may cost around 9–10 Rs per watt more than imported versions.
        </li>
        <li>
          <strong>NDCR Panels:</strong> Made with imported cells/modules, typically offering access to the latest global technologies at a lower cost.
        </li>
      </ul>
    </div>
  );

  const DimensionsSection = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">Installation & Efficiency Details</h3>
      <p>Typical solar panel dimensions are:</p>
      <ul className="list-disc ml-5">
        <li>Area: Approximately 28–30 sqft per panel</li>
        <li>Length: Around 7ft</li>
        <li>Width: Approximately 4ft</li>
        <li>Thickness: 35–40mm</li>
        <li>Weight: 25–30 kg</li>
        <li>Efficiency: Generally varies from 23% to 30% (check the back of the panel)</li>
      </ul>
    </div>
  );

  // New Battery Storage Section
  const BatteryStorageSection = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-black flex items-center gap-2">
        <Battery className="h-6 w-6" />
        Battery Storage Options
      </h3>
      <p>
        Modern solar power systems often integrate battery storage solutions to store excess energy generated during peak sunlight hours. This stored energy can be used during periods of low sunlight, enhancing energy independence and efficiency.
      </p>
      <p>
        Battery technologies vary, offering different capacities, lifespans, and efficiency rates. Consider factors such as cost, space requirements, and performance when selecting a battery system.
      </p>
    </div>
  );

  return (
    <ServiceDetails
      title="Solar Panels"
      subtitle="Harnessing Sunlight for Clean Energy Generation"
      description="Photovoltaic panels that convert sunlight into electrical energy through semiconductor materials. Explore different technologies, configurations, and detailed specifications for optimal energy production."
      icon={<Sun className="h-6 w-6" />}
      mainImage="https://images.unsplash.com/photo-1605934361127-4c66b86a0407?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      sections={[
        {
          title: "How Solar Panels Work",
          content: (
            <div className="space-y-8">
              <PVCellAnimation />
              <p>
                Solar panels work based on the photovoltaic effect, where semiconductor cells convert sunlight into direct current (DC) electricity. Key components include photovoltaic cells, protective glass, encapsulants, and frames.
              </p>
            </div>
          ),
        },
        {
          title: "Types of Solar Panels",
          content: <PanelTypesSection />,
        },
        {
          title: "Features & Comparison",
          content: <FeaturesComparisonSection />,
        },
        {
          title: "Installation & Efficiency",
          content: <DimensionsSection />,
        },
        {
          title: "Battery Storage",
          content: <BatteryStorageSection />,
        },
      ]}
    />
  );
};

export default SolarPanels;
