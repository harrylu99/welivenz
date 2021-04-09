import React from 'react';
import Zoom from 'react-reveal/Zoom';

import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';

const VenueInfor = () => {
    return (
        <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">

                    <Zoom duration={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_gery"></div>
                                    <div 
                                        className="vn_icon"
                                        style={{
                                            background:`url(${icon_calendar})`
                                        }}
                                    ></div>
                                    <div className="vn_title">
                                        Event Date 
                                    </div>
                                    <div className="vn_desc">
                                        9 November 2018 
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Zoom>
                    
                    <Zoom duration={500} delay={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_gery"></div>
                                    <div 
                                        className="vn_icon"
                                        style={{
                                            background:`url(${icon_location})`
                                        }}
                                    ></div>
                                    <div className="vn_title">
                                        Event Location
                                    </div>
                                    <div className="vn_desc">
                                        Mt Smart Stadium
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                    
                </div>
            </div>
        </div>
    );
};

export default VenueInfor;