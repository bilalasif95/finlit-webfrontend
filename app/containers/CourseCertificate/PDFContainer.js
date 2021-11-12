import React from 'react';

export default function(props) {
  const bodyRef = React.createRef();
  const createPdf = () => props.createPdf(bodyRef.current);
  return (
    <div className="pdf-container">
      <div className="pdf-toolbar">
        <button onClick={createPdf}>Generate Certificate as PDF</button>
      </div>
      <div className="pdf-body" ref={bodyRef}>
        {props.children}
      </div>
    </div>
  );
}
