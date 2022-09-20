import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import MechaCard from './MechaCard/MechaCard.jsx';
import Mecha from './Mecha/Mecha.jsx';
import './Mechatronics.css';

const Mechatronics = ({data}) => {
  const [view, setView] = useState('List');
  const [mecha, setMecha] = useState();

  useEffect(() => {
    setMecha(data[0]);
  }, [data]);

  const viewMecha = (event) => {
    event.preventDefault();
    const id = event.target.getAttribute('data-id');
    setMecha(data[id]);
    setView('Mecha');
  };

  const viewList = (event) => {
    event.preventDefault();
    const {name} = event.target;
    if (name === 'List') {
      setView('List');
    };
  };

  return (
    <div className='Mechatronics'>
      <h1>Mechatronics</h1>
      <div className="mechatronics-content">
        {
          view === 'List' && data ?
            data.map((mecha, i) => (
              <MechaCard
                key={i}
                mechaId={i}
                mechaData={mecha}
                viewHandler={viewMecha} />
            )) :
          view === 'Mecha' && mecha ?
            <Mecha mechaData={mecha} viewHandler={viewList} /> :
            null
        }
      </div>
    </div>
  );
};

export default Mechatronics;

Mechatronics.propTypes = {
  data: PropTypes.array,
};
