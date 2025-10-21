import React from "react";
// Imports BotSpecs
import BotSpecs from "./BotSpecs";
// Takes in destructured props
function BotCard({ bot, onClick, onDischarge }) {
  return (
    <div className="bot-card">
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <BotSpecs bot={bot} />
      {/* Clicking this button releases the bot */}
      <button onClick={() => onClick(bot)}>Release</button>
      {/* Clickimg this button deletes the bot */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDischarge(bot);
        }}
        style={{ backgroundColor: "red" }}
      >
        x
      </button>
    </div>
  );
}

export default BotCard;
