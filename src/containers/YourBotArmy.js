import React from "react";
import BotCard from '../components/BotCard'

function YourBotArmy(props) {
  //your bot army code here...
  const displayBotCards = props.botArmy.map(bot => {
    return <BotCard bot={bot} />
})

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {displayBotCards}
            Your Bot Army
          </div>
        </div>
      </div>
    );
}

export default YourBotArmy;
