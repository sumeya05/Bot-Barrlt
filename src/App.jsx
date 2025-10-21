import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import BotArmy from "./components/BotArmy";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  // States for the bots array and the armyBots array to be empty
  const [bots, setBots] = useState([]);
  const [armyBots, setArmyBots] = useState([]);
  // THis function handles Enlistment/ adding a bot yo your army.
  // The army is then added to armyBots.
  function handleEnlistment(bot) {
    if (!armyBots.find((b) => b.id === bot.id)) {
      setArmyBots([...armyBots, bot]);
    }
  }
  // This function handles releasing a bot from your army.
  function handleRelease(bot) {
    setArmyBots(armyBots.filter((b) => b.id !== bot.id));
  }
  // This function handles deleting a bot both from he army and the backend
  function handleDischarge(bot) {
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then(() => {
        // Remove the bot from both arrays
        setBots(bots.filter((b) => b.id !== bot.id));
        setArmyBots(armyBots.filter((b) => b.id !== bot.id));
      })
      .catch((err) => console.error("Delete failed", err));
  }

  //  This section displays the imported  components.
  return (
    <div>
      <WelcomeMessage />
      {/* This section passes a prop to the child component */}
      <BotCollection bots={bots} onEnlist={handleEnlistment} />
      <BotArmy
        armyBots={armyBots}
        onRelease={handleRelease}
        onDischarge={handleDischarge}
      />
    </div>
  );
}

export default App;
