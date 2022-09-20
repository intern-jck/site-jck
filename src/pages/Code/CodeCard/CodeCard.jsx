import React from 'react';
import PropTypes from 'prop-types';
import './CodeCard.css';

const CodeCard = ({codeData, viewHandler, codeId}) => {
  return (
    <div className='CodeCard' onClick={viewHandler}>
      {
        codeData ?
        <>
          <div className='code-card-header'>
            <h2>{codeData.name}</h2>
            <h3>{codeData.short}</h3>
          </div>
          <div className='code-card-img'>
            <img
              className='onclick'
              data-id={codeId}
              name={codeData.link}
              src={codeData.photos[0]}
            />
          </div>
        </> : null
      }
    </div>
  );
};

export default CodeCard;

CodeCard.propTypes = {
  codeData: PropTypes.object,
  viewHandler: PropTypes.func,
  codeId: PropTypes.number,
};
