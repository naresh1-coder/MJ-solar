import { motion } from 'framer-motion';
import { ServiceDetails } from '@/components/ServiceDetails';
import { Zap, ArrowDown, Home, Building2, Gauge, LineChart, ArrowRight } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const chartData = [
  { month: 'Jan', consumption: 400, generation: 240, saving: 240 },
  { month: 'Feb', consumption: 380, generation: 270, saving: 270 },
  { month: 'Mar', consumption: 340, generation: 290, saving: 290 },
  { month: 'Apr', consumption: 320, generation: 310, saving: 310 },
  { month: 'May', consumption: 300, generation: 350, saving: 300 },
  { month: 'Jun', consumption: 290, generation: 380, saving: 290 },
  { month: 'Jul', consumption: 320, generation: 390, saving: 320 },
  { month: 'Aug', consumption: 340, generation: 370, saving: 340 },
  { month: 'Sep', consumption: 350, generation: 320, saving: 320 },
  { month: 'Oct', consumption: 380, generation: 280, saving: 280 },
  { month: 'Nov', consumption: 400, generation: 250, saving: 250 },
  { month: 'Dec', consumption: 420, generation: 230, saving: 230 },
];

const GridSystems = () => {
  // Generate system components with hover info
  const SystemComponents = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {[
        {
          name: "Solar Panels",
          description: "Convert sunlight into electricity through photovoltaic cells.",
          icon: <Zap className="h-6 w-6" />
        },
        {
          name: "Inverter",
          description: "Converts DC electricity from panels into AC electricity for home use.",
          icon: <Gauge className="h-6 w-6" />
        },
        {
          name: "Net Meter",
          description: "Measures electricity flowing to and from the grid, enabling credits.",
          icon: <LineChart className="h-6 w-6" />
        }
      ].map((component, index) => (
        <HoverCard key={index}>
          <HoverCardTrigger asChild>
            <div className="glass-card cursor-pointer hover:border-solar-red transition-all duration-300 text-center">
              <div className="w-12 h-12 rounded-full bg-solar-red/10 text-solar-red flex items-center justify-center mx-auto mb-4">
                {component.icon}
              </div>
              <h3 className="text-lg font-bold">{component.name}</h3>
              <p className="text-sm text-muted-foreground">Hover for details</p>
            </div>
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

  // Generate energy chart
  const EnergyChart = () => (
    <div className="glass-card">
      <h3 className="text-xl font-bold mb-4">Energy Consumption vs. Solar Generation</h3>
      <p className="mb-4 text-muted-foreground">
        This chart shows your typical electricity consumption compared to solar energy generation throughout the year.
      </p>
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis label={{ value: 'kWh', angle: -90, position: 'insideLeft' }} />
            <Tooltip 
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-background border border-border p-4 rounded-md shadow-md">
                      <p className="font-bold">{label}</p>
                      <p className="text-solar-red">Consumption: {payload[0].value} kWh</p>
                      <p className="text-green-500">Generation: {payload[1].value} kWh</p>
                      <p className="font-bold">Savings: {payload[2].value} kWh</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Legend />
            <Bar dataKey="consumption" fill="#f97316" name="Consumption" />
            <Bar dataKey="generation" fill="#10b981" name="Generation" />
            <Bar dataKey="saving" fill="#f43f5e" name="Savings" stackId="a" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  // Generate comparison table
  const ComparisonTable = () => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-solar-red text-white">
            <th className="p-4 text-left">Feature</th>
            <th className="p-4 text-left">Grid-Tied System</th>
            <th className="p-4 text-left">Off-Grid System</th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              feature: "Initial Cost",
              gridTied: "Lower",
              offGrid: "Higher (requires batteries)"
            },
            {
              feature: "Battery Storage",
              gridTied: "Optional",
              offGrid: "Required"
            },
            {
              feature: "Power During Outages",
              gridTied: "No (without batteries)",
              offGrid: "Yes"
            },
            {
              feature: "Maintenance",
              gridTied: "Low",
              offGrid: "Moderate (battery maintenance)"
            },
            {
              feature: "Expandability",
              gridTied: "Easy",
              offGrid: "Requires system redesign"
            },
            {
              feature: "ROI Timeline",
              gridTied: "5-8 years",
              offGrid: "8-15 years"
            }
          ].map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-secondary" : "bg-background"}>
              <td className="p-4 border-t border-border font-medium">{row.feature}</td>
              <td className="p-4 border-t border-border">{row.gridTied}</td>
              <td className="p-4 border-t border-border">{row.offGrid}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <ServiceDetails
      title="Grid-Connected Solar Systems"
      subtitle="Seamless Energy Integration with the Grid"
      description="Grid-connected solar power systems are the most common type of solar installation. They connect to the utility grid, allowing you to use solar energy when it's available and grid power when it's not. With net metering, you can even sell excess electricity back to the grid."
      icon={<Zap className="h-6 w-6" />}
      mainImage="https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      sections={[
        {
          title: "How Grid-Connected Solar Works",
          content: (
            <div className="space-y-8">
              <p className="text-lg">Grid-connected solar systems work by generating electricity from sunlight and feeding it into your home's electrical system. Any excess electricity is sent to the utility grid, often earning you credits through net metering.</p>
              
              <div className="relative p-8 border border-border rounded-xl bg-secondary/50">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Solar Panels */}
        <motion.div
          className="text-center"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="w-20 h-20 rounded-full bg-solar-red/10 text-solar-red flex items-center justify-center mx-auto mb-2">
            <Zap className="h-10 w-10" />
          </div>
          <p className="font-medium">Solar Panels</p>
        </motion.div>

        {/* Arrow Animation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <ArrowRight className="hidden md:block text-solar-red h-6 w-6 animate-moveRight" />
          <ArrowDown className="md:hidden text-solar-red h-6 w-6 animate-moveDown" />
        </motion.div>

        {/* Inverter */}
        <motion.div
          className="text-center"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="w-20 h-20 rounded-full bg-solar-red/10 text-solar-red flex items-center justify-center mx-auto mb-2">
            <Gauge className="h-10 w-10" />
          </div>
          <p className="font-medium">Inverter</p>
        </motion.div>

        {/* Arrow Animation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <ArrowRight className="hidden md:block text-solar-red h-6 w-6 animate-moveRight" />
          <ArrowDown className="md:hidden text-solar-red h-6 w-6 animate-moveDown" />
        </motion.div>

        {/* Your Home */}
        <motion.div
          className="text-center"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="w-20 h-20 rounded-full bg-solar-red/10 text-solar-red flex items-center justify-center mx-auto mb-2">
            <Home className="h-10 w-10" />
          </div>
          <p className="font-medium">Your Home</p>
        </motion.div>

        {/* Arrow Animation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <ArrowRight className="hidden md:block text-solar-red h-6 w-6 animate-moveRight" />
          <ArrowDown className="md:hidden text-solar-red h-6 w-6 animate-moveDown" />
        </motion.div>

        {/* Utility Grid */}
        <motion.div
          className="text-center"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="w-20 h-20 rounded-full bg-solar-red/10 text-solar-red flex items-center justify-center mx-auto mb-2">
            <Building2 className="h-10 w-10" />
          </div>
          <p className="font-medium">Utility Grid</p>
        </motion.div>
      </div>
    </div>
              <p className="text-lg">
                When your solar panels produce more electricity than you're using, the excess is sent to the grid, and your meter runs backward, earning you credits. When you need more electricity than your solar panels are producing, you draw power from the grid.
              </p>
              
              <SystemComponents />
            </div>
          )
        },
       
        {
          title: "Comparing Grid-Tied vs Off-Grid Systems",
          content: (
            <div className="space-y-8">
              <p className="text-lg">
                Grid-tied systems offer several advantages compared to off-grid systems, particularly in terms of cost and simplicity. However, off-grid systems provide energy independence and are ideal for remote locations.
              </p>
              
              <ComparisonTable />
              
              <p className="text-lg">
                For most residential and commercial applications in areas with reliable utility service, grid-tied systems offer the best balance of cost, convenience, and environmental benefit.
              </p>
            </div>
          )
        }
      ]}
      nextService={{
        id: "off-grid",
        title: "Off-Grid Systems"
      }}
      prevService={undefined}
    />
  );
};

export default GridSystems;
