import React from 'react';
import PropTypes from 'prop-types';
import './MechaInfo.css';

const MechaInfo = ({info}) => {
  return (
    <div className='MechaInfo'>

      <div className='mecha-name'>
        <h2>name: <span>{info.name}</span></h2>
      </div>

      <div className='mecha-date'>
        <h2>date: <span>{info.date}</span></h2>
      </div>

      <div className='mecha-client'>
        <h2>client: <span>{info.client}</span></h2>
      </div>

      <div className='mecha-client-url'>
        <h2>client_url:
          <span>
            <a
              href={info.client_url}
              target='_blank'
              rel='noreferrer'>
              {info.client_url}
            </a>
          </span>
        </h2>
      </div>

      <div className='mecha-tech'>
        <h2>tech:</h2>
        { info.tech.map((tag, i) => {
          return (
            <a
              key={i}
              className='mecha-tech-tag'
              href={tag[1]}
              target='_blank'
              rel="noreferrer">
              {tag[0]}
            </a>
          );
        },
        )}
      </div>

      <div className='mecha-description'>
        <h2>info: <span>{info.info}</span></h2>
      </div>

    </div>
  );
};

export default MechaInfo;

MechaInfo.propTypes = {
  info: PropTypes.object,
  buttonHandler: PropTypes.func,
};
