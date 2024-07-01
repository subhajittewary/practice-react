import React, { useState } from 'react';

const Tooltip = ({ children, tooltipText, width }) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => {
    setVisible(true);
  };    

  const hideTooltip = () => {
    setVisible(false);
  };

  const tooltipStyle = {
    width: width || '100%',  // default to 100% if width is not provided
  };

  return (
    <>
    <h1>Tooltip Component</h1>
    <div 
      className="tooltip-container" 
      onMouseEnter={showTooltip} 
      onMouseLeave={hideTooltip}
    >
       
      {children}
      {visible && (
        <div className="tooltip" style={tooltipStyle}>
          {tooltipText}
        </div>
      )}
    </div>
    </>
  );
};



export default Tooltip;
