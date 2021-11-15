import React from 'react';
import PropTypes from 'prop-types';

export default function PDFContainer(props) {
  const bodyRef = React.createRef();
  const createPdf = () => props.createPdf(bodyRef.current);
  return (
    <div className="pdf-container">
      <div className="pdf-toolbar">
        <button type="button" onClick={createPdf}>
          Generate Certificate as PDF
        </button>
      </div>
      <div className="pdf-body" ref={bodyRef}>
        {props.children}
      </div>
    </div>
  );
}

PDFContainer.propTypes = {
  createPdf: PropTypes.any,
  children: PropTypes.any,
};
