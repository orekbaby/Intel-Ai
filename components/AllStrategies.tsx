import React, { useState, useEffect } from "react";
import StrategyCard from "./StrategyCard";

interface AllStrategiesProps {
  strategies: { strategy: string, timestamp: { date: string, time: string } }[];
  onDeleteStrategy: (strategyToDelete: string) => void;
}

const AllStrategies: React.FC<AllStrategiesProps> = ({ strategies, onDeleteStrategy }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    if (strategies.length > 0) {
      setActiveIndex(strategies.length - 1);
    }
  }, [strategies]);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  if (strategies.length === 0) {
    return <div className="text-white flex justify-center items-center pt-20">No strategies created yet.</div>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-white text-lg mb-4 px-2 helvetica-font">Recent</h2>
      <div className="space-y-4">
        {strategies.slice(0, 1).map((strategy, index) => (
          <StrategyCard
            key={index}
            strategy={strategy.strategy}
            timestamp={strategy.timestamp} // Pass timestamp
            isActive={activeIndex === index}
            onClick={() => handleCardClick(index)}
            onDelete={() => onDeleteStrategy(strategy.strategy)}
          />
        ))}
      </div>

      {strategies.length > 1 && (
        <>
          <h2 className="text-white text-lg mt-8 mb-4 px-2 helvetica-font">Older</h2>
          <div className="space-y-4">
            {strategies.slice(1).map((strategy, index) => (
              <StrategyCard
                key={index + 1}
                strategy={strategy.strategy}
                timestamp={strategy.timestamp} // Pass timestamp
                isActive={activeIndex === index + 1}
                onClick={() => handleCardClick(index + 1)}
                onDelete={() => onDeleteStrategy(strategy.strategy)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AllStrategies;
