import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';

export default class Guests extends Component {

    state = {
        number:[1,2],
        positions:['Broods','Charli XCX'],
        desc:[
            'Broods released their new single “Peach” on August 7, 2018. The song’s kaleidoscopic sonic palette embraces buzzing guitar tones and choir-like harmonies along with woozy rhythms and intricate piano work while Georgia laments “I’m high and I’m low. No control. But everything looking peach now.” ',
            'Charli XCX, is fast becoming one of the hottest creators of her generation and is the award-winning talent behind the multi-platinum and global #1s “Fancy”, “I Love It” and “Boom Clap”. In 2017, she bookended the year with her ground-breaking and released her standout summer crush anthem, “Boys”. '
        ],
        delay:[100,500]

    }

    showBoxes = () => (
        this.state.number.map((box,i)=>(
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="guest_item">
                    <div className="guest_inner_wrapper">
                        <div className="guest_title">
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="guest_description">
                            {this.state.desc[i]}
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper guest_section">
                    <h2>Special Guests</h2>

                    <div className="guest_wrapper">
                        {this.showBoxes()}
                    </div>

                </div>
            </div>
        );
    }
}
