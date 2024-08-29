import React, { useState, useEffect } from "react";
import StrategyCard from "./StrategyCard";

interface AllStrategiesProps {
  strategies: string[];
  onDeleteStrategy: (strategy: string) => void; // Add the delete handler as a prop
}

const AllStrategies: React.FC<AllStrategiesProps> = ({ strategies, onDeleteStrategy }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0); // Default to the first item being active

  useEffect(() => {
    if (strategies.length > 0) {
      setActiveIndex(strategies.length - 1); // Automatically set the most recent strategy as active
    }
  }, [strategies]); // Run this effect whenever the strategies array changes

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  if (strategies.length === 0) {
    return <div className="text-white flex justify-center items-center pt-20">No strategies created yet.</div>;
  }

  return (
    <div className="space-y-4">
      {/* Recent Strategies */}
      <h2 className="text-white text-lg mb-4 px-2">Recent</h2>
      <div className="space-y-4">
        {strategies.slice(0, 1).map((strategy, index) => (
          <StrategyCard
            key={index}
            strategy={strategy}
            isActive={activeIndex === index}
            onClick={() => handleCardClick(index)}
            onDelete={() => onDeleteStrategy(strategy)}
          />
        ))}
      </div>

      {/* Older Strategies */}
      {strategies.length > 1 && (
        <>
          <h2 className="text-white text-lg mt-8 mb-4 px-2">Older</h2>
          <div className="space-y-4">
            {strategies.slice(1).map((strategy, index) => (
              <StrategyCard
                key={index + 1} // Adjust the key to be unique
                strategy={strategy}
                isActive={activeIndex === index + 1} // Adjust the index passed to the handler
                onClick={() => handleCardClick(index + 1)} // Use index + 1 to correctly identify the card
                onDelete={() => onDeleteStrategy(strategy)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AllStrategies;
