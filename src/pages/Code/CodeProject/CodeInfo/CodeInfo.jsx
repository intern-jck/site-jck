import React from 'react';
import PropTypes from 'prop-types';
import './CodeInfo.css';

const CodeInfo = ({info}) => {
  return (
    <div className='CodeInfo'>

      <div className='code-name'>
        <h2>name: <span>{info.name}</span></h2>
      </div>

      <div className='code-date'>
        <h2>date: <span>{info.date}</span></h2>
      </div>

      <div className='code-url'>
        <h2>url:
          <span>
            <a
              href={info.url}
              target='_blank'
              rel='noreferrer'>
              {info.url}
            </a>
          </span>
        </h2>
      </div>

      <div className='code-tech'>
        <h2>tech:</h2>
        { info.tech.map((tag, i) => {
          return (
            <a
              key={i}
              className='code-tech-tag'
              href={tag[1]}
              target='_blank'
              rel="noreferrer">
              {tag[0]}
            </a>
          );
        },
        )}
      </div>

      <div className='code-description'>
        <h2>info: <span>{info.info}</span></h2>
      </div>

    </div>
  );
};

export default CodeInfo;

CodeInfo.propTypes = {
  info: PropTypes.object,
  buttonHandler: PropTypes.func,
};
