import React from 'react';
import PropTypes from 'prop-types';
import './MechaCard.css';

const MechaCard = ({mechaData, viewHandler, mechaId}) => {
  return (
    <div className='MechaCard' onClick={viewHandler}>
      {
        mechaData ?
        <>
          <div className='mecha-card-header'>
            <h2>{mechaData.name}</h2>
            <h3>{mechaData.short}</h3>
          </div>
          <div className='mecha-card-img'>
            <img
              className='onclick'
              data-id={mechaId}
              name={mechaData.link}
              src={mechaData.photos[0]}
            />
          </div>
        </> : null
      }
    </div>
  );
};

export default MechaCard;

MechaCard.propTypes = {
  mechaData: PropTypes.object,
  viewHandler: PropTypes.func,
  mechaId: PropTypes.number,
};
