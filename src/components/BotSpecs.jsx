import React, { useState } from "react";

function BotSpecs({ bot }) {
  // Sets the details display to false
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bot-details">
      {/* Clicking this button will allow you to view the details of the bot such as health,class, damage etc.. */}
      <button
        className="details-btn"
        onClick={(e) => {
          e.stopPropagation();
          // The above code prevents the button from being clicked again
          setShowDetails((prev) => !prev);
          // Sets showDEtails to not(!)
        }}
      >
        {/* Shows button details depending on whether it is showing details. */}
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {/* This section is displayed when the button is clicked and hidden when the button is clicked again */}
      {showDetails && (
        <p>
          Health - {bot.health}
          <br></br>
          Damage - {bot.damage} <br></br>
          Armor - {bot.armor} <br></br>
          Class - {bot.bot_class} <br></br>
          CatchPharse - {bot.catchphrase} <br></br>
          created - {bot.created_at} <br></br>
          Updated at - {bot.updated_at}
        </p>
      )}
    </div>
  );
}

export default BotSpecs;
