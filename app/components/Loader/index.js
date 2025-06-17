import React from 'react';
import Wrapper from './Wrapper';
// import loaderImg from '../../images/loader.svg';
import LoadingIndicator from '../LoadingIndicator';
function Loader() {
  return (
    <Wrapper>
      {/* <img className="loader" src={loaderImg} alt="Loader" /> */}
      <LoadingIndicator />
    </Wrapper>
  );
}

export default Loader;
