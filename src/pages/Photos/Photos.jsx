import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './Photos.css';

const Photos = ({data}) => {
  const [view, setView] = useState('List');
  const [currentPhoto, setCurrentPhoto] = useState('');

  useEffect(() => {
    setCurrentPhoto(data[0]);
  }, [data]);

  const viewPhoto = (event) => {
    event.preventDefault();
    const {src} = event.target;
    setCurrentPhoto(src);
    setView('Photo');
  };

  const viewPhotos = (event) => {
    event.preventDefault();
    setView('List');
  };

  return (
    <div className='Photos'>
      <h1 className='page-header'>Photos</h1>
      <p>{`Places I've been, sights I've seen, and everything inbetween`}</p>
      {
        view === 'List' && data ?
        <div className='photos-list'>
          {
            data.map((photo, i) => {
              return (
                <div key={i} className='photos-list-img' onClick={viewPhoto}>
                  <img className='onclick' src={photo} loading='lazy'/>
                </div>
              );
            })
          }
        </div> :
        view === 'Photo' && data ?
        <div className='photos-fullscreen'>
          <button onClick={viewPhotos}>BACK</button>
          <div className='photos-fullscreen-img'>
            <img className='fullscreen-img' src={currentPhoto} />
          </div>
        </div> : null
      }
    </div>
  );
};

export default Photos;

Photos.propTypes = {
  data: PropTypes.array,
};
