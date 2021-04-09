import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe
            title='map'
             className="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12759.32477090904!2d174.8123559!3d-36.9183003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xca798e1dad4e4418!2sMt%20Smart%20Stadium!5e0!3m2!1sen!2snz!4v1617857591536!5m2!1sen!2snz"
              width='100%'
              height="450"
              frameBorder="0"
              style={{"background": "black", border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
            
            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};



export default Location;