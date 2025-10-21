import React from "react";
// Imports BotCard.
import BotCard from "./BotCard";
// Takes in armyBots, onRelease and onDischarge as props(destructured)
function BotArmy({ armyBots, onRelease, onDischarge }) {
  return (
    <div className="bot-army">
      <h2>Your Bot Army</h2>
      <div>
        {/* Displays the army in an unordered list */}
        <ul className="army-list">
          {armyBots.map((bot) => (
            <li key={bot.id} className="army-item">
              <BotCard
                key={bot.id}
                bot={bot}
                onClick={onRelease}
                onDischarge={onDischarge}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BotArmy;
