import React, {Component} from 'react';
import './Timer.css';

class Timer extends Component {
    constructor() {
        super();

        //Initial State
        this.state = {
            alert: {
                type: '',
                message: '',
            },

            time: 0
        };

        this.times = {
            defaultTime: 1500, // 25min
            shortBreak: 300, // 5min
            longBreak: 900, // 15min
        }
    }

    componentDidMount() {

        //Establece tiempo por defecto cuando el componente sea montado
        this.setDefaultTime()
    }

    setDefaultTime() {
        this.setState({
            time: this.times.defaultTime
        })
    }

    //BUTTONS
    setTimeForWork = () => {
        this.setState({
            alert: {
                type: 'work',
                message: 'WORKING!'
            }
        })
    }

    setTimeForShortBreak = () => {
        this.setState({
            alert: {
                type: 'shortBreak',
                message: 'Taking a Short Break!'
            }
        })
    }

    setTimeForLongBreak = () => {
        this.setState({
            alert: {
                type: 'longBreak',
                message: 'Taking a Long Break!'
            }
        })
    }
    

    setTime = (newTime) => {
        this.restartInterval();
        this.setState({
            time: newTime,
        })
    }

    restartInterval = () => {
        clearInterval(this.interval);

        this.interval = setInterval(this.countDown, 1000);
    }

    countDown = () => {
        if(this.state.time === 0){
            this.setState({
                alert: {
                    type: 'Beep',
                    message: 'Beeeeeeeeeeeeep'
                }
            })
        } else {
            this.setState({
                time: this.times.defaultTime
            })
            
        }
    }
   displayTimer(seconds){
    this.time = seconds
    seconds = 5,25,15;
    this.setState({
        time: seconds,
        
    })
    

   

     
     
     }


    render() {

        const {alert: { message, type, seconds}, time } = this.state;

        return (
            <div className = "Pomodoro">
                <div className = {`alert ${type}`}>
                    {message}
                </div>

                <div className = "displayTimer">
                  {displayTimer(this.state.time)}
                </div>

                <div className = "types">
                    <button
                        className= "start"
                        onClick= {this.setTimeForWork}
                    >
                        Start Working
                    </button>

                    <button
                        className= "short"
                        onClick= {this.setTimeForShortBreak}
                    >
                        Short Break
                    </button>

                    <button
                        className= "long"
                        onClick= {this.setTimeForLongBreak}
                    >
                        Long Break
                    </button>
                </div>
                
                
            </div>
        )
    }

}

export default Timer;