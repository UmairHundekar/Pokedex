import { motion } from "framer-motion";

const StatsBar = ({ statName, statValue }: { statName: string, statValue: number }) => {
    return (
      <div className="flex items-center mb-1">
        <span className="font-semibold w-16">{statName}:</span> 
        <div className="flex items-center flex-1 ml-2">
          <div className="w-full h-3 bg-gray-300 rounded-lg">
            <motion.div
              className="h-full bg-green-500 rounded-lg"
              initial={{ width: "0%" }}
              animate={{ width: `${(statValue/255*100)}%` }}
              transition={{ duration: 1 }}
            />
          </div>
          <span className="ml-2 mr-1">{statValue}</span>
        </div>
      </div>
    );
};

export default StatsBar;