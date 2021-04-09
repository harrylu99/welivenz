import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';

export default class Guests extends Component {

    state = {
        number:[1,2],
        positions:['Broods','Charli XCX'],
        desc:[
            'Broods released their new single “Peach” on August 7, 2018. The song’s kaleidoscopic sonic palette embraces buzzing guitar tones and choir-like harmonies along with woozy rhythms and intricate piano work while Georgia laments “I’m high and I’m low. No control. But everything looking peach now.” They explain: “As artists, you feel things at a much more extreme level than people who probably don’t spend most of their time inside their own heads. ‘Peach’ is about feeling all over the place all the time, and then celebrating those moments when everything feels awesome.',
            'Charli XCX, is fast becoming one of the hottest creators of her generation and is the award-winning talent behind the multi-platinum and global #1s “Fancy” and “I Love It” and the UK Top 10 “Boom Clap”. In 2017, she bookended the year with her ground-breaking, critically-acclaimed mixtapes ‘Number 1 Angel’ and ‘Pop 2’, featured on David Guetta and Afrojack’s global smash “Dirty Sexy Money” and released her standout summer crush anthem, “Boys”. On the latter, Charli took full creative control across casting, directing and producing the accompanying official video. '
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
