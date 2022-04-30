import React, { Component } from 'react';
import '/Game.css';
class Game extends Component {
    constructor(){
        super()
        this.state={
number: "",
message: "hola que hace",
random: generateRandomNumber(100)
        }
    }
handleOnChange = e => {
    //const value = e.target.value
    const {target :{value}} = e;
    console.log(value);
if(value.trim() > 0 ){

this.setState({
    number: value,
});

}
handleOnClick = () =>{
    const number = parseInt.state.number;

    const random = parseInt.state.random;
    console.log(random);
    const text = calculateText(number, random);

    this.setState({
        message: text
    })
}

    event.target.value

const event ={
    name: "Rok",
    target: {
value: 34

    }


}





    console.log(value);
}

    render() {
        return (
            <div className ="Game">
            <input
            type="number"
            value ={this.state.number}
            />
               <button onClick={this.handleOnClick}>probar</button>
               <p>{this.state.message}</p>
            </div>
        );
    }
}

export default Game;



function generateRandomNumber(max, min=1) {
    return Math.floor(Math.random()*(max - min)+ min);
}

function calculateText(numver, random){
    if (number == random){
        return "felicidades has acertado"
    }
}