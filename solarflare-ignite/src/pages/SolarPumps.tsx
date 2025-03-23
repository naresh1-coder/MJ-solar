import { ServiceDetails } from '@/components/ServiceDetails';
import { Droplets, CircleDollarSign, Gauge, Leaf, Waves, CircleCheck } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { motion } from 'framer-motion';

const SolarPumps = () => {
  // Animated demonstration
  const AnimatedDemonstration = () => (
    <div className="glass-card p-8">
      <h3 className="text-xl font-bold mb-6">How Solar Pumps Work</h3>
      
      <div className="relative h-[400px] w-full overflow-hidden rounded-lg border border-border bg-gradient-to-b from-sky-100/20 to-transparent">
        {/* Sun animation */}
        <motion.div
          className="absolute top-4 right-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="w-20 h-20 rounded-full bg-yellow-500/80 animate-pulse"></div>
          <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-yellow-500/40 animate-ping"></div>
        </motion.div>
        
        {/* Solar panel */}
        <motion.div
          className="absolute top-[20%] left-[10%] transform -rotate-12"
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
        
        {/* Controller box */}
        <motion.div
          className="absolute top-[50%] left-[25%]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="w-20 h-16 bg-gray-200 border border-gray-400 rounded-sm flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse"></div>
          </div>
          <div className="mt-1 text-center text-sm font-medium">Controller</div>
        </motion.div>
        
        {/* Animated connecting wires */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#f43f5e" />
            </marker>
          </defs>
          
          {/* Panel to controller line */}
          <g>
            <path 
              d="M90,120 L125,190" 
              fill="none" 
              stroke="#f43f5e" 
              strokeWidth="2" 
              strokeDasharray="5,5"
              markerEnd="url(#arrowhead)"
            />
            <circle cx="90" cy="120" r="3" fill="#f43f5e">
              <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
            </circle>
          </g>
          
          {/* Controller to pump line */}
          <g>
            <path 
              d="M160,200 L250,250" 
              fill="none" 
              stroke="#f43f5e" 
              strokeWidth="2" 
              strokeDasharray="5,5" 
              markerEnd="url(#arrowhead)"
            />
            <circle cx="160" cy="200" r="3" fill="#f43f5e">
              <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.5s" />
            </circle>
          </g>
        </svg>
        
        {/* Water well */}
        <motion.div
          className="absolute bottom-0 left-0 w-[40%] h-[30%]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div className="relative w-full h-full overflow-hidden">
            {/* Water level */}
            <div 
              className="absolute bottom-0 left-0 w-full bg-blue-500/60"
              style={{ 
                height: '70%',
                animation: 'water-ripple 3s ease-in-out infinite'
              }}
            ></div>
            
            {/* Water ripples */}
            <div className="absolute bottom-[70%] left-0 w-full flex justify-center">
              <div className="w-8 h-8 rounded-full border-2 border-blue-400/50 animate-ping"></div>
            </div>
          </div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center text-sm font-medium text-white">
            Water Source
          </div>
        </motion.div>
        
        {/* Solar pump */}
        <motion.div
          className="absolute bottom-[20%] left-[50%]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <div className="w-16 h-20 bg-gray-300 border border-gray-500 rounded-md flex flex-col items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-gray-600 animate-spin"></div>
            </div>
          </div>
          <div className="mt-1 text-center text-sm font-medium">Solar Pump</div>
        </motion.div>
        
        {/* Water pipes & output */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M260,270 C260,270 280,270 280,250 L280,150 C280,130 300,130 300,130 L350,130"
            fill="none" 
            stroke="#3b82f6" 
            strokeWidth="8" 
            strokeLinecap="round"
          />
          
          {/* Moving water droplets */}
          <circle cx="260" cy="270" r="3" fill="#3b82f6">
            <animate attributeName="cx" values="260;280;280;300;350" dur="3s" repeatCount="indefinite" />
            <animate attributeName="cy" values="270;270;250;150;130" dur="3s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="260" cy="270" r="3" fill="#3b82f6">
            <animate attributeName="cx" values="260;280;280;300;350" dur="3s" begin="1s" repeatCount="indefinite" />
            <animate attributeName="cy" values="270;270;250;150;130" dur="3s" begin="1s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="260" cy="270" r="3" fill="#3b82f6">
            <animate attributeName="cx" values="260;280;280;300;350" dur="3s" begin="2s" repeatCount="indefinite" />
            <animate attributeName="cy" values="270;270;250;150;130" dur="3s" begin="2s" repeatCount="indefinite" />
          </circle>
        </svg>
        
        {/* Output - irrigation */}
        <motion.div
          className="absolute top-[30%] right-[10%]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <div className="h-16 w-20 flex flex-col items-center justify-center">
            <div className="h-6 w-6 rounded-full bg-blue-400 animate-bounce"></div>
            <div className="mt-1 h-4 w-10 flex justify-between">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-4 w-1 bg-blue-500 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
              ))}
            </div>
          </div>
          <div className="text-center text-sm font-medium">Irrigation</div>
        </motion.div>
        
        <style>
          {`
            @keyframes water-ripple {
              0%, 100% { height: 70%; }
              50% { height: 65%; }
            }
          `}
        </style>
      </div>
      
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-secondary rounded-lg">
          <h4 className="font-bold">Solar Energy Conversion</h4>
          <p className="text-sm text-muted-foreground">
            Solar panels convert sunlight into DC electricity to power the pump motor.
          </p>
        </div>
        
        <div className="p-4 bg-secondary rounded-lg">
          <h4 className="font-bold">Water Extraction</h4>
          <p className="text-sm text-muted-foreground">
            The pump draws water from wells, boreholes, rivers, or other sources.
          </p>
        </div>
        
        <div className="p-4 bg-secondary rounded-lg">
          <h4 className="font-bold">Efficient Distribution</h4>
          <p className="text-sm text-muted-foreground">
            Water is delivered for irrigation, livestock, or household use with zero operating costs.
          </p>
        </div>
      </div>
    </div>
  );
  
  // Types of solar pumps
  const TypesOfSolarPumps = () => (
    <div className="glass-card p-8">
      <h3 className="text-xl font-bold mb-6">Types of Solar Pumps</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* AC Solar Pumps */}
        <div className="p-6 bg-secondary rounded-lg">
          <div className="flex items-center gap-4 mb-4">
            <CircleDollarSign className="h-6 w-6 text-solar-red" />
            <h4 className="font-bold text-lg">AC Solar Pumps</h4>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            AC pumps are powered by alternating current (AC) electricity converted from solar panels via an inverter.
          </p>
          
          <HoverCard>
            <HoverCardTrigger className="solar-button-outline">
              Learn More
            </HoverCardTrigger>
            <HoverCardContent>
              <p className="text-sm">
                AC pumps are generally more powerful and suitable for larger-scale water pumping needs.
              </p>
            </HoverCardContent>
          </HoverCard>
        </div>
        
        {/* DC Solar Pumps */}
        <div className="p-6 bg-secondary rounded-lg">
          <div className="flex items-center gap-4 mb-4">
            <Gauge className="h-6 w-6 text-solar-red" />
            <h4 className="font-bold text-lg">DC Solar Pumps</h4>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            DC pumps run on direct current (DC) electricity directly from solar panels without an inverter.
          </p>
          
          <HoverCard>
            <HoverCardTrigger className="solar-button-outline">
              Learn More
            </HoverCardTrigger>
            <HoverCardContent>
              <p className="text-sm">
                DC pumps are typically less expensive and ideal for smaller applications.
              </p>
            </HoverCardContent>
          </HoverCard>
        </div>
        
        {/* Surface Pumps */}
        <div className="p-6 bg-secondary rounded-lg">
          <div className="flex items-center gap-4 mb-4">
            <Leaf className="h-6 w-6 text-solar-red" />
            <h4 className="font-bold text-lg">Surface Pumps</h4>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Surface pumps are positioned above the water source and use suction to draw water.
          </p>
          
          <HoverCard>
            <HoverCardTrigger className="solar-button-outline">
              Details
            </HoverCardTrigger>
            <HoverCardContent>
              <p className="text-sm">
                Surface pumps are easy to install and maintain but have limited lift capacity.
              </p>
            </HoverCardContent>
          </HoverCard>
        </div>
        
        {/* Submersible Pumps */}
        <div className="p-6 bg-secondary rounded-lg">
          <div className="flex items-center gap-4 mb-4">
            <Waves className="h-6 w-6 text-solar-red" />
            <h4 className="font-bold text-lg">Submersible Pumps</h4>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Submersible pumps are submerged in the water source and push water to the surface.
          </p>
          
          <HoverCard>
            <HoverCardTrigger className="solar-button-outline">
              More Info
            </HoverCardTrigger>
            <HoverCardContent>
              <p className="text-sm">
                Submersible pumps are more efficient and can pump water from greater depths.
              </p>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </div>
  );
  
  // Impact section
  const ImpactSection = () => (
    <div className="glass-card p-8">
      <h3 className="text-xl font-bold mb-6">Impact of Solar Pumps</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Agriculture */}
        <div className="p-6 bg-secondary rounded-lg">
          <div className="flex items-center gap-4 mb-4">
            <CircleCheck className="h-6 w-6 text-solar-red" />
            <h4 className="font-bold text-lg">Agriculture</h4>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Solar pumps provide reliable irrigation for crops, increasing yields and reducing reliance on rain-fed agriculture.
          </p>
        </div>
        
        {/* Water Supply */}
        <div className="p-6 bg-secondary rounded-lg">
          <div className="flex items-center gap-4 mb-4">
            <CircleCheck className="h-6 w-6 text-solar-red" />
            <h4 className="font-bold text-lg">Water Supply</h4>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Solar pumps ensure a consistent water supply for communities, livestock, and households in remote areas.
          </p>
        </div>
        
        {/* Environmental */}
        <div className="p-6 bg-secondary rounded-lg">
          <div className="flex items-center gap-4 mb-4">
            <CircleCheck className="h-6 w-6 text-solar-red" />
            <h4 className="font-bold text-lg">Environmental</h4>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Solar pumps reduce carbon emissions and reliance on fossil fuels, promoting sustainable water management.
          </p>
        </div>
      </div>
    </div>
  );

  const animationStyles = `
    @keyframes water-ripple {
      0%, 100% { height: 70%; }
      50% { height: 65%; }
    }
  `;

  return (
    <ServiceDetails
      title="Solar Water Pumping Systems"
      subtitle="Water Solutions Powered by the Sun"
      description="Solar water pumping systems harness solar energy to pump water for irrigation, livestock, and domestic use without the need for grid electricity or fossil fuels. These systems are ideal for remote locations and offer significant operational savings."
      icon={<Droplets className="h-6 w-6" />}
      mainImage="https://images.unsplash.com/photo-1601933513793-0f9a11d5e45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      sections={[
        {
          title: "How Solar Pumps Work",
          content: (
            <div className="space-y-8">
              <p className="text-lg">
                Solar water pumping systems convert sunlight into electricity that powers a water pump. They operate completely independent of the grid, making them perfect for remote locations with water needs.
              </p>
              
              <AnimatedDemonstration />
              
              <p className="text-lg">
                The beauty of solar pumping systems is their simplicity and reliability. With no fuel costs and minimal maintenance, they provide a sustainable water solution for years to come. Most systems can be designed to pump water directly when the sun is shining or to incorporate battery storage for consistent water supply regardless of weather conditions.
              </p>
            </div>
          )
        },
        {
          title: "Types of Solar Pumps",
          content: <TypesOfSolarPumps />
        },
        {
          title: "Impact of Solar Pumps",
          content: <ImpactSection />
        }
      ]}
      nextService={undefined}
      prevService={{
        id: "hybrid",
        title: "Hybrid Systems"
      }}
    />
  );
};

export default SolarPumps;