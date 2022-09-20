import React from 'react';
import PropTypes from 'prop-types';
import CodeCarousel from './CodeCarousel/CodeCarousel.jsx';
import CodeInfo from './CodeInfo/CodeInfo.jsx';
import './CodeProject.css';

const CodeProject = ({codeData, viewHandler}) => {
  return (
    <div className='CodeProject'>
      <button name='List' onClick={viewHandler}>BACK</button>
      {
        codeData ?
        <div className='code-project-content'>
          <CodeCarousel slides={codeData.photos} />
          <CodeInfo info={codeData} />
        </div> :
        null
      }
    </div>
  );
};

export default CodeProject;

CodeProject.propTypes = {
  codeData: PropTypes.object,
  viewHandler: PropTypes.func,
};
