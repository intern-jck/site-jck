import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Music.css';

const Music = () => {
  // const [mechaData, setMechaData] = useState([]);

  useEffect(() => {
  }, []);

  return (
    <div className='Music'>
      <iframe
        src="https://open.spotify.com/embed/playlist/2w8i3sdNSvlAjI32sdd6nZ?utm_source=generator"
        // width="100%"
        // height="380"
        // frameBorder="4"
        // allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        >
      </iframe>
    </div>
  );
};

export default Music;
