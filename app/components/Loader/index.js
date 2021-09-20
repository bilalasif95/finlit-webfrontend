import React from 'react';
import Wrapper from './Wrapper';
import loaderImg from "../../images/loader.svg";
function Loader() {
  return (
    <Wrapper>
      <img className="loader" src={loaderImg} />
    </Wrapper>
  );
}

export default Loader;
