import React, { Component } from 'react'
import Slide from 'react-reveal/Slide';

export default class timeCount extends Component {

    state = {
        deadline: 'Nov, 9, 2018',
        days:'0',
        hours:'0',
        minutes:'0',
        seconds:'0'
    }

    getTimeUntil(deadline){
        const time = Date.parse(new Date()) - Date.parse(deadline);
        if(time < 0) {
            console.log('It is the day')
        } else {
            const seconds = Math.floor((time/1000)%60);
            const minutes = Math.floor((time/1000/60)%60);
            const hours = Math.floor((time/(1000*60*60))%24);
            const days = Math.floor(time/(1000*60*60*24));

            this.setState({
                days,
                hours,
                minutes,
                seconds
            })
        }
      
    }

    componentDidMount(){
        setInterval(()=> this.getTimeUntil(this.state.deadline),1000)
    }


    render() {
        return (
            <Slide left delay={1000}>
                <div className="countdown_wrapper">
                    <div className="countdown_top">
                        Event was started in
                </div>
                    <div className="countdown_bottom">

                            <div className="countdown_time">
                                {this.state.days}  Days
                            </div>

                            <div className="countdown_time">
                                {this.state.hours} Hs
                            </div>

                            <div className="countdown_time">
                                {this.state.minutes} Min
                            </div>                           

                            <div className="countdown_time">
                                {this.state.seconds} Sec
                            </div>
                        
                    </div>
                </div>

            </Slide>

        );
    }
}

