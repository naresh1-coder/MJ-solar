import { ServiceDetails } from '@/components/ServiceDetails';
import { Battery, Sun, Home, ArrowDown, CircleDollarSign, MapPin, Trees } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { motion } from 'framer-motion';

const OffGridSystems = () => {
  // Battery animation component
  const BatteryAnimation = () => (
    <div className="glass-card p-8">
      <h3 className="text-xl font-bold mb-4">Battery Storage Cycle</h3>
      
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
        transition={{ duration: 1, delay: 6.5 }}
      >
        <ArrowDown className="h-8 w-8 text-solar-red animate-bounce" />
      </motion.div>

      {/* Home Section */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 7 }}
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

  // Case study component
  const CaseStudy = () => (
    <div className="glass-card">
      <div className="flex items-center gap-3 mb-4">
        <MapPin className="h-6 w-6 text-solar-red" />
        <h3 className="text-xl font-bold">Real-World Case Study: Mountain Retreat</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Off-grid cabin" 
            className="w-full h-auto rounded-lg"
          />
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-2">System Details</h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-solar-red text-white flex items-center justify-center flex-shrink-0 mt-1 text-xs">✓</span>
              <span>5kW solar array with 16 panels</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-solar-red text-white flex items-center justify-center flex-shrink-0 mt-1 text-xs">✓</span>
              <span>14kWh lithium battery storage</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-solar-red text-white flex items-center justify-center flex-shrink-0 mt-1 text-xs">✓</span>
              <span>5kW inverter with integrated charge controller</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-solar-red text-white flex items-center justify-center flex-shrink-0 mt-1 text-xs">✓</span>
              <span>Propane backup generator for extended cloudy periods</span>
            </li>
          </ul>
          
          <h4 className="font-bold text-lg mt-4 mb-2">Results</h4>
          <p className="text-muted-foreground mb-4">
            This mountain retreat is located 15 miles from the nearest utility pole. Our off-grid solution provides reliable power year-round with minimal generator use.
          </p>
          
          <div className="flex items-center gap-4">
            <div className="text-center">
              <CircleDollarSign className="h-8 w-8 text-green-500 mx-auto" />
              <p className="text-sm font-medium">$22,000</p>
              <p className="text-xs text-muted-foreground">vs $75,000 grid connection</p>
            </div>
            
            <div className="text-center">
              <Battery className="h-8 w-8 text-green-500 mx-auto" />
              <p className="text-sm font-medium">99% Uptime</p>
              <p className="text-xs text-muted-foreground">Year-round reliability</p>
            </div>
            
            <div className="text-center">
              <Trees className="h-8 w-8 text-green-500 mx-auto" />
              <p className="text-sm font-medium">5 tons CO2</p>
              <p className="text-xs text-muted-foreground">Annual reduction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // System components with hover
  const SystemComponents = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {[
        {
          name: "Solar Array",
          description: "Multiple solar panels that capture sunlight and convert it to electricity.",
          icon: <Sun className="h-6 w-6" />
        },
        {
          name: "Battery Bank",
          description: "Stores excess electricity for use when the sun isn't shining.",
          icon: <Battery className="h-6 w-6" />
        },
        {
          name: "Charge Controller",
          description: "Regulates the voltage and current from solar panels to batteries.",
          icon: <CircleDollarSign className="h-6 w-6" />
        }
      ].map((component, index) => (
        <HoverCard key={index}>
          <HoverCardTrigger asChild>
            <motion.div
              className="glass-card cursor-pointer hover:border-solar-red transition-all duration-300 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-12 h-12 rounded-full bg-solar-red/10 text-solar-red flex items-center justify-center mx-auto mb-4">
                {component.icon}
              </div>
              <h3 className="text-lg font-bold">{component.name}</h3>
              <p className="text-sm text-muted-foreground">Hover for details</p>
            </motion.div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-2">
              <h4 className="text-lg font-bold">{component.name}</h4>
              <p>{component.description}</p>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );

  return (
    <ServiceDetails
      title="Off-Grid Solar Systems"
      subtitle="Energy Independence, Anywhere"
      description="Off-grid solar systems provide complete energy independence, allowing you to generate and store your own electricity without connection to the utility grid. Ideal for remote locations or those seeking self-sufficiency, these systems combine solar panels with battery storage."
      icon={<Battery className="h-6 w-6" />}
      mainImage="https://images.unsplash.com/photo-1559302995-f8d7c1e648e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      sections={[
        {
          title: "How Off-Grid Solar Works",
          content: (
            <div className="space-y-8">
              <p className="text-lg">
                Off-grid solar systems work independently of the utility grid, generating and storing electricity for use day and night. They include solar panels, battery storage, and often a backup generator for extended periods of low sunlight.
              </p>
              
              <div className="relative p-8 border border-border rounded-xl bg-secondary/50">
                <div className="flex flex-col items-center space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    <div className="w-20 h-20 rounded-full bg-solar-red/10 text-solar-red flex items-center justify-center mx-auto mb-2">
                      <Sun className="h-10 w-10" />
                    </div>
                    <p className="font-medium">Solar Panels</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    <ArrowDown className="text-solar-red h-6 w-6" />
                  </motion.div>
                  
                  <div className="flex justify-between w-full max-w-md">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1, delay: 1.5 }}
                    >
                      <div className="text-center">
                        <div className="w-20 h-20 rounded-full bg-solar-red/10 text-solar-red flex items-center justify-center mx-auto mb-2">
                          <CircleDollarSign className="h-10 w-10" />
                        </div>
                        <p className="font-medium">Charge Controller</p>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1, delay: 1.5 }}
                    >
                      <div className="text-center">
                        <div className="w-20 h-20 rounded-full bg-solar-red/10 text-solar-red flex items-center justify-center mx-auto mb-2">
                          <Battery className="h-10 w-10" />
                        </div>
                        <p className="font-medium">Battery Bank</p>
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                  >
                    <ArrowDown className="text-solar-red h-6 w-6" />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2.5 }}
                  >
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full bg-solar-red/10 text-solar-red flex items-center justify-center mx-auto mb-2">
                        <Home className="h-10 w-10" />
                      </div>
                      <p className="font-medium">Your Home</p>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              <p className="text-lg">
                During the day, solar panels generate electricity that powers your home and charges the battery bank. At night or during cloudy weather, the batteries provide power to your home. A backup generator can provide additional power during extended periods of low solar production.
              </p>
              
              <SystemComponents />
            </div>
          )
        },
        {
          title: "Battery Storage & Energy Management",
          content: (
            <div className="space-y-8">
              <p className="text-lg">
                Battery storage is the heart of an off-grid solar system. Modern lithium batteries offer high efficiency, long life, and deep discharge capabilities, making them ideal for off-grid applications.
              </p>
              
              <BatteryAnimation />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-card">
                  <h3 className="text-xl font-bold mb-4">Battery Types</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-solar-red text-white flex items-center justify-center shrink-0">1</div>
                      <div>
                        <h4 className="font-bold">Lithium Iron Phosphate (LiFePO4)</h4>
                        <p className="text-muted-foreground text-sm">
                          Long lifespan (3000-5000 cycles), high efficiency, maintenance-free, but higher upfront cost.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-solar-red text-white flex items-center justify-center shrink-0">2</div>
                      <div>
                        <h4 className="font-bold">Lead-Acid Batteries</h4>
                        <p className="text-muted-foreground text-sm">
                          Lower upfront cost, widely available, but shorter lifespan (500-1000 cycles) and require maintenance.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-solar-red text-white flex items-center justify-center shrink-0">3</div>
                      <div>
                        <h4 className="font-bold">Saltwater Batteries</h4>
                        <p className="text-muted-foreground text-sm">
                          Environmentally friendly, non-toxic, moderate lifespan (2000-3000 cycles), but lower energy density.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="glass-card">
                  <h3 className="text-xl font-bold mb-4">Energy Management Tips</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-solar-red text-white flex items-center justify-center flex-shrink-0 mt-1 text-xs">✓</span>
                      <span>Use energy-efficient appliances and LED lighting.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-solar-red text-white flex items-center justify-center flex-shrink-0 mt-1 text-xs">✓</span>
                      <span>Schedule high-energy tasks during peak solar production.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-solar-red text-white flex items-center justify-center flex-shrink-0 mt-1 text-xs">✓</span>
                      <span>Install energy monitoring to track usage and production.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-solar-red text-white flex items-center justify-center flex-shrink-0 mt-1 text-xs">✓</span>
                      <span>Consider propane for high-energy appliances like water heaters.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-solar-red text-white flex items-center justify-center flex-shrink-0 mt-1 text-xs">✓</span>
                      <span>Insulate your home well to reduce heating and cooling needs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-solar-red text-white flex items-center justify-center flex-shrink-0 mt-1 text-xs">✓</span>
                      <span>Install a backup generator for extended cloudy periods.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        
      ]}
      nextService={{
        id: "hybrid",
        title: "Hybrid Systems"
      }}
      prevService={{
        id: "grid",
        title: "Grid Systems"
      }}
    />
  );
};

export default OffGridSystems;