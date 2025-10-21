import React, { useState, useEffect } from "react";
// imports BotSpecs
import BotSpecs from "./BotSpecs.jsx";

// Takes in onEnlist as a prop
function BotCollection({ onEnlist }) {
  // set the bots to an empty array
  const [bots, setBots] = useState([]);

  // UseEffect with an empty array dependency that fetches data from the db.json and sets setBot to the data
  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // The bots are displayed here as an unordered list.
  return (
    <div className="bot-collection">
      <h2>Bot collection</h2>
      <ul>
        {bots.map((bot) => (
          <li key={bot.id}>
            <img src={bot.avatar_url} alt="Bot avatar" />
            <h2>{bot.name}</h2>
            <BotSpecs bot={bot} />
            {/* Clicking this button adds a bot to the army. */}
            <button
              onClick={() => {
                onEnlist(bot);
              }}
            >
              Enlist
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BotCollection;
