import React from 'react';
import PropTypes from 'prop-types';
import MechaCarousel from './MechaCarousel/MechaCarousel.jsx';
import MechaInfo from './MechaInfo/MechaInfo.jsx';
import './Mecha.css';

const Mecha = ({mechaData, viewHandler}) => {
  return (
    <div className='Mecha'>
      <button name='List' onClick={viewHandler}>BACK</button>
      {
        mechaData ?
        <div className='mecha-content'>
          <MechaCarousel slides={mechaData.photos} />
          <MechaInfo info={mechaData} />
        </div> :
        null
      }
    </div>
  );
};

export default Mecha;

Mecha.propTypes = {
  mechaData: PropTypes.object,
  viewHandler: PropTypes.func,
};
