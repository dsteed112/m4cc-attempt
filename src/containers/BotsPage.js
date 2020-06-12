import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from "./YourBotArmy";

class BotsPage extends Component {
  //start here with your code for step one
  state = {
    botCollection: [],
    botArmy: [],
  }

  componentDidMount() {
    fetch ("http://localhost:6001/bots")
      .then(response => response.json())
      .then(data => this.setState({ botCollection: data }))
  }

  addBotToArmy = (bot) => {
    if (!this.state.botArmy.find(currentArmyBot => currentArmyBot.id === bot.id)) { // if you dont find a bot in the army with this id - add the bot
        this.setState({ botArmy: [...this.state.botArmy, bot] }) //Adds a bot to botArmy
    }
  }

  render() {
    return <div>
      <YourBotArmy botArmy={this.state.botArmy} />
      <BotCollection botCollection={this.state.botCollection} action={this.addBotToArmy} />
      
    </div>;
  }
}

export default BotsPage;
