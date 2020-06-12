import React from "react";
import BotCard from '../components/BotCard'

function BotCollection (props){
  const displayBotCards = props.botCollection.map(bot => {
    return <BotCard bot={bot} action={props.action}/>
})
  //your code here

  
    return (
      <div className="ui four column grid">
        <div className="row">
          {displayBotCards}
          Collection of all bots
        </div>
      </div>
    );
  
}

export default BotCollection;
