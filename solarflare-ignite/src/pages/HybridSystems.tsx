
import { ServiceDetails } from '@/components/ServiceDetails';
import { Activity, Battery, Zap, Building2, Home, CircleDollarSign, Check, BarChart } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const HybridSystems = () => {
  // Hybrid system toggle component
  const SystemModeToggle = () => {
    return (
      <div className="glass-card overflow-hidden">
        <h3 className="text-xl font-bold mb-4">System Operation Modes</h3>
        
        <div className="flex border border-border rounded-lg overflow-hidden mb-6">
          <button className="flex-1 py-3 px-4 bg-solar-red text-white font-medium">
            Daytime Mode
          </button>
          <button className="flex-1 py-3 px-4 bg-secondary text-foreground font-medium">
            Nighttime Mode
          </button>
        </div>
        
        <div className="relative h-[350px] border border-border rounded-lg bg-gradient-to-b from-sky-100/20 to-transparent overflow-hidden">
          {/* Sun animation */}
          <div className="absolute top-4 left-4">
            <div className="w-16 h-16 rounded-full bg-yellow-500/80 animate-pulse"></div>
            <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-yellow-500/40 animate-ping"></div>
          </div>
          
          {/* Main flow diagram */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-8 p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-solar-red/10 flex items-center justify-center mb-2">
                  <Zap className="h-8 w-8 text-solar-red" />
                </div>
                <p className="font-medium">Solar Panels</p>
                <p className="text-xs text-muted-foreground">Generating Power</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-2">
                  <Home className="h-8 w-8 text-green-500" />
                </div>
                <p className="font-medium">Your Home</p>
                <p className="text-xs text-muted-foreground">Using Solar Power</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-2">
                  <Battery className="h-8 w-8 text-blue-500" />
                </div>
                <p className="font-medium">Battery</p>
                <p className="text-xs text-muted-foreground">Charging</p>
                
                {/* Battery charging animation */}
                <div className="mt-2 h-3 w-16 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: '60%', animation: 'progress 2s ease-in-out infinite' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom flow - grid connection */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gray-200/50 flex items-center justify-center mb-2">
              <Building2 className="h-8 w-8 text-gray-400" />
            </div>
            <p className="font-medium">Grid Connection</p>
            <p className="text-xs text-gray-400">Minimal Power Draw</p>
          </div>
          
          {/* Arrows */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#f43f5e" />
              </marker>
            </defs>
            <g fill="none" stroke="#f43f5e" strokeWidth="2" markerEnd="url(#arrowhead)">
              <path d="M110,120 L180,120" />
              <path d="M260,120 L330,120" />
              <path d="M110,150 C110,220 110,220 200,270" />
            </g>
          </svg>
          
          <style>
            {`
            @keyframes progress {
              0% { width: 40%; }
              50% { width: 70%; }
              100% { width: 40%; }
            }
            `}
          </style>
        </div>
        
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="p-4 bg-secondary rounded-lg">
            <h4 className="font-bold">Priority: Home Use</h4>
            <p className="text-sm text-muted-foreground">
              Solar energy powers your home first, with excess energy charging batteries.
            </p>
          </div>
          
          <div className="p-4 bg-secondary rounded-lg">
            <h4 className="font-bold">Minimal Grid Usage</h4>
            <p className="text-sm text-muted-foreground">
              The grid is only used when solar production and battery storage are insufficient.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  // Cost vs efficiency analysis
 

  return (
    <ServiceDetails
      title="Hybrid Solar Systems"
      subtitle="Best of Both Worlds: Grid Connection with Battery Backup"
      description="Hybrid solar systems combine the best features of grid-tied and off-grid systems. They connect to the utility grid while also incorporating battery storage, providing both energy savings and backup power during outages."
      icon={<Activity className="h-6 w-6" />}
      mainImage="https://images.unsplash.com/photo-1611365892117-baa49650139b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      sections={[
        {
          title: "How Hybrid Solar Systems Work",
          content: (
            <div className="space-y-8">
              <p className="text-lg">
                Hybrid solar systems intelligently manage power from multiple sources - solar panels, battery storage, and the utility grid. During the day, solar panels power your home and charge batteries, while at night or during cloudy weather, batteries provide power. The grid serves as backup when needed.
              </p>
              
              <SystemModeToggle />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Key Components",
                    content: (
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-solar-red shrink-0 mt-0.5" />
                          <span>Solar panels</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-solar-red shrink-0 mt-0.5" />
                          <span>Hybrid inverter</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-solar-red shrink-0 mt-0.5" />
                          <span>Battery storage</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-solar-red shrink-0 mt-0.5" />
                          <span>Smart energy management system</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-solar-red shrink-0 mt-0.5" />
                          <span>Grid connection</span>
                        </li>
                      </ul>
                    )
                  },
                  {
                    title: "Advantages",
                    content: (
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-solar-red shrink-0 mt-0.5" />
                          <span>Lower electricity bills</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-solar-red shrink-0 mt-0.5" />
                          <span>Backup power during outages</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-solar-red shrink-0 mt-0.5" />
                          <span>Maximized self-consumption</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-solar-red shrink-0 mt-0.5" />
                          <span>Grid support when needed</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-solar-red shrink-0 mt-0.5" />
                          <span>Reduced carbon footprint</span>
                        </li>
                      </ul>
                    )
                  },
                  {
                    title: "Ideal Users",
                    content: (
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-solar-red shrink-0 mt-0.5" />
                          <span>Homes in areas with frequent outages</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-solar-red shrink-0 mt-0.5" />
                          <span>Homes with time-of-use electricity rates</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-solar-red shrink-0 mt-0.5" />
                          <span>Users with critical power needs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-solar-red shrink-0 mt-0.5" />
                          <span>Energy-conscious homeowners</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-solar-red shrink-0 mt-0.5" />
                          <span>Those seeking energy independence</span>
                        </li>
                      </ul>
                    )
                  }
                ].map((column, index) => (
                  <div key={index} className="glass-card">
                    <h3 className="text-xl font-bold mb-4">{column.title}</h3>
                    {column.content}
                  </div>
                ))}
              </div>
            </div>
          )
        },
     
       
      ]}
      nextService={{
        id: "solar-pumps",
        title: "Solar Pumps"
      }}
      prevService={{
        id: "off-grid",
        title: "Off-Grid Systems"
      }}
    />
  );
};

export default HybridSystems;
