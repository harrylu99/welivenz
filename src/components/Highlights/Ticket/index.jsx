import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';



export default class Discount extends Component {

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">


                        <div className="discount_porcentage">
                            <span>100%</span>
                            <span>Seated</span>
                        </div>

                    
                    <Slide right>
                        <div className="discount_description">
                            <h3>35,749 out of 35,749 attended</h3>
                            <p>Her performance was polished with precision. Her speedy segues were rehearsed and seemingly timed, keeping the audience banter flowing into the next track. Even her steps on stage, or slightest head tilt, seemed remarkably exact. A dozen cameras tracked her every move for the giant stage screen, and not once was she ever caught not looking her best.</p>
                            <p align="right"> ----------- Stuff</p>
                        
                        
                        </div>
                    </Slide>
                    


                </div>
            </div>
        );
    }
}
