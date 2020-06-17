import React, { Component } from 'react'
function Player(props){
    // console.log('PROPS:', props)
    return (
        <div>
            <h1>{props.name}</h1>
            <p>Score: {props.score}</p>
            { /* User callback prop in the event handler in child */ }
            <button onClick={() => props.incrementScore(props.id)}>+</button>
        </div>
    )
}
class ScoreBoard extends Component {
    state = {
        players: [
            { id: 1, name: "Wouter", score: 10 },
            { id: 2, name: "David", score: 3 },
            { id: 3, name: "Rembert", score: 8 }
        ]
    }
    // callback prop
    // define in parent
    incrementScore = (playerId) => {
        // console.log('increment playerId', playerId)
        // what player got clicked? -> call incrementScore with a playerId
        // update the score of the correct player
        const updatedPlayers = this.state.players
            .map(player => {
                // player got clicked -> update score
                if(player.id === playerId){
                    return { ...player, score: player.score + 1 }
                }
                // this is not the right player, don't do anything
                return player
            })
        this.setState({ players: updatedPlayers }) // -> render and display updated players
        // this.setState() to change the state
    }
    render(){
        // console.log(this.state.players)
        return <div>
            { this.state.players
                .sort((a, b) => b.score - a.score)
                .map(player =>
                <Player
                    key={player.id}
                    id={player.id}
                    name={player.name}
                    score={player.score}
                    // pass to child as prop
                    incrementScore={this.incrementScore}
                />
            )}
        </div>
    }
}
export default ScoreBoard