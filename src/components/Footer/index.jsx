import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_black">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">We Live NZ </div>
                <div className="footer_copyright">
                    We Live NZ @ 2021 
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;