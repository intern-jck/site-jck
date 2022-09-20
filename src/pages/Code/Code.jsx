import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import CodeCard from './CodeCard/CodeCard.jsx';
import CodeProject from './CodeProject/CodeProject.jsx';
import './Code.css';

const Code = ({data}) => {
  console.log('Code', data)
  const [view, setView] = useState('List');
  const [code, setCode] = useState();

  useEffect(() => {
    setCode(data[0]);
  }, [data]);

  const viewMecha = (event) => {
    event.preventDefault();
    const id = event.target.getAttribute('data-id');
    setCode(data[id]);
    setView('Code');
  };

  const viewList = (event) => {
    event.preventDefault();
    const {name} = event.target;
    if (name === 'List') {
      setView('List');
    };
  };

  return (
    <div className='Code'>
      <h1>Code</h1>
      <div className="code-content">
        {
          view === 'List' && data ?
            data.map((code, i) => (
              <CodeCard
                key={i}
                codeId={i}
                codeData={code}
                viewHandler={viewMecha} />
            )) :
          view === 'Code' && code ?
            <CodeProject codeData={code} viewHandler={viewList} /> :
            null
        }
      </div>
    </div>
  );
};

export default Code;

Code.propTypes = {
  data: PropTypes.array,
};
