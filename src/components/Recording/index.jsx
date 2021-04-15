import React from 'react';

const Recording = () => {
    return (

            
            <div className="bck_black">
                <div className="center_wrapper recording_section">
                    <h2>Fans Rocording</h2>

                    <div className="recording_wrapper">
                    <iframe width="100%" height="500"  src="https://www.youtube.com/embed/uBM7f2weXKI" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                    </iframe>
                    </div>

                    <div className="recording_wrapper">
                    <iframe width="100%" height="500" src="https://www.youtube-nocookie.com/embed/LsUdbuGEkHI" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                    </iframe>
                    </div>

                    <div className="recording_wrapper">
                    <iframe width="100%" height="500" src="https://www.youtube-nocookie.com/embed/ygB4tG-_hbI" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                    </iframe>
                    </div>

                </div>
            </div>


    );
};



export default Recording;